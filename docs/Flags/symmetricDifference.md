# symmetricDifference

```ts
function Flags.symmetricDifference(target: number, source: number): number
```

Returns a bitmask with flags that are in either target or source, but not both (bitwise XOR).

## Example

::: code-group

```ts [data-first]
import { Flags } from "@monstermann/flags";

Flags.symmetricDifference(7, 3); // 4
Flags.symmetricDifference(12, 10); // 6
```

```ts [data-last]
import { Flags } from "@monstermann/flags";

pipe(7, Flags.symmetricDifference(3)); // 4
pipe(12, Flags.symmetricDifference(10)); // 6
```

:::
