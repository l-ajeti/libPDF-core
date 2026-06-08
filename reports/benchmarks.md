# Benchmark Report

> Generated on 2026-06-08 at 10:51:55 UTC
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
| libpdf          |   362.4 |  2.76ms |  4.80ms | ±2.04% |     182 |
| @cantoo/pdf-lib |    27.2 | 36.78ms | 39.21ms | ±1.53% |      14 |
| pdf-lib         |    26.6 | 37.55ms | 41.39ms | ±3.44% |      14 |

- **libpdf** is 13.33x faster than @cantoo/pdf-lib
- **libpdf** is 13.61x faster than pdf-lib

### Create blank PDF

| Benchmark       | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------------- | ------: | ----: | -----: | -----: | ------: |
| libpdf          |   20.5K |  49us |  112us | ±1.42% |  10,246 |
| pdf-lib         |    2.9K | 340us | 1.33ms | ±2.85% |   1,471 |
| @cantoo/pdf-lib |    2.7K | 373us | 1.76ms | ±3.55% |   1,341 |

- **libpdf** is 6.97x faster than pdf-lib
- **libpdf** is 7.64x faster than @cantoo/pdf-lib

### Add 10 pages

| Benchmark       | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------------- | ------: | ----: | -----: | -----: | ------: |
| libpdf          |    8.5K | 117us |  186us | ±2.56% |   4,282 |
| @cantoo/pdf-lib |    2.5K | 396us | 2.28ms | ±4.69% |   1,262 |
| pdf-lib         |    2.3K | 436us | 2.25ms | ±3.89% |   1,148 |

- **libpdf** is 3.39x faster than @cantoo/pdf-lib
- **libpdf** is 3.72x faster than pdf-lib

### Draw 50 rectangles

| Benchmark       | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------------- | ------: | -----: | -----: | -----: | ------: |
| libpdf          |    2.9K |  349us | 1.00ms | ±1.73% |   1,435 |
| pdf-lib         |   711.9 | 1.40ms | 5.53ms | ±7.64% |     357 |
| @cantoo/pdf-lib |   556.4 | 1.80ms | 6.73ms | ±7.44% |     280 |

- **libpdf** is 4.03x faster than pdf-lib
- **libpdf** is 5.15x faster than @cantoo/pdf-lib

### Load and save PDF

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |   366.3 |   2.73ms |   4.74ms | ±2.11% |     184 |
| pdf-lib         |    13.7 |  72.93ms |  84.78ms | ±5.19% |      10 |
| @cantoo/pdf-lib |     7.1 | 140.68ms | 145.28ms | ±1.32% |      10 |

- **libpdf** is 26.72x faster than pdf-lib
- **libpdf** is 51.53x faster than @cantoo/pdf-lib

### Load, modify, and save PDF

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |    19.3 |  51.81ms |  58.70ms | ±5.66% |      10 |
| pdf-lib         |    13.2 |  75.98ms |  83.60ms | ±4.60% |      10 |
| @cantoo/pdf-lib |     7.1 | 140.08ms | 143.84ms | ±1.16% |      10 |

- **libpdf** is 1.47x faster than pdf-lib
- **libpdf** is 2.70x faster than @cantoo/pdf-lib

### Extract single page from 100-page PDF

| Benchmark       | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------------- | ------: | -----: | ------: | -----: | ------: |
| libpdf          |   259.1 | 3.86ms |  8.74ms | ±3.87% |     130 |
| pdf-lib         |   117.4 | 8.52ms | 10.41ms | ±1.15% |      59 |
| @cantoo/pdf-lib |   109.3 | 9.15ms | 11.74ms | ±2.23% |      55 |

- **libpdf** is 2.21x faster than pdf-lib
- **libpdf** is 2.37x faster than @cantoo/pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    26.6 | 37.61ms | 38.72ms | ±1.08% |      14 |
| pdf-lib         |    13.8 | 72.64ms | 76.30ms | ±4.46% |       7 |
| @cantoo/pdf-lib |    13.3 | 75.45ms | 81.42ms | ±5.22% |       7 |

- **libpdf** is 1.93x faster than pdf-lib
- **libpdf** is 2.01x faster than @cantoo/pdf-lib

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |     1.4 | 718.38ms | 718.38ms | ±0.00% |       1 |
| pdf-lib         |   0.772 |    1.30s |    1.30s | ±0.00% |       1 |
| @cantoo/pdf-lib |   0.740 |    1.35s |    1.35s | ±0.00% |       1 |

- **libpdf** is 1.80x faster than pdf-lib
- **libpdf** is 1.88x faster than @cantoo/pdf-lib

### Copy 10 pages between documents

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |   214.4 |  4.66ms |  6.26ms | ±2.35% |     108 |
| pdf-lib         |    88.2 | 11.33ms | 12.58ms | ±1.18% |      45 |
| @cantoo/pdf-lib |    79.2 | 12.62ms | 13.98ms | ±1.39% |      40 |

- **libpdf** is 2.43x faster than pdf-lib
- **libpdf** is 2.71x faster than @cantoo/pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    59.7 | 16.75ms | 30.25ms | ±5.74% |      31 |
| pdf-lib         |    19.6 | 51.14ms | 51.87ms | ±0.58% |      10 |
| @cantoo/pdf-lib |    16.4 | 61.04ms | 63.89ms | ±1.60% |       9 |

- **libpdf** is 3.05x faster than pdf-lib
- **libpdf** is 3.64x faster than @cantoo/pdf-lib

### Fill FINTRAC form fields

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    49.7 | 20.11ms | 27.28ms | ±4.28% |      25 |
| @cantoo/pdf-lib |    35.4 | 28.23ms | 32.66ms | ±4.25% |      18 |
| pdf-lib         |    35.2 | 28.41ms | 32.96ms | ±3.63% |      18 |

- **libpdf** is 1.40x faster than @cantoo/pdf-lib
- **libpdf** is 1.41x faster than pdf-lib

### Fill and flatten FINTRAC form

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    60.4 | 16.55ms | 18.51ms | ±2.35% |      31 |
| pdf-lib         |  FAILED |       - |       - |      - |       0 |
| @cantoo/pdf-lib |    30.9 | 32.33ms | 43.80ms | ±6.07% |      16 |

- **libpdf** is 1.95x faster than @cantoo/pdf-lib

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |   Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | -----: | ------: | -----: | ------: |
| copy 1 page                     |    1.0K |  956us |  1.85ms | ±2.11% |     523 |
| copy 10 pages from 100-page PDF |   237.2 | 4.22ms |  6.79ms | ±2.01% |     119 |
| copy all 100 pages              |   135.3 | 7.39ms | 11.20ms | ±1.88% |      68 |

- **copy 1 page** is 4.41x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 7.73x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |  Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | ----: | -----: | -----: | ------: |
| duplicate all pages (double the document) |    1.1K | 916us | 1.27ms | ±0.63% |     546 |
| duplicate page 0                          |    1.1K | 921us | 1.33ms | ±0.83% |     544 |

- **duplicate all pages (double the document)** is 1.01x faster than duplicate page 0

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   710.5 |  1.41ms |  1.85ms | ±0.79% |     356 |
| merge 10 small PDFs     |   139.1 |  7.19ms | 11.77ms | ±2.03% |      70 |
| merge 2 x 100-page PDFs |    71.6 | 13.97ms | 16.80ms | ±1.64% |      36 |

- **merge 2 small PDFs** is 5.11x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 9.92x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------- | ------: | -----: | -----: | -----: | ------: |
| draw 100 lines                      |    1.8K |  541us | 1.11ms | ±1.18% |     924 |
| draw 100 rectangles                 |    1.6K |  617us | 1.44ms | ±2.23% |     811 |
| draw 100 circles                    |    1.2K |  862us | 1.70ms | ±1.51% |     581 |
| create 10 pages with mixed content  |   729.4 | 1.37ms | 2.17ms | ±1.38% |     366 |
| draw 100 text lines (standard font) |   641.2 | 1.56ms | 2.32ms | ±1.37% |     321 |

- **draw 100 lines** is 1.14x faster than draw 100 rectangles
- **draw 100 lines** is 1.59x faster than draw 100 circles
- **draw 100 lines** is 2.53x faster than create 10 pages with mixed content
- **draw 100 lines** is 2.88x faster than draw 100 text lines (standard font)

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   380.8 |  2.63ms |  4.50ms | ±2.03% |     191 |
| get form fields   |   356.5 |  2.80ms |  5.04ms | ±2.64% |     179 |
| flatten form      |   130.8 |  7.65ms | 13.30ms | ±2.66% |      66 |
| fill text fields  |    85.7 | 11.67ms | 22.48ms | ±6.45% |      43 |

- **read field values** is 1.07x faster than get form fields
- **read field values** is 2.91x faster than flatten form
- **read field values** is 4.44x faster than fill text fields

## Loading

| Benchmark              | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------- | ------: | -----: | -----: | -----: | ------: |
| load small PDF (888B)  |   19.7K |   51us |  118us | ±1.21% |   9,874 |
| load medium PDF (19KB) |   12.3K |   82us |  104us | ±0.49% |   6,129 |
| load form PDF (116KB)  |   846.9 | 1.18ms | 1.67ms | ±0.98% |     424 |
| load heavy PDF (9.9MB) |   488.6 | 2.05ms | 2.52ms | ±0.63% |     245 |

- **load small PDF (888B)** is 1.61x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 23.32x faster than load form PDF (116KB)
- **load small PDF (888B)** is 40.42x faster than load heavy PDF (9.9MB)

## Saving

| Benchmark                          | ops/sec |   Mean |    p99 |    RME | Samples |
| :--------------------------------- | ------: | -----: | -----: | -----: | ------: |
| save unmodified (19KB)             |    9.6K |  104us |  240us | ±2.68% |   4,808 |
| incremental save (19KB)            |    6.8K |  148us |  322us | ±2.45% |   3,384 |
| save with modifications (19KB)     |    1.2K |  819us | 2.35ms | ±2.83% |     611 |
| save heavy PDF (9.9MB)             |   469.7 | 2.13ms | 3.80ms | ±2.26% |     235 |
| incremental save heavy PDF (9.9MB) |   133.0 | 7.52ms | 8.55ms | ±2.62% |      67 |

- **save unmodified (19KB)** is 1.42x faster than incremental save (19KB)
- **save unmodified (19KB)** is 7.87x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 20.47x faster than save heavy PDF (9.9MB)
- **save unmodified (19KB)** is 72.28x faster than incremental save heavy PDF (9.9MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   989.1 |  1.01ms |  1.86ms | ±2.26% |     495 |
| extractPages (1 page from 100-page PDF)  |   302.4 |  3.31ms |  5.37ms | ±1.50% |     152 |
| extractPages (1 page from 2000-page PDF) |    19.1 | 52.27ms | 61.11ms | ±4.31% |      10 |

- **extractPages (1 page from small PDF)** is 3.27x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 51.70x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------------------- | ------: | -------: | -------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    27.2 |  36.83ms |  38.38ms | ±1.27% |      14 |
| split 2000-page PDF (0.9MB) |     1.5 | 677.31ms | 677.31ms | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 18.39x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |    Mean |     p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    19.3 | 51.86ms | 53.07ms | ±0.73% |      10 |
| extract first 100 pages from 2000-page PDF             |    17.7 | 56.48ms | 58.56ms | ±1.42% |       9 |
| extract every 10th page from 2000-page PDF (200 pages) |    16.3 | 61.24ms | 63.70ms | ±1.72% |       9 |

- **extract first 10 pages from 2000-page PDF** is 1.09x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.18x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
