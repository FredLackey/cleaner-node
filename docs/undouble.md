# undouble

## Purpose
Reduces consecutive occurrences of specified characters in a string to a single instance. For example, it can turn `//` into `/` or `---` into `-`.

## Syntax
```javascript
const _ = require('cleaner-node');

_.undouble(value, targets)
```

## Parameters
- **value** (string): The input string to process.
- **targets** (string | Array<string>): A string of characters or an array of characters to be "undoubled".

## Returns
- **string**: The processed string. If the input `value` or `targets` are invalid, the original `value` is returned.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Using a string for targets
console.log(_.undouble('path//to//file', '/'));         // 'path/to/file'
console.log(_.undouble('a---b--c', '-'));               // 'a-b-c'

// Using an array for targets
console.log(_.undouble('a//b--c', ['/', '-']));        // 'a/b-c'
console.log(_.undouble('spaces   and___tabs', [' ', '_'])); // 'spaces and_tabs'
```

### Edge Cases
```javascript
const _ = require('cleaner-node');

// No doubles present
console.log(_.undouble('abc', '/'));                   // 'abc'

// Invalid input
console.log(_.undouble(null, '/'));                    // null
console.log(_.undouble('hello', null));                // 'hello'
console.log(_.undouble('hello'));                      // 'hello'
```

## Related Functions
- **[cleanString](./clean-string.md)** - A more general-purpose string cleaning utility.
- **[replaceValues](./replace-values.md)** - Replaces multiple values in an object. 