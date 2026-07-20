# Benchmark Report

> Generated on 2026-07-20 at 08:56:10 UTC
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

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |    51.8 |  19.32ms |  31.14ms | ±5.24% |      26 |
| pdf-lib         |     4.5 | 222.86ms | 229.85ms | ±1.38% |      10 |
| @cantoo/pdf-lib |     4.4 | 228.40ms | 234.93ms | ±1.57% |      10 |

- **libpdf** is 11.53x faster than pdf-lib
- **libpdf** is 11.82x faster than @cantoo/pdf-lib

### Create blank PDF

| Benchmark       | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------------- | ------: | ----: | -----: | -----: | ------: |
| libpdf          |   13.6K |  74us |  208us | ±3.48% |   6,781 |
| pdf-lib         |    2.7K | 370us | 1.47ms | ±3.01% |   1,353 |
| @cantoo/pdf-lib |    2.7K | 370us | 1.56ms | ±2.68% |   1,351 |

- **libpdf** is 5.02x faster than pdf-lib
- **libpdf** is 5.02x faster than @cantoo/pdf-lib

### Add 10 pages

| Benchmark       | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------------- | ------: | ----: | -----: | -----: | ------: |
| libpdf          |    7.9K | 126us |  226us | ±1.41% |   3,964 |
| @cantoo/pdf-lib |    2.5K | 402us | 2.22ms | ±3.49% |   1,244 |
| pdf-lib         |    2.3K | 441us | 1.93ms | ±3.19% |   1,134 |

- **libpdf** is 3.19x faster than @cantoo/pdf-lib
- **libpdf** is 3.50x faster than pdf-lib

### Draw 50 rectangles

| Benchmark       | ops/sec |   Mean |    p99 |    RME | Samples |
| :-------------- | ------: | -----: | -----: | -----: | ------: |
| libpdf          |    2.8K |  354us | 1.03ms | ±1.75% |   1,411 |
| pdf-lib         |   656.7 | 1.52ms | 6.33ms | ±7.86% |     329 |
| @cantoo/pdf-lib |   563.0 | 1.78ms | 4.80ms | ±6.27% |     282 |

- **libpdf** is 4.30x faster than pdf-lib
- **libpdf** is 5.01x faster than @cantoo/pdf-lib

### Load and save PDF

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |    51.8 |  19.29ms |  31.28ms | ±5.43% |      26 |
| pdf-lib         |     3.0 | 329.28ms | 340.08ms | ±1.46% |      10 |
| @cantoo/pdf-lib |     1.7 | 585.31ms | 652.47ms | ±3.59% |      10 |

- **libpdf** is 17.07x faster than pdf-lib
- **libpdf** is 30.34x faster than @cantoo/pdf-lib

### Load, modify, and save PDF

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| pdf-lib         |     3.1 | 323.22ms | 336.08ms | ±1.28% |      10 |
| libpdf          |     2.8 | 352.37ms | 366.88ms | ±1.25% |      10 |
| @cantoo/pdf-lib |     1.7 | 589.65ms | 618.70ms | ±1.97% |      10 |

- **pdf-lib** is 1.09x faster than libpdf
- **pdf-lib** is 1.82x faster than @cantoo/pdf-lib

### Extract single page from 100-page PDF

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |   255.8 |  3.91ms |  4.78ms | ±1.06% |     128 |
| pdf-lib         |   105.3 |  9.50ms | 11.74ms | ±1.84% |      53 |
| @cantoo/pdf-lib |    98.4 | 10.16ms | 14.01ms | ±2.80% |      50 |

- **libpdf** is 2.43x faster than pdf-lib
- **libpdf** is 2.60x faster than @cantoo/pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    24.4 | 40.90ms | 41.90ms | ±0.84% |      13 |
| pdf-lib         |    13.1 | 76.19ms | 77.81ms | ±1.77% |       7 |
| @cantoo/pdf-lib |    11.9 | 83.94ms | 85.54ms | ±2.94% |       6 |

- **libpdf** is 1.86x faster than pdf-lib
- **libpdf** is 2.05x faster than @cantoo/pdf-lib

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |     1.3 | 784.67ms | 784.67ms | ±0.00% |       1 |
| pdf-lib         |   0.720 |    1.39s |    1.39s | ±0.00% |       1 |
| @cantoo/pdf-lib |   0.659 |    1.52s |    1.52s | ±0.00% |       1 |

- **libpdf** is 1.77x faster than pdf-lib
- **libpdf** is 1.93x faster than @cantoo/pdf-lib

### Copy 10 pages between documents

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |   196.5 |  5.09ms |  6.02ms | ±1.32% |      99 |
| pdf-lib         |    82.1 | 12.18ms | 13.33ms | ±1.54% |      42 |
| @cantoo/pdf-lib |    72.6 | 13.78ms | 16.23ms | ±2.02% |      37 |

- **libpdf** is 2.39x faster than pdf-lib
- **libpdf** is 2.71x faster than @cantoo/pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    55.4 | 18.04ms | 19.11ms | ±1.29% |      28 |
| pdf-lib         |    18.2 | 54.96ms | 55.87ms | ±0.72% |      10 |
| @cantoo/pdf-lib |    15.1 | 66.17ms | 67.58ms | ±1.35% |       8 |

- **libpdf** is 3.05x faster than pdf-lib
- **libpdf** is 3.67x faster than @cantoo/pdf-lib

### Fill FINTRAC form fields

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    40.6 | 24.62ms | 44.99ms | ±9.36% |      21 |
| @cantoo/pdf-lib |    34.5 | 28.98ms | 41.80ms | ±6.10% |      18 |
| pdf-lib         |    34.2 | 29.20ms | 44.01ms | ±7.16% |      18 |

- **libpdf** is 1.18x faster than @cantoo/pdf-lib
- **libpdf** is 1.19x faster than pdf-lib

### Fill and flatten FINTRAC form

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    53.8 | 18.60ms | 23.49ms | ±3.67% |      28 |
| pdf-lib         |  FAILED |       - |       - |      - |       0 |
| @cantoo/pdf-lib |    30.3 | 33.00ms | 45.19ms | ±6.29% |      16 |

- **libpdf** is 1.77x faster than @cantoo/pdf-lib

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |   Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | -----: | ------: | -----: | ------: |
| copy 1 page                     |   865.8 | 1.15ms |  2.36ms | ±2.92% |     433 |
| copy 10 pages from 100-page PDF |   208.3 | 4.80ms |  8.75ms | ±2.59% |     105 |
| copy all 100 pages              |   119.7 | 8.35ms | 10.20ms | ±1.41% |      60 |

- **copy 1 page** is 4.16x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 7.23x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | -----: | -----: | -----: | ------: |
| duplicate all pages (double the document) |   981.9 | 1.02ms | 1.55ms | ±0.94% |     491 |
| duplicate page 0                          |   977.4 | 1.02ms | 1.56ms | ±1.00% |     489 |

- **duplicate all pages (double the document)** is 1.00x faster than duplicate page 0

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   631.9 |  1.58ms |  2.38ms | ±1.34% |     316 |
| merge 10 small PDFs     |   118.9 |  8.41ms | 12.16ms | ±1.75% |      60 |
| merge 2 x 100-page PDFs |    65.3 | 15.31ms | 15.91ms | ±0.86% |      33 |

- **merge 2 small PDFs** is 5.32x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 9.67x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------- | ------: | -----: | -----: | -----: | ------: |
| draw 100 lines                      |    1.7K |  583us | 1.35ms | ±1.56% |     858 |
| draw 100 rectangles                 |    1.6K |  621us | 1.34ms | ±1.84% |     805 |
| draw 100 circles                    |    1.0K |  962us | 2.05ms | ±1.90% |     520 |
| create 10 pages with mixed content  |   663.0 | 1.51ms | 2.75ms | ±2.25% |     333 |
| draw 100 text lines (standard font) |   595.9 | 1.68ms | 3.07ms | ±2.16% |     298 |

- **draw 100 lines** is 1.07x faster than draw 100 rectangles
- **draw 100 lines** is 1.65x faster than draw 100 circles
- **draw 100 lines** is 2.59x faster than create 10 pages with mixed content
- **draw 100 lines** is 2.88x faster than draw 100 text lines (standard font)

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   344.7 |  2.90ms |  5.46ms | ±2.88% |     173 |
| get form fields   |   314.9 |  3.18ms |  5.79ms | ±3.40% |     158 |
| flatten form      |   122.7 |  8.15ms | 11.32ms | ±1.74% |      62 |
| fill text fields  |    78.5 | 12.75ms | 17.26ms | ±4.29% |      40 |

- **read field values** is 1.09x faster than get form fields
- **read field values** is 2.81x faster than flatten form
- **read field values** is 4.39x faster than fill text fields

## Loading

| Benchmark              | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------- | ------: | ------: | ------: | -----: | ------: |
| load small PDF (888B)  |   15.5K |    65us |   198us | ±2.79% |   7,726 |
| load medium PDF (19KB) |   10.9K |    92us |   170us | ±0.72% |   5,442 |
| load form PDF (116KB)  |   790.9 |  1.26ms |  2.08ms | ±1.22% |     396 |
| load heavy PDF (2.0MB) |    55.2 | 18.11ms | 19.25ms | ±1.70% |      28 |

- **load small PDF (888B)** is 1.42x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 19.54x faster than load form PDF (116KB)
- **load small PDF (888B)** is 279.88x faster than load heavy PDF (2.0MB)

## Saving

| Benchmark                          | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------- | ------: | ------: | ------: | -----: | ------: |
| save unmodified (19KB)             |    8.5K |   117us |   359us | ±1.82% |   4,268 |
| incremental save (19KB)            |    6.0K |   167us |   356us | ±1.12% |   2,992 |
| save with modifications (19KB)     |    1.2K |   853us |  1.64ms | ±1.75% |     587 |
| save heavy PDF (2.0MB)             |    52.6 | 19.00ms | 21.01ms | ±1.25% |      27 |
| incremental save heavy PDF (2.0MB) |    48.8 | 20.49ms | 21.39ms | ±1.14% |      25 |

- **save unmodified (19KB)** is 1.43x faster than incremental save (19KB)
- **save unmodified (19KB)** is 7.28x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 162.21x faster than save heavy PDF (2.0MB)
- **save unmodified (19KB)** is 174.88x faster than incremental save heavy PDF (2.0MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   805.7 |  1.24ms |  2.89ms | ±4.54% |     403 |
| extractPages (1 page from 100-page PDF)  |   270.4 |  3.70ms |  4.70ms | ±1.39% |     136 |
| extractPages (1 page from 2000-page PDF) |    17.2 | 58.00ms | 61.31ms | ±1.94% |      10 |

- **extractPages (1 page from small PDF)** is 2.98x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 46.73x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------------------- | ------: | -------: | -------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    23.6 |  42.43ms |  45.35ms | ±1.90% |      12 |
| split 2000-page PDF (0.9MB) |     1.3 | 745.54ms | 745.54ms | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 17.57x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |    Mean |     p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    17.1 | 58.58ms | 60.50ms | ±1.56% |       9 |
| extract first 100 pages from 2000-page PDF             |    15.7 | 63.88ms | 65.15ms | ±2.00% |       8 |
| extract every 10th page from 2000-page PDF (200 pages) |    14.5 | 68.89ms | 71.53ms | ±1.85% |       8 |

- **extract first 10 pages from 2000-page PDF** is 1.09x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.18x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
