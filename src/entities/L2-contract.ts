import { object } from "../deps.ts";
import type { Infer } from "../deps.ts";

import { L1Address as Address } from "./L1-address.ts";
import { L2Chain as Chain } from "./L1-chain.ts";

// Level 1
export const L1Contract = object({
  address: Address,
  chain: Chain,
});

export type L1Contract = Infer<typeof L1Contract>;
