import { object, optional, string, array, bigint, record } from "../deps.ts";
import type { Infer } from "../deps.ts";

import { L1Address as Address } from "./L1-address.ts";
import { L1Contract as Contract } from "./L2-contract.ts";

// Level 1
export const L1ContractABI = array(string());
export type L1ContractABI = Infer<typeof L1ContractABI>;

export const L1ContractActionGasCost = record(string(), bigint());
export type L1ContractActionGasCost = Infer<typeof L1ContractActionGasCost>;

// Level 2
export const L2ContractProfile = object({
  contract: Contract,
  abi: L1ContractABI,
  cost: L1ContractActionGasCost,
  owner: optional(Address),
});

export type L2ContractProfile = Infer<typeof L2ContractProfile>;
