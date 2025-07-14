# isSnakeCase

## Purpose
Checks if a string is formatted in snake_case (e.g., `hello_world`). A string is considered snake_case if it's lowercase and uses underscores to separate words.

## Syntax
```javascript
const _ = require('cleaner-node');

_.isSnakeCase(value)
```

## Parameters
- **value** (any): The value to check.

## Returns
- **boolean**: `true` if the value is a string in snake_case format, otherwise `false`.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Valid cases
console.log(_.isSnakeCase('hello_world'));      // true
console.log(_.isSnakeCase('another_one'));       // true
console.log(_.isSnakeCase('a_b_c'));             // true

// Invalid cases
console.log(_.isSnakeCase('helloWorld'));      // false (camelCase)
console.log(_.isSnakeCase('HelloWorld'));      // false (PascalCase)
console.log(_.isSnakeCase('hello-world'));     // false (kebab-case)
console.log(_.isSnakeCase('hello world'));     // false (contains space)
console.log(_.isSnakeCase('Hello_World'));     // false (contains uppercase)
console.log(_.isSnakeCase(''));                // false
console.log(_.isSnakeCase(null));              // false
```

## Related Functions
- **[toSnakeCase](./to-snake-case.md)** - Converts a string to snake_case.
- **[isCamelCase](./is-camel-case.md)** - Checks if a string is in camelCase.
- **[isPascalCase](./is-pascal-case.md)** - Checks if a string is in PascalCase.
- **[isKebabCase](./is-kebab-case.md)** - Checks if a string is in kebab-case. 