import { lazyPipeable, pipeable } from "./index";

describe("With pipeable", () => {
  it("should be able to pipe a value through", () => {
    expect(
      pipeable("14")
        .pipe(x => Number(x))
        .pipe(x => x + 5).value
    ).toEqual(19);
  });
});

describe("With lazy pipeable", () => {
  it("should be able to pipe a value through", () => {
    const lazyPiped = lazyPipeable(x => Number(x)).pipe(x => x + 5);
    expect(lazyPiped.call("14")).toEqual(19);
  });
});
