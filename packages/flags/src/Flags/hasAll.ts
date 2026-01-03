import type { Flag } from "./types"
import { dfdl } from "@monstermann/dfdl"

/**
 * # hasAll
 *
 * ```ts
 * function Flags.hasAll(target: number, flags: Iterable<Flag>): boolean
 * ```
 *
 * Checks if all specified flags are set in the bitmask.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Flags } from "@monstermann/flags";
 *
 * Flags.hasAll(7, [0, 1]); // true
 * Flags.hasAll(7, [0, 3]); // false
 * ```
 *
 * ```ts [data-last]
 * import { Flags } from "@monstermann/flags";
 *
 * pipe(7, Flags.hasAll([0, 1])); // true
 * pipe(7, Flags.hasAll([0, 3])); // false
 * ```
 *
 */
export const hasAll = dfdl((target: number, flags: Iterable<Flag>): boolean => {
    for (const flag of flags) {
        if ((target & (1 << flag)) === 0) {
            return false
        }
    }
    return true
}, 2)
