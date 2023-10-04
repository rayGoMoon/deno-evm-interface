import { enums, object, number } from "../deps.ts";
import type { Infer } from "../deps.ts";

// Level 1
export const L1EtherNamedUnit = enums([
  "wei",
  "kwei",
  "mwei",
  "gwei",
  "szabo",
  "finney",
  "ether",
]);

export type L1EtherNamedUnit = Infer<typeof L1EtherNamedUnit>;

// Level 2
export const L2EtherNamedUnitAmount = object({
  amount: number(),
  unit: L1EtherNamedUnit,
});

export type L2EtherNamedUnitAmount = Infer<typeof L2EtherNamedUnitAmount>;
