<div align="center">

<h1>flags</h1>

![Minified](https://img.shields.io/badge/Minified-2.36_KB-blue?style=flat-square&labelColor=%2315161D&color=%2369a1ff) ![Minzipped](https://img.shields.io/badge/Minzipped-786_B-blue?style=flat-square&labelColor=%2315161D&color=%2369a1ff)

**Functional utilities for bitwise flags.**

[Documentation](https://MichaelOstermann.github.io/flags)

</div>

## Example

```ts
import { pipe } from "@monstermann/dfdl";
import { Flags } from "@monstermann/flags";

// Define a schema for your flags
const permissions = {
    read: 0,
    write: 1,
    execute: 2,
    delete: 3,
} as const;

// Create a bitmask from the schema
let userFlags = Flags.fromRecord(permissions);
// 15 (0b1111 - all flags set)

// Add and remove flags
userFlags = pipe(
    userFlags,
    Flags.remove(permissions.delete),
    Flags.remove(permissions.execute),
);
// 3 (0b0011 - only read and write)

// Check individual flags
Flags.has(userFlags, permissions.read); // true
Flags.has(userFlags, permissions.execute); // false

// Check multiple flags
Flags.hasAll(userFlags, [permissions.read, permissions.write]); // true
Flags.hasAny(userFlags, [permissions.execute, permissions.delete]); // false

// Convert to a record
Flags.toRecord(userFlags, permissions);
// { read: true, write: true, execute: false, delete: false }

// Set operations
const adminFlags = Flags.fromRecord({
    read: 0,
    write: 1,
    execute: 2,
    delete: 3,
});
const guestFlags = Flags.fromRecord({ read: 0 });

Flags.union(guestFlags, Flags.fromRecord({ write: 1 }));
// 3 (0b011 - read and write)

Flags.intersection(userFlags, adminFlags);
// 3 (0b011 - common flags: read and write)

Flags.isSubset(guestFlags, adminFlags); // true
Flags.isSuperset(adminFlags, guestFlags); // true
```

## Installation

```sh [npm]
npm install @monstermann/flags
```

```sh [pnpm]
pnpm add @monstermann/flags
```

```sh [yarn]
yarn add @monstermann/flags
```

```sh [bun]
bun add @monstermann/flags
```

## Tree-shaking

### Installation

```sh [npm]
npm install -D @monstermann/unplugin-flags
```

```sh [pnpm]
pnpm -D add @monstermann/unplugin-flags
```

```sh [yarn]
yarn -D add @monstermann/unplugin-flags
```

```sh [bun]
bun -D add @monstermann/unplugin-flags
```

### Usage

```ts [Vite]
// vite.config.ts
import flags from "@monstermann/unplugin-flags/vite";

export default defineConfig({
    plugins: [flags()],
});
```

```ts [Rollup]
// rollup.config.js
import flags from "@monstermann/unplugin-flags/rollup";

export default {
    plugins: [flags()],
};
```

```ts [Rolldown]
// rolldown.config.js
import flags from "@monstermann/unplugin-flags/rolldown";

export default {
    plugins: [flags()],
};
```

```ts [Webpack]
// webpack.config.js
const flags = require("@monstermann/unplugin-flags/webpack");

module.exports = {
    plugins: [flags()],
};
```

```ts [Rspack]
// rspack.config.js
const flags = require("@monstermann/unplugin-flags/rspack");

module.exports = {
    plugins: [flags()],
};
```

```ts [ESBuild]
// esbuild.config.js
import { build } from "esbuild";
import flags from "@monstermann/unplugin-flags/esbuild";

build({
    plugins: [flags()],
});
```

## Flags

### add

```ts
function Flags.add(target: number, flag: Flag): number
```

Adds a flag to the bitmask.

#### Example

```ts [data-first]
import { Flags } from "@monstermann/flags";

Flags.add(0, 0); // 1
Flags.add(0, 1); // 2
Flags.add(5, 1); // 7
```

```ts [data-last]
import { Flags } from "@monstermann/flags";

pipe(0, Flags.add(0)); // 1
pipe(0, Flags.add(1)); // 2
pipe(5, Flags.add(1)); // 7
```

### addAll

```ts
function Flags.addAll(target: number, flags: Iterable<Flag>): number
```

Adds multiple flags to the bitmask.

#### Example

```ts [data-first]
import { Flags } from "@monstermann/flags";

Flags.addAll(0, [0, 1, 2]); // 7
Flags.addAll(1, [2, 3]); // 13
```

```ts [data-last]
import { Flags } from "@monstermann/flags";

pipe(0, Flags.addAll([0, 1, 2])); // 7
pipe(1, Flags.addAll([2, 3])); // 13
```

### assert

```ts
function Flags.assert(flag: unknown): asserts flag is Flag
```

Asserts that a value is a valid Flag (integer between 0 and 30), throwing an error if not.

#### Example

```ts
import { Flags } from "@monstermann/flags";

Flags.assert(0); // ok
Flags.assert(15); // ok
Flags.assert(30); // ok
Flags.assert(31); // throws Error: flag must be >= 0 and <= 30
Flags.assert(-1); // throws Error: flag must be >= 0 and <= 30
Flags.assert(1.5); // throws Error: flag must be an integer
Flags.assert("0"); // throws Error: flag must be an integer
```

### difference

```ts
function Flags.difference(target: number, source: number): number
```

Returns a bitmask with flags that are in target but not in source (bitwise AND NOT).

#### Example

```ts [data-first]
import { Flags } from "@monstermann/flags";

Flags.difference(7, 3); // 4
Flags.difference(15, 5); // 10
```

```ts [data-last]
import { Flags } from "@monstermann/flags";

pipe(7, Flags.difference(3)); // 4
pipe(15, Flags.difference(5)); // 10
```

### fromRecord

```ts
function Flags.fromRecord(flags: Record<PropertyKey, Flag>): number
```

Converts a record of flag positions to a bitmask with all those flags set.

#### Example

```ts
import { Flags } from "@monstermann/flags";

Flags.fromRecord({ read: 0, write: 1, execute: 2 });
// 7

Flags.fromRecord({ read: 0, execute: 2 });
// 5

Flags.fromRecord({});
// 0
```

### has

```ts
function Flags.has(target: number, flag: Flag): boolean
```

Checks if a flag is set in the bitmask.

#### Example

```ts [data-first]
import { Flags } from "@monstermann/flags";

Flags.has(7, 0); // true
Flags.has(7, 1); // true
Flags.has(7, 3); // false
```

```ts [data-last]
import { Flags } from "@monstermann/flags";

pipe(7, Flags.has(0)); // true
pipe(7, Flags.has(1)); // true
pipe(7, Flags.has(3)); // false
```

### hasAll

```ts
function Flags.hasAll(target: number, flags: Iterable<Flag>): boolean
```

Checks if all specified flags are set in the bitmask.

#### Example

```ts [data-first]
import { Flags } from "@monstermann/flags";

Flags.hasAll(7, [0, 1]); // true
Flags.hasAll(7, [0, 3]); // false
```

```ts [data-last]
import { Flags } from "@monstermann/flags";

pipe(7, Flags.hasAll([0, 1])); // true
pipe(7, Flags.hasAll([0, 3])); // false
```

### hasAny

```ts
function Flags.hasAny(target: number, flags: Iterable<Flag>): number
```

Checks if any of the specified flags are set in the bitmask.

#### Example

```ts [data-first]
import { Flags } from "@monstermann/flags";

Flags.hasAny(7, [0, 3]); // true
Flags.hasAny(7, [3, 4]); // false
```

```ts [data-last]
import { Flags } from "@monstermann/flags";

pipe(7, Flags.hasAny([0, 3])); // true
pipe(7, Flags.hasAny([3, 4])); // false
```

### hasNone

```ts
function Flags.hasNone(target: number, flags: Iterable<Flag>): boolean
```

Checks if none of the specified flags are set in the bitmask.

#### Example

```ts [data-first]
import { Flags } from "@monstermann/flags";

Flags.hasNone(7, [3, 4]); // true
Flags.hasNone(7, [0, 3]); // false
```

```ts [data-last]
import { Flags } from "@monstermann/flags";

pipe(7, Flags.hasNone([3, 4])); // true
pipe(7, Flags.hasNone([0, 3])); // false
```

### intersection

```ts
function Flags.intersection(target: number, source: number): number
```

Returns a bitmask with only flags that are set in both target and source (bitwise AND).

#### Example

```ts [data-first]
import { Flags } from "@monstermann/flags";

Flags.intersection(7, 3); // 3
Flags.intersection(12, 10); // 8
```

```ts [data-last]
import { Flags } from "@monstermann/flags";

pipe(7, Flags.intersection(3)); // 3
pipe(12, Flags.intersection(10)); // 8
```

### invert

```ts
function Flags.invert(target: number, flags: Record<PropertyKey, Flag>): number
```

Inverts (toggles) all flags specified in the record.

#### Example

```ts [data-first]
import { Flags } from "@monstermann/flags";

const schema = { read: 0, write: 1, execute: 2 };

Flags.invert(7, schema); // 0
Flags.invert(5, { read: 0, write: 1 }); // 6
```

```ts [data-last]
import { Flags } from "@monstermann/flags";

const schema = { read: 0, write: 1, execute: 2 };

pipe(7, Flags.invert(schema)); // 0
pipe(5, Flags.invert({ read: 0, write: 1 })); // 6
```

### isDisjointFrom

```ts
function Flags.isDisjointFrom(target: number, source: number): boolean
```

Checks if target and source have no common flags.

#### Example

```ts [data-first]
import { Flags } from "@monstermann/flags";

Flags.isDisjointFrom(5, 10); // true
Flags.isDisjointFrom(7, 3); // false
Flags.isDisjointFrom(0, 7); // true
```

```ts [data-last]
import { Flags } from "@monstermann/flags";

pipe(5, Flags.isDisjointFrom(10)); // true
pipe(7, Flags.isDisjointFrom(3)); // false
pipe(0, Flags.isDisjointFrom(7)); // true
```

### isSubsetOf

```ts
function Flags.isSubsetOf(target: number, source: number): boolean
```

Checks if target is a subset of source (all flags in target are also in source).

#### Example

```ts [data-first]
import { Flags } from "@monstermann/flags";

Flags.isSubsetOf(3, 7); // true
Flags.isSubsetOf(7, 3); // false
Flags.isSubsetOf(0, 7); // true
```

```ts [data-last]
import { Flags } from "@monstermann/flags";

pipe(3, Flags.isSubsetOf(7)); // true
pipe(7, Flags.isSubsetOf(3)); // false
pipe(0, Flags.isSubsetOf(7)); // true
```

### isSupersetOf

```ts
function Flags.isSupersetOf(target: number, source: number): boolean
```

Checks if target is a superset of source (target contains all flags from source).

#### Example

```ts [data-first]
import { Flags } from "@monstermann/flags";

Flags.isSupersetOf(7, 3); // true
Flags.isSupersetOf(3, 7); // false
Flags.isSupersetOf(7, 0); // true
```

```ts [data-last]
import { Flags } from "@monstermann/flags";

pipe(7, Flags.isSupersetOf(3)); // true
pipe(3, Flags.isSupersetOf(7)); // false
pipe(7, Flags.isSupersetOf(0)); // true
```

### isValid

```ts
function Flags.isValid(flag: unknown): flag is Flag
```

Type guard that checks if a value is a valid Flag (integer between 0 and 30).

#### Example

```ts
import { Flags } from "@monstermann/flags";

Flags.isValid(0); // true
Flags.isValid(15); // true
Flags.isValid(30); // true
Flags.isValid(31); // false (out of range)
Flags.isValid(-1); // false (negative)
Flags.isValid(1.5); // false (not an integer)
Flags.isValid("0"); // false (not a number)
```

### remove

```ts
function Flags.remove(target: number, flag: Flag): number
```

Removes a flag from the bitmask.

#### Example

```ts [data-first]
import { Flags } from "@monstermann/flags";

Flags.remove(7, 0); // 6
Flags.remove(7, 1); // 5
```

```ts [data-last]
import { Flags } from "@monstermann/flags";

pipe(7, Flags.remove(0)); // 6
pipe(7, Flags.remove(1)); // 5
```

### removeAll

```ts
function Flags.removeAll(target: number, flags: Iterable<Flag>): number
```

Removes multiple flags from the bitmask.

#### Example

```ts [data-first]
import { Flags } from "@monstermann/flags";

Flags.removeAll(7, [0, 1]); // 4
Flags.removeAll(15, [1, 3]); // 5
```

```ts [data-last]
import { Flags } from "@monstermann/flags";

pipe(7, Flags.removeAll([0, 1])); // 4
pipe(15, Flags.removeAll([1, 3])); // 5
```

### symmetricDifference

```ts
function Flags.symmetricDifference(target: number, source: number): number
```

Returns a bitmask with flags that are in either target or source, but not both (bitwise XOR).

#### Example

```ts [data-first]
import { Flags } from "@monstermann/flags";

Flags.symmetricDifference(7, 3); // 4
Flags.symmetricDifference(12, 10); // 6
```

```ts [data-last]
import { Flags } from "@monstermann/flags";

pipe(7, Flags.symmetricDifference(3)); // 4
pipe(12, Flags.symmetricDifference(10)); // 6
```

### toggle

```ts
function Flags.toggle(target: number, flag: Flag): number
```

Toggles a flag in the bitmask (sets it if unset, unsets it if set).

#### Example

```ts [data-first]
import { Flags } from "@monstermann/flags";

Flags.toggle(7, 0); // 6
Flags.toggle(7, 3); // 15
Flags.toggle(0, 2); // 4
```

```ts [data-last]
import { Flags } from "@monstermann/flags";

pipe(7, Flags.toggle(0)); // 6
pipe(7, Flags.toggle(3)); // 15
pipe(0, Flags.toggle(2)); // 4
```

### toggleAll

```ts
function Flags.toggleAll(target: number, flags: Iterable<Flag>): number
```

Toggles multiple flags in the bitmask.

#### Example

```ts [data-first]
import { Flags } from "@monstermann/flags";

Flags.toggleAll(7, [0, 3]); // 14
Flags.toggleAll(5, [1, 2]); // 1
```

```ts [data-last]
import { Flags } from "@monstermann/flags";

pipe(7, Flags.toggleAll([0, 3])); // 14
pipe(5, Flags.toggleAll([1, 2])); // 1
```

### toRecord

```ts
function Flags.toRecord(target: number, flags: Record<T, Flag>): Record<T, boolean>
```

Converts a bitmask to a record of boolean values based on the provided flag schema.

#### Example

```ts [data-first]
import { Flags } from "@monstermann/flags";

const schema = { read: 0, write: 1, execute: 2 };

Flags.toRecord(7, schema);
// { read: true, write: true, execute: true }

Flags.toRecord(5, schema);
// { read: true, write: false, execute: true }
```

```ts [data-last]
import { Flags } from "@monstermann/flags";

const schema = { read: 0, write: 1, execute: 2 };

pipe(7, Flags.toRecord(schema));
// { read: true, write: true, execute: true }

pipe(5, Flags.toRecord(schema));
// { read: true, write: false, execute: true }
```

### union

```ts
function Flags.union(target: number, source: number): number
```

Returns a bitmask with all flags from either target or source (bitwise OR).

#### Example

```ts [data-first]
import { Flags } from "@monstermann/flags";

Flags.union(5, 3); // 7
Flags.union(12, 10); // 14
```

```ts [data-last]
import { Flags } from "@monstermann/flags";

pipe(5, Flags.union(3)); // 7
pipe(12, Flags.union(10)); // 14
```
