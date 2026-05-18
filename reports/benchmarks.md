# Benchmark Report

> Generated on 2026-05-18 at 10:01:17 UTC
>
> System: linux | AMD EPYC 9V74 80-Core Processor (4 cores) | 16GB RAM | Bun 1.3.14

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
| libpdf          |   423.6 |  2.36ms |  4.27ms | ±1.91% |     212 |
| @cantoo/pdf-lib |    26.4 | 37.94ms | 43.42ms | ±2.84% |      14 |
| pdf-lib         |    26.0 | 38.47ms | 45.40ms | ±5.40% |      13 |

- **libpdf** is 16.07x faster than @cantoo/pdf-lib
- **libpdf** is 16.30x faster than pdf-lib

### Create blank PDF

| Benchmark       | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------------- | ------: | ----: | -----: | -----: | ------: |
| libpdf          |   19.6K |  51us |  117us | ±1.84% |   9,822 |
| pdf-lib         |    2.9K | 345us | 1.36ms | ±2.69% |   1,449 |
| @cantoo/pdf-lib |    2.7K | 370us | 1.56ms | ±2.91% |   1,352 |

- **libpdf** is 6.78x faster than pdf-lib
- **libpdf** is 7.27x faster than @cantoo/pdf-lib

### Add 10 pages

| Benchmark       | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------------- | ------: | ----: | -----: | -----: | ------: |
| libpdf          |    8.9K | 112us |  239us | ±1.15% |   4,449 |
| @cantoo/pdf-lib |    2.5K | 406us | 2.24ms | ±3.53% |   1,233 |
| pdf-lib         |    2.3K | 438us | 1.84ms | ±3.03% |   1,141 |

- **libpdf** is 3.61x faster than @cantoo/pdf-lib
- **libpdf** is 3.90x faster than pdf-lib

### Draw 50 rectangles

| Benchmark       | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------------- | ------: | -----: | -----: | -----: | ------: |
| libpdf          |    2.9K |  349us |  847us | ±1.35% |   1,433 |
| pdf-lib         |   663.4 | 1.51ms | 5.70ms | ±6.60% |     332 |
| @cantoo/pdf-lib |   563.1 | 1.78ms | 4.93ms | ±5.40% |     282 |

- **libpdf** is 4.32x faster than pdf-lib
- **libpdf** is 5.09x faster than @cantoo/pdf-lib

### Load and save PDF

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |   363.4 |   2.75ms |   4.41ms | ±3.38% |     182 |
| pdf-lib         |    11.0 |  90.71ms | 111.37ms | ±8.81% |      10 |
| @cantoo/pdf-lib |     6.5 | 154.53ms | 161.53ms | ±1.94% |      10 |

- **libpdf** is 32.97x faster than pdf-lib
- **libpdf** is 56.16x faster than @cantoo/pdf-lib

### Load, modify, and save PDF

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |    19.6 |  51.04ms |  57.99ms | ±6.00% |      10 |
| pdf-lib         |    11.4 |  87.37ms |  94.26ms | ±3.65% |      10 |
| @cantoo/pdf-lib |     6.5 | 152.83ms | 158.09ms | ±1.22% |      10 |

- **libpdf** is 1.71x faster than pdf-lib
- **libpdf** is 2.99x faster than @cantoo/pdf-lib

### Extract single page from 100-page PDF

| Benchmark       | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------------- | ------: | -----: | ------: | -----: | ------: |
| libpdf          |   279.0 | 3.58ms |  6.29ms | ±2.07% |     140 |
| pdf-lib         |   107.5 | 9.30ms | 15.88ms | ±3.59% |      54 |
| @cantoo/pdf-lib |   104.3 | 9.59ms | 11.35ms | ±2.37% |      53 |

- **libpdf** is 2.59x faster than pdf-lib
- **libpdf** is 2.68x faster than @cantoo/pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    26.0 | 38.50ms | 43.05ms | ±3.11% |      13 |
| pdf-lib         |    12.3 | 81.03ms | 85.13ms | ±3.68% |       7 |
| @cantoo/pdf-lib |    11.3 | 88.73ms | 96.90ms | ±5.04% |       6 |

- **libpdf** is 2.10x faster than pdf-lib
- **libpdf** is 2.30x faster than @cantoo/pdf-lib

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |     1.3 | 759.09ms | 759.09ms | ±0.00% |       1 |
| pdf-lib         |   0.660 |    1.52s |    1.52s | ±0.00% |       1 |
| @cantoo/pdf-lib |   0.629 |    1.59s |    1.59s | ±0.00% |       1 |

- **libpdf** is 2.00x faster than pdf-lib
- **libpdf** is 2.09x faster than @cantoo/pdf-lib

### Copy 10 pages between documents

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |   222.3 |  4.50ms |  5.39ms | ±1.28% |     112 |
| pdf-lib         |    84.6 | 11.82ms | 13.57ms | ±1.40% |      43 |
| @cantoo/pdf-lib |    74.5 | 13.42ms | 15.48ms | ±2.38% |      38 |

- **libpdf** is 2.63x faster than pdf-lib
- **libpdf** is 2.98x faster than @cantoo/pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    65.3 | 15.32ms | 18.77ms | ±1.90% |      33 |
| pdf-lib         |    18.8 | 53.12ms | 55.30ms | ±1.13% |      10 |
| @cantoo/pdf-lib |    15.8 | 63.30ms | 65.01ms | ±1.32% |       8 |

- **libpdf** is 3.47x faster than pdf-lib
- **libpdf** is 4.13x faster than @cantoo/pdf-lib

### Fill FINTRAC form fields

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    44.8 | 22.32ms | 39.71ms | ±9.43% |      23 |
| pdf-lib         |    29.5 | 33.94ms | 53.52ms | ±9.33% |      15 |
| @cantoo/pdf-lib |    29.3 | 34.14ms | 47.64ms | ±7.34% |      15 |

- **libpdf** is 1.52x faster than pdf-lib
- **libpdf** is 1.53x faster than @cantoo/pdf-lib

### Fill and flatten FINTRAC form

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    53.7 | 18.61ms | 37.57ms | ±8.96% |      27 |
| pdf-lib         |  FAILED |       - |       - |      - |       0 |
| @cantoo/pdf-lib |    25.3 | 39.52ms | 47.11ms | ±5.53% |      13 |

- **libpdf** is 2.12x faster than @cantoo/pdf-lib

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |   Mean |    p99 |    RME | Samples |
| :------------------------------ | ------: | -----: | -----: | -----: | ------: |
| copy 1 page                     |   950.6 | 1.05ms | 2.46ms | ±3.37% |     476 |
| copy 10 pages from 100-page PDF |   219.4 | 4.56ms | 7.80ms | ±3.26% |     110 |
| copy all 100 pages              |   130.4 | 7.67ms | 8.25ms | ±0.91% |      66 |

- **copy 1 page** is 4.33x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 7.29x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |  Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | ----: | -----: | -----: | ------: |
| duplicate all pages (double the document) |    1.1K | 941us | 1.39ms | ±0.87% |     532 |
| duplicate page 0                          |    1.0K | 993us | 1.77ms | ±1.81% |     504 |

- **duplicate all pages (double the document)** is 1.06x faster than duplicate page 0

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   683.5 |  1.46ms |  2.14ms | ±1.15% |     342 |
| merge 10 small PDFs     |   124.6 |  8.03ms |  9.07ms | ±1.20% |      63 |
| merge 2 x 100-page PDFs |    69.7 | 14.35ms | 16.03ms | ±1.27% |      35 |

- **merge 2 small PDFs** is 5.49x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 9.81x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------- | ------: | -----: | -----: | -----: | ------: |
| draw 100 lines                      |    1.7K |  580us | 1.32ms | ±1.59% |     863 |
| draw 100 rectangles                 |    1.6K |  634us | 1.33ms | ±2.99% |     789 |
| draw 100 circles                    |   787.4 | 1.27ms | 2.86ms | ±2.83% |     394 |
| create 10 pages with mixed content  |   683.1 | 1.46ms | 2.38ms | ±1.72% |     342 |
| draw 100 text lines (standard font) |   622.9 | 1.61ms | 2.42ms | ±1.43% |     312 |

- **draw 100 lines** is 1.09x faster than draw 100 rectangles
- **draw 100 lines** is 2.19x faster than draw 100 circles
- **draw 100 lines** is 2.53x faster than create 10 pages with mixed content
- **draw 100 lines** is 2.77x faster than draw 100 text lines (standard font)

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   362.9 |  2.76ms |  4.69ms | ±1.57% |     182 |
| get form fields   |   321.2 |  3.11ms |  6.24ms | ±3.62% |     161 |
| flatten form      |   124.9 |  8.01ms | 10.99ms | ±2.44% |      63 |
| fill text fields  |    81.1 | 12.33ms | 16.75ms | ±5.01% |      41 |

- **read field values** is 1.13x faster than get form fields
- **read field values** is 2.91x faster than flatten form
- **read field values** is 4.48x faster than fill text fields

## Loading

| Benchmark              | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------- | ------: | -----: | -----: | -----: | ------: |
| load small PDF (888B)  |   19.0K |   53us |  116us | ±0.71% |   9,495 |
| load medium PDF (19KB) |   11.8K |   84us |  118us | ±0.62% |   5,922 |
| load form PDF (116KB)  |   770.6 | 1.30ms | 2.31ms | ±1.55% |     386 |
| load heavy PDF (9.9MB) |   471.7 | 2.12ms | 2.55ms | ±0.56% |     236 |

- **load small PDF (888B)** is 1.60x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 24.64x faster than load form PDF (116KB)
- **load small PDF (888B)** is 40.25x faster than load heavy PDF (9.9MB)

## Saving

| Benchmark                          | ops/sec |   Mean |     p99 |    RME | Samples |
| :--------------------------------- | ------: | -----: | ------: | -----: | ------: |
| save unmodified (19KB)             |   10.5K |   95us |   216us | ±0.91% |   5,268 |
| incremental save (19KB)            |    7.3K |  136us |   293us | ±1.06% |   3,664 |
| save with modifications (19KB)     |    1.3K |  767us |  1.39ms | ±1.10% |     652 |
| save heavy PDF (9.9MB)             |   467.6 | 2.14ms |  2.87ms | ±1.09% |     234 |
| incremental save heavy PDF (9.9MB) |   234.3 | 4.27ms | 12.16ms | ±8.41% |     118 |

- **save unmodified (19KB)** is 1.44x faster than incremental save (19KB)
- **save unmodified (19KB)** is 8.08x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 22.53x faster than save heavy PDF (9.9MB)
- **save unmodified (19KB)** is 44.95x faster than incremental save heavy PDF (9.9MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   993.4 |  1.01ms |  1.86ms | ±2.29% |     497 |
| extractPages (1 page from 100-page PDF)  |   290.9 |  3.44ms |  6.11ms | ±1.92% |     146 |
| extractPages (1 page from 2000-page PDF) |    18.4 | 54.41ms | 56.29ms | ±1.11% |      10 |

- **extractPages (1 page from small PDF)** is 3.41x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 54.05x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------------------- | ------: | -------: | -------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    27.2 |  36.75ms |  41.94ms | ±2.86% |      14 |
| split 2000-page PDF (0.9MB) |     1.4 | 691.65ms | 691.65ms | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 18.82x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |    Mean |     p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    18.2 | 54.97ms | 56.20ms | ±1.00% |      10 |
| extract first 100 pages from 2000-page PDF             |    17.0 | 58.71ms | 61.03ms | ±1.52% |       9 |
| extract every 10th page from 2000-page PDF (200 pages) |    14.6 | 68.47ms | 78.68ms | ±5.45% |       8 |

- **extract first 10 pages from 2000-page PDF** is 1.07x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.25x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
