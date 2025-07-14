# getSingle

## Purpose
Safely retrieves an element from an array that is expected to contain exactly one item. This is useful for situations where an array should have a single result, and you want to handle cases with zero or multiple elements gracefully.

## Syntax
```javascript
const _ = require('cleaner-node');

_.getSingle(value)
```

## Parameters
- **value** (any): The value to check, which is expected to be an array.

## Returns
- **any | undefined**: 
  - The single element if the input is an array with exactly one item.
  - `undefined` if the input is not an array or if it has zero or more than one element.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Array with a single element
const singleItemArray = [{ id: 1, name: 'test' }];
console.log(_.getSingle(singleItemArray));
// Output: { id: 1, name: 'test' }

// Array with a single primitive value
console.log(_.getSingle(['hello']));
// Output: 'hello'
```

### Edge Cases
```javascript
const _ = require('cleaner-node');

// Empty array
console.log(_.getSingle([]));
// Output: undefined

// Array with multiple elements
console.log(_.getSingle([1, 2, 3]));
// Output: undefined

// Invalid input
console.log(_.getSingle('not an array'));
// Output: undefined

console.log(_.getSingle(null));
// Output: undefined
```

## Related Functions
- **[getFirst](./get-first.md)** - Gets the first element of an array, regardless of its size.
- **[getLast](./get-last.md)** - Gets the last element of an array.
- **[getArrayCount](./get-array-count.md)** - Gets the number of elements in an array. 