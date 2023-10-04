import { object, string } from "../deps.ts";
import type { Infer } from "../deps.ts";

import {
  L1ContractABI as ContractABI,
  L1ContractActionGasCost as ContractDeployActionGasCost,
} from "./L3-contract-profile.ts";

// Level 1
export const L1ContractByteCode = string();
export type L1ContractByteCode = Infer<typeof L1ContractByteCode>;

// Level 2
export const L2ContractDeployTemplate = object({
  cost: ContractDeployActionGasCost,
  byteCode: L1ContractByteCode,
  abi: ContractABI,
});

export type L2ContractDeployTemplate = Infer<typeof L2ContractDeployTemplate>;
