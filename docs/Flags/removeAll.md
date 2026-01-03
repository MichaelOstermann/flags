# removeAll

```ts
function Flags.removeAll(target: number, flags: Iterable<Flag>): number
```

Removes multiple flags from the bitmask.

## Example

::: code-group

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

:::
