import { string } from "../deps.ts";
import type { Infer } from "../deps.ts";

export const L1Address = string();

export type L1Address = Infer<typeof L1Address>;
