# hasAll

```ts
function Flags.hasAll(target: number, flags: Iterable<Flag>): boolean
```

Checks if all specified flags are set in the bitmask.

## Example

::: code-group

```ts [data-first]
import { Flags } from "@monstermann/flags";

Flags.hasAll(7, [0, 1]); // true
Flags.hasAll(7, [0, 3]); // false
```

```ts [data-last]
import { Flags } from "@monstermann/flags";

pipe(7, Flags.hasAll([0, 1])); // true
pipe(7, Flags.hasAll([0, 3])); // false
```

:::
