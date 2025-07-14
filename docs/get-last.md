# getLast

## Purpose
Retrieves the last element from an array or the last character from a string. It provides a safe way to access the last item without causing errors on invalid or empty inputs.

## Syntax
```javascript
const _ = require('cleaner-node');

_.getLast(value, trim)
```

## Parameters
- **value** (Array | string): The array or string from which to get the last element or character.
- **trim** (boolean, optional): If `true` and the input is a string, it will trim whitespace before extracting the last character. Defaults to `false`.

## Returns
- **any | string | undefined**: 
  - The last element if the input is a non-empty array.
  - The last character if the input is a non-empty string.
  - An empty string if the input is a string that becomes empty after trimming.
  - `undefined` if the input is not a valid array or string, or if it's an empty array.

## Examples

### With Arrays
```javascript
const _ = require('cleaner-node');

console.log(_.getLast([10, 20, 30]));      // 30
console.log(_.getLast(['a', 'b', 'c']));   // 'c'
console.log(_.getLast([]));               // undefined
console.log(_.getLast(null));             // undefined
```

### With Strings
```javascript
const _ = require('cleaner-node');

console.log(_.getLast('hello'));           // 'o'
console.log(_.getLast('world  '));         // ' '
console.log(_.getLast('world  ', true));   // 'd'
console.log(_.getLast(''));                // ''
console.log(_.getLast('   ', true));       // ''
```

## Related Functions
- **[getFirst](./get-first.md)** - Gets the first element of an array or string.
- **[getSingle](./get-single.md)** - Safely gets a single element from an array that is expected to contain only one item.
- **[getArrayCount](./get-array-count.md)** - Gets the number of elements in an array. 