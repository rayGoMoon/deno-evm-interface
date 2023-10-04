import { object, bigint } from "../deps.ts";
import type { Infer } from "../deps.ts";

import { L1Address as Address } from "./L1-address.ts";

import { L2Chain as Chain } from "./L1-chain.ts";

export const L1ChainBalance = object({
  chain: Chain,
  address: Address,
  amount: bigint(),
});

export type L1ChainBalance = Infer<typeof L1ChainBalance>;
