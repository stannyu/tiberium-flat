const arrHelper = require("../../sections/array");

describe('testing countBy array helper method', () => {
  it('should group the elements of an array based on the given function and returns the count of elements in each group', function () {
    const countBy = arrHelper.countBy;
    const arr = [6.1, 4.2, 6.3];
    const predicate = Math.floor;
    
    const resultVal = countBy(arr, predicate);
    const expectedVal = {4: 1, 6: 2};
    
    expect(resultVal).toMatchObject(expectedVal);
  });
});
