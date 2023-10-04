import { object, number, bigint } from "../deps.ts";
import type { Infer } from "../deps.ts";

import { L1EtherNamedUnit } from "./L1-eth-named-unit.ts";

// Level 1
export const L1Amount = bigint();

export type L1Amount = Infer<typeof L1Amount>;

export const L1EtherNamedUnitAmount = object({
  amount: number(),
  unit: L1EtherNamedUnit,
});

export type L1EtherNamedUnitAmount = Infer<typeof L1EtherNamedUnitAmount>;
