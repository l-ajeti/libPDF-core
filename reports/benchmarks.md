# Benchmark Report

> Generated on 2026-05-21 at 02:29:22 UTC
>
> System: linux | AMD EPYC 7763 64-Core Processor (4 cores) | 16GB RAM | Bun 1.3.14

---

## Contents

- [Comparison](#comparison)
- [Copying](#copying)
- [Drawing](#drawing)
- [Forms](#forms)
- [Loading](#loading)
- [Saving](#saving)
- [Splitting](#splitting)

## Comparison

### Load PDF

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |   431.1 |  2.32ms |  4.45ms | ±1.87% |     216 |
| @cantoo/pdf-lib |    26.1 | 38.27ms | 42.06ms | ±2.89% |      14 |
| pdf-lib         |    25.6 | 39.03ms | 43.91ms | ±3.65% |      13 |

- **libpdf** is 16.50x faster than @cantoo/pdf-lib
- **libpdf** is 16.83x faster than pdf-lib

### Create blank PDF

| Benchmark       | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------------- | ------: | ----: | -----: | -----: | ------: |
| libpdf          |   17.1K |  59us |  127us | ±1.13% |   8,532 |
| pdf-lib         |    2.6K | 389us | 1.31ms | ±2.26% |   1,288 |
| @cantoo/pdf-lib |    2.4K | 421us | 1.50ms | ±2.52% |   1,190 |

- **libpdf** is 6.63x faster than pdf-lib
- **libpdf** is 7.18x faster than @cantoo/pdf-lib

### Add 10 pages

| Benchmark       | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------------- | ------: | ----: | -----: | -----: | ------: |
| libpdf          |    8.1K | 123us |  192us | ±0.76% |   4,073 |
| @cantoo/pdf-lib |    2.2K | 453us | 1.89ms | ±3.13% |   1,104 |
| pdf-lib         |    2.1K | 472us | 1.59ms | ±2.38% |   1,059 |

- **libpdf** is 3.69x faster than @cantoo/pdf-lib
- **libpdf** is 3.85x faster than pdf-lib

### Draw 50 rectangles

| Benchmark       | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------------- | ------: | -----: | -----: | -----: | ------: |
| libpdf          |    2.7K |  372us |  713us | ±1.08% |   1,344 |
| pdf-lib         |   620.7 | 1.61ms | 5.17ms | ±5.58% |     311 |
| @cantoo/pdf-lib |   551.4 | 1.81ms | 4.75ms | ±4.72% |     276 |

- **libpdf** is 4.33x faster than pdf-lib
- **libpdf** is 4.87x faster than @cantoo/pdf-lib

### Load and save PDF

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |   418.2 |   2.39ms |   4.13ms | ±1.95% |     210 |
| pdf-lib         |    11.7 |  85.59ms |  98.27ms | ±4.53% |      10 |
| @cantoo/pdf-lib |     6.7 | 149.89ms | 156.48ms | ±1.23% |      10 |

- **libpdf** is 35.79x faster than pdf-lib
- **libpdf** is 62.68x faster than @cantoo/pdf-lib

### Load, modify, and save PDF

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |    19.4 |  51.51ms |  59.75ms | ±6.50% |      10 |
| pdf-lib         |    11.8 |  84.44ms |  91.39ms | ±3.85% |      10 |
| @cantoo/pdf-lib |     6.7 | 150.25ms | 156.21ms | ±1.59% |      10 |

- **libpdf** is 1.64x faster than pdf-lib
- **libpdf** is 2.92x faster than @cantoo/pdf-lib

### Extract single page from 100-page PDF

| Benchmark       | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------------- | ------: | -----: | ------: | -----: | ------: |
| libpdf          |   275.3 | 3.63ms |  6.12ms | ±1.69% |     138 |
| pdf-lib         |   111.8 | 8.95ms | 11.51ms | ±1.88% |      56 |
| @cantoo/pdf-lib |   107.5 | 9.30ms | 11.39ms | ±1.72% |      54 |

- **libpdf** is 2.46x faster than pdf-lib
- **libpdf** is 2.56x faster than @cantoo/pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark       | ops/sec |    Mean |      p99 |    RME | Samples |
| :-------------- | ------: | ------: | -------: | -----: | ------: |
| libpdf          |    25.0 | 40.03ms |  48.18ms | ±4.56% |      13 |
| pdf-lib         |    11.9 | 84.26ms |  90.59ms | ±4.57% |       6 |
| @cantoo/pdf-lib |    10.5 | 95.00ms | 104.25ms | ±6.94% |       6 |

- **libpdf** is 2.11x faster than pdf-lib
- **libpdf** is 2.37x faster than @cantoo/pdf-lib

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |     1.3 | 753.40ms | 753.40ms | ±0.00% |       1 |
| pdf-lib         |   0.623 |    1.61s |    1.61s | ±0.00% |       1 |
| @cantoo/pdf-lib |   0.620 |    1.61s |    1.61s | ±0.00% |       1 |

- **libpdf** is 2.13x faster than pdf-lib
- **libpdf** is 2.14x faster than @cantoo/pdf-lib

### Copy 10 pages between documents

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |   219.5 |  4.56ms |  5.25ms | ±1.01% |     110 |
| pdf-lib         |    84.1 | 11.88ms | 14.31ms | ±1.75% |      43 |
| @cantoo/pdf-lib |    75.4 | 13.27ms | 15.20ms | ±1.58% |      38 |

- **libpdf** is 2.61x faster than pdf-lib
- **libpdf** is 2.91x faster than @cantoo/pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    66.9 | 14.94ms | 18.74ms | ±1.82% |      34 |
| pdf-lib         |    19.2 | 52.04ms | 53.76ms | ±1.46% |      10 |
| @cantoo/pdf-lib |    16.1 | 62.24ms | 67.10ms | ±3.07% |       9 |

- **libpdf** is 3.48x faster than pdf-lib
- **libpdf** is 4.17x faster than @cantoo/pdf-lib

### Fill FINTRAC form fields

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    48.1 | 20.79ms | 26.62ms | ±4.04% |      25 |
| pdf-lib         |    31.5 | 31.75ms | 37.17ms | ±3.46% |      16 |
| @cantoo/pdf-lib |    29.8 | 33.51ms | 47.80ms | ±7.99% |      15 |

- **libpdf** is 1.53x faster than pdf-lib
- **libpdf** is 1.61x faster than @cantoo/pdf-lib

### Fill and flatten FINTRAC form

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    54.7 | 18.27ms | 30.86ms | ±6.57% |      28 |
| pdf-lib         |  FAILED |       - |       - |      - |       0 |
| @cantoo/pdf-lib |    25.8 | 38.71ms | 50.73ms | ±7.51% |      13 |

- **libpdf** is 2.12x faster than @cantoo/pdf-lib

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |   Mean |    p99 |    RME | Samples |
| :------------------------------ | ------: | -----: | -----: | -----: | ------: |
| copy 1 page                     |   964.8 | 1.04ms | 2.00ms | ±2.22% |     483 |
| copy 10 pages from 100-page PDF |   225.0 | 4.44ms | 5.18ms | ±0.94% |     113 |
| copy all 100 pages              |   130.6 | 7.66ms | 9.65ms | ±1.32% |      66 |

- **copy 1 page** is 4.29x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 7.39x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | -----: | -----: | -----: | ------: |
| duplicate all pages (double the document) |    1.0K |  972us | 1.31ms | ±0.84% |     515 |
| duplicate page 0                          |   988.3 | 1.01ms | 1.80ms | ±1.30% |     495 |

- **duplicate all pages (double the document)** is 1.04x faster than duplicate page 0

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   655.7 |  1.53ms |  1.90ms | ±0.91% |     328 |
| merge 10 small PDFs     |   127.3 |  7.85ms |  8.69ms | ±1.03% |      64 |
| merge 2 x 100-page PDFs |    65.8 | 15.19ms | 22.61ms | ±4.36% |      33 |

- **merge 2 small PDFs** is 5.15x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 9.96x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------- | ------: | -----: | -----: | -----: | ------: |
| draw 100 lines                      |    1.8K |  552us | 1.05ms | ±1.27% |     906 |
| draw 100 rectangles                 |    1.6K |  624us | 1.18ms | ±1.66% |     803 |
| draw 100 circles                    |   761.5 | 1.31ms | 2.67ms | ±2.20% |     381 |
| create 10 pages with mixed content  |   714.6 | 1.40ms | 2.17ms | ±1.34% |     358 |
| draw 100 text lines (standard font) |   634.5 | 1.58ms | 2.19ms | ±1.18% |     318 |

- **draw 100 lines** is 1.13x faster than draw 100 rectangles
- **draw 100 lines** is 2.38x faster than draw 100 circles
- **draw 100 lines** is 2.54x faster than create 10 pages with mixed content
- **draw 100 lines** is 2.86x faster than draw 100 text lines (standard font)

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   347.1 |  2.88ms |  3.62ms | ±1.15% |     174 |
| get form fields   |   322.9 |  3.10ms |  5.21ms | ±2.85% |     162 |
| flatten form      |   125.3 |  7.98ms | 11.98ms | ±2.99% |      63 |
| fill text fields  |    83.2 | 12.01ms | 16.91ms | ±3.99% |      42 |

- **read field values** is 1.07x faster than get form fields
- **read field values** is 2.77x faster than flatten form
- **read field values** is 4.17x faster than fill text fields

## Loading

| Benchmark              | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------- | ------: | -----: | -----: | -----: | ------: |
| load small PDF (888B)  |   17.6K |   57us |  140us | ±0.70% |   8,824 |
| load medium PDF (19KB) |   11.5K |   87us |  170us | ±0.45% |   5,734 |
| load form PDF (116KB)  |   813.7 | 1.23ms | 1.65ms | ±1.01% |     407 |
| load heavy PDF (9.9MB) |   427.7 | 2.34ms | 2.87ms | ±0.79% |     214 |

- **load small PDF (888B)** is 1.54x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 21.69x faster than load form PDF (116KB)
- **load small PDF (888B)** is 41.26x faster than load heavy PDF (9.9MB)

## Saving

| Benchmark                          | ops/sec |   Mean |     p99 |    RME | Samples |
| :--------------------------------- | ------: | -----: | ------: | -----: | ------: |
| save unmodified (19KB)             |    9.7K |  103us |   268us | ±0.94% |   4,843 |
| incremental save (19KB)            |    6.6K |  151us |   324us | ±0.82% |   3,307 |
| save with modifications (19KB)     |    1.2K |  825us |  1.61ms | ±1.60% |     606 |
| save heavy PDF (9.9MB)             |   448.9 | 2.23ms |  2.86ms | ±1.36% |     225 |
| incremental save heavy PDF (9.9MB) |   144.3 | 6.93ms | 10.29ms | ±4.87% |      73 |

- **save unmodified (19KB)** is 1.46x faster than incremental save (19KB)
- **save unmodified (19KB)** is 7.99x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 21.57x faster than save heavy PDF (9.9MB)
- **save unmodified (19KB)** is 67.13x faster than incremental save heavy PDF (9.9MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   965.8 |  1.04ms |  2.05ms | ±2.28% |     483 |
| extractPages (1 page from 100-page PDF)  |   270.3 |  3.70ms |  6.87ms | ±2.25% |     136 |
| extractPages (1 page from 2000-page PDF) |    17.8 | 56.23ms | 58.06ms | ±2.37% |      10 |

- **extractPages (1 page from small PDF)** is 3.57x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 54.31x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------------------- | ------: | -------: | -------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    25.6 |  39.01ms |  45.25ms | ±4.58% |      13 |
| split 2000-page PDF (0.9MB) |     1.4 | 710.62ms | 710.62ms | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 18.22x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |    Mean |     p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    18.1 | 55.13ms | 56.64ms | ±1.36% |      10 |
| extract first 100 pages from 2000-page PDF             |    16.5 | 60.67ms | 62.92ms | ±2.43% |       9 |
| extract every 10th page from 2000-page PDF (200 pages) |    14.6 | 68.44ms | 78.49ms | ±5.73% |       8 |

- **extract first 10 pages from 2000-page PDF** is 1.10x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.24x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
