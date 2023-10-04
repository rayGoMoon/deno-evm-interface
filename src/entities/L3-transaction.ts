import { object, bigint, integer, optional, string } from "../deps.ts";
import type { Infer } from "../deps.ts";

import { L1Address as Address } from "./L1-address.ts";
import { L2Chain as Chain } from "./L1-chain.ts";
import { L1GasOptions as GasOptions } from "./L1-gas.ts";
import { L1Wallet as Wallet } from "./L2-wallet.ts";

// Level 1
export const L1Transaction = object({
  chain: Chain,
  to: Address,
  gas: GasOptions,
  nonce: integer(),
  data: optional(string()),
  value: optional(bigint()),
});

export type L1Transaction = Infer<typeof L1Transaction>;

// Level 2
export const L2TransactionTask = object({
  wallet: Wallet,
  tx: L1Transaction,
});

export type L2TransactionTask = Infer<typeof L2TransactionTask>;
