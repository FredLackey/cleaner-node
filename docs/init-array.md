# initArray

## Purpose
Ensures that a value is an array, making it easier to work with inputs that might be single items or already arrays. If the input is not an array, it wraps it into a new array. It also conveniently filters out any `undefined` values.

## Syntax
```javascript
const _ = require('cleaner-node');

_.initArray(value)
```

## Parameters
- **value** (any): The input value to be converted into an array.

## Returns
- **Array**: A new array. 
  - If the input is an array, it returns a new array with `undefined` values removed.
  - If the input is a single value (not `undefined`), it returns an array containing that value.
  - If the input is `undefined`, it returns an empty array.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Single value
console.log(_.initArray('hello'));
// Output: ['hello']

// Existing array
console.log(_.initArray([1, 2, 3]));
// Output: [1, 2, 3]

// Array with undefined values
console.log(_.initArray([1, undefined, 3, undefined]));
// Output: [1, 3]

// Null value
console.log(_.initArray(null));
// Output: [null]

// Undefined value
console.log(_.initArray(undefined));
// Output: []

// Mixed array
const mixed = ['a', 1, null, undefined, { id: 1 }];
console.log(_.initArray(mixed));
// Output: ['a', 1, null, { id: 1 }]
```

## Related Functions
- **[isDefined](./is-defined.md)** - Checks if a value is defined.
- **[isValidArray](./is-valid-array.md)** - Checks if a value is a valid array. 