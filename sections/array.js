const tfArray = {
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
  groupBy: function(arr, fn) {
    return arr
      .map(typeof fn === "function" ? fn : val => val[fn])
      .reduce((acc, val, i) => {
        acc[val] = (acc[val] || []).concat(arr[i]);
        return acc;
      }, {});
  },
  /**
   *
   * @param arr {Array<any>}
   * @return {any}
   *
   * Returns the head of a list.
   * Use arr[0] to return the first element of the passed array.
   */
  head: arr => arr[0],
  /**
   *
   * @param arr {Array<any>}
   * @param val {any}
   * @return {Array<Number>}
   *
   * Returns all indices of val in an array. If val never occurs, returns [].
   * Use Array.forEach() to loop over elements and Array.push() to store indices for matching elements.
   * Return the array of indices.
   */
  indexOfAll: (arr, val) => {
    const indices = [];
    arr.forEach((el, i) => el === val && indices.push(i));
    return indices;
  },
  /**
   *
   * @param arr {Array<any>}
   * @return {Array<any>}
   *
   * Returns all the elements of an array except the last one.
   * Use arr.slice(0,-1) to return all but the last element of the array.
   */
  initial: arr => arr.slice(0, -1),
  /**
   *
   * @param w {Number}
   * @param h {Number}
   * @param val {any}
   * @return {any[][]}
   *
   * Initializes a 2D array of given width and height and value.
   * Use Array.map() to generate h rows where each is a new array of size w initialize with value.
   * If the value is not provided, default to null.
   */
  initialize2DArray: (w, h, val = null) =>
    Array.from({ length: h }).map(() => Array.from({ length: w }).fill(val)),
  /**
   *
   * @param end {Number}
   * @param start {Number}
   * @param step {Number}
   * @return {number[]}
   *
   * Initializes an array containing the numbers in the specified range where start and end are
   * inclusive with their common difference step.
   *
   * Use Array.from(Math.ceil((end+1-start)/step)) to create an array of the desired
   * length(the amounts of elements is equal to (end-start)/step or (end+1-start)/step for inclusive end).
   *
   * Array.map() to fill with the desired values in a range. You can omit start to use a default value of 0.
   * You can omit step to use a default value of 1.
   */
  initializeArrayWithRange: (end, start = 0, step = 1) =>
    Array.from({ length: Math.ceil((end + 1 - start) / step) }).map(
      (v, i) => i * step + start
    ),
  /**
   *
   * @param end {Number}
   * @param start {Number}
   * @param step {Number}
   * @return {number[]}
   *
   * Initializes an array containing the numbers in the specified range (in reverse)
   * where start and end are inclusive with their common difference step.
   *
   * Use Array.from(Math.ceil((end+1-start)/step)) to create an array of the desired
   * length(the amounts of elements is equal to (end-start)/step or (end+1-start)/step for inclusive end).
   *
   * Array.map() to fill with the desired values in a range. You can omit start to use a default value of 0.
   * You can omit step to use a default value of 1.
   */
  initializeArrayWithRangeRight: (end, start = 0, step = 1) =>
    Array.from({ length: Math.ceil((end + 1 - start) / step) }).map(
      (v, i, arr) => (arr.length - i - 1) * step + start
    ),
  /**
   *
   * @param n {Number}
   * @param val {any}
   * @return {any[]}
   *
   * Initializes and fills an array with the specified values.
   * Use Array(n) to create an array of the desired length,
   * fill(v) to fill it with the desired values.
   * You can omit val to use a default value of 0.
   */
  initializeArrayWithValues: (n, val = 0) => Array(n).fill(val),
  /**
   *
   * @param a {Array<any>}
   * @param b {Array<any>}
   * @return {Array<any>}
   *
   * Returns a list of elements that exist in both arrays.
   * Create a Set from b, then use Array.filter() on a to only keep values contained in b.
   */
  intersection: (a, b) => {
    const s = new Set(b);
    return a.filter(x => s.has(x));
  },
  /**
   *
   * @param a
   * @param b
   * @param fn
   * @return {*}
   *
   * Returns a list of elements that exist in both arrays, after applying the
   * provided function to each array element of both.
   *
   * Create a Set by applying fn to all elements in b, then use Array.filter() on a to only keep elements,
   * which produce values contained in b when fn is applied to them.
   */
  intersectionBy: (a, b, fn) => {
    const s = new Set(b.map(x => fn(x)));
    return a.filter(x => s.has(fn(x)));
  },
  /**
   *
   * @param a {Array<any>}
   * @param b {Array<any>}
   * @param comp {Function}
   * @return {Array<any>}
   *
   * Returns a list of elements that exist in both arrays, using a provided comparator function.
   * Use Array.filter() and Array.findIndex() in combination with the provided comparator to determine
   * intersecting values.
   */
  intersectionWith: (a, b, comp) =>
    a.filter(x => b.findIndex(y => comp(x, y)) !== -1),
  /**
   *
   * @param arr {Array<any>}
   * @return {number}
   *
   * Returns 1 if the array is sorted in ascending order,
   * -1 if it is sorted in descending order or 0 if it is not sorted.
   *
   * Calculate the ordering direction for the first two elements.
   * Use Object.entries() to loop over array objects and compare them in pairs.
   * Return 0 if the direction changes or the direction if the last element is reached.
   */
  isSorted: arr => {
    const direction = arr[0] > arr[1] ? -1 : 1;
    for (let [i, val] of arr.entries())
      if (i === arr.length - 1) return direction;
      else if ((val - arr[i + 1]) * direction > 0) return 0;
  },
  /**
   *
   * @param arr {Array<any>}
   * @param separator {any}
   * @param end {any}
   * @return {String}
   *
   * Joins all elements of an array into a string and returns this string. Uses a separator and an end separator.
   * Use Array.reduce() to combine elements into a string.
   * Omit the second argument, separator, to use a default separator of ','.
   * Omit the third argument, end, to use the same value as separator by default.
   */
  join: (arr, separator = ",", end = separator) =>
    arr.reduce(
      (acc, val, i) =>
        i === arr.length - 2
          ? acc + val + end
          : i === arr.length - 1
          ? acc + val
          : acc + val + separator,
      ""
    ),
  /**
   *
   * @param arr {Array<any>}
   * @return {any}
   *
   * Returns the last element in an array.
   * Use arr.length - 1 to compute the index of the last element of the given array and returning it.
   */
  last: arr => arr[arr.length - 1],
  /**
   *
   * @param vals {Array<T>}
   * @return {T}
   *
   * Takes any number of iterable objects or objects with a length property and returns the longest one.
   * Use Array.sort() to sort all arguments by length, return the first (longest) one.
   */
  longestItem: (...vals) => [...vals].sort((a, b) => b.length - a.length)[0],
  /**
   *
   * @param arr {Array<any>}
   * @param fn {Function}
   * @return {Object}
   *
   * Returns the n maximum elements from the provided array.
   * If n is greater than or equal to the provided array's length, then return the original
   * array(sorted in descending order).
   * Use Array.sort() combined with the spread operator (...) to create a shallow clone of the array
   * and sort it in descending order.
   * Use Array.slice() to get the specified number of elements.
   * Omit the second argument, n, to get a one-element array.
   */
  mapObject: (arr, fn) =>
    (a => (
      (a = [arr, arr.map(fn)]),
      a[0].reduce((acc, val, ind) => ((acc[val] = a[1][ind]), acc), {})
    ))(),
  /**
   *
   * @param arr {Array<number>}
   * @param n {number}
   * @return {any[]}
   *
   * Returns the n maximum elements from the provided array.
   * If n is greater than or equal to the provided array's length, then return the original
   * array(sorted in descending order).
   * Use Array.sort() combined with the spread operator (...) to create a shallow clone of the array
   * and sort it in descending order.
   * Use Array.slice() to get the specified number of elements.
   * Omit the second argument, n, to get a one-element array.
   */
  maxN: (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n),
  /**
   *
   * @param arr {Array<any>}
   * @param n {Number}
   * @return {any[]}
   *
   * Returns the n minimum elements from the provided array. If n is greater than or equal
   * to the provided array's length, then return the original array(sorted in ascending order).
   *
   * Use Array.sort() combined with the spread operator (...) to create a shallow clone of the array and sort
   * it in ascending order.
   * Use Array.slice() to get the specified number of elements.
   * Omit the second argument, n, to get a one-element array.
   */
  minN: (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n),
  /**
   *
   * @param arr {any[]}
   * @param n {number}
   * @return {any}
   *
   * Returns the nth element of an array.
   * Use Array.slice() to get an array containing the nth element at the first place.
   * If the index is out of bounds, return [].
   * Omit the second argument, n, to get the first element of the array.
   */
  nthElement: (arr, n = 0) => (n > 0 ? arr.slice(n, n + 1) : arr.slice(n))[0],
  /**
   *
   * @param arr {Array<any>}
   * @param fn {Function}
   * @return {Array<Array>}
   *
   * Groups the elements into two arrays, depending on the provided function's truthiness for each element.
   * Use Array.reduce() to create an array of two arrays.
   * Use Array.push() to add elements for which fn returns true to the first array and elements
   * for which fn returns false to the second one.
   */
  partition: (arr, fn) =>
    arr.reduce(
      (acc, val, i, arr) => {
        acc(fn(val, i, arr) ? 0 : 1).push(val);
        return acc;
      },
      [[], []]
    ),
  /**
   *
   * @param arr
   * @param args
   *
   * Mutates the original array to filter out the values specified.
   * Use Array.filter() and Array.includes() to pull out the values that are not needed.
   * Use Array.length = 0 to mutate the passed in an array by resetting it's length to zero
   * and Array.push() to re-populate it with only the pulled values.
   */
  pull: (arr, ...args) => {
    let argState = Array.isArray(args[0]) ? args[0] : args;
    let pulled = arr.filter((v, i) => !argState.includes(v));
    arr.length = 0;
    pulled.forEach(v => arr.push(v));
  },
  /**
   *
   * @param arr
   * @param pullArr
   * @return {Array}
   *
   * Mutates the original array to filter out the values at the specified indexes.
   * Use Array.filter() and Array.includes() to pull out the values that are not needed.
   * Use Array.length = 0 to mutate the passed in an array by resetting it's length to zero
   * and Array.push() to re-populate it with only the pulled values. Use Array.push() to keep track of pulled values
   */
  pullAtIndex: (arr, pullArr) => {
    let removed = [];
    let pulled = arr
      .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))
      .filter((v, i) => !pullArr.includes(i));
    arr.length = 0;
    pulled.forEach(v => arr.push(v));
    return removed;
  },
  /**
   *
   * @param arr
   * @param pullArr
   * @return {Array}
   *
   * Mutates the original array to filter out the values at the specified indexes.
   * Use Array.filter() and Array.includes() to pull out the values that are not needed.
   * Use Array.length = 0 to mutate the passed in an array by resetting it's length to zero
   * and Array.push() to re-populate it with only the pulled values. Use Array.push() to keep track of pulled values.
   */
  pullAtValue: (arr, pullArr) => {
    let removed = [],
      pushToRemove = arr.forEach((v, i) =>
        pullArr.includes(v) ? removed.push(v) : v
      ),
      mutateTo = arr.filter((v, i) => !pullArr.includes(v));
    arr.length = 0;
    mutateTo.forEach(v => arr.push(v));
    return removed;
  },
  /**
   *
   * @param arr
   * @param args
   *
   * Mutates the original array to filter out the values specified, based on a given iterator function.
   * Check if the last argument provided in a function.
   * Use Array.map() to apply the iterator function fn to all array elements.
   * Use Array.filter() and Array.includes() to pull out the values that are not needed.
   * Use Array.length = 0 to mutate the passed in an array by resetting it's length to zero
   * and Array.push() to re-populate it with only the pulled values.
   */
  pullBy: (arr, ...args) => {
    const length = args.length;
    let fn = length > 1 ? args[length - 1] : undefined;
    fn = typeof fn == "function" ? (args.pop(), fn) : undefined;
    let argState = (Array.isArray(args[0]) ? args[0] : args).map(val =>
      fn(val)
    );
    let pulled = arr.filter((v, i) => !argState.includes(fn(v)));
    arr.length = 0;
    pulled.forEach(v => arr.push(v));
  },
  /**
   *
   * @param data
   * @param keys
   * @param fn
   * @return {*}
   *
   * Filter an array of objects based on a condition while also filtering out unspecified keys.
   * Use Array.filter() to filter the array based on the predicate fn so that it returns the objects
   * for which the condition returned a truthy value.
   * On the filtered array, use Array.map() to return the new object
   * using Array.reduce() to filter out the keys which were not supplied as the keys argument.
   */
  reducedFilter: (data, keys, fn) =>
    data.filter(fn).map(el =>
      keys.reduce((acc, key) => {
        acc[key] = el[key];
        return acc;
      }, {})
    ),
  /**
   *
   * @param arr
   * @param fn
   * @param acc
   * @return {*}
   *
   * Applies a function against an accumulator and each element in the array (from left to right),
   * returning an array of successively reduced values.
   * Use Array.reduce() to apply the given function to the given array, storing each new result.
   */
  reduceSuccessive: (arr, fn, acc) =>
    arr.reduce(
      (res, val, i, arr) => (res.push(fn(res.slice(-1)[0], val, i, arr)), res),
      [acc]
    ),
  /**
   *
   * @param arr
   * @param comparator
   * @return {*}
   *
   * Returns the minimum/maximum value of an array, after applying the provided function to set comparing rule.
   * Use Array.reduce() in combination with the comparator function
   * to get the appropriate element in the array.
   * You can omit the second parameter, comparator, to use the default one that returns
   * the minimum element in the array.
   */
  reduceWhich: (arr, comparator = (a, b) => a - b) =>
    arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a)),
  /**
   *
   * @param arr
   * @param func
   * @return {Array}
   *
   * Removes elements from an array for which the given function returns false.
   * Use Array.filter() to find array elements that return truthy values
   * and Array.reduce() to remove elements using Array.splice().
   * The func is invoked with three arguments (value, index, array).
   */
  remove: (arr, func) =>
    Array.isArray(arr)
      ? arr.filter(func).reduce((acc, val) => {
          arr.splice(arr.indexOf(val), 1);
          return acc.concat(val);
        }, [])
      : [],
  /**
   *
   * @param arr
   * @return {*}
   *
   * Returns a random element from an array.
   * Use Math.random() to generate a random number, multiply it by length and round it of to the nearest whole number
   * using Math.floor(). This method also works with strings.
   */
  sample: arr => arr[Math.floor(Math.random() * arr.length)],
};

module.exports = tfArray;
