import { object, bigint } from "../deps.ts";
import type { Infer } from "../deps.ts";

import { L1Address as Address } from "./L1-address.ts";
import { L1Contract as Contract } from "./L2-contract.ts";

export const L1ContractBalance = object({
  contract: Contract,
  address: Address,
  amount: bigint(),
});

export type L1ContractBalance = Infer<typeof L1ContractBalance>;
