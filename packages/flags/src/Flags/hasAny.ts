import type { Flag } from "./types"
import { dfdl } from "@monstermann/dfdl"

/**
 * # hasAny
 *
 * ```ts
 * function Flags.hasAny(target: number, flags: Iterable<Flag>): number
 * ```
 *
 * Checks if any of the specified flags are set in the bitmask.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Flags } from "@monstermann/flags";
 *
 * Flags.hasAny(7, [0, 3]); // true
 * Flags.hasAny(7, [3, 4]); // false
 * ```
 *
 * ```ts [data-last]
 * import { Flags } from "@monstermann/flags";
 *
 * pipe(7, Flags.hasAny([0, 3])); // true
 * pipe(7, Flags.hasAny([3, 4])); // false
 * ```
 *
 */
export const hasAny = dfdl((target: number, flags: Iterable<Flag>): boolean => {
    for (const flag of flags) {
        if ((target & (1 << flag)) !== 0) {
            return true
        }
    }
    return false
}, 2)
