# has

```ts
function Flags.has(target: number, flag: Flag): boolean
```

Checks if a flag is set in the bitmask.

## Example

::: code-group

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

:::
