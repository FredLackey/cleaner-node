# isPascalCase

## Purpose
Checks if a string is formatted in PascalCase (also known as UpperCamelCase). A string is considered PascalCase if it starts with a capital letter and has no spaces, hyphens, or underscores.

## Syntax
```javascript
const _ = require('cleaner-node');

_.isPascalCase(value)
```

## Parameters
- **value** (any): The value to check.

## Returns
- **boolean**: `true` if the value is a string in PascalCase format, otherwise `false`.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Valid cases
console.log(_.isPascalCase('HelloWorld'));     // true
console.log(_.isPascalCase('AnotherOne'));      // true
console.log(_.isPascalCase('A'));               // true

// Invalid cases
console.log(_.isPascalCase('helloWorld'));     // false (camelCase)
console.log(_.isPascalCase('hello-world'));    // false (kebab-case)
console.log(_.isPascalCase('hello_world'));    // false (snake_case)
console.log(_.isPascalCase('hello world'));    // false (contains space)
console.log(_.isPascalCase(''));               // false
console.log(_.isPascalCase(null));             // false
```

## Related Functions
- **[toPascalCase](./to-pascal-case.md)** - Converts a string to PascalCase.
- **[isCamelCase](./is-camel-case.md)** - Checks if a string is in camelCase.
- **[isKebabCase](./is-kebab-case.md)** - Checks if a string is in kebab-case.
- **[isSnakeCase](./is-snake-case.md)** - Checks if a string is in snake_case. 