# toSnakeCase

## Purpose
Converts a string from various formats (like camelCase, kebab-case, or space-separated) into snake_case.

## Syntax
```javascript
const _ = require('cleaner-node');

_.toSnakeCase(value)
```

## Parameters
- **value** (string): The string to convert.

## Returns
- **string**: The snake_case version of the string.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

console.log(_.toSnakeCase('helloWorld'));     // 'hello_world'
console.log(_.toSnakeCase('HelloWorld'));     // 'hello_world'
console.log(_.toSnakeCase('hello-world'));    // 'hello_world'
console.log(_.toSnakeCase('Hello World'));    // 'hello_world'
console.log(_.toSnakeCase('__FOO_BAR__'));    // 'foo_bar'
```

### Edge Cases
```javascript
const _ = require('cleaner-node');

// Already snake_case
console.log(_.toSnakeCase('hello_world'));    // 'hello_world'

// Single word
console.log(_.toSnakeCase('hello'));          // 'hello'

// Invalid input (will throw an error)
// console.log(_.toSnakeCase(null));
// console.log(_.toSnakeCase(123));
```

## Related Functions
- **[toCamelCase](./to-camel-case.md)** - Converts a string to camelCase.
- **[toPascalCase](./to-pascal-case.md)** - Converts a string to PascalCase.
- **[toKebabCase](./to-kebab-case.md)** - Converts a string to kebab-case.
- **[isSnakeCase](./is-snake-case.md)** - Checks if a string is in snake_case. 