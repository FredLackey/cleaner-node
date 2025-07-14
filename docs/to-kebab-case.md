# toKebabCase

## Purpose
Converts a string from various formats (like camelCase, PascalCase, or space-separated) into kebab-case.

## Syntax
```javascript
const _ = require('cleaner-node');

_.toKebabCase(value)
```

## Parameters
- **value** (string): The string to convert.

## Returns
- **string**: The kebab-case version of the string.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

console.log(_.toKebabCase('helloWorld'));     // 'hello-world'
console.log(_.toKebabCase('HelloWorld'));     // 'hello-world'
console.log(_.toKebabCase('hello_world'));    // 'hello-world'
console.log(_.toKebabCase('Hello World'));    // 'hello-world'
console.log(_.toKebabCase('__FOO_BAR__'));    // 'foo-bar'
```

### Edge Cases
```javascript
const _ = require('cleaner-node');

// Already kebab-case
console.log(_.toKebabCase('hello-world'));    // 'hello-world'

// Single word
console.log(_.toKebabCase('hello'));          // 'hello'

// Invalid input (will throw an error)
// console.log(_.toKebabCase(null));
// console.log(_.toKebabCase(123));
```

## Related Functions
- **[toCamelCase](./to-camel-case.md)** - Converts a string to camelCase.
- **[toPascalCase](./to-pascal-case.md)** - Converts a string to PascalCase.
- **[toSnakeCase](./to-snake-case.md)** - Converts a string to snake_case.
- **[isKebabCase](./is-kebab-case.md)** - Checks if a string is in kebab-case. 