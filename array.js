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
  /**
   *
   * @param arr {Array}
   * @param fn {Function}
   * @returns {*}
   *
   * Splits values into two groups according to a predicate function, which specifies which group an element in the input collection belongs to.
   * If the predicate function returns a truthy value, the collection element belongs to the first group;
   * otherwise, it belongs to the second group.Use Array.reduce() and Array.push() to add elements to groups,
   * based on the value returned by fn for each element.
   */
  bifurcateBy: function(arr, fn) {
    return arr.reduce(
      (acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc),
      [[], []]
    );
  },
  /**
   *
   * @param arr {Array}
   * @param size {Number}
   * @returns {(T[])}
   *
   * Chunks an array into smaller arrays of a specified size.
   * Use Array.from() to create a new array, that fits the number of chunks that will be produced.
   * Use Array.slice() to map each element of the new array to a chunk the length of size.
   * If the original array can't be split evenly, the final chunk will contain the remaining elements.
   */
  chunk: function(arr, size) {
    let chunkedArrays = Array.from(
      { length: Math.ceil(arr.length / size) },
      (v, i) => arr.slice(i * size, i * size + size)
    );

    return chunkedArrays;
  }
};

module.exports = arrayTiberiumHelper;
