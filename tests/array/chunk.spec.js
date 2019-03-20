const arrayTiberiumHelper = require("../../sections/array");

describe("test chunk array helper methods", () => {
  it("chunk should chunks an array into smaller arrays of a specified size.", () => {
    const arr = [1, 2, 3, 4, 5];
    const size = 2;
    const chunk = arrayTiberiumHelper.chunk;
    
    const resultValue = chunk(arr, size);
    const expectedVal = [[1,2],[3,4],[5]];
    
    expect(resultValue).toEqual(expectedVal);
    expect(resultValue).toBeTruthy();
  });
});
