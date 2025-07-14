# getArrayCount

## Purpose
Safely gets the number of elements in an array. It returns the length of the array if the input is a valid array (including an empty one) and `-1` otherwise, preventing errors from trying to access the `.length` property of non-array values.

## Syntax
```javascript
const _ = require('cleaner-node');

_.getArrayCount(value)
```

## Parameters
- **value** (any): The input value to check.

## Returns
- **number**: The length of the array if the input is a valid array, otherwise `-1`.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Valid arrays
console.log(_.getArrayCount([1, 2, 3]));      // 3
console.log(_.getArrayCount(['a', 'b']));       // 2
console.log(_.getArrayCount([]));               // 0

// Invalid inputs
console.log(_.getArrayCount({}));              // -1
console.log(_.getArrayCount('hello'));         // -1
console.log(_.getArrayCount(123));             // -1
console.log(_.getArrayCount(null));            // -1
console.log(_.getArrayCount(undefined));       // -1
```

## Related Functions
- **[isValidArray](./is-valid-array.md)** - Checks if a value is a valid array.
- **[isEmptyArray](./is-empty-array.md)** - Checks if an array is empty. 