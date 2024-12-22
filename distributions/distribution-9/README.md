# HAI Rewards Distribution #9

## Overview

### Individual Campaigns

| Campaign               | Start Date | End Date | KITE / Day | Total KITE | OP / Day | Total OP | DINERO / Day | Total DINERO |
| ---------------------- | ---------- | -------- | ---------- | ---------- | -------- | -------- | ------------ | ------------ |
| Borrow: WSTETH         | 11/15/24   | 12/15/24 | 10         | 300        | 10       | 300      | 0            | 0            |
| Borrow: WETH           | 11/15/24   | 12/15/24 | 10         | 300        | 0        | 0        | 0            | 0            |
| Borrow: TBTC           | 11/15/24   | 12/15/24 | 10         | 300        | 0        | 0        | 0            | 0            |
| Borrow: RETH           | 11/15/24   | 12/15/24 | 10         | 300        | 10       | 300      | 0            | 0            |
| Borrow: OP             | 11/15/24   | 12/15/24 | 10         | 300        | 0        | 0        | 0            | 0            |
| Borrow: APXETH         | 11/15/24   | 12/15/24 | 25         | 750        | 50       | 1500     | 3130         | 93907        |
| LP: Uniswap V3 HAI/ETH | 11/15/24   | 12/15/24 | 25         | 750        | 75       | 2250     | 0            | 0            |

### Total Campaigns

| Campaign       | Start Date | End Date | KITE / Day | Total KITE | OP / Day | Total OP | DINERO / Day | Total DINERO |
| -------------- | ---------- | -------- | ---------- | ---------- | -------- | -------- | ------------ | ------------ |
| All Borrow     | 11/15/24   | 12/15/24 | 75         | 2250       | 70       | 2100     | 3130         | 93907        |
| All LP         | 11/15/24   | 12/15/24 | 25         | 750        | 75       | 2250     | 0            | 0            |
| All Everything | 11/15/24   | 12/15/24 | 100        | 3000       | 145      | 4350     | 3130         | 93907        |

## Details

- Start: November-15-2024 12:50pm UTC (Block: `128038112`)
- Cutoff-date: December-15-2024 12:50pm UTC (Block: `129334112`)
- Total days: 30

Bridged LST transactions cover the period of September-1-2024 (Block: `124798112`) to December-15-2024 (Block: `129334112`)

Bridged LST transactions are gathered by the `rewards-bridge-kit` repo (https://github.com/hai-on-op/rewards-bridge-kit)

Raw results from the queries are sorted by reward token in the `raw-results` directory.

Aggregated results are in the `final-results` folder sorted by token and then campaign type.

The `all.csv` file in each token directory in `final-results` will be used for generating the Merkle root for that reward token's distributor contract.

To combine the raw query results run `node combine-results.js [N]` where `[N]` is the number of the distribution.

e.g. `node combine-results.js 1`

This is the first period where we are distributing OP minting rewards based on bridged LSTs

In the data directory you will see a folder `op-minting-rewards-bridged-lsts`. The purpose of this folder is informational only.

OP minting rewards are only calculated for HAI minted on bridged LSTs. This is in accordance with the most recent grant we received from the Optimism Foundation.

This folder contains what the rewards would be counting HAI minted against bridged LSTs and what they would be not tracking bridged LSTs.

There is also a file `bridged_amounts_detailed.json` that lists all of the bridged LST transactions being used.
