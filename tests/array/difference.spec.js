const arrayTiberiumHelper = require("../../sections/array");

describe('testing difference method', () => {
  
  it('difference method should return difference between two arrays', () => {
    const a = [1,2,3];
    const b = [1,2,4];
    const difference = arrayTiberiumHelper.difference;
    const executedValue = difference(a, b);
    const expectedValue = [3];
    
    expect(executedValue).toEqual(expectedValue);
  });
  
  it("differenceBy should return array of single object", () => {
    const a = [{ x: 2 }, { x: 1 }];
    const b = [{ x: 1 }];
    const differenceBy = arrayTiberiumHelper.differenceBy;
    const mappingFn = v => v.x;
    
    const executedValue = differenceBy(a, b, mappingFn);
    const expectedValue = [{ x: 2 }];
    
    expect(executedValue).toEqual(expectedValue);
  });
  
  it('differenceWith should filter out all values from an array for which the comparator function does not return true.', () => {
    const arr = [1, 1.2, 1.5, 3, 0];
    const val = [1.9, 3, 0];
    const predicate = (a, b) => Math.round(a) === Math.round(b);
    const differenceWith = arrayTiberiumHelper.differenceWith;
    
    const resultVal = differenceWith(arr, val, predicate);
    const expectedVal = [1, 1.2];
    
    expect(resultVal).toEqual(expectedVal);
  });
  
});
