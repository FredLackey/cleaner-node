# isCamelCase

## Purpose
Checks if a string is formatted in camelCase. A string is considered camelCase if it starts with a lowercase letter and has no spaces, hyphens, or underscores.

## Syntax
```javascript
const _ = require('cleaner-node');

_.isCamelCase(value)
```

## Parameters
- **value** (any): The value to check.

## Returns
- **boolean**: `true` if the value is a string in camelCase format, otherwise `false`.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Valid cases
console.log(_.isCamelCase('helloWorld'));     // true
console.log(_.isCamelCase('anotherOne'));      // true
console.log(_.isCamelCase('a'));               // true

// Invalid cases
console.log(_.isCamelCase('HelloWorld'));     // false (PascalCase)
console.log(_.isCamelCase('hello-world'));    // false (kebab-case)
console.log(_.isCamelCase('hello_world'));    // false (snake_case)
console.log(_.isCamelCase('hello world'));    // false (contains space)
console.log(_.isCamelCase(''));               // false
console.log(_.isCamelCase(null));             // false
```

## Related Functions
- **[toCamelCase](./to-camel-case.md)** - Converts a string to camelCase.
- **[isPascalCase](./is-pascal-case.md)** - Checks if a string is in PascalCase.
- **[isKebabCase](./is-kebab-case.md)** - Checks if a string is in kebab-case.
- **[isSnakeCase](./is-snake-case.md)** - Checks if a string is in snake_case. 