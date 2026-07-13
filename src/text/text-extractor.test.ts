import type { PdfFont } from "#src/fonts/pdf-font";
import { describe, expect, it } from "vitest";

import { type FormXObject, type ResourceResolver, TextExtractor } from "./text-extractor";

/**
 * Minimal font stub: each byte code maps to its ASCII character and a fixed
 * advance width. Enough to exercise the extractor's text-showing path.
 */
const stubFont = {
  subtype: "Type1",
  baseFontName: "StubFont",
  descriptor: null,
  getWidth: () => 500,
  toUnicode: (code: number) => String.fromCharCode(code),
} as unknown as PdfFont;

function bytes(content: string): Uint8Array {
  return new TextEncoder().encode(content);
}

function fontOnly(): ResourceResolver {
  return { resolveFont: () => stubFont, resolveXObject: () => null };
}

function extract(content: string, options: Partial<ResourceResolver> = {}): string {
  const extractor = new TextExtractor({
    resolveFont: options.resolveFont ?? (() => stubFont),
    resolveXObject: options.resolveXObject ?? (() => null),
  });

  return extractor
    .extract(bytes(content))
    .map(c => c.char)
    .join("");
}

describe("TextExtractor form XObjects", () => {
  it("extracts text nested inside a form XObject invoked with Do", () => {
    const form: FormXObject = {
      bytes: bytes("BT /F1 12 Tf (Hello) Tj ET"),
      resources: fontOnly(),
    };

    const text = extract("/Fm0 Do", {
      resolveXObject: name => (name === "Fm0" ? form : null),
    });

    expect(text).toBe("Hello");
  });

  it("ignores Do when the XObject cannot be resolved (e.g. an image)", () => {
    const text = extract("/Im0 Do", { resolveXObject: () => null });

    expect(text).toBe("");
  });

  it("uses the form's own resources to resolve fonts", () => {
    const formFont = {
      subtype: "Type1",
      baseFontName: "FormFont",
      descriptor: null,
      getWidth: () => 500,
      // Shift every code by one so we can prove the form's font was used.
      toUnicode: (code: number) => String.fromCharCode(code + 1),
    } as unknown as PdfFont;

    const form: FormXObject = {
      bytes: bytes("BT /FF 12 Tf (AB) Tj ET"),
      resources: { resolveFont: () => formFont, resolveXObject: () => null },
    };

    const extractor = new TextExtractor({
      resolveFont: () => stubFont,
      resolveXObject: name => (name === "Fm0" ? form : null),
    });

    const text = extractor
      .extract(bytes("/Fm0 Do"))
      .map(c => c.char)
      .join("");

    // "AB" shifted by the form's font becomes "BC".
    expect(text).toBe("BC");
  });

  it("isolates the caller's state from imbalanced q/Q inside the form", () => {
    // The form pops more graphics states than it pushes; this must not corrupt
    // the text drawn on the page after the form returns.
    const form: FormXObject = {
      bytes: bytes("Q Q Q BT /F1 12 Tf (X) Tj ET"),
      resources: fontOnly(),
    };

    const extractor = new TextExtractor({
      resolveFont: () => stubFont,
      resolveXObject: () => form,
    });

    const chars = extractor.extract(
      bytes("q BT /F1 12 Tf (A) Tj ET Q /Fm0 Do q BT /F1 12 Tf (B) Tj ET Q"),
    );

    expect(chars.map(c => c.char).join("")).toBe("AXB");
    // "B" is drawn after the form returned; its position should be unaffected
    // by the form's stray Q operators.
    const b = chars[chars.length - 1];
    expect(Number.isFinite(b.bbox.x)).toBe(true);
    expect(Number.isFinite(b.bbox.y)).toBe(true);
  });

  it("applies the form /Matrix to nested text position", () => {
    const form: FormXObject = {
      bytes: bytes("BT /F1 10 Tf (A) Tj ET"),
      matrix: [1, 0, 0, 1, 100, 200],
      resources: fontOnly(),
    };

    const extractor = new TextExtractor({
      resolveFont: () => stubFont,
      resolveXObject: () => form,
    });

    const withMatrix = extractor.extract(bytes("/Fm0 Do"));

    const plain = new TextExtractor({
      resolveFont: () => stubFont,
      resolveXObject: () => ({ ...form, matrix: undefined }),
    }).extract(bytes("/Fm0 Do"));

    expect(withMatrix[0].bbox.x).toBeCloseTo(plain[0].bbox.x + 100);
    expect(withMatrix[0].bbox.y).toBeCloseTo(plain[0].bbox.y + 200);
  });

  it("stops recursing on cyclic form references without throwing", () => {
    // A form that paints itself would recurse forever without a depth guard.
    const self: FormXObject = {
      bytes: bytes("BT /F1 12 Tf (Z) Tj ET /Fm0 Do"),
      resources: fontOnly(),
    };

    const extractor = new TextExtractor({
      resolveFont: () => stubFont,
      resolveXObject: () => self,
    });

    expect(() => extractor.extract(bytes("/Fm0 Do"))).not.toThrow();
  });

  it("ignores Do when no XObject resolver is provided", () => {
    const extractor = new TextExtractor({ resolveFont: () => stubFont });

    const chars = extractor.extract(bytes("/Fm0 Do"));

    expect(chars).toEqual([]);
  });
});
