# unQuote

## Purpose
Removes leading and trailing quote characters (") from a string, preserving any leading/trailing whitespace. This is a convenience alias for the `unquote` function. If the string is not valid, is less than 3 characters long after trimming, or doesn't start and end with a quote, the original value is returned.

## Syntax
```javascript
const _ = require('cleaner-node');

_.unQuote(value)
```

## Parameters
- **value** (string): The string to remove quotes from.

## Returns
- **string**: The unquoted string, or the original value if unquoting is not applicable.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Remove quotes
console.log(_.unQuote('"hello"')); // 'hello'
console.log(_.unQuote('"world"')); // 'world'
console.log(_.unQuote('""'));      // ''

// Preserve whitespace
console.log(_.unQuote('  "hello"  ')); // '  hello  '
console.log(_.unQuote('"  test  "')); // '  test  '
```

### Edge Cases
```javascript
const _ = require('cleaner-node');

// Not quoted - returns original
console.log(_.unQuote('hello'));     // 'hello'
console.log(_.unQuote('no quotes')); // 'no quotes'

// Only one quote - returns original
console.log(_.unQuote('"hello'));    // '"hello'
console.log(_.unQuote('world"'));    // 'world"'

// Too short - returns original
console.log(_.unQuote('""'));        // '""' (only 2 chars)
console.log(_.unQuote('"a'));        // '"a' (only 2 chars)
```

### JSON String Processing
```javascript
const _ = require('cleaner-node');

// Process JSON string values
const jsonString = '{"name": "John Doe", "city": "New York"}';
const parsed = JSON.parse(jsonString);

Object.keys(parsed).forEach(key => {
  const quotedValue = `"${parsed[key]}"`;
  const unquoted = _.unQuote(quotedValue);
  console.log(`${key}: ${unquoted}`);
});

// Output:
// name: John Doe
// city: New York
```

### Configuration File Processing
```javascript
const _ = require('cleaner-node');

// Clean quoted configuration values
const configLines = [
  'title="My Application"',
  'version="1.0.0"',
  'author="John Smith"'
];

const config = {};
configLines.forEach(line => {
  const [key, quotedValue] = line.split('=');
  config[key] = _.unQuote(quotedValue);
});

console.log(config);
// { title: 'My Application', version: '1.0.0', author: 'John Smith' }
```

### CSV Data Processing
```javascript
const _ = require('cleaner-node');

// Process CSV fields that may be quoted
const csvRow = '"John Doe","Software Engineer","San Francisco"';
const fields = csvRow.split(',');
const cleanFields = fields.map(field => _.unQuote(field.trim()));

console.log(cleanFields);
// ['John Doe', 'Software Engineer', 'San Francisco']
```

### Invalid Inputs
```javascript
const _ = require('cleaner-node');

// Non-string inputs return original value
console.log(_.unQuote(null));      // null
console.log(_.unQuote(undefined)); // undefined
console.log(_.unQuote(123));       // 123
console.log(_.unQuote([]));        // []
console.log(_.unQuote({}));        // {}
```

### Nested Quotes
```javascript
const _ = require('cleaner-node');

// Only removes outer quotes
console.log(_.unQuote('"say "hello""')); // 'say "hello"'
console.log(_.unQuote('""quoted""'));    // '"quoted"'

// Escaped quotes are preserved
console.log(_.unQuote('"He said \\"hi\\""')); // 'He said "hi"'
```

## Related Functions
- **[unquote](./unquote.md)** - The full function that this aliases.
- **[trimString](./trim-string.md)** - Removes whitespace from strings.
- **[getPads](./get-pads.md)** - Gets leading and trailing whitespace information.
- **[isValidString](./is-valid-string.md)** - Checks if a value is a valid string.
