module.exports.tiberium = {
  getFlatArray: function (arr) {
    const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
    return deepFlatten;
  },
  returnValue: function (val) {
    return val;
  }
};