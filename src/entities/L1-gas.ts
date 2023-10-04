import { object, bigint } from "../deps.ts";
import type { Infer } from "../deps.ts";

export const L1GasOptions = object({
  limit: bigint(),
  maxFee: bigint(),
});

export type L1GasOptions = Infer<typeof L1GasOptions>;
