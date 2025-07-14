# descending

## Purpose
Sorts an array of numbers or strings in descending order.

## Syntax
```javascript
const _ = require('cleaner-node');

_.descending(array)
```

## Parameters
- **array** (Array<number|string>): The array of numbers or strings to sort.

## Returns
- **Array**: A new array sorted in descending order.

## Examples

### Basic Usage with Numbers
```javascript
const _ = require('cleaner-node');

const numbers = [40, 100, 1, 5, 25, 10];
console.log(_.descending(numbers));
// Output: [100, 40, 25, 10, 5, 1]
```

### Basic Usage with Strings
```javascript
const _ = require('cleaner-node');

const fruits = ['banana', 'apple', 'cherry', 'date'];
console.log(_.descending(fruits));
// Output: ['date', 'cherry', 'banana', 'apple']
```

### Edge Cases
```javascript
const _ = require('cleaner-node');

// Empty array
console.log(_.descending([]));
// Output: []

// Array with one element
console.log(_.descending([100]));
// Output: [100]

// Array with duplicate values
console.log(_.descending([10, 1, 10, 5, 5]));
// Output: [10, 10, 5, 5, 1]
```

## Related Functions
- **[ascending](./ascending.md)** - Sorts an array in ascending order.
- **[sort](./sort.md)** - Sorts an array using a custom comparator. 