# isLowerCase

## Purpose
Checks if a string is entirely in lowercase. The check is strict: the string must be identical to its lowercased version.

## Syntax
```javascript
const _ = require('cleaner-node');

_.isLowerCase(value)
```

## Parameters
- **value** (any): The value to check.

## Returns
- **boolean**: `true` if the value is a non-empty string and all its characters are lowercase, otherwise `false`.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Valid cases
console.log(_.isLowerCase('hello'));         // true
console.log(_.isLowerCase('hello world'));   // true
console.log(_.isLowerCase('h3llo'));         // true
console.log(_.isLowerCase('!@#$'));          // true (no uppercase letters to fail the check)

// Invalid cases
console.log(_.isLowerCase('Hello'));         // false (contains an uppercase 'H')
console.log(_.isLowerCase('HELLO'));         // false (all uppercase)
console.log(_.isLowerCase(''));              // false (is not a valid non-empty string)
console.log(_.isLowerCase(null));            // false
```

## Related Functions
- **[isCaps](./is-caps.md)** - Checks if a string is entirely in uppercase.
- **[isAlpha](./is-alpha.md)** - Checks if a string contains only letters.
- **[isValidString](./is-valid-string.md)** - Checks if a value is a non-empty string. 