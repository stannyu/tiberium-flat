const arrHelper = require("../../sections/array");

describe('everyNth method testing', function () {
  it('should return every nth element in array', function () {
    const arr = [1,2,3,4,5,6];
    const num = 2;
    const everyNth = arrHelper.everyNth;
    
    const resultValue = everyNth(arr, num);
    const expectedValue = [2,4,6];
    
    expect(resultValue).toEqual(expectedValue);
    expect(resultValue).toHaveLength(3);
    expect(resultValue).toBeTruthy();
  });
});
