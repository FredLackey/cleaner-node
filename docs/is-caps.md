# isCaps

## Purpose
Checks if a string is entirely in uppercase. The check is strict: the string must be identical to its uppercased version.

## Syntax
```javascript
const _ = require('cleaner-node');

_.isCaps(value)
```

## Parameters
- **value** (any): The value to check.

## Returns
- **boolean**: `true` if the value is a non-empty string and all its characters are uppercase, otherwise `false`.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Valid cases
console.log(_.isCaps('HELLO'));         // true
console.log(_.isCaps('HELLO WORLD'));   // true
console.log(_.isCaps('H3LLO'));         // true
console.log(_.isCaps('!@#$'));          // true (no lowercase letters to fail the check)

// Invalid cases
console.log(_.isCaps('Hello'));         // false (contains a lowercase 'e', 'l', 'l', 'o')
console.log(_.isCaps('hello'));         // false (all lowercase)
console.log(_.isCaps(''));              // false (is not a valid non-empty string)
console.log(_.isCaps(null));            // false
```

## Related Functions
- **[isLowerCase](./is-lowercase.md)** - Checks if a string is entirely in lowercase.
- **[isAlpha](./is-alpha.md)** - Checks if a string contains only letters.
- **[isValidString](./is-valid-string.md)** - Checks if a value is a non-empty string. 