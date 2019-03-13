module.exports.tiberium = {
  getFlatArray: function(arr) {
    const deepFlatten = arr =>
      [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
    return deepFlatten;
  },
  returnValue: function(val) {
    return val;
  },
  bifurcate: function(arr, filter) {
     return arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [
        [],
        []
      ]);
  }
};
