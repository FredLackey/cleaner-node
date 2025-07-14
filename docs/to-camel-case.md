# toCamelCase

## Purpose
Converts a string from various formats (like snake_case, kebab-case, or space-separated) into camelCase.

## Syntax
```javascript
const _ = require('cleaner-node');

_.toCamelCase(value)
```

## Parameters
- **value** (string): The string to convert.

## Returns
- **string**: The camelCase version of the string.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

console.log(_.toCamelCase('hello-world'));      // 'helloWorld'
console.log(_.toCamelCase('hello_world'));      // 'helloWorld'
console.log(_.toCamelCase('Hello World'));      // 'helloWorld'
console.log(_.toCamelCase('__FOO_BAR__'));      // 'fooBar'
```

### Edge Cases
```javascript
const _ = require('cleaner-node');

// Already camelCase
console.log(_.toCamelCase('helloWorld'));     // 'helloWorld'

// Single word
console.log(_.toCamelCase('hello'));          // 'hello'

// Invalid input
console.log(_.toCamelCase(null));             // ''
console.log(_.toCamelCase(123));              // '123'
```

## Related Functions
- **[toPascalCase](./to-pascal-case.md)** - Converts a string to PascalCase.
- **[toKebabCase](./to-kebab-case.md)** - Converts a string to kebab-case.
- **[toSnakeCase](./to-snake-case.md)** - Converts a string to snake_case.
- **[isCamelCase](./is-camel-case.md)** - Checks if a string is in camelCase. 