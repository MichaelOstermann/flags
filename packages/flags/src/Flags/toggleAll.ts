import type { Flag } from "./types"
import { dfdl } from "@monstermann/dfdl"

/**
 * # toggleAll
 *
 * ```ts
 * function Flags.toggleAll(target: number, flags: Iterable<Flag>): number
 * ```
 *
 * Toggles multiple flags in the bitmask.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Flags } from "@monstermann/flags";
 *
 * Flags.toggleAll(7, [0, 3]); // 14
 * Flags.toggleAll(5, [1, 2]); // 1
 * ```
 *
 * ```ts [data-last]
 * import { Flags } from "@monstermann/flags";
 *
 * pipe(7, Flags.toggleAll([0, 3])); // 14
 * pipe(5, Flags.toggleAll([1, 2])); // 1
 * ```
 *
 */
export const toggleAll = dfdl((target: number, flags: Iterable<Flag>): number => {
    let result = target
    for (const flag of flags) {
        result ^= (1 << flag)
    }
    return result
}, 2)
