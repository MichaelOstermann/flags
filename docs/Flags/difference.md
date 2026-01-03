# difference

```ts
function Flags.difference(target: number, source: number): number
```

Returns a bitmask with flags that are in target but not in source (bitwise AND NOT).

## Example

::: code-group

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

:::
