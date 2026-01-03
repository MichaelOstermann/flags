import type { Flag } from "./types"

/**
 * # isValid
 *
 * ```ts
 * function Flags.isValid(flag: unknown): flag is Flag
 * ```
 *
 * Type guard that checks if a value is a valid Flag (integer between 0 and 30).
 *
 * ## Example
 *
 * ```ts
 * import { Flags } from "@monstermann/flags";
 *
 * Flags.isValid(0); // true
 * Flags.isValid(15); // true
 * Flags.isValid(30); // true
 * Flags.isValid(31); // false (out of range)
 * Flags.isValid(-1); // false (negative)
 * Flags.isValid(1.5); // false (not an integer)
 * Flags.isValid("0"); // false (not a number)
 * ```
 *
 */
export function isValid(flag: unknown): flag is Flag {
    return typeof flag === "number"
        && Number.isInteger(flag)
        && flag >= 0
        && flag <= 30
}
