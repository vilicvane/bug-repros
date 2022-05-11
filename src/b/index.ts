import { now } from "../a";

// Adding explicit import fixes this issue.
// import * as x from "../a";

export const timestamp = now();
