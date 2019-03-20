const arrHelper = require("../../sections/array");

describe('testin compact array helper method', () => {
  it('should remove falsy values from array', function () {
    const compact = arrHelper.compact;
    const arr = [0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34];
    const resultValue = compact(arr);
    const expectedVal = [ 1, 2, 3, 'a', 's', 34 ];
    
    expect(resultValue).toEqual(expectedVal);
  });
});
