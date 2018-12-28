// LODASH LIBRARY object to contain our Lodash Methods

const _= {
/* Clamps number within the inclusive lower and upper bounds. */
  clamp(number, lower, upper) {
    if (number < lower) {return lower}
    else if (number > upper) {return upper}
    else {return number}
  },
  
	//* Checks if n is between start and up to, but not including, end. If end is not specified, it's set to start with start then set to 0. If start is greater than end the params are swapped to support negative ranges. */
	inRange(number, start, end) {
    // If end is undefined, set end = start and start = 0
    if (end == null) {end = start; start = 0};
  	// If start larger than end, swap values
    if (start > end) {let swap = start; start = end; end = swap};
    // if number between start & end, then true, else false
    if (number >= start && number <= end) {return true}
    else {return false}
  },
  
  // Splits string into an array of its words.
  words(string) {
    return string.split(" ")
  },
  
  /* Pads string on the left and right sides if it's shorter than length. Padding characters are truncated if they can't be evenly divided by length. */
  pad(string, length) {
    let padding = length - string.length;
    let add = 0;
    if (padding <= 0) {
      return string ;
    } else if (padding % 2) {
      padding -= 1;
      add += 1;
    }
    return ' '.repeat(padding / 2) + string + ' '.repeat(padding / 2) + ' '.repeat(add)
  },
  
  // Checks if path is a direct property of object.
  has(obj, key) {
    let val = obj[`${key}`];
    return (typeof(val) === 'undefined') ? false : true; 
  },
  
  /* Creates an object composed of the inverted keys and values of object. If object contains duplicate values, subsequent values overwrite property assignments of previous values. */
  invert(obj) {
    let retObject = {};
    let keys = Object.keys(obj);
    for (let i = keys.length - 1; i >= 0; i--) {
      retObject[`${obj[`${keys[i]}`]}`] = keys[i]
    }
    return retObject
  },
  
  /* This method is like _.find except that it returns the key of the first element predicate returns truthy for instead of the element itself. */
  findKey(obj, func) {
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      let found = func(obj[`${keys[i]}`]);
      if (found) {
        return keys[i]
      }
      return undefined;
    }
  },
  
  // Creates a slice of array with n elements dropped from the beginning.
  drop(array, number) {
    if (typeof(number) === 'undefined') {number = 1}
    return array.slice(number)
  },
  
  /* Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array). */
  dropWhile(array, func) {
    let i = 0;
    while (i < array.length && func(array[i], i, array)) {i += 1}
    return array.slice(i)
  },
  
  /* Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements. */
  chunk(array, size) {
    if (size === 0) {size = 1};
    let retArray = [];
    for (let i = 0; i < array.length; i += size) {
      retArray.push(array.slice(i, i + size))
    }
    return retArray
  }
}; 


// Do not write or modify code below this line.
module.exports = _;