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
  },
  /**
   *
   * @param a {Array<any>}
   * @param b {Array<any>}
   * @param fn {Function}
   * @returns {Array<any>}
   *
   * Returns the difference between two arrays, after applying the provided function to each array element of both.
   * Create a Set by applying fn to each element in b, then use Array.filter() in combination with fn on a
   * to only keep values not contained in the previously created set.
   */
  differenceBy: function(a, b, fn) {
    const s = new Set(b.map(v => fn(v)));
    return a.filter(x => !s.has(fn(x)));
  },
  /**
   *
   * @param arr {Array<any>}
   * @param val {Array<any>}
   * @param comp {Function}
   * @returns {Array<any>}
   *
   * Filters out all values from an array for which the comparator function does not return true.
   * Use Array.filter() and Array.findIndex() to find the appropriate values.
   */
  differenceWith: function(arr, val, comp) {
    return arr.filter(a => val.findIndex(b => comp(a, b)) === -1);
  },
  /**
   *
   * @param arr {Array<any>}
   * @param n {Number || null || undefined}
   * @returns {Array<any>}
   */
  drop: function(arr, n = 1) {
    return arr.slice(n);
  },
  /**
   *
   * @param arr {Array<any>}
   * @param n {Number || null || undefined}
   * @returns {Array<any>}
   *
   * Returns a new array with n elements removed from the right.
   * Use Array.slice() to slice the remove the specified number of elements from the right.
   */
  dropRight: function(arr, n = 1) {
    return arr.slice(0, -n);
  },
  /**
   *
   * @param arr {Array<any>}
   * @param func {Function}
   * @returns {Array<any>}
   *
   * Removes elements from the end of an array until the passed function returns true.
   * Returns the remaining elements in the array.Loop through the array,
   * using Array.slice() to drop the last element of the array until the returned value from the function is true.
   * Returns the remaining elements.
   */
  dropRightWhile: function(arr, func) {
    while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
    return arr;
  },
  /**
   *
   * @param arr {Array<any>}
   * @param func {Function}
   * @returns {Array<any>}
   *
   * Removes elements in an array until the passed function returns true. Returns the remaining elements in the array.
   * Loop through the array, using Array.slice() to drop the first element of the array until the
   * returned value from the function is true. Returns the remaining elements.
   */
  dropWhile: function(arr, func) {
    while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
    return arr;
  },
  /**
   *
   * @param arr {Array<any>}
   * @param nth {Number}
   * @returns {Array<any>}
   *
   * Returns every nth element in an array.
   * Use Array.filter() to create a new array that contains every nth element of a given array.
   */
  everyNth: function(arr, nth) {
    return arr.filter((e, i) => i % nth === nth - 1);
  },
  /**
   *
   * @param arr {Array<any>}
   * @returns {Array<any>}
   *
   * Filters out the non-unique values in an array.
   * Use Array.filter() for an array containing only the unique values.
   */
  filterNonUnique: function(arr) {
    return arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));
  },
  /**
   *
   * @param arr {Array}
   * @param fn {Function}
   * @returns {Number}
   *
   * Returns the last element for which the provided function returns a truthy value.
   * Use Array.filter() to remove elements for which fn returns falsey values, Array.slice(-1) to get the last one.
   */
  findLast: function(arr, fn) {
    return arr.filter(fn).slice(-1)[0];
  },
  /**
   *
   * @param arr {Array}
   * @param fn {Function}
   * @returns {Number}
   *
   * Returns the index of the last element for which the provided function returns a truthy value.
   * Use Array.map() to map each element to an array with its index and value.
   * Use Array.filter() to remove elements for which fn returns falsey values, Array.slice(-1) to get the last one.
   */
  findLastIndex: function(arr, fn) {
    return arr
      .map((val, i) => [i, val])
      .filter(val => fn(val[1], val[0], arr))
      .slice(-1)[0][0];
  },
  /**
   *
   * @param arr {Array<any>}
   * @param depth {Number}
   * @returns {Array<any>}
   *
   * Flattens an array up to the specified depth.
   * Use recursion, decrementing depth by 1 for each level of depth.
   * Use Array.reduce() and Array.concat() to merge elements or arrays.
   * Base case, for depth equal to 1 stops recursion.
   * Omit the second argument, depth to flatten only to a depth of 1 (single flatten).
   */
  flatten: function(arr, depth = 1) {
    const f = (arr, depth) =>
      depth !== 1
        ? arr.reduce(
            (a, v) => a.concat(Array.isArray(v) ? f(v, depth - 1) : v),
            []
          )
        : arr.reduce((a, v) => a.concat(v), []);

    return f(arr, depth);
  },
  /**
   *
   * @param arr {Array<any>}
   * @param cb {Function}
   *
   * Executes a provided function once for each array element, starting from the array's last element.
   * Use Array.slice(0) to clone the given array, Array.reverse() to reverse it and Array.forEach()
   * to iterate over the reversed array.
   */
  forEachRight: function(arr, cb) {
    arr
      .slice(0)
      .reverse()
      .forEach(cb);
  },
  /**
   *
   * @param arr {Array<any>}
   * @param fn {Function}
   * @return {Object}
   *
   * Groups the elements of an array based on the given function.
   * Use Array.map() to map the values of an array to a function or property name.
   * Use Array.reduce() to create an object, where the keys are produced from the mapped results.
   */
  groupBy: function (arr, fn) {
    return arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
      acc[val] = (acc[val] || []).concat(arr[i]);
      return acc;
    }, {})
  }
};

module.exports = arrayTiberiumHelper;
