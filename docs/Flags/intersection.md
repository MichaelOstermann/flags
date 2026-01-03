# intersection

```ts
function Flags.intersection(target: number, source: number): number
```

Returns a bitmask with only flags that are set in both target and source (bitwise AND).

## Example

::: code-group

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

:::
