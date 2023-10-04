import { object } from "../deps.ts";
import type { Infer } from "../deps.ts";

import { L1Address as Address } from "./L1-address.ts";
import { L1PrivateKey as PrivateKey } from "./L1-private-key.ts";

export const L1Wallet = object({
  address: Address,
  privateKey: PrivateKey,
});

export type L1Wallet = Infer<typeof L1Wallet>;
