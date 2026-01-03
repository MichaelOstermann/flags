import { dfdl } from "@monstermann/dfdl"

/**
 * # union
 *
 * ```ts
 * function Flags.union(target: number, source: number): number
 * ```
 *
 * Returns a bitmask with all flags from either target or source (bitwise OR).
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Flags } from "@monstermann/flags";
 *
 * Flags.union(5, 3); // 7
 * Flags.union(12, 10); // 14
 * ```
 *
 * ```ts [data-last]
 * import { Flags } from "@monstermann/flags";
 *
 * pipe(5, Flags.union(3)); // 7
 * pipe(12, Flags.union(10)); // 14
 * ```
 *
 */
export const union = dfdl((target: number, source: number): number => {
    return target | source
}, 2)
