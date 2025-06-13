# trimString

## Purpose
Trims leading and trailing whitespace from a string. If the input is not a valid string (including empty strings), it returns an empty string. This function is useful for cleaning user input and normalizing string data.

## Syntax
```javascript
const _ = require('cleaner-node');

_.trimString(value)
```

## Parameters
- **value** (string): The string to trim

## Returns
- **string**: The trimmed string, or an empty string if the input was invalid

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Trim whitespace from strings
console.log(_.trimString('  hello  '));                     // 'hello'
console.log(_.trimString('\t\nworld\t\n'));                 // 'world'
console.log(_.trimString('   spaces   '));                  // 'spaces'
console.log(_.trimString('no-spaces'));                     // 'no-spaces'

// Empty and whitespace-only strings
console.log(_.trimString(''));                              // ''
console.log(_.trimString('   '));                           // ''
console.log(_.trimString('\t\n\r '));                       // ''

// Non-string inputs return empty string
console.log(_.trimString(null));                            // ''
console.log(_.trimString(undefined));                       // ''
console.log(_.trimString(123));                             // ''
console.log(_.trimString({}));                              // ''
```

### Practical Applications
```javascript
const _ = require('cleaner-node');

// Form input cleaning
function cleanFormInput(formData) {
  return {
    firstName: _.trimString(formData.firstName),
    lastName: _.trimString(formData.lastName),
    email: _.trimString(formData.email),
    comments: _.trimString(formData.comments)
  };
}

const rawFormData = {
  firstName: '  John  ',
  lastName: '\tDoe\n',
  email: '  john@example.com  ',
  comments: '   Great service!   '
};

console.log(cleanFormInput(rawFormData));
// {
//   firstName: 'John',
//   lastName: 'Doe', 
//   email: 'john@example.com',
//   comments: 'Great service!'
// }

// CSV data cleaning
function cleanCsvRow(csvRow) {
  return csvRow.map(cell => _.trimString(cell));
}

const csvData = ['  Name  ', '  Age  ', '  City  '];
console.log(cleanCsvRow(csvData));                          // ['Name', 'Age', 'City']

// Configuration value cleaning
function loadConfig(configObject) {
  const cleanConfig = {};
  
  Object.keys(configObject).forEach(key => {
    const value = configObject[key];
    if (typeof value === 'string') {
      cleanConfig[key] = _.trimString(value);
    } else {
      cleanConfig[key] = value;
    }
  });
  
  return cleanConfig;
}

const rawConfig = {
  apiUrl: '  https://api.example.com  ',
  apiKey: '\tabc123\n',
  timeout: 5000,
  debug: '  true  '
};

console.log(loadConfig(rawConfig));
// {
//   apiUrl: 'https://api.example.com',
//   apiKey: 'abc123',
//   timeout: 5000,
//   debug: 'true'
// }

// Search query normalization
function normalizeSearchQuery(query) {
  const trimmed = _.trimString(query);
  
  if (trimmed.length === 0) {
    throw new Error('Search query cannot be empty');
  }
  
  // Additional normalization
  return trimmed.toLowerCase().replace(/\s+/g, ' ');
}

console.log(normalizeSearchQuery('  JavaScript   Tutorial  '));  // 'javascript tutorial'
console.log(normalizeSearchQuery('\tNode.js\n'));               // 'node.js'
```

### Edge Cases and Common Pitfalls

#### Different Types of Whitespace
```javascript
const _ = require('cleaner-node');

// Various whitespace characters
console.log(_.trimString(' \t\n\r\f\v hello \t\n\r\f\v '));  // 'hello'
console.log(_.trimString('\u00A0hello\u00A0'));              // 'hello' (non-breaking space)
console.log(_.trimString('\u2000hello\u2000'));              // 'hello' (en quad)

// Internal whitespace is preserved
console.log(_.trimString('  hello   world  '));             // 'hello   world'
console.log(_.trimString('\thello\tworld\t'));               // 'hello\tworld'
```

#### Non-String Input Handling
```javascript
const _ = require('cleaner-node');

// Numbers become empty strings
console.log(_.trimString(123));                              // ''
console.log(_.trimString(0));                                // ''
console.log(_.trimString(-456));                             // ''

// Booleans become empty strings
console.log(_.trimString(true));                             // ''
console.log(_.trimString(false));                            // ''

// Objects and arrays become empty strings
console.log(_.trimString({}));                               // ''
console.log(_.trimString([]));                               // ''
console.log(_.trimString([1, 2, 3]));                        // ''

// Null and undefined
console.log(_.trimString(null));                             // ''
console.log(_.trimString(undefined));                        // ''
```

#### Empty String Handling
```javascript
const _ = require('cleaner-node');

// Empty strings remain empty
console.log(_.trimString(''));                               // ''

// Whitespace-only strings become empty
console.log(_.trimString('   '));                            // ''
console.log(_.trimString('\t\n\r'));                         // ''

// This differs from native trim() which would throw on non-strings
// Native: '  hello  '.trim() === 'hello'
// Native: null.trim() throws TypeError
// trimString: _.trimString(null) === ''
```

#### Validation and Error Handling
```javascript
const _ = require('cleaner-node');

// Safe trimming with validation
function safeTrimString(value, required = false) {
  const trimmed = _.trimString(value);
  
  if (required && trimmed.length === 0) {
    throw new Error('Value is required and cannot be empty');
  }
  
  return trimmed;
}

console.log(safeTrimString('  hello  '));                    // 'hello'
console.log(safeTrimString('  ', false));                    // ''
// safeTrimString('  ', true);                               // throws Error

// Bulk string trimming
function trimObjectStrings(obj) {
  const result = {};
  
  Object.keys(obj).forEach(key => {
    const value = obj[key];
    if (typeof value === 'string') {
      result[key] = _.trimString(value);
    } else if (value && typeof value === 'object') {
      result[key] = trimObjectStrings(value); // Recursive for nested objects
    } else {
      result[key] = value;
    }
  });
  
  return result;
}

const nestedData = {
  name: '  John  ',
  details: {
    address: '  123 Main St  ',
    phone: '  555-1234  '
  },
  age: 30
};

console.log(trimObjectStrings(nestedData));
// {
//   name: 'John',
//   details: {
//     address: '123 Main St',
//     phone: '555-1234'
//   },
//   age: 30
// }
```

## Implementation Details
The function first validates that the input is a valid string using `isValidString(value, EMPTY_OK)` where `EMPTY_OK` is `true`. If valid, it calls the native `trim()` method; otherwise, it returns an empty string.

```javascript
const trimString = value => {
  return isValidString(value, EMPTY_OK)
    ? value.trim()
    : '';
};
```

## Related Functions
- **[trimToNull](./trim-to-null.md)** - Trims string and returns null if empty
- **[trimToUndefined](./trim-to-undefined.md)** - Trims string and returns undefined if empty
- **[cleanString](./clean-string.md)** - Cleans string with custom character patterns
- **[isValidString](./is-valid-string.md)** - Validates non-empty strings
- **[hasString](./has-string.md)** - Checks if string contains substring

## Use Cases
- **Form Input Cleaning**: Removing whitespace from user input
- **Data Import**: Cleaning CSV or text file data
- **Configuration Processing**: Normalizing config values
- **Search Query Processing**: Cleaning search terms
- **API Parameter Sanitization**: Cleaning string parameters
- **Database Preparation**: Normalizing data before storage

## Performance Notes
- Very fast operation using native `trim()` method
- Minimal overhead for type checking
- Safe for use in high-frequency data processing
- Returns empty string for invalid inputs instead of throwing errors

## Best Practices
- Use for cleaning user input before validation
- Combine with other validation functions for comprehensive data cleaning
- Consider using `trimToNull()` or `trimToUndefined()` if you need different behavior for empty results
- Safe alternative to native `trim()` when input type is uncertain
- Useful in data processing pipelines where input consistency is important 