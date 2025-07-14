# isKebabCase

## Purpose
Checks if a string is formatted in kebab-case (e.g., `hello-world`). A string is considered kebab-case if it's lowercase and uses hyphens to separate words.

## Syntax
```javascript
const _ = require('cleaner-node');

_.isKebabCase(value)
```

## Parameters
- **value** (any): The value to check.

## Returns
- **boolean**: `true` if the value is a string in kebab-case format, otherwise `false`.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Valid cases
console.log(_.isKebabCase('hello-world'));      // true
console.log(_.isKebabCase('another-one'));       // true
console.log(_.isKebabCase('a-b-c'));             // true

// Invalid cases
console.log(_.isKebabCase('helloWorld'));      // false (camelCase)
console.log(_.isKebabCase('HelloWorld'));      // false (PascalCase)
console.log(_.isKebabCase('hello_world'));     // false (snake_case)
console.log(_.isKebabCase('hello world'));     // false (contains space)
console.log(_.isKebabCase('Hello-World'));     // false (contains uppercase)
console.log(_.isKebabCase(''));                // false
console.log(_.isKebabCase(null));              // false
```

## Related Functions
- **[toKebabCase](./to-kebab-case.md)** - Converts a string to kebab-case.
- **[isCamelCase](./is-camel-case.md)** - Checks if a string is in camelCase.
- **[isPascalCase](./is-pascal-case.md)** - Checks if a string is in PascalCase.
- **[isSnakeCase](./is-snake-case.md)** - Checks if a string is in snake_case. 