# HAI Rewards Distribution #5

## Overview

| Campaign               | Campaign Start Date | Campaign End Date | KITE per Day | OP per Day |
| ---------------------- | ------------------- | ----------------- | ------------ | ---------- |
| Borrow: WETH           | 7/15/2024           | 8/15/2024         | 20           | 25         |
| Borrow: WSTETH         | 7/15/2024           | 8/15/2024         | 20           | 25         |
| Borrow: OP             | 7/15/2024           | 8/15/2024         | 20           | 50         |
| LP: Uniswap V3 HAI/ETH | 7/15/2024           | 8/15/2024         | 30           | 200        |

## Details

Distribution date: August 2024

- Start: July-15-2024 12:50pm UTC
- Cutoff-date: August-15-2024 12:50pm UTC

Raw results from the queries are sorted by reward token in the `raw-results` directory.

Aggregated results are in the `final-results` folder sorted by token and then campaign type.

The `all.csv` file in each token directory in `final-results` will be used for generating the Merkle root for that reward token's distributor contract.

To combine the raw query results run `node combine-results.js [N]` where `[N]` is the number of the distribution.

e.g. `node combine-results.js 1`

## LP Rewards

### HAI / WETH Uni v3 Pool

30 KITE / day

200 OP / day

- Period: From July-15-2024 12:50pm UTC Until August-15-2024 12:50pm UTC
- Query: Node script at https://github.com/hai-on-op/lp-rewards

Total KITE Distributed: `930`

Total OP Distributed: `6,200`

## Minter Rewards

### Borrow `WETH` and mint `HAI`

20 KITE / day

25 OP / day

- Period: From July-15-2024 12:50pm UTC Until August-15-2024 12:50pm UTC
- Query: Node script at https://github.com/hai-on-op/minter-rewards

Total KITE Distributed: `620`

Total OP Distributed: `775`

### Borrow `WSTETH` and mint `HAI`

20 KITE / day

25 OP / day

- Period: From July-15-2024 12:50pm UTC Until August-15-2024 12:50pm UTC
- Query: Node script at https://github.com/hai-on-op/minter-rewards

Total KITE Distributed: `620`

Total OP Distributed: `775`

### Borrow `OP` and mint `HAI`

20 KITE / day

50 OP / day

- Period: From July-15-2024 12:50pm UTC Until August-15-2024 12:50pm UTC
- Query: Node script at https://github.com/hai-on-op/minter-rewards

Total KITE Distributed: `620`

Total OP Distributed: `1550`

### Aggregate Minter Rewards

60 KITE / day

100 OP / day

Total KITE Distributed: `1860`

Total OP Distributed: `3100`

## Aggregate Distribution 4 Rewards

90 KITE / day

300 OP / day

Total KITE Distributed: `2,790`

Total OP Distributed: `9300`
