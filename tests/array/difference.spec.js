const arrayTiberiumHelper = require("../../sections/array");

describe('testing difference method', () => {
  
  it('should return difference between two arrays', function () {
    const a = [1,2,3];
    const b = [1,2,4];
    const difference = arrayTiberiumHelper.difference;
    const executedValue = difference(a, b);
    const expectedValue = [3];
    
    expect(executedValue).toEqual(expectedValue);
  });
  
});
