const arrHelper = require("../../sections/array");

describe('testing all drop methods of an array helper', () => {
  it('drop should return new array with 2 elements removed from the left', () => {
    const arr = [1,2,3,4];
    const n = 2;
    const drop = arrHelper.drop;
    
    const resultValue = drop(arr, n);
    const expectedVal = [3,4];
    
    expect(resultValue).toEqual(expectedVal);
  });
  
  it('drop should return new array with 1 element removed from the left if n is not defined', () => {
    const arr = [1,2,3,4];
    const drop = arrHelper.drop;
  
    const resultValue = drop(arr);
    const expectedVal = [2,3,4];
  
    expect(resultValue).toEqual(expectedVal);
    expect(resultValue).toHaveLength(3);
  });
});
