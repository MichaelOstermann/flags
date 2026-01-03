import type { Flag } from "./types"
import { dfdl } from "@monstermann/dfdl"

/**
 * # addAll
 *
 * ```ts
 * function Flags.addAll(target: number, flags: Iterable<Flag>): number
 * ```
 *
 * Adds multiple flags to the bitmask.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Flags } from "@monstermann/flags";
 *
 * Flags.addAll(0, [0, 1, 2]); // 7
 * Flags.addAll(1, [2, 3]); // 13
 * ```
 *
 * ```ts [data-last]
 * import { Flags } from "@monstermann/flags";
 *
 * pipe(0, Flags.addAll([0, 1, 2])); // 7
 * pipe(1, Flags.addAll([2, 3])); // 13
 * ```
 *
 */
export const addAll = dfdl((target: number, flags: Iterable<Flag>): number => {
    let result = target
    for (const flag of flags) {
        result |= (1 << flag)
    }
    return result
}, 2)
