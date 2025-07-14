# isLowerCase

## Purpose
Checks if a string is entirely lowercase. The string must be non-empty and valid.

## Syntax
```javascript
const _ = require('cleaner-node');

_.isLowerCase(value)
```

## Parameters
- **value** (string): The string to check.

## Returns
- **boolean**: `true` if the string is valid, non-empty, and entirely lowercase, `false` otherwise.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Valid lowercase strings
console.log(_.isLowerCase('hello'));       // true
console.log(_.isLowerCase('world'));       // true
console.log(_.isLowerCase('test123'));     // true
console.log(_.isLowerCase('a'));           // true

// Mixed case strings
console.log(_.isLowerCase('Hello'));       // false
console.log(_.isLowerCase('WORLD'));       // false
console.log(_.isLowerCase('Test'));        // false
console.log(_.isLowerCase('hELLo'));       // false

// Edge cases
console.log(_.isLowerCase(''));            // false (empty)
console.log(_.isLowerCase(null));          // false
console.log(_.isLowerCase(undefined));     // false
console.log(_.isLowerCase(123));           // false
```

### Practical Examples
```javascript
const _ = require('cleaner-node');

// Validate lowercase identifiers
const usernames = ['alice', 'Bob', 'charlie', 'DAVID', 'eve'];
const validUsernames = usernames.filter(_.isLowerCase);
console.log(validUsernames); // ['alice', 'charlie', 'eve']

// CSS class validation
function isValidCSSClass(className) {
  return _.isLowerCase(className) && !className.includes(' ');
}

console.log(isValidCSSClass('navbar'));     // true
console.log(isValidCSSClass('navBar'));     // false
console.log(isValidCSSClass('nav-bar'));    // true (contains hyphen, still lowercase)
```

## Related Functions
- **[isCaps](./is-caps.md)** - Checks if a string is entirely uppercase.
- **[isValidString](./is-valid-string.md)** - Checks if a value is a valid string.
- **[toCamelCase](./to-camel-case.md)** - Converts strings to camelCase.
- **[toKebabCase](./to-kebab-case.md)** - Converts strings to kebab-case.
