export type Pipeable<A> = {
  pipe<B>(fn: (value: A) => B): Pipeable<B>;
  value: A;
};

export const pipeable = <A>(value: A): Pipeable<A> => ({
  pipe: <B>(fn: (value: A) => B) => pipeable(fn(value)),
  value
});

export type LazyPipeable<A, B> = {
  pipe<C>(pipeInto: (b: B) => C): LazyPipeable<A, C>;
  call(a: A): B;
};

export const lazyPipeable = <A extends any, B extends any>(
  fn: (a: A) => B
): LazyPipeable<A, B> => ({
  pipe: <C extends any>(composedWith: (b: B) => C) =>
    lazyPipeable(function composed(a: A) {
      return composedWith(fn(a));
    }),
  call: (a: A) => fn(a)
});
