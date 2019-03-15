const arrayHelper = require('../../sections/array');

describe("testing count occurrences array helper", () => {
  it('should count occurrences in array of data', function () {
    const testArray = [1, 1, 2, 1, 2, 3];
    const valueToFind = 1;
    const countOccur = arrayHelper.countOccurrences;
    const executedValue = countOccur(testArray, valueToFind);
    const expectedValue = 3;
    
    expect(executedValue).toBe(expectedValue);
    expect(executedValue).toBeTruthy();
  });
  
  it('should return 0 if no occurrences found', function () {
    const testArray = [1, 1, 2, 1, 2, 3];
    const valueToFind = 4;
    const countOccur = arrayHelper.countOccurrences;
    const executedValue = countOccur(testArray, valueToFind);
    const expectedValue = 0;
  
    expect(executedValue).toBe(expectedValue);
    expect(executedValue).toBeFalsy();
  });
});
