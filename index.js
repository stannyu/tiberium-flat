module.exports.deepFlatten = function getFlatArray(arr) {
  const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
  return deepFlatten;
};