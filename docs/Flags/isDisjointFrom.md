# isDisjointFrom

```ts
function Flags.isDisjointFrom(target: number, source: number): boolean
```

Checks if target and source have no common flags.

## Example

::: code-group

```ts [data-first]
import { Flags } from "@monstermann/flags";

Flags.isDisjointFrom(5, 10); // true
Flags.isDisjointFrom(7, 3); // false
Flags.isDisjointFrom(0, 7); // true
```

```ts [data-last]
import { Flags } from "@monstermann/flags";

pipe(5, Flags.isDisjointFrom(10)); // true
pipe(7, Flags.isDisjointFrom(3)); // false
pipe(0, Flags.isDisjointFrom(7)); // true
```

:::
