const arrayTiberiumHelper = {
  getFlatArray: function(arr) {
    const deepFlatten = arr =>
      [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
    return deepFlatten(arr);
  },
  bifurcate: function(arr, filter) {
    return arr.reduce(
      (acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc),
      [[], []]
    );
  },
  bifurcateBy: function(arr, fn) {
    return arr.reduce(
      (acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc),
      [[], []]
    );
  }
};

module.exports = arrayTiberiumHelper;
