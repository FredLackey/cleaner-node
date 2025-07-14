# isAlphaNumeric

## Purpose
Checks if a string contains only alphanumeric characters (letters and numbers). This is a convenience alias for the `isAlphanumeric` function.

## Syntax
```javascript
const _ = require('cleaner-node');

_.isAlphaNumeric(value)
```

## Parameters
- **value** (string): The string to check.

## Returns
- **boolean**: `true` if the string contains only letters and numbers, `false` otherwise.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Valid alphanumeric strings
console.log(_.isAlphaNumeric('abc123'));    // true
console.log(_.isAlphaNumeric('Hello123'));  // true
console.log(_.isAlphaNumeric('ABC'));       // true
console.log(_.isAlphaNumeric('123'));       // true
console.log(_.isAlphaNumeric('a1B2c3'));    // true

// Invalid strings
console.log(_.isAlphaNumeric('hello-world')); // false (hyphen)
console.log(_.isAlphaNumeric('test@123'));    // false (@ symbol)
console.log(_.isAlphaNumeric('hello world')); // false (space)
console.log(_.isAlphaNumeric(''));            // false (empty)
console.log(_.isAlphaNumeric(null));          // false
```

### Validation Examples
```javascript
const _ = require('cleaner-node');

// Username validation
function isValidUsername(username) {
  return _.isAlphaNumeric(username) && username.length >= 3;
}

console.log(isValidUsername('user123'));   // true
console.log(isValidUsername('user_123'));  // false (underscore)
console.log(isValidUsername('ab'));        // false (too short)

// Product code validation
const productCodes = ['ABC123', 'XYZ-456', 'DEF789', 'GHI@012'];
const validCodes = productCodes.filter(_.isAlphaNumeric);
console.log(validCodes); // ['ABC123', 'DEF789']
```

## Related Functions
- **[isAlphanumeric](./is-alphanumeric.md)** - The full function that this aliases.
- **[cleanAlphaNumeric](./clean-alpha-numeric.md)** - Removes non-alphanumeric characters.
- **[isAlpha](./is-alpha.md)** - Checks if string contains only letters.
- **[isValidString](./is-valid-string.md)** - Checks if value is a valid string.
