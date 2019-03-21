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
  
  it('dropRight should return new array with 2 elements removed from the right', () => {
    const arr = [1,2,3,4];
    const n = 2;
    const dropRight = arrHelper.dropRight;
    
    const resultValue = dropRight(arr, n);
    const expectedVal = [1,2];
    
    expect(resultValue).toEqual(expectedVal);
  });
  
  it('dropRight should return new array with 1 element removed from the right if n is not defined', () => {
    const arr = [1,2,3,4];
    const dropRight = arrHelper.dropRight;
    
    const resultValue = dropRight(arr);
    const expectedVal = [1,2,3];
    
    expect(resultValue).toEqual(expectedVal);
    expect(resultValue).toHaveLength(3);
  });
  
  it('dropRight should return empty array if n is bigger than array length', () => {
    const arr = [1,2,3,4];
    const n = 42;
    const dropRight = arrHelper.dropRight;
    
    const resultValue = dropRight(arr, n);
    const expectedVal = [];
    
    expect(resultValue).toEqual(expectedVal);
    expect(resultValue).toHaveLength(0);
    expect(resultValue).toBeTruthy();
  });
  
  it('dropRightWhile should return new array of 2 elements according to predicate function remove from right', () => {
    const arr = [1,2,3,4];
    const predicate = n => n < 3;
    const dropRightWhile = arrHelper.dropRightWhile;
    
    const resultValue = dropRightWhile(arr, predicate);
    const expectedVal = [1,2];
    
    expect(resultValue).toEqual(expectedVal);
    expect(resultValue).toHaveLength(2);
    expect(resultValue).toBeTruthy();
  });
  
  it('dropWhile should return new array of 2 elements according to predicate function remove from left', () => {
    const arr = [1,2,3,4];
    const predicate = n => n >= 3;
    const dropWhile = arrHelper.dropWhile;
    
    const resultValue = dropWhile(arr, predicate);
    const expectedVal = [3,4];
    
    expect(resultValue).toEqual(expectedVal);
    expect(resultValue).toHaveLength(2);
    expect(resultValue).toBeTruthy();
  });
});
