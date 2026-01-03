# toRecord

```ts
function Flags.toRecord(target: number, flags: Record<T, Flag>): Record<T, boolean>
```

Converts a bitmask to a record of boolean values based on the provided flag schema.

## Example

::: code-group

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

:::
