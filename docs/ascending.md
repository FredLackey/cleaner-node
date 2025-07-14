# ascending

## Purpose
Sorts an array of numbers or strings in ascending order. This is a fundamental utility for data processing and ordering.

## Syntax
```javascript
const _ = require('cleaner-node');

_.ascending(array)
```

## Parameters
- **array** (Array<number|string>): The array of numbers or strings to sort.

## Returns
- **Array**: A new array sorted in ascending order.

## Examples

### Basic Usage with Numbers
```javascript
const _ = require('cleaner-node');

const numbers = [40, 100, 1, 5, 25, 10];
console.log(_.ascending(numbers));
// Output: [1, 5, 10, 25, 40, 100]
```

### Basic Usage with Strings
```javascript
const _ = require('cleaner-node');

const fruits = ['banana', 'apple', 'cherry', 'date'];
console.log(_.ascending(fruits));
// Output: ['apple', 'banana', 'cherry', 'date']
```

### Edge Cases
```javascript
const _ = require('cleaner-node');

// Empty array
console.log(_.ascending([]));
// Output: []

// Array with one element
console.log(_.ascending([100]));
// Output: [100]

// Array with duplicate values
console.log(_.ascending([10, 1, 10, 5, 5]));
// Output: [1, 5, 5, 10, 10]
```

## Related Functions
- **[descending](./descending.md)** - Sorts an array in descending order.
- **[sort](./sort.md)** - Sorts an array using a custom comparator. 