import type { Flag } from "./types"
import { dfdl } from "@monstermann/dfdl"

/**
 * # add
 *
 * ```ts
 * function Flags.add(target: number, flag: Flag): number
 * ```
 *
 * Adds a flag to the bitmask.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Flags } from "@monstermann/flags";
 *
 * Flags.add(0, 0); // 1
 * Flags.add(0, 1); // 2
 * Flags.add(5, 1); // 7
 * ```
 *
 * ```ts [data-last]
 * import { Flags } from "@monstermann/flags";
 *
 * pipe(0, Flags.add(0)); // 1
 * pipe(0, Flags.add(1)); // 2
 * pipe(5, Flags.add(1)); // 7
 * ```
 *
 */
export const add = dfdl((target: number, flag: Flag): number => {
    return target | (1 << flag)
}, 2)
