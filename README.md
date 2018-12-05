# ts-pipe

[![Build Status](https://travis-ci.org/Blu-J/ts-pipe.svg?branch=master)](https://travis-ci.org/Blu-J/ts-pipe)
![Bundle Phobia](https://badgen.net/bundlephobia/min/ts-pipe)
![Bundle Phobia](https://badgen.net/bundlephobia/minzip/ts-pipe)
Being able to pipe data through functions or compose a piped function.

## Examples

```ts
import { pipeable, lazyPipeable } from "ts-pipe";

pipeable("20")
  .pipe(x => Number(x))
  .pipe(x => x + 5).value; // 25

const lazyPiped = lazyPipeable(x => Number(x)).pipe(x => x + 5);
lazyPiped.call("14"); // 19
```
