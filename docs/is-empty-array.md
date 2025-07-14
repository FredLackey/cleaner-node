# isEmptyArray

## Purpose
Checks if a value is an array that contains zero elements. It returns `true` only if the input is a valid, empty array.

## Syntax
```javascript
const _ = require('cleaner-node');

_.isEmptyArray(value)
```

## Parameters
- **value** (any): The value to check.

## Returns
- **boolean**: `true` if the value is an array with no elements, otherwise `false`.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Empty array
console.log(_.isEmptyArray([]));
// Output: true

// Non-empty array
console.log(_.isEmptyArray([1, 2, 3]));
// Output: false

// Invalid inputs
console.log(_.isEmptyArray('not an array'));
// Output: false

console.log(_.isEmptyArray({}));
// Output: false

console.log(_.isEmptyArray(null));
// Output: false

console.log(_.isEmptyArray(undefined));
// Output: false
```

## Related Functions
- **[isValidArray](./is-valid-array.md)** - Checks if a value is a valid array.
- **[getArrayCount](./get-array-count.md)** - Gets the number of elements in an array. 