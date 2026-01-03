---
aside: true
---

# flags

<Badge type="info" class="size">
    <span>Minified</span>
    <span>2.36 KB</span>
</Badge>

<Badge type="info" class="size">
    <span>Minzipped</span>
    <span>786 B</span>
</Badge>

**Functional utilities for bitwise flags.**

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

::: code-group

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

:::

## Tree-shaking

### Installation

::: code-group

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

:::

### Usage

::: code-group

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

:::
