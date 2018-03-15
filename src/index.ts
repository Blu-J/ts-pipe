export type Pipeable<A> = {
  pipe<B>(fn: (value: A) => B): Pipeable<B>;
  value: A;
};

/**
 * This is an attempt at getting typing of the pipes into a structure
 * that will be inspired by the f# and the pipe operator suggestion
 * for es
 * @param value Value to start our piping structure
 */
export const pipeable = <A>(value: A): Pipeable<A> => ({
  /** We would like to pipe our value into another function */
  pipe: <B>(fn: (value: A) => B) => pipeable(fn(value)),
  /** We are done piping the value through functions and need to get the
   * piped value out.
   */
  value
});

export type LazyPipeable<A, B> = {
  /**
   * We would like to compose on another function
   */
  pipe<C>(pipeInto: (b: B) => C): LazyPipeable<A, C>;
  /** we are done composing our functions together and would like to call them */
  call(a: A): B;
};

/**
 * We want to combine several functions together with a simpler
 * type signature than a compose for n functions while being succient.
 * @param fn The first function in which our composition/ flow will start
 */
export const lazyPipeable = <A extends any, B extends any>(
  fn: (a: A) => B
): LazyPipeable<A, B> => ({
  pipe: <C extends any>(pipeInto: (b: B) => C) =>
    lazyPipeable(function composed(a: A) {
      return pipeInto(fn(a));
    }),
  call: (a: A) => fn(a)
});
