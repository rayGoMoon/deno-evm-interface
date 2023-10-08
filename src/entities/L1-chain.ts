import { string, enums, object, integer } from "../deps.ts";
import type { Infer } from "../deps.ts";

// Level 1
export const L1ChainName = enums(["ethereum", "polygon", "mumbai", "speolia"]);
export type L1ChainName = Infer<typeof L1ChainName>;

export const L1ChainType = enums(["mainnet", "testnet"]);
export type L1ChainType = Infer<typeof L1ChainType>;

// Level 2
export const L2Chain = object({
  chainId: integer(),
  name: L1ChainName,
  type: L1ChainType,
  rpc: string(),
  blockExplorer: string(),
});

export type L2Chain = Infer<typeof L2Chain>;
