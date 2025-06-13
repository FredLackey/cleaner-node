# cleanString

Cleans a string by keeping only specified valid characters and removing specified invalid characters.

## Purpose

This function provides flexible string sanitization by allowing you to specify which characters to keep (valid) and which to remove (invalid). It's particularly useful for data cleaning, input sanitization, and preparing strings for specific formats or systems that have character restrictions.

## Syntax

```javascript
cleanString(value, valid, invalid, isCaseSensitive)
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `value` | `*` | - | The input value, expected to be a string |
| `valid` | `string` | `ALPHANUMERIC` | A string containing all valid characters to keep. If empty, all characters are considered valid |
| `invalid` | `string` | `''` | A string containing invalid characters to remove. Takes precedence over valid characters |
| `isCaseSensitive` | `boolean` | `false` | Whether the character matching should be case-sensitive |

## Return Value

- **Type**: `string | undefined`
- **Returns**: The cleaned string with only valid characters, or `undefined` if the input is not a valid string

## Examples

### Basic Usage

```javascript
const _ = require('cleaner-node');

// Default behavior - keep only alphanumeric characters
console.log(_.cleanString('Hello, World! 123')); // 'HelloWorld123'
console.log(_.cleanString('user@example.com')); // 'userexamplecom'
console.log(_.cleanString('Price: $29.99')); // 'Price2999'
```

### Custom Valid Characters

```javascript
const _ = require('cleaner-node');

// Keep only letters and spaces
console.log(_.cleanString('Hello, World! 123', 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ '));
// 'Hello World'

// Keep only digits and decimal points
console.log(_.cleanString('Price: $29.99', '0123456789.'));
// '29.99'

// Keep only specific characters
console.log(_.cleanString('a1b2c3d4', 'abc'));
// 'abcd'
```

### Invalid Characters Removal

```javascript
const _ = require('cleaner-node');

// Remove specific characters (invalid takes precedence)
console.log(_.cleanString('Hello, World!', '', ',!'));
// 'Hello World'

// Remove punctuation but keep everything else
console.log(_.cleanString('Hello, World! How are you?', '', ',.!?'));
// 'Hello World How are you'

// Remove numbers
console.log(_.cleanString('abc123def456', '', '0123456789'));
// 'abcdef'
```

### Case Sensitivity

```javascript
const _ = require('cleaner-node');

// Case insensitive (default)
console.log(_.cleanString('Hello World', 'hello world'));
// 'HelloWorld'

// Case sensitive
console.log(_.cleanString('Hello World', 'hello world', '', true));
// 'elloorld' (only lowercase letters match)

console.log(_.cleanString('Hello World', 'Hello World', '', true));
// 'HelloWorld' (exact case match)
```

### Phone Number Cleaning

```javascript
const _ = require('cleaner-node');

function cleanPhoneNumber(phone) {
  // Keep only digits, parentheses, hyphens, and spaces
  return _.cleanString(phone, '0123456789()- ');
}

console.log(cleanPhoneNumber('(555) 123-4567 ext. 890'));
// '(555) 123-4567 '

console.log(cleanPhoneNumber('+1-555-123-4567'));
// '1-555-123-4567'
```

### Username Sanitization

```javascript
const _ = require('cleaner-node');

function sanitizeUsername(username) {
  // Keep alphanumeric, underscore, and hyphen
  const validChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-';
  return _.cleanString(username, validChars);
}

console.log(sanitizeUsername('user@domain.com'));
// 'userdomaincom'

console.log(sanitizeUsername('my_user-name123!'));
// 'my_user-name123'
```

### File Name Cleaning

```javascript
const _ = require('cleaner-node');

function cleanFileName(filename) {
  // Remove characters that are invalid in file names
  const invalidChars = '<>:"/\\|?*';
  return _.cleanString(filename, '', invalidChars);
}

console.log(cleanFileName('My Document: Version 2.0'));
// 'My Document Version 2.0'

console.log(cleanFileName('file<name>.txt'));
// 'filename.txt'
```

## Edge Cases

### Empty and Invalid Inputs

```javascript
const _ = require('cleaner-node');

// Non-string inputs return undefined
console.log(_.cleanString(123)); // undefined
console.log(_.cleanString(null)); // undefined
console.log(_.cleanString(undefined)); // undefined
console.log(_.cleanString([])); // undefined

// Empty string returns empty string
console.log(_.cleanString('')); // ''

// Whitespace-only strings
console.log(_.cleanString('   ')); // '' (spaces removed by default)
console.log(_.cleanString('   ', ' ')); // '   ' (spaces kept)
```

### No Valid Characters Match

```javascript
const _ = require('cleaner-node');

// When no characters match the valid set
console.log(_.cleanString('Hello World', '123')); // ''
console.log(_.cleanString('!@#$%', 'abc')); // ''
```

### Conflicting Valid and Invalid

```javascript
const _ = require('cleaner-node');

// Invalid characters take precedence over valid
console.log(_.cleanString('abc123', 'abc123', '123'));
// 'abc' (123 is removed despite being in valid)
```

## Common Use Cases

1. **Input Sanitization**: Clean user input for security and consistency
2. **Data Import**: Standardize data from external sources
3. **Username/ID Generation**: Create clean identifiers from user input
4. **File Name Sanitization**: Remove invalid characters from file names
5. **Phone Number Formatting**: Extract digits and formatting characters
6. **URL Slug Creation**: Create clean URL-friendly strings
7. **Database Field Cleaning**: Prepare data for storage with character restrictions

## Error Handling

This function does not throw errors. It returns `undefined` for invalid inputs rather than throwing exceptions.

```javascript
const _ = require('cleaner-node');

// Safe to call with any value
const values = [null, 'valid string', 123, undefined];
const cleaned = values.map(v => _.cleanString(v)).filter(v => v !== undefined);
console.log(cleaned); // ['validstring'] (assuming default ALPHANUMERIC)
```

## Performance Notes

- Efficient character-by-character filtering
- Uses native string methods for optimal performance
- Suitable for processing large amounts of text data

## Related Functions

- [`isValidString`](./is-valid-string.md) - Validates if a value is a string
- [`cleanAlphanumeric`](./clean-alphanumeric.md) - Specifically cleans to alphanumeric only
- [`cleanDigits`](./clean-digits.md) - Extracts only digits from a string
- [`hasString`](./has-string.md) - Checks if a string contains a substring
- [`trimString`](./trim-string.md) - Trims whitespace from strings
- [`removePrefix`](./remove-prefix.md) - Removes prefix from strings
- [`removeSuffix`](./remove-suffix.md) - Removes suffix from strings

## Constants Used

- `ALPHANUMERIC` - Default valid characters constant containing `'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'`

## See Also

- [String Functions](./README.md#string-functions) - All string-related utilities
- [Validation Functions](./README.md#validation-functions) - All validation utilities 