const arrayTiberiumHelper = require("../../sections/array");

describe("testing differenceBy array helper method", () => {
  it("should return array of single object", () => {
    const a = [{ x: 2 }, { x: 1 }];
    const b = [{ x: 1 }];
    const differenceBy = arrayTiberiumHelper.differenceBy;
    const mappingFn = v => v.x;

    const executedValue = differenceBy(a, b, mappingFn);
    const expectedValue = [{ x: 2 }];

    expect(executedValue).toEqual(expectedValue);
  });
});
