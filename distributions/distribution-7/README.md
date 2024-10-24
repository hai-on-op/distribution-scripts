# HAI Rewards Distribution #7

## Overview

### Individual Campaigns

| Campaign               | Start Date | End Date | KITE / Day | Total KITE | OP / Day | Total OP | DINERO / Day | Total DINERO |
| ---------------------- | ---------- | -------- | ---------- | ---------- | -------- | -------- | ------------ | ------------ |
| Borrow: WSTETH         | 9/13/24    | 10/15/24 | 10         | 330        | 10       | 330      | 0            | 0            |
| Borrow: WETH           | 9/13/24    | 10/15/24 | 10         | 330        | 0        | 0        | 0            | 0            |
| Borrow: TBTC           | 9/13/24    | 10/15/24 | 10         | 330        | 0        | 0        | 0            | 0            |
| Borrow: RETH           | 9/13/24    | 10/15/24 | 10         | 330        | 10       | 330      | 0            | 0            |
| Borrow: OP             | 9/13/24    | 10/15/24 | 10         | 330        | 0        | 0        | 0            | 0            |
| Borrow: APXETH         | 9/13/24    | 10/15/24 | 25         | 825        | 50       | 1650     | 1458         | 48114        |
| LP: Uniswap V3 HAI/ETH | 9/13/24    | 10/15/24 | 25         | 825        | 75       | 2475     | 0            | 0            |

### Total Campaigns

| Campaign       | Start Date | End Date | KITE / Day | Total KITE | OP / Day | Total OP | DINERO / Day | Total DINERO |
| -------------- | ---------- | -------- | ---------- | ---------- | -------- | -------- | ------------ | ------------ |
| All Borrow     | 9/13/24    | 10/15/24 | 75         | 2475       | 70       | 2310     | 1458         | 48114        |
| All LP         | 9/13/24    | 10/15/24 | 25         | 825        | 75       | 2475     | 0            | 0            |
| All Everything | 9/13/24    | 10/15/24 | 100        | 3300       | 145      | 4785     | 1458         | 48114        |

## Details

- Start: September-13-2024 12:50pm UTC (Block: `125316512`)
- Cutoff-date: October-15-2024 12:50pm UTC (Block: `126698912`)
- Total days: 33

Bridged LST transactions cover the period of September-1-2024 (Block: `124798112`) to October-15-2024 (Block: `126698912`)

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
