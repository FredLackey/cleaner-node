# sort

## Purpose
Sorts an array of numbers (or string representations of numbers) in either ascending or descending order. It conveniently filters out any non-numeric values from the array before sorting.

## Syntax
```javascript
const _ = require('cleaner-node');

_.sort(values, descending)
```

## Parameters
- **values** (Array): The array to sort. Non-numeric values will be ignored.
- **descending** (boolean, optional): If `true`, the array will be sorted in descending order. Defaults to `false` (ascending).

## Returns
- **Array<number>**: A new array containing only the sorted numbers from the original array.

## Examples

### Ascending Sort (Default)
```javascript
const _ = require('cleaner-node');

const mixedArray = [10, '5', 'hello', 100, 1, null];
console.log(_.sort(mixedArray));
// Output: [1, 5, 10, 100]
```

### Descending Sort
```javascript
const _ = require('cleaner-node');

const mixedArray = [10, '5', 'hello', 100, 1, null];
console.log(_.sort(mixedArray, true));
// Output: [100, 10, 5, 1]
```

### Edge Cases
```javascript
const _ = require('cleaner-node');

// Array with no numbers
console.log(_.sort(['a', 'b', null]));
// Output: []

// Empty array
console.log(_.sort([]));
// Output: []
```

## Related Functions
- **[ascending](./ascending.md)** - A simplified sort for arrays already known to contain only numbers or only strings.
- **[descending](./descending.md)** - A simplified descending sort for arrays of numbers or strings.
- **[isNumber](./is-number.md)** - Checks if a value is a number. 