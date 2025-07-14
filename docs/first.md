# first

## Purpose
Gets the first element of an array or the first character of a string. This is a convenience alias for the `getFirst` function. Optionally trims the string before extracting the first character.

## Syntax
```javascript
const _ = require('cleaner-node');

_.first(value, trim)
```

## Parameters
- **value** (Array|string): The array or string to get the first element/character from.
- **trim** (boolean, optional): If `true` and the input is a string, trim whitespace before getting the first character. Defaults to `false`.

## Returns
- **any|string|undefined**: The first element of the array, the first character of the string (or empty string if trimmed input is empty), or `undefined` if the input is not a non-empty array or valid string.

## Examples

### Array Usage
```javascript
const _ = require('cleaner-node');

// Get first element of array
console.log(_.first([1, 2, 3, 4])); // 1
console.log(_.first(['a', 'b', 'c'])); // 'a'
console.log(_.first([])); // undefined

// Mixed types
console.log(_.first([null, 'test', 42])); // null
```

### String Usage
```javascript
const _ = require('cleaner-node');

// Get first character
console.log(_.first('hello')); // 'h'
console.log(_.first('world')); // 'w'
console.log(_.first('')); // ''

// With trimming
console.log(_.first('  hello', true)); // 'h'
console.log(_.first('  ', true)); // ''
console.log(_.first('  world  ', false)); // ' '
```

### Edge Cases
```javascript
const _ = require('cleaner-node');

// Invalid inputs
console.log(_.first(null)); // undefined
console.log(_.first(undefined)); // undefined
console.log(_.first(123)); // undefined
console.log(_.first({})); // undefined

// Single element/character
console.log(_.first(['only'])); // 'only'
console.log(_.first('x')); // 'x'
```

## Related Functions
- **[getFirst](./get-first.md)** - The full function that this aliases.
- **[last](./last.md)** - Gets the last element of an array or character of a string.
- **[single](./single.md)** - Gets the element if array has exactly one element.
- **[getArrayCount](./get-array-count.md)** - Gets the length of an array.
