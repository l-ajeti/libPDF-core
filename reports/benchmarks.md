# Benchmark Report

> Generated on 2026-07-06 at 10:17:38 UTC
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
| libpdf          |   454.8 |  2.20ms |  3.11ms | ±1.26% |     228 |
| @cantoo/pdf-lib |    24.7 | 40.42ms | 45.02ms | ±2.56% |      13 |
| pdf-lib         |    24.6 | 40.73ms | 44.79ms | ±2.89% |      13 |

- **libpdf** is 18.38x faster than @cantoo/pdf-lib
- **libpdf** is 18.53x faster than pdf-lib

### Create blank PDF

| Benchmark       | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------------- | ------: | ----: | -----: | -----: | ------: |
| libpdf          |   15.8K |  63us |  144us | ±1.37% |   7,917 |
| pdf-lib         |    2.8K | 361us | 1.34ms | ±2.40% |   1,385 |
| @cantoo/pdf-lib |    2.6K | 380us | 1.61ms | ±2.78% |   1,317 |

- **libpdf** is 5.72x faster than pdf-lib
- **libpdf** is 6.01x faster than @cantoo/pdf-lib

### Add 10 pages

| Benchmark       | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------------- | ------: | ----: | -----: | -----: | ------: |
| libpdf          |    8.0K | 126us |  251us | ±0.98% |   3,980 |
| @cantoo/pdf-lib |    2.3K | 429us | 2.36ms | ±4.00% |   1,167 |
| pdf-lib         |    2.2K | 461us | 2.02ms | ±3.28% |   1,086 |

- **libpdf** is 3.41x faster than @cantoo/pdf-lib
- **libpdf** is 3.67x faster than pdf-lib

### Draw 50 rectangles

| Benchmark       | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------------- | ------: | -----: | -----: | -----: | ------: |
| libpdf          |    2.7K |  365us |  969us | ±1.53% |   1,370 |
| pdf-lib         |   684.5 | 1.46ms | 6.10ms | ±7.18% |     343 |
| @cantoo/pdf-lib |   575.3 | 1.74ms | 4.26ms | ±5.42% |     288 |

- **libpdf** is 4.00x faster than pdf-lib
- **libpdf** is 4.76x faster than @cantoo/pdf-lib

### Load and save PDF

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |   451.8 |   2.21ms |   3.04ms | ±1.45% |     226 |
| pdf-lib         |    12.6 |  79.47ms | 101.68ms | ±9.47% |      10 |
| @cantoo/pdf-lib |     6.8 | 147.25ms | 162.05ms | ±3.21% |      10 |

- **libpdf** is 35.91x faster than pdf-lib
- **libpdf** is 66.53x faster than @cantoo/pdf-lib

### Load, modify, and save PDF

| Benchmark       | ops/sec |     Mean |      p99 |     RME | Samples |
| :-------------- | ------: | -------: | -------: | ------: | ------: |
| libpdf          |    18.8 |  53.06ms |  65.46ms | ±10.25% |      10 |
| pdf-lib         |    12.9 |  77.55ms |  99.00ms |  ±8.16% |      10 |
| @cantoo/pdf-lib |     6.9 | 144.89ms | 152.28ms |  ±1.53% |      10 |

- **libpdf** is 1.46x faster than pdf-lib
- **libpdf** is 2.73x faster than @cantoo/pdf-lib

### Extract single page from 100-page PDF

| Benchmark       | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------------- | ------: | -----: | ------: | -----: | ------: |
| libpdf          |   282.3 | 3.54ms |  4.41ms | ±0.90% |     142 |
| pdf-lib         |   111.0 | 9.01ms | 10.92ms | ±1.97% |      56 |
| @cantoo/pdf-lib |   104.4 | 9.58ms | 12.10ms | ±2.34% |      53 |

- **libpdf** is 2.54x faster than pdf-lib
- **libpdf** is 2.70x faster than @cantoo/pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark       | ops/sec |    Mean |      p99 |     RME | Samples |
| :-------------- | ------: | ------: | -------: | ------: | ------: |
| libpdf          |    24.8 | 40.32ms |  44.55ms |  ±2.17% |      13 |
| pdf-lib         |    13.2 | 76.01ms |  79.15ms |  ±3.58% |       7 |
| @cantoo/pdf-lib |    11.8 | 85.01ms | 105.77ms | ±13.66% |       6 |

- **libpdf** is 1.89x faster than pdf-lib
- **libpdf** is 2.11x faster than @cantoo/pdf-lib

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |     1.3 | 760.97ms | 760.97ms | ±0.00% |       1 |
| pdf-lib         |   0.732 |    1.37s |    1.37s | ±0.00% |       1 |
| @cantoo/pdf-lib |   0.682 |    1.47s |    1.47s | ±0.00% |       1 |

- **libpdf** is 1.80x faster than pdf-lib
- **libpdf** is 1.93x faster than @cantoo/pdf-lib

### Copy 10 pages between documents

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |   217.8 |  4.59ms |  5.40ms | ±1.14% |     109 |
| pdf-lib         |    85.5 | 11.70ms | 13.74ms | ±1.55% |      43 |
| @cantoo/pdf-lib |    75.3 | 13.28ms | 15.14ms | ±1.64% |      38 |

- **libpdf** is 2.55x faster than pdf-lib
- **libpdf** is 2.89x faster than @cantoo/pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    64.7 | 15.47ms | 16.67ms | ±1.24% |      33 |
| pdf-lib         |    18.7 | 53.57ms | 54.49ms | ±0.88% |      10 |
| @cantoo/pdf-lib |    15.1 | 66.02ms | 72.37ms | ±3.38% |       8 |

- **libpdf** is 3.46x faster than pdf-lib
- **libpdf** is 4.27x faster than @cantoo/pdf-lib

### Fill FINTRAC form fields

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    48.4 | 20.66ms | 25.83ms | ±3.19% |      25 |
| pdf-lib         |    34.8 | 28.77ms | 34.56ms | ±3.61% |      18 |
| @cantoo/pdf-lib |    32.4 | 30.83ms | 39.10ms | ±5.80% |      17 |

- **libpdf** is 1.39x faster than pdf-lib
- **libpdf** is 1.49x faster than @cantoo/pdf-lib

### Fill and flatten FINTRAC form

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    56.8 | 17.59ms | 21.14ms | ±2.29% |      29 |
| pdf-lib         |  FAILED |       - |       - |      - |       0 |
| @cantoo/pdf-lib |    30.2 | 33.10ms | 37.59ms | ±2.79% |      16 |

- **libpdf** is 1.88x faster than @cantoo/pdf-lib

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |   Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | -----: | ------: | -----: | ------: |
| copy 1 page                     |   894.7 | 1.12ms |  2.11ms | ±2.62% |     448 |
| copy 10 pages from 100-page PDF |   213.7 | 4.68ms |  7.17ms | ±2.29% |     107 |
| copy all 100 pages              |   124.9 | 8.01ms | 12.18ms | ±2.26% |      63 |

- **copy 1 page** is 4.19x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 7.17x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | -----: | -----: | -----: | ------: |
| duplicate all pages (double the document) |   974.5 | 1.03ms | 1.51ms | ±0.80% |     488 |
| duplicate page 0                          |   969.6 | 1.03ms | 1.54ms | ±0.93% |     485 |

- **duplicate all pages (double the document)** is 1.01x faster than duplicate page 0

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   629.9 |  1.59ms |  2.07ms | ±1.10% |     315 |
| merge 10 small PDFs     |   121.4 |  8.24ms | 12.20ms | ±1.87% |      61 |
| merge 2 x 100-page PDFs |    67.0 | 14.92ms | 19.01ms | ±1.92% |      34 |

- **merge 2 small PDFs** is 5.19x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 9.40x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------- | ------: | -----: | -----: | -----: | ------: |
| draw 100 lines                      |    1.8K |  565us | 1.16ms | ±1.26% |     885 |
| draw 100 rectangles                 |    1.6K |  613us | 1.32ms | ±1.76% |     816 |
| draw 100 circles                    |    1.1K |  915us | 1.84ms | ±1.72% |     547 |
| create 10 pages with mixed content  |   679.7 | 1.47ms | 2.72ms | ±2.12% |     340 |
| draw 100 text lines (standard font) |   612.6 | 1.63ms | 2.78ms | ±1.79% |     307 |

- **draw 100 lines** is 1.09x faster than draw 100 rectangles
- **draw 100 lines** is 1.62x faster than draw 100 circles
- **draw 100 lines** is 2.60x faster than create 10 pages with mixed content
- **draw 100 lines** is 2.89x faster than draw 100 text lines (standard font)

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   341.2 |  2.93ms |  5.23ms | ±2.26% |     171 |
| get form fields   |   313.5 |  3.19ms |  5.94ms | ±2.95% |     157 |
| flatten form      |   123.5 |  8.10ms |  8.83ms | ±0.97% |      62 |
| fill text fields  |    77.9 | 12.84ms | 17.00ms | ±4.36% |      39 |

- **read field values** is 1.09x faster than get form fields
- **read field values** is 2.76x faster than flatten form
- **read field values** is 4.38x faster than fill text fields

## Loading

| Benchmark              | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------- | ------: | -----: | -----: | -----: | ------: |
| load small PDF (888B)  |   16.7K |   60us |  162us | ±0.86% |   8,333 |
| load medium PDF (19KB) |   11.1K |   90us |  169us | ±0.63% |   5,531 |
| load form PDF (116KB)  |   782.8 | 1.28ms | 2.45ms | ±1.97% |     392 |
| load heavy PDF (9.9MB) |   488.0 | 2.05ms | 2.53ms | ±0.61% |     245 |

- **load small PDF (888B)** is 1.51x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 21.29x faster than load form PDF (116KB)
- **load small PDF (888B)** is 34.15x faster than load heavy PDF (9.9MB)

## Saving

| Benchmark                          | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------------------- | ------: | -----: | -----: | -----: | ------: |
| save unmodified (19KB)             |    9.2K |  109us |  286us | ±1.48% |   4,590 |
| incremental save (19KB)            |    6.2K |  163us |  342us | ±1.02% |   3,076 |
| save with modifications (19KB)     |    1.2K |  842us | 1.59ms | ±1.70% |     594 |
| save heavy PDF (9.9MB)             |   445.9 | 2.24ms | 2.77ms | ±1.06% |     223 |
| incremental save heavy PDF (9.9MB) |   128.9 | 7.76ms | 9.13ms | ±3.17% |      65 |

- **save unmodified (19KB)** is 1.49x faster than incremental save (19KB)
- **save unmodified (19KB)** is 7.73x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 20.58x faster than save heavy PDF (9.9MB)
- **save unmodified (19KB)** is 71.21x faster than incremental save heavy PDF (9.9MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   872.9 |  1.15ms |  2.73ms | ±3.14% |     437 |
| extractPages (1 page from 100-page PDF)  |   273.5 |  3.66ms |  5.51ms | ±1.65% |     137 |
| extractPages (1 page from 2000-page PDF) |    17.7 | 56.40ms | 58.01ms | ±1.08% |      10 |

- **extractPages (1 page from small PDF)** is 3.19x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 49.23x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------------------- | ------: | -------: | -------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    24.6 |  40.73ms |  44.53ms | ±2.26% |      13 |
| split 2000-page PDF (0.9MB) |     1.4 | 725.66ms | 725.66ms | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 17.82x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |    Mean |     p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    17.4 | 57.44ms | 59.06ms | ±0.93% |       9 |
| extract first 100 pages from 2000-page PDF             |    16.3 | 61.51ms | 63.02ms | ±1.25% |       9 |
| extract every 10th page from 2000-page PDF (200 pages) |    15.1 | 66.09ms | 67.07ms | ±1.05% |       8 |

- **extract first 10 pages from 2000-page PDF** is 1.07x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.15x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
