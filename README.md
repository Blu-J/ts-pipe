# ts-pipe

![Node.js CI](https://github.com/Blu-J/ts-pipe/workflows/Node.js%20CI/badge.svg)
![Bundle Phobia](https://badgen.net/bundlephobia/min/ts-pipe)
![Bundle Phobia](https://badgen.net/bundlephobia/minzip/ts-pipe)
Being able to pipe data through functions or compose a piped function.

## Examples

```ts
import { pipeable, lazyPipeable } from "ts-pipe";

pipeable("20")
  .pipe((x) => Number(x))
  .pipe((x) => x + 5).value; // 25

const lazyPiped = lazyPipeable((x) => Number(x)).pipe((x) => x + 5);
lazyPiped.call("14"); // 19
```
