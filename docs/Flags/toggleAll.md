# toggleAll

```ts
function Flags.toggleAll(target: number, flags: Iterable<Flag>): number
```

Toggles multiple flags in the bitmask.

## Example

::: code-group

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

:::
