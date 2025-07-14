# isValidString

Checks if a value is a string and optionally validates that it contains non-whitespace characters.

## Purpose

This function provides robust string validation by checking both the type and content of a value. It's particularly useful for form validation, API input validation, and data sanitization where you need to ensure a value is not only a string but also contains meaningful content.

## Syntax

```javascript
isValidString(value, isEmptyOkay)
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `value` | `*` | - | The value to check (can be any type) |
| `isEmptyOkay` | `boolean` | `false` | If `true`, empty or whitespace-only strings are considered valid. If `false`, the string must contain non-whitespace characters |

## Return Value

- **Type**: `boolean`
- **Returns**: `true` if the value is a string and meets the emptiness condition, `false` otherwise

## Examples

### Basic Usage

```javascript
const _ = require('cleaner-node');

// Valid strings
console.log(_.isValidString('hello')); // true
console.log(_.isValidString('hello world')); // true
console.log(_.isValidString('123')); // true

// Invalid - not strings
console.log(_.isValidString(123)); // false
console.log(_.isValidString(null)); // false
console.log(_.isValidString(undefined)); // false
console.log(_.isValidString({})); // false
console.log(_.isValidString([])); // false
```

### Empty String Handling

```javascript
const _ = require('cleaner-node');

// Default behavior - empty strings are invalid
console.log(_.isValidString('')); // false
console.log(_.isValidString('   ')); // false (whitespace only)
console.log(_.isValidString('\t\n')); // false (whitespace only)

// Allow empty strings
console.log(_.isValidString('', true)); // true
console.log(_.isValidString('   ', true)); // true
console.log(_.isValidString('\t\n', true)); // true
```

### Form Validation Example

```javascript
const _ = require('cleaner-node');

function validateUserInput(formData) {
  const errors = [];
  
  // Required fields - empty not allowed
  if (!_.isValidString(formData.name)) {
    errors.push('Name is required and must be a non-empty string');
  }
  
  if (!_.isValidString(formData.email)) {
    errors.push('Email is required and must be a non-empty string');
  }
  
  // Optional fields - empty allowed
  if (formData.middleName !== undefined && !_.isValidString(formData.middleName, true)) {
    errors.push('Middle name must be a string if provided');
  }
  
  return errors;
}

// Usage
const result1 = validateUserInput({
  name: 'John',
  email: 'john@example.com',
  middleName: ''
}); // No errors

const result2 = validateUserInput({
  name: '',
  email: null,
  middleName: 123
}); // Multiple errors
```

### API Input Validation

```javascript
const _ = require('cleaner-node');

function processApiRequest(req, res) {
  const { title, description, tags } = req.body;
  
  // Validate required string fields
  if (!_.isValidString(title)) {
    return res.status(400).json({ 
      error: 'Title must be a non-empty string' 
    });
  }
  
  // Optional field validation
  if (description !== undefined && !_.isValidString(description, true)) {
    return res.status(400).json({ 
      error: 'Description must be a string if provided' 
    });
  }
  
  // Process valid input...
}
```

## Edge Cases

### Whitespace-Only Strings

```javascript
const _ = require('cleaner-node');

// These are considered empty when isEmptyOkay is false
console.log(_.isValidString(' ')); // false
console.log(_.isValidString('\t')); // false
console.log(_.isValidString('\n')); // false
console.log(_.isValidString('   \t\n   ')); // false

// But valid when isEmptyOkay is true
console.log(_.isValidString(' ', true)); // true
console.log(_.isValidString('\t', true)); // true
```

### String-Like Objects

```javascript
const _ = require('cleaner-node');

// String objects are NOT considered valid strings by this function
console.log(_.isValidString(new String('hello'))); // false

// Other array-like or object types are also invalid
console.log(_.isValidString(['h', 'e', 'l', 'l', 'o'])); // false (array)
console.log(_.isValidString({ toString: () => 'hello' })); // false (object)
```

### Special Characters

```javascript
const _ = require('cleaner-node');

// All valid strings regardless of content
console.log(_.isValidString('!@#$%^&*()')); // true
console.log(_.isValidString('🚀🎉')); // true (emojis)
console.log(_.isValidString('こんにちは')); // true (unicode)
console.log(_.isValidString('123.45')); // true (numeric string)
```

## Common Use Cases

1. **Form Validation**: Ensure user input fields contain valid string data
2. **API Input Validation**: Validate request parameters and body fields
3. **Configuration Validation**: Check configuration values are proper strings
4. **Data Sanitization**: Filter out non-string values from datasets
5. **Template Processing**: Validate template variables before rendering

## Error Handling

This function does not throw errors. It returns `false` for any invalid input rather than throwing exceptions, making it safe to use in validation chains.

```javascript
const _ = require('cleaner-node');

// Safe to call with any value
const values = [null, undefined, 123, [], {}, 'valid'];
const validStrings = values.filter(_.isValidString);
console.log(validStrings); // ['valid']
```

## Performance Notes

- Very fast operation - only performs type checking and string trimming
- No regular expressions or complex parsing
- Safe for high-frequency validation scenarios

## Related Functions

- [`isValidStringIfSet`](./is-valid-string-ifset.md) - Validates strings only if the value is defined
- [`cleanString`](./clean-string.md) - Cleans and normalizes string content
- [`trimString`](./trim-string.md) - Trims whitespace from strings
- [`isSet`](./is-set.md) - Checks if a value is defined and not null
- [`isDefined`](./is-defined.md) - Checks if a value is not undefined

## See Also

- [String Functions](./README.md#string-functions) - All string-related utilities
- [Validation Functions](./README.md#validation-functions) - All validation utilities 