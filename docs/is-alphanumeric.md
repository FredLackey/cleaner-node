# isAlphanumeric

## Purpose
Checks if a string contains only alphanumeric characters (a-z, A-Z, 0-9). It returns `true` only if the input is a non-empty string consisting solely of letters and numbers.

## Syntax
```javascript
const _ = require('cleaner-node');

_.isAlphanumeric(value)
```

## Parameters
- **value** (any): The value to check.

## Returns
- **boolean**: `true` if the value is a string containing only letters and numbers, otherwise `false`.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Valid cases
console.log(_.isAlphanumeric('HelloWorld123'));   // true
console.log(_.isAlphanumeric('abc123'));          // true

// Invalid cases
console.log(_.isAlphanumeric('Hello World'));  // false (contains a space)
console.log(_.isAlphanumeric('!@#$'));         // false (contains special characters)
console.log(_.isAlphanumeric(''));             // false (empty string)
console.log(_.isAlphanumeric(null));           // false
console.log(_.isAlphanumeric(123));            // false (it's a number, not a string)
```

## Related Functions
- **[isAlpha](./is-alpha.md)** - Checks if a string contains only letters.
- **[isDigits](./is-digits.md)** - Checks if a string contains only digits.
- **[cleanAlphanumeric](./clean-alphanumeric.md)** - Removes non-alphanumeric characters from a string.
- **[isValidString](./is-valid-string.md)** - Checks if a value is a non-empty string. 