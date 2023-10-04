import { string } from "../deps.ts";
import type { Infer } from "../deps.ts";

export const L1PrivateKey = string();

export type L1PrivateKey = Infer<typeof L1PrivateKey>;
