import type { Flag } from "./types"

/**
 * # fromRecord
 *
 * ```ts
 * function Flags.fromRecord(flags: Record<PropertyKey, Flag>): number
 * ```
 *
 * Converts a record of flag positions to a bitmask with all those flags set.
 *
 * ## Example
 *
 * ```ts
 * import { Flags } from "@monstermann/flags";
 *
 * Flags.fromRecord({ read: 0, write: 1, execute: 2 });
 * // 7
 *
 * Flags.fromRecord({ read: 0, execute: 2 });
 * // 5
 *
 * Flags.fromRecord({});
 * // 0
 * ```
 *
 */
export function fromRecord(flags: Record<PropertyKey, Flag>): number {
    let result = 0
    for (const key in flags) {
        result |= (1 << flags[key]!)
    }
    return result
}
