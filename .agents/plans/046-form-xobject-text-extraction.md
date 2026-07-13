# 046: Form XObject Text Extraction

## Problem Statement

Text extraction (plan [035](./035-text-extraction.md)) only processes a page's
top-level content stream. Many real-world PDFs — especially those produced by
tax/accounting software (e.g. IRS Form 8879-PE), reporting tools, and design
tools — draw all or part of their text inside **form XObjects** that the page
content stream merely paints with the `Do` operator:

```
q /Fm0 Do Q          % page content: paints form XObjects, no text operators
```

The text (`BT ... Tj ... ET`) lives inside `/Fm0`, which carries its **own**
`/Resources/Font` dictionary. Because `TextExtractor` had no `Do` handler, these
pages extracted as empty strings, which is indistinguishable from a scanned
image to a caller — a correctness gap, not a layout nicety.

This is a follow-up to plan 035 (Tier 3 text features per GOALS.md), closing the
gap between "page has no top-level text operators" and "page has no text."

## Scope

### In Scope

- Recurse into form XObjects (`Subtype /Form`) invoked via `Do`
- Resolve fonts and nested XObjects against each form's own `/Resources`
- Apply the form's `/Matrix` to nested text positions
- Isolate the caller's graphics/text state across a form invocation, tolerating
  malformed (unbalanced) `q`/`Q` inside the form
- Guard against cyclic form references
- Reuse the existing line-grouping, span, and search pipeline unchanged

### Out of Scope

- Image XObjects (resolve to `null`; no OCR — consistent with plan 035)
- Tiling patterns and Type 3 font glyph procedures (separate content streams)
- Annotation appearance streams (separate feature — plan 037)
- Deduplicating overlapping visible + invisible ("ActualText"-style) text layers
- Marked content / tagged-PDF logical structure

## Dependencies

- **Content stream parser** — `src/content/parsing/content-stream-parser.ts`
  (reused as-is to parse form content)
- **Font layer** — `src/fonts/` (`parseFont`, ToUnicode) — reused per form
- **TextExtractor / TextState** — `src/text/` (extended, not replaced)
- **COS accessors** — `PdfDict.getDict/getArray/getName`, `PdfStream.getDecodedData`

No new external dependencies.

## Desired API

No public API change. The existing entry points transparently gain form
coverage:

```typescript
const pdf = await PDF.load(bytes);
const page = pdf.getPage(1);

// Previously returned "" for form-drawn pages; now returns the real text.
const { text, lines } = page.extractText();

// findText (page- and document-wide) benefits automatically since it
// delegates to extractText().
const matches = page.findText(/\{\{\s*\w+\s*\}\}/g);
```

## Architecture

### Components

```
PDFPage.extractText()
        │
        ├─► createResourceResolver(pageResources)  ──► ResourceResolver
        │        ├─ createFontResolver   (per-Resources font cache)
        │        └─ createXObjectResolver(per-Resources, lazy, memoized)
        ▼
TextExtractor (constructed with the page-level resolver)
        │
        ├─► ContentStreamParser (existing)
        │
        ├─► TextState (existing; + captureState/restoreState)
        │
        └─► on `Do`: runForm()
                 ├─ snapshot state + push form /Matrix onto CTM
                 ├─ swap active ResourceResolver to the form's
                 ├─ recurse over the form's content (depth-guarded)
                 └─ restore snapshot + resolver
```

### Key abstraction: `ResourceResolver`

A form's resources are scoped to the form, so font/XObject lookup cannot be a
single page-wide callback. `ResourceResolver` bundles the two lookups for one
content stream:

```typescript
interface ResourceResolver {
  resolveFont: (name: string) => PdfFont | null;
  resolveXObject: (name: string) => FormXObject | null; // null for images
}

interface FormXObject {
  bytes: Uint8Array; // decoded content
  matrix?: readonly [number, number, number, number, number, number];
  resources: ResourceResolver; // the form's own
}
```

`TextExtractor` tracks the _active_ resolver and swaps it while inside a form.
`PDFPage` builds resolvers from COS dictionaries and memoizes them by
dictionary identity (`_resourceResolverCache`), matching the existing
`_resourceCache` / `_annotationCache` pattern on the class.

### State isolation

Per PDF spec §8.10.1, painting a form behaves as if wrapped in `q`/`Q` with the
form's `/Matrix` concatenated onto the CTM. `TextState` gains
`captureState()` / `restoreState()` that snapshot the full text+graphics state
_and the graphics-stack depth_, so a form with unbalanced `q`/`Q` (lenient
handling per the project's malformed-PDF principle) cannot corrupt the rest of
the page.

### Cycle safety

A `formDepth` counter in the extractor caps nesting at `MAX_FORM_DEPTH` (16).
Combined with identity memoization of resolvers, a form that paints itself
terminates instead of recursing forever.

## Test Plan

### Unit (`src/text/text-extractor.test.ts`)

- Extract text nested one level inside a form invoked by `Do`
- Unresolvable / image XObject (`Do` is a no-op)
- Form uses its **own** font resources (prove via a font that shifts codes)
- State isolation: form with stray `Q` operators leaves later page text intact
- `/Matrix` translation offsets nested text position
- Cyclic self-referential form terminates without throwing
- No `resolveXObject` provided → `Do` ignored (back-compat)

### Integration (`src/integration/text/text-extraction.test.ts`)

- New fixture `fixtures/text/form-xobject-text.pdf`: a page whose only text is
  drawn via a form XObject with its own font → `extractText().text` contains it

### Regression

- `rtl-placed-text` fixture regenerated to drop a redundant duplicate text layer
  (a clean-LTR form copy that real design-tool exports don't carry and that
  conflicted with now-correct form recursion); the RTL content stream — the
  actual test subject — is preserved byte-for-byte

### Full suite

- `bun run test:run` (all files), `bun run typecheck`, `bun run lint` green

## Open Questions

1. **Overlapping visible + invisible text** — When a PDF carries both a visible
   layer and an invisible logical-order layer for the same words, extraction now
   surfaces both. Real-world dedup (by position + content) is deferred; it is a
   broader feature than form recursion. _Current approach_: extract everything,
   matching pdf.js behavior.

2. **Render mode 3 (invisible) text** — Kept in output, as before, because it is
   the canonical layer for searchable/scanned PDFs. Not changed here.

## Risks

- **Double-counting** in the rare visible+invisible duplicate-layer case (see
  Open Question 1). Mitigated by it being uncommon in generated PDFs; flagged
  for a future dedup pass.
- **Performance** — Each distinct form's fonts are parsed once and memoized;
  repeated `Do` of the same form is O(1) after first resolve.

## Implementation Phases

### Phase 1: Resolver abstraction

- Add `ResourceResolver` / `FormXObject` to `text-extractor.ts`
- Refactor `PDFPage.createFontResolver` → `createResourceResolver` +
  `createFontResolver(dict)` + `createXObjectResolver(dict)` + `readMatrix`

### Phase 2: Extractor recursion

- Track active resolver + `formDepth` in `TextExtractor`
- Add `Do` handler → `runForm()` (snapshot, matrix, swap, recurse, restore)
- Add `TextState.captureState` / `restoreState`

### Phase 3: Tests & fixtures

- Unit tests, integration fixture, regenerate `rtl-placed-ltr-text.pdf`
- Verify full suite, typecheck, lint
