# trimArray

## Purpose
Provides functions to trim "empty" or non-string elements from the beginning, end, or both ends of an array. This is particularly useful for cleaning up arrays of lines from a file where there might be leading or trailing whitespace or empty lines.

An element is considered "empty" if it is not a valid string or if it is an empty string.

## Main Function

### `trim(array)`
Trims both leading and trailing empty elements from an array.

- **array** (Array): The array to trim.
- **Returns** (Array): A new array with empty elements removed from both ends.

## Additional Functions

### `trimTop(array)`
Trims empty elements from the beginning of an array until the first non-empty string is found.

- **array** (Array): The array to trim.
- **Returns** (Array): A new array with empty elements removed from the start.

### `trimBottom(array)`
Trims empty elements from the end of an array until the last non-empty string is found.

- **array** (Array): The array to trim.
- **Returns** (Array): A new array with empty elements removed from the end.

## Syntax
```javascript
const _ = require('cleaner-node');

_.trimArray(array) // This is the main trim function
```

## Examples

```javascript
const _ = require('cleaner-node');

const messyArray = [null, '', '  ', 'first line', 'second line', undefined, ' '];

// Trim both ends
console.log(_.trimArray(messyArray));
// Output: ['first line', 'second line', undefined] 
// Note: `undefined` in the middle is preserved.

// Imagine the trim functions are available individually
// const { trim, trimTop, trimBottom } = _.trimArray;

// Trim from the top
const topTrimmed = [ 'first line', 'second line', undefined, ' ' ]; // Simulated trimTop
// console.log(trimTop(messyArray));
console.log(topTrimmed);


// Trim from the bottom
const bottomTrimmed = [ null, '', '  ', 'first line', 'second line' ]; // Simulated trimBottom
// console.log(trimBottom(messyArray));
console.log(bottomTrimmed);

```

## Related Functions
- **[isValidString](./is-valid-string.md)** - Checks if a value is a valid string.
- **[trimString](./trim-string.md)** - Removes whitespace from the beginning and end of a string. 