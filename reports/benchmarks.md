# Benchmark Report

> Generated on 2026-07-13 at 09:23:54 UTC
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

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |    53.4 |  18.73ms |  21.35ms | ±1.72% |      27 |
| @cantoo/pdf-lib |     4.7 | 214.54ms | 218.20ms | ±0.61% |      10 |
| pdf-lib         |     4.6 | 219.17ms | 231.20ms | ±1.71% |      10 |

- **libpdf** is 11.45x faster than @cantoo/pdf-lib
- **libpdf** is 11.70x faster than pdf-lib

### Create blank PDF

| Benchmark       | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------------- | ------: | ----: | -----: | -----: | ------: |
| libpdf          |   15.4K |  65us |  147us | ±3.66% |   7,718 |
| pdf-lib         |    3.1K | 318us | 1.59ms | ±4.13% |   1,576 |
| @cantoo/pdf-lib |    3.0K | 334us | 1.62ms | ±2.96% |   1,498 |

- **libpdf** is 4.91x faster than pdf-lib
- **libpdf** is 5.15x faster than @cantoo/pdf-lib

### Add 10 pages

| Benchmark       | ops/sec |  Mean |    p99 |    RME | Samples |
| :-------------- | ------: | ----: | -----: | -----: | ------: |
| libpdf          |    9.0K | 111us |  221us | ±1.48% |   4,524 |
| @cantoo/pdf-lib |    2.6K | 386us | 2.36ms | ±4.48% |   1,296 |
| pdf-lib         |    2.3K | 432us | 2.06ms | ±4.17% |   1,161 |

- **libpdf** is 3.49x faster than @cantoo/pdf-lib
- **libpdf** is 3.91x faster than pdf-lib

### Draw 50 rectangles

| Benchmark       | ops/sec |   Mean |    p99 |     RME | Samples |
| :-------------- | ------: | -----: | -----: | ------: | ------: |
| libpdf          |    2.9K |  340us | 1.01ms |  ±1.84% |   1,470 |
| pdf-lib         |   682.2 | 1.47ms | 7.23ms | ±10.28% |     342 |
| @cantoo/pdf-lib |   563.9 | 1.77ms | 8.86ms |  ±8.52% |     282 |

- **libpdf** is 4.31x faster than pdf-lib
- **libpdf** is 5.21x faster than @cantoo/pdf-lib

### Load and save PDF

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |    53.3 |  18.75ms |  20.47ms | ±1.68% |      27 |
| pdf-lib         |     3.2 | 316.68ms | 336.75ms | ±1.72% |      10 |
| @cantoo/pdf-lib |     1.8 | 543.28ms | 570.36ms | ±1.60% |      10 |

- **libpdf** is 16.89x faster than pdf-lib
- **libpdf** is 28.97x faster than @cantoo/pdf-lib

### Load, modify, and save PDF

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| pdf-lib         |     3.2 | 315.27ms | 331.52ms | ±1.99% |      10 |
| libpdf          |     2.9 | 346.20ms | 380.48ms | ±3.09% |      10 |
| @cantoo/pdf-lib |     1.8 | 547.94ms | 564.64ms | ±1.40% |      10 |

- **pdf-lib** is 1.10x faster than libpdf
- **pdf-lib** is 1.74x faster than @cantoo/pdf-lib

### Extract single page from 100-page PDF

| Benchmark       | ops/sec |   Mean |     p99 |    RME | Samples |
| :-------------- | ------: | -----: | ------: | -----: | ------: |
| libpdf          |   290.1 | 3.45ms |  4.28ms | ±1.11% |     146 |
| pdf-lib         |   112.9 | 8.86ms | 10.44ms | ±1.65% |      57 |
| @cantoo/pdf-lib |   108.5 | 9.21ms | 10.74ms | ±2.02% |      55 |

- **libpdf** is 2.57x faster than pdf-lib
- **libpdf** is 2.67x faster than @cantoo/pdf-lib

### Split 100-page PDF into single-page PDFs

| Benchmark       | ops/sec |    Mean |     p99 |     RME | Samples |
| :-------------- | ------: | ------: | ------: | ------: | ------: |
| libpdf          |    26.4 | 37.89ms | 41.61ms |  ±2.09% |      14 |
| @cantoo/pdf-lib |    13.7 | 73.24ms | 82.78ms |  ±6.67% |       7 |
| pdf-lib         |    13.1 | 76.50ms | 97.47ms | ±17.35% |       7 |

- **libpdf** is 1.93x faster than @cantoo/pdf-lib
- **libpdf** is 2.02x faster than pdf-lib

### Split 2000-page PDF into single-page PDFs (0.9MB)

| Benchmark       | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------- | ------: | -------: | -------: | -----: | ------: |
| libpdf          |     1.4 | 713.62ms | 713.62ms | ±0.00% |       1 |
| pdf-lib         |   0.799 |    1.25s |    1.25s | ±0.00% |       1 |
| @cantoo/pdf-lib |   0.739 |    1.35s |    1.35s | ±0.00% |       1 |

- **libpdf** is 1.75x faster than pdf-lib
- **libpdf** is 1.90x faster than @cantoo/pdf-lib

### Copy 10 pages between documents

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |   227.8 |  4.39ms |  5.25ms | ±1.18% |     114 |
| pdf-lib         |    88.7 | 11.27ms | 12.54ms | ±1.25% |      45 |
| @cantoo/pdf-lib |    77.7 | 12.86ms | 14.28ms | ±1.75% |      39 |

- **libpdf** is 2.57x faster than pdf-lib
- **libpdf** is 2.93x faster than @cantoo/pdf-lib

### Merge 2 x 100-page PDFs

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    65.1 | 15.37ms | 16.71ms | ±1.34% |      33 |
| pdf-lib         |    19.6 | 51.12ms | 51.66ms | ±0.62% |      10 |
| @cantoo/pdf-lib |    16.1 | 62.15ms | 64.90ms | ±1.70% |       9 |

- **libpdf** is 3.33x faster than pdf-lib
- **libpdf** is 4.04x faster than @cantoo/pdf-lib

### Fill FINTRAC form fields

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    49.5 | 20.18ms | 24.58ms | ±2.88% |      25 |
| @cantoo/pdf-lib |    37.6 | 26.60ms | 37.58ms | ±6.00% |      19 |
| pdf-lib         |    36.5 | 27.42ms | 37.42ms | ±5.56% |      19 |

- **libpdf** is 1.32x faster than @cantoo/pdf-lib
- **libpdf** is 1.36x faster than pdf-lib

### Fill and flatten FINTRAC form

| Benchmark       | ops/sec |    Mean |     p99 |    RME | Samples |
| :-------------- | ------: | ------: | ------: | -----: | ------: |
| libpdf          |    63.0 | 15.86ms | 20.71ms | ±3.34% |      32 |
| pdf-lib         |  FAILED |       - |       - |      - |       0 |
| @cantoo/pdf-lib |    32.4 | 30.85ms | 45.93ms | ±6.83% |      17 |

- **libpdf** is 1.94x faster than @cantoo/pdf-lib

## Copying

### Copy pages between documents

| Benchmark                       | ops/sec |   Mean |     p99 |    RME | Samples |
| :------------------------------ | ------: | -----: | ------: | -----: | ------: |
| copy 1 page                     |   983.4 | 1.02ms |  1.90ms | ±2.38% |     492 |
| copy 10 pages from 100-page PDF |   229.6 | 4.36ms |  5.14ms | ±1.35% |     115 |
| copy all 100 pages              |   132.5 | 7.55ms | 10.87ms | ±1.63% |      67 |

- **copy 1 page** is 4.28x faster than copy 10 pages from 100-page PDF
- **copy 1 page** is 7.42x faster than copy all 100 pages

### Duplicate pages within same document

| Benchmark                                 | ops/sec |  Mean |    p99 |    RME | Samples |
| :---------------------------------------- | ------: | ----: | -----: | -----: | ------: |
| duplicate page 0                          |    1.1K | 940us | 1.43ms | ±0.88% |     532 |
| duplicate all pages (double the document) |    1.1K | 945us | 1.47ms | ±0.88% |     529 |

- **duplicate page 0** is 1.01x faster than duplicate all pages (double the document)

### Merge PDFs

| Benchmark               | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------------- | ------: | ------: | ------: | -----: | ------: |
| merge 2 small PDFs      |   676.5 |  1.48ms |  1.99ms | ±1.07% |     339 |
| merge 10 small PDFs     |   131.5 |  7.61ms | 10.62ms | ±1.78% |      66 |
| merge 2 x 100-page PDFs |    70.0 | 14.29ms | 15.17ms | ±0.94% |      36 |

- **merge 2 small PDFs** is 5.15x faster than merge 10 small PDFs
- **merge 2 small PDFs** is 9.67x faster than merge 2 x 100-page PDFs

## Drawing

| Benchmark                           | ops/sec |   Mean |    p99 |    RME | Samples |
| :---------------------------------- | ------: | -----: | -----: | -----: | ------: |
| draw 100 lines                      |    1.8K |  552us | 1.17ms | ±1.38% |     906 |
| draw 100 rectangles                 |    1.6K |  609us | 1.27ms | ±1.69% |     821 |
| draw 100 circles                    |    1.1K |  877us | 1.74ms | ±1.58% |     571 |
| create 10 pages with mixed content  |   723.2 | 1.38ms | 2.28ms | ±1.55% |     362 |
| draw 100 text lines (standard font) |   624.6 | 1.60ms | 2.62ms | ±1.98% |     313 |

- **draw 100 lines** is 1.10x faster than draw 100 rectangles
- **draw 100 lines** is 1.59x faster than draw 100 circles
- **draw 100 lines** is 2.51x faster than create 10 pages with mixed content
- **draw 100 lines** is 2.90x faster than draw 100 text lines (standard font)

## Forms

| Benchmark         | ops/sec |    Mean |     p99 |    RME | Samples |
| :---------------- | ------: | ------: | ------: | -----: | ------: |
| read field values |   369.6 |  2.71ms |  5.09ms | ±2.48% |     185 |
| get form fields   |   343.1 |  2.91ms |  4.76ms | ±2.55% |     172 |
| flatten form      |   125.7 |  7.96ms | 10.24ms | ±1.41% |      63 |
| fill text fields  |    82.3 | 12.16ms | 16.28ms | ±4.18% |      42 |

- **read field values** is 1.08x faster than get form fields
- **read field values** is 2.94x faster than flatten form
- **read field values** is 4.49x faster than fill text fields

## Loading

| Benchmark              | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------- | ------: | ------: | ------: | -----: | ------: |
| load small PDF (888B)  |   16.3K |    61us |   197us | ±4.91% |   8,150 |
| load medium PDF (19KB) |   11.9K |    84us |   140us | ±0.65% |   5,969 |
| load form PDF (116KB)  |   802.0 |  1.25ms |  2.15ms | ±1.57% |     401 |
| load heavy PDF (2.0MB) |    54.6 | 18.31ms | 19.13ms | ±1.34% |      28 |

- **load small PDF (888B)** is 1.37x faster than load medium PDF (19KB)
- **load small PDF (888B)** is 20.32x faster than load form PDF (116KB)
- **load small PDF (888B)** is 298.50x faster than load heavy PDF (2.0MB)

## Saving

| Benchmark                          | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------- | ------: | ------: | ------: | -----: | ------: |
| save unmodified (19KB)             |   10.1K |    99us |   298us | ±2.82% |   5,070 |
| incremental save (19KB)            |    7.0K |   143us |   330us | ±1.24% |   3,488 |
| save with modifications (19KB)     |    1.3K |   761us |  1.42ms | ±1.64% |     657 |
| save heavy PDF (2.0MB)             |    53.8 | 18.59ms | 20.58ms | ±1.61% |      27 |
| incremental save heavy PDF (2.0MB) |    50.7 | 19.72ms | 22.19ms | ±1.81% |      26 |

- **save unmodified (19KB)** is 1.45x faster than incremental save (19KB)
- **save unmodified (19KB)** is 7.72x faster than save with modifications (19KB)
- **save unmodified (19KB)** is 188.51x faster than save heavy PDF (2.0MB)
- **save unmodified (19KB)** is 199.97x faster than incremental save heavy PDF (2.0MB)

## Splitting

### Extract single page

| Benchmark                                | ops/sec |    Mean |     p99 |    RME | Samples |
| :--------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extractPages (1 page from small PDF)     |   966.5 |  1.03ms |  2.47ms | ±3.05% |     484 |
| extractPages (1 page from 100-page PDF)  |   306.4 |  3.26ms |  3.84ms | ±0.88% |     154 |
| extractPages (1 page from 2000-page PDF) |    19.2 | 52.11ms | 54.91ms | ±1.62% |      10 |

- **extractPages (1 page from small PDF)** is 3.15x faster than extractPages (1 page from 100-page PDF)
- **extractPages (1 page from small PDF)** is 50.36x faster than extractPages (1 page from 2000-page PDF)

### Split into single-page PDFs

| Benchmark                   | ops/sec |     Mean |      p99 |    RME | Samples |
| :-------------------------- | ------: | -------: | -------: | -----: | ------: |
| split 100-page PDF (0.1MB)  |    27.3 |  36.68ms |  38.22ms | ±1.30% |      14 |
| split 2000-page PDF (0.9MB) |     1.5 | 672.76ms | 672.76ms | ±0.00% |       1 |

- **split 100-page PDF (0.1MB)** is 18.34x faster than split 2000-page PDF (0.9MB)

### Batch page extraction

| Benchmark                                              | ops/sec |    Mean |     p99 |    RME | Samples |
| :----------------------------------------------------- | ------: | ------: | ------: | -----: | ------: |
| extract first 10 pages from 2000-page PDF              |    18.8 | 53.07ms | 54.96ms | ±1.33% |      10 |
| extract first 100 pages from 2000-page PDF             |    17.1 | 58.39ms | 65.82ms | ±3.76% |       9 |
| extract every 10th page from 2000-page PDF (200 pages) |    15.8 | 63.12ms | 64.80ms | ±1.43% |       8 |

- **extract first 10 pages from 2000-page PDF** is 1.10x faster than extract first 100 pages from 2000-page PDF
- **extract first 10 pages from 2000-page PDF** is 1.19x faster than extract every 10th page from 2000-page PDF (200 pages)

---

_Results are machine-dependent. Use for relative comparison only._
