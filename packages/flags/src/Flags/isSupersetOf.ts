import { dfdl } from "@monstermann/dfdl"

/**
 * # isSupersetOf
 *
 * ```ts
 * function Flags.isSupersetOf(target: number, source: number): boolean
 * ```
 *
 * Checks if target is a superset of source (target contains all flags from source).
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Flags } from "@monstermann/flags";
 *
 * Flags.isSupersetOf(7, 3); // true
 * Flags.isSupersetOf(3, 7); // false
 * Flags.isSupersetOf(7, 0); // true
 * ```
 *
 * ```ts [data-last]
 * import { Flags } from "@monstermann/flags";
 *
 * pipe(7, Flags.isSupersetOf(3)); // true
 * pipe(3, Flags.isSupersetOf(7)); // false
 * pipe(7, Flags.isSupersetOf(0)); // true
 * ```
 *
 */
export const isSupersetOf = dfdl((target: number, source: number): boolean => {
    return (target & source) === source
}, 2)
