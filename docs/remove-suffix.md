# removeSuffix

## Purpose
Removes a specified suffix from the end of a string. It can remove the suffix multiple times if it appears consecutively at the end of the string.

## Syntax
```javascript
const _ = require('cleaner-node');

_.removeSuffix(value, suffix)
```

## Parameters
- **value** (string): The string to modify.
- **suffix** (string): The suffix to remove from the `value`.

## Returns
- **string**: The modified string with the suffix removed. If the input `value` or `suffix` is not a valid string, it returns the original `value`.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

console.log(_.removeSuffix('my-variable.js', '.js'));      // 'my-variable'
console.log(_.removeSuffix('test-function-test', '-test')); // 'test-function'
console.log(_.removeSuffix('no-suffix-here', '.md'));      // 'no-suffix-here'
```

### Multiple Suffixes
```javascript
const _ = require('cleaner-node');

console.log(_.removeSuffix('file.js.js', '.js'));   // 'file'
console.log(_.removeSuffix('abc-ab-ab', 'ab'));     // 'abc-'
```

### Edge Cases
```javascript
const _ = require('cleaner-node');

// String is only the suffix
console.log(_.removeSuffix('.zip', '.zip')); // ''

// Empty string or suffix
console.log(_.removeSuffix('any-string', ''));   // 'any-string'
console.log(_.removeSuffix('', 'suffix'));     // ''

// Invalid inputs
console.log(_.removeSuffix(null, 'suffix'));   // null
console.log(_.removeSuffix('string', null));   // 'string'
```

## Related Functions
- **[removePrefix](./remove-prefix.md)** - Removes a prefix from the beginning of a string.
- **[trimString](./trim-string.md)** - Removes whitespace from the beginning and end of a string. 