# hasAny

```ts
function Flags.hasAny(target: number, flags: Iterable<Flag>): number
```

Checks if any of the specified flags are set in the bitmask.

## Example

::: code-group

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

:::
