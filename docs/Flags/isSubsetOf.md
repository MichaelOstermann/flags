# isSubsetOf

```ts
function Flags.isSubsetOf(target: number, source: number): boolean
```

Checks if target is a subset of source (all flags in target are also in source).

## Example

::: code-group

```ts [data-first]
import { Flags } from "@monstermann/flags";

Flags.isSubsetOf(3, 7); // true
Flags.isSubsetOf(7, 3); // false
Flags.isSubsetOf(0, 7); // true
```

```ts [data-last]
import { Flags } from "@monstermann/flags";

pipe(3, Flags.isSubsetOf(7)); // true
pipe(7, Flags.isSubsetOf(3)); // false
pipe(0, Flags.isSubsetOf(7)); // true
```

:::
