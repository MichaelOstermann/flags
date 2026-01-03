# hasNone

```ts
function Flags.hasNone(target: number, flags: Iterable<Flag>): boolean
```

Checks if none of the specified flags are set in the bitmask.

## Example

::: code-group

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

:::
