# removePrefix

## Purpose
Removes a specified prefix from the beginning of a string. It can remove the prefix multiple times if it appears consecutively at the start of the string.

## Syntax
```javascript
const _ = require('cleaner-node');

_.removePrefix(value, prefix)
```

## Parameters
- **value** (string): The string to modify.
- **prefix** (string): The prefix to remove from the `value`.

## Returns
- **string**: The modified string with the prefix removed. If the input `value` or `prefix` is not a valid string, it returns the original `value`.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

console.log(_.removePrefix('__my-variable', '__'));    // 'my-variable'
console.log(_.removePrefix('test-function', 'test-')); // 'function'
console.log(_.removePrefix('no-prefix-here', 'xy_'));  // 'no-prefix-here'
```

### Multiple Prefixes
```javascript
const _ = require('cleaner-node');

console.log(_.removePrefix('__my-variable', '_'));   // 'my-variable'
console.log(_.removePrefix('abab-c', 'ab'));         // '-c'
```

### Edge Cases
```javascript
const _ = require('cleaner-node');

// String is only the prefix
console.log(_.removePrefix('test', 'test')); // ''

// Empty string or prefix
console.log(_.removePrefix('any-string', ''));   // 'any-string'
console.log(_.removePrefix('', 'prefix'));     // ''

// Invalid inputs
console.log(_.removePrefix(null, 'prefix'));   // null
console.log(_.removePrefix('string', null));   // 'string'
```

## Related Functions
- **[removeSuffix](./remove-suffix.md)** - Removes a suffix from the end of a string.
- **[trimString](./trim-string.md)** - Removes whitespace from the beginning and end of a string. 