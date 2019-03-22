const arrHelper = require("../../sections/array");

describe('filterNonUnique method testing', function () {
  it('should filter out the non-unique values in an array', function () {
    const arr = [1, 2, 2, 3, 4, 4, 5];
    const filterNonUnique = arrHelper.filterNonUnique;
    
    const resultValue = filterNonUnique(arr);
    const expectedValue = [1,3,5];
    
    expect(resultValue).toEqual(expectedValue);
    expect(resultValue).toHaveLength(3);
    expect(resultValue).toBeTruthy();
  });
});
