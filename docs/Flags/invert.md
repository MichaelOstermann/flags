# invert

```ts
function Flags.invert(target: number, flags: Record<PropertyKey, Flag>): number
```

Inverts (toggles) all flags specified in the record.

## Example

::: code-group

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

:::
