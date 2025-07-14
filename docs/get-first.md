# getFirst

## Purpose
Retrieves the first element from an array or the first character from a string. It provides a safe way to access the first item without causing errors on invalid or empty inputs.

## Syntax
```javascript
const _ = require('cleaner-node');

_.getFirst(value, trim)
```

## Parameters
- **value** (Array | string): The array or string from which to get the first element or character.
- **trim** (boolean, optional): If `true` and the input is a string, it will trim whitespace before extracting the first character. Defaults to `false`.

## Returns
- **any | string | undefined**: 
  - The first element if the input is a non-empty array.
  - The first character if the input is a non-empty string.
  - An empty string if the input is a string that becomes empty after trimming.
  - `undefined` if the input is not a valid array or string, or if it's an empty array.

## Examples

### With Arrays
```javascript
const _ = require('cleaner-node');

console.log(_.getFirst([10, 20, 30]));      // 10
console.log(_.getFirst(['a', 'b', 'c']));   // 'a'
console.log(_.getFirst([]));               // undefined
console.log(_.getFirst(null));             // undefined
```

### With Strings
```javascript
const _ = require('cleaner-node');

console.log(_.getFirst('hello'));           // 'h'
console.log(_.getFirst('  world'));         // ' '
console.log(_.getFirst('  world', true));   // 'w'
console.log(_.getFirst(''));                // ''
console.log(_.getFirst('   ', true));       // ''
```

## Related Functions
- **[getLast](./get-last.md)** - Gets the last element of an array or string.
- **[getSingle](./get-single.md)** - Safely gets a single element from an array that is expected to contain only one item.
- **[getArrayCount](./get-array-count.md)** - Gets the number of elements in an array. 