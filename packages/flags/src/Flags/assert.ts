import type { Flag } from "./types"

/**
 * # assert
 *
 * ```ts
 * function Flags.assert(flag: unknown): asserts flag is Flag
 * ```
 *
 * Asserts that a value is a valid Flag (integer between 0 and 30), throwing an error if not.
 *
 * ## Example
 *
 * ```ts
 * import { Flags } from "@monstermann/flags";
 *
 * Flags.assert(0); // ok
 * Flags.assert(15); // ok
 * Flags.assert(30); // ok
 * Flags.assert(31); // throws Error: flag must be >= 0 and <= 30
 * Flags.assert(-1); // throws Error: flag must be >= 0 and <= 30
 * Flags.assert(1.5); // throws Error: flag must be an integer
 * Flags.assert("0"); // throws Error: flag must be an integer
 * ```
 *
 */
export function assert(flag: unknown): asserts flag is Flag {
    if (typeof flag !== "number" || !Number.isInteger(flag)) throw new Error(`Flags.assert(flag: ${flag}): flag must be an integer`)
    if (flag < 0 || flag > 30) throw new Error(`Flags.assert(flag: ${flag}): flag must be >= 0 and <= 30`)
}
