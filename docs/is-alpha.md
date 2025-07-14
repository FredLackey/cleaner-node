# isAlpha

## Purpose
Checks if a string contains only alphabetic characters (a-z, A-Z). It returns `true` only if the input is a non-empty string consisting solely of letters.

## Syntax
```javascript
const _ = require('cleaner-node');

_.isAlpha(value)
```

## Parameters
- **value** (any): The value to check.

## Returns
- **boolean**: `true` if the value is a string containing only letters, otherwise `false`.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Valid cases
console.log(_.isAlpha('HelloWorld'));   // true
console.log(_.isAlpha('abc'));          // true

// Invalid cases
console.log(_.isAlpha('Hello World'));  // false (contains a space)
console.log(_.isAlpha('abc123'));       // false (contains numbers)
console.log(_.isAlpha('!@#$'));         // false (contains special characters)
console.log(_.isAlpha(''));             // false (empty string)
console.log(_.isAlpha(null));           // false
console.log(_.isAlpha(123));            // false
```

## Related Functions
- **[isAlphanumeric](./is-alphanumeric.md)** - Checks if a string contains only letters and numbers.
- **[isDigits](./is-digits.md)** - Checks if a string contains only digits.
- **[isValidString](./is-valid-string.md)** - Checks if a value is a non-empty string. 