import type { Flag } from "./types"
import { dfdl } from "@monstermann/dfdl"

/**
 * # remove
 *
 * ```ts
 * function Flags.remove(target: number, flag: Flag): number
 * ```
 *
 * Removes a flag from the bitmask.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Flags } from "@monstermann/flags";
 *
 * Flags.remove(7, 0); // 6
 * Flags.remove(7, 1); // 5
 * ```
 *
 * ```ts [data-last]
 * import { Flags } from "@monstermann/flags";
 *
 * pipe(7, Flags.remove(0)); // 6
 * pipe(7, Flags.remove(1)); // 5
 * ```
 *
 */
export const remove = dfdl((target: number, flag: Flag): number => {
    return target & ~(1 << flag)
}, 2)
