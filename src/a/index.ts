import * as x from "x-value";

export const Timestamp = x.number.refine<x.Nominal<"timestamp">>(() => true);

export type Timestamp = x.TypeOf<typeof Timestamp>;

export declare function now(): Timestamp;
