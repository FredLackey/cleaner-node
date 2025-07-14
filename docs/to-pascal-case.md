# toPascalCase

## Purpose
Converts a string from various formats (like camelCase, kebab-case, or space-separated) into PascalCase (also known as UpperCamelCase).

## Syntax
```javascript
const _ = require('cleaner-node');

_.toPascalCase(value)
```

## Parameters
- **value** (string): The string to convert.

## Returns
- **string**: The PascalCase version of the string.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

console.log(_.toPascalCase('hello-world'));      // 'HelloWorld'
console.log(_.toPascalCase('hello_world'));      // 'HelloWorld'
console.log(_.toPascalCase('helloWorld'));       // 'HelloWorld'
console.log(_.toPascalCase('__FOO_BAR__'));      // 'FooBar'
```

### Edge Cases
```javascript
const _ = require('cleaner-node');

// Already PascalCase
console.log(_.toPascalCase('HelloWorld'));     // 'HelloWorld'

// Single word
console.log(_.toPascalCase('hello'));          // 'Hello'

// Invalid input
console.log(_.toPascalCase(null));             // ''
console.log(_.toPascalCase(123));              // '123'
```

## Related Functions
- **[toCamelCase](./to-camel-case.md)** - Converts a string to camelCase.
- **[toKebabCase](./to-kebab-case.md)** - Converts a string to kebab-case.
- **[toSnakeCase](./to-snake-case.md)** - Converts a string to snake_case.
- **[isPascalCase](./is-pascal-case.md)** - Checks if a string is in PascalCase. 