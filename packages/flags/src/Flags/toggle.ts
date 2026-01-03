import type { Flag } from "./types"
import { dfdl } from "@monstermann/dfdl"

/**
 * # toggle
 *
 * ```ts
 * function Flags.toggle(target: number, flag: Flag): number
 * ```
 *
 * Toggles a flag in the bitmask (sets it if unset, unsets it if set).
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Flags } from "@monstermann/flags";
 *
 * Flags.toggle(7, 0); // 6
 * Flags.toggle(7, 3); // 15
 * Flags.toggle(0, 2); // 4
 * ```
 *
 * ```ts [data-last]
 * import { Flags } from "@monstermann/flags";
 *
 * pipe(7, Flags.toggle(0)); // 6
 * pipe(7, Flags.toggle(3)); // 15
 * pipe(0, Flags.toggle(2)); // 4
 * ```
 *
 */
export const toggle = dfdl((target: number, flag: Flag): number => {
    return target ^ (1 << flag)
}, 2)
