const arrayTiberiumHelper = require("../../sections/array");

describe("testing deepFlatten method", () => {
  
  it("should flatten array", () => {
    const arr = [1, 2, [3, [4, [5]]]];
    const deepFlatten = arrayTiberiumHelper.deepFlatten;
    const expecxtedArray = [1, 2, 3, 4, 5];
    const executedValue = deepFlatten(arr);

    expect(executedValue).toEqual(expecxtedArray);
    expect(executedValue).toBeTruthy();
  });
  
  it('should return empty array if empty array passed', () => {
    const param = [];
    const deepFlatten = arrayTiberiumHelper.deepFlatten;
    
    expect(deepFlatten(param)).toEqual([]);
  });
});
