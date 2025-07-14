# unquote

## Purpose
Removes a single pair of leading and trailing double quotes (`"`) from a string, while preserving any surrounding whitespace.

## Syntax
```javascript
const _ = require('cleaner-node');

_.unquote(value)
```

## Parameters
- **value** (string): The string to unquote.

## Returns
- **string**: The unquoted string. If the string is not enclosed in double quotes, the original string is returned.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

console.log(_.unquote('"hello world"'));      // 'hello world'
console.log(_.unquote('  "quoted"  '));      // '  quoted  '
```

### Edge Cases
```javascript
const _ = require('cleaner-node');

// Not quoted
console.log(_.unquote('hello world'));      // 'hello world'

// Single quote or mismatched quotes
console.log(_.unquote("'hello'"));          // "'hello'"
console.log(_.unquote('"hello'));           // '"hello'

// Nested quotes
console.log(_.unquote('"say \\"hello\\""'));  // 'say \\"hello\\"'

// Invalid input
console.log(_.unquote(null));               // null
console.log(_.unquote('""'));               // '""' (too short to unquote)
```

## Related Functions
- **[trimString](./trim-string.md)** - Removes whitespace from the beginning and end of a string.
- **[removePrefix](./remove-prefix.md)** - Removes a prefix from the beginning of a string.
- **[removeSuffix](./remove-suffix.md)** - Removes a suffix from the end of a string. 