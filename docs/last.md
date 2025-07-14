# last

## Purpose
Gets the last element of an array or the last character of a string. This is a convenience alias for the `getLast` function. Optionally trims the string before extracting the last character.

## Syntax
```javascript
const _ = require('cleaner-node');

_.last(value, trim)
```

## Parameters
- **value** (Array|string): The array or string to get the last element/character from.
- **trim** (boolean, optional): If `true` and the input is a string, trim whitespace before getting the last character. Defaults to `false`.

## Returns
- **any|string|undefined**: The last element of the array, the last character of the string (or empty string if trimmed input is empty), or `undefined` if the input is not a non-empty array or valid string.

## Examples

### Array Usage
```javascript
const _ = require('cleaner-node');

// Get last element of array
console.log(_.last([1, 2, 3, 4])); // 4
console.log(_.last(['a', 'b', 'c'])); // 'c'
console.log(_.last([])); // undefined

// Mixed types
console.log(_.last(['first', null, 42])); // 42
```

### String Usage
```javascript
const _ = require('cleaner-node');

// Get last character
console.log(_.last('hello')); // 'o'
console.log(_.last('world')); // 'd'
console.log(_.last('')); // ''

// With trimming
console.log(_.last('hello  ', true)); // 'o'
console.log(_.last('  ', true)); // ''
console.log(_.last('  world  ', false)); // ' '
```

### Edge Cases
```javascript
const _ = require('cleaner-node');

// Invalid inputs
console.log(_.last(null)); // undefined
console.log(_.last(undefined)); // undefined
console.log(_.last(123)); // undefined
console.log(_.last({})); // undefined

// Single element/character
console.log(_.last(['only'])); // 'only'
console.log(_.last('x')); // 'x'
```

### Practical Examples
```javascript
const _ = require('cleaner-node');

// File extension extraction
const filename = 'document.pdf';
const parts = filename.split('.');
console.log(_.last(parts)); // 'pdf'

// Last word in sentence
const sentence = 'The quick brown fox';
const words = sentence.split(' ');
console.log(_.last(words)); // 'fox'
```

## Related Functions
- **[getLast](./get-last.md)** - The full function that this aliases.
- **[first](./first.md)** - Gets the first element of an array or character of a string.
- **[single](./single.md)** - Gets the element if array has exactly one element.
- **[getArrayCount](./get-array-count.md)** - Gets the length of an array.
