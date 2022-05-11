import { now } from "../a";

// Adding explicit import fixes this issue.
// import * as x from "x-value";

export const timestamp = now();
