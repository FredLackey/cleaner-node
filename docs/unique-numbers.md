# uniqueNumbers

## Purpose
Extracts unique numbers from an array, including numbers represented as strings. It filters out any non-numeric values and preserves the order of the first appearance of each unique number.

## Syntax
```javascript
const _ = require('cleaner-node');

_.uniqueNumbers(values)
```

## Parameters
- **values** (Array): An array containing a mix of values.

## Returns
- **Array<number|string>**: A new array containing only the unique numeric values, preserving their original type (number or string).

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

const numbers = [1, '2', 3, 1, '2', 4, 'a', null];
console.log(_.uniqueNumbers(numbers));
// Output: [1, '2', 3, 4]
```

### Edge Cases
```javascript
const _ = require('cleaner-node');

// All unique
console.log(_.uniqueNumbers([10, 20, 30]));
// Output: [10, 20, 30]

// No numbers
console.log(_.uniqueNumbers(['a', 'b', 'c']));
// Output: []

// Empty array
console.log(_.uniqueNumbers([]));
// Output: []
```

## Related Functions
- **[unique](./unique.md)** - A general-purpose uniqueness filter for arrays.
- **[uniqueStrings](./unique-strings.md)** - Gets unique strings from an array.
- **[uniqueObjects](./unique-objects.md)** - Gets unique objects from an array.
- **[isNumber](./is-number.md)** - Checks if a value is a number. 