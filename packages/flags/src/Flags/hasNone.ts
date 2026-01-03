import type { Flag } from "./types"
import { dfdl } from "@monstermann/dfdl"

/**
 * # hasNone
 *
 * ```ts
 * function Flags.hasNone(target: number, flags: Iterable<Flag>): boolean
 * ```
 *
 * Checks if none of the specified flags are set in the bitmask.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Flags } from "@monstermann/flags";
 *
 * Flags.hasNone(7, [3, 4]); // true
 * Flags.hasNone(7, [0, 3]); // false
 * ```
 *
 * ```ts [data-last]
 * import { Flags } from "@monstermann/flags";
 *
 * pipe(7, Flags.hasNone([3, 4])); // true
 * pipe(7, Flags.hasNone([0, 3])); // false
 * ```
 *
 */
export const hasNone = dfdl((target: number, flags: Iterable<Flag>): boolean => {
    for (const flag of flags) {
        if ((target & (1 << flag)) !== 0) {
            return false
        }
    }
    return true
}, 2)
