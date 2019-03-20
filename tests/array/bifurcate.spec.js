const arrayTiberiumHelper = require("../../sections/array");

describe("test bifurcate and bifurcateBy array helper methods", () => {
  it("bifurcate should split values into two groups depending on filter value", () => {
    const arr = ["beep", "boop", "foo", "bar"];
    const filter = [true, true, false, true];
    const bifurcate = arrayTiberiumHelper.bifurcate;
    
    const resultVal = bifurcate(arr, filter);
    const expectedVal = [['beep', 'boop', 'bar'], ['foo']];
    
    expect(resultVal).toEqual(expectedVal);
    expect(resultVal).toBeTruthy();
  });
  
  it('bifurcateBy should split values into two groups according to a predicate function',  () => {
    const arr = ["beep", "boop", "foo", "bar"];
    const predicate = x => x[0] === 'b';
    const bifurcateBy = arrayTiberiumHelper.bifurcateBy;
    
    const resultVal = bifurcateBy(arr, predicate);
    const expectedVal = [ ['beep', 'boop', 'bar'], ['foo'] ];
  
    expect(resultVal).toEqual(expectedVal);
    expect(resultVal).toBeTruthy();
  });
});
