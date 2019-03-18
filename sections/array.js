const arrayTiberiumHelper = {
  /**
   *
   * @param arr {Array || Array<[]>}
   * @returns {*[]}
   *
   * Deep flattens an array.Use recursion.
   * Use Array.concat() with an empty array ([]) and the spread operator (...) to flatten an array.
   * Recursively flatten each element that is an array.
   */
  deepFlatten: function(arr) {
    let dF = arr => [].concat(...arr.map(v => (Array.isArray(v) ? dF(v) : v)));

    return dF(arr);
  },
  /**
   *
   * @param arr {Array}
   * @param filter {Array}
   * @returns {Array<[]>}
   *
   * Splits values into two groups. If an element in filter is truthy,
   * the corresponding element in the collection belongs to the first group; otherwise,
   * it belongs to the second group.Use Array.reduce() and Array.push() to add elements to groups, based on filter.
   */
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
   * @param arr {[]}
   * @param size {Number}
   * @returns {(Array<[]>)}
   *
   * Chunks an array into smaller arrays of a specified size.
   * Use Array.from() to create a new array, that fits the number of chunks that will be produced.
   * Use Array.slice() to map each element of the new array to a chunk the length of size.
   * If the original array can't be split evenly, the final chunk will contain the remaining elements.
   */
  chunk: function(arr, size) {
    const chunkedArraysLength = { length: Math.ceil(arr.length / size) };
    const mapingFn = (v, i) => arr.slice(i * size, i * size + size);

    return Array.from(chunkedArraysLength, mapingFn);
  },
  /**
   *
   * @param arr {Array}
   * @returns {Array}
   *
   *  Removes falsey values from an array.
   *  Use Array.filter() to filter out falsey values (false, null, 0, "", undefined, and NaN).
   */
  compact: function(arr) {
    return arr.filter(Boolean);
  },
  /**
   *
   * @param arr {Array}
   * @param fn {Function}
   * @returns {number | * | number}
   *
   * Groups the elements of an array based on the given function and returns the count of elements in each group.
   * Use Array.map() to map the values of an array to a function or property name.
   * Use Array.reduce() to create an object, where the keys are produced from the mapped results.
   */
  countBy: function(arr, fn) {
    return arr
      .map(typeof fn === "function" ? fn : val => val[fn])
      .reduce((acc, val, i) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
      }, {});
  },
  /**
   *
   * @param arr {Array<any>}
   * @param val {any}
   * @returns {Number}
   *
   * Counts the occurrences of a value in an array.
   * Use Array.reduce() to increment a counter each time you encounter the specific value inside the array.
   */
  countOccurrences: function(arr, val) {
    return arr.reduce((a, v) => (v === val ? a + 1 : a + 0), 0);
  },
  /**
   *
   * @param a {Array<any>}
   * @param b {Array<any>}
   * @returns {Array<any>}
   *
   * Returns the difference between two arrays.
   * Create a Set from b, then use Array.filter() on a to only keep values not contained in b.
   */
  difference: function(a, b) {
    const s = new Set(b);
    return a.filter(x => !s.has(x));
  }
};

module.exports = arrayTiberiumHelper;
