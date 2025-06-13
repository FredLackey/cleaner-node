# trimToNull

## Purpose
Trims leading and trailing whitespace from a string and returns `null` if the resulting string is empty or the input was not a valid string. This function is useful when you want to distinguish between meaningful content and empty/whitespace-only values.

## Syntax
```javascript
const _ = require('cleaner-node');

_.trimToNull(value)
```

## Parameters
- **value** (string): The string to trim

## Returns
- **string|null**: The trimmed string, or `null` if the result is empty or the input was invalid

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Trim strings with content
console.log(_.trimToNull('  hello  '));                     // 'hello'
console.log(_.trimToNull('\t\nworld\t\n'));                 // 'world'
console.log(_.trimToNull('   content   '));                 // 'content'

// Empty and whitespace-only strings return null
console.log(_.trimToNull(''));                              // null
console.log(_.trimToNull('   '));                           // null
console.log(_.trimToNull('\t\n\r '));                       // null

// Non-string inputs return null
console.log(_.trimToNull(null));                            // null
console.log(_.trimToNull(undefined));                       // null
console.log(_.trimToNull(123));                             // null
console.log(_.trimToNull({}));                              // null
```

### Practical Applications
```javascript
const _ = require('cleaner-node');

// Database field preparation
function prepareUserData(userData) {
  return {
    firstName: _.trimToNull(userData.firstName),
    lastName: _.trimToNull(userData.lastName),
    middleName: _.trimToNull(userData.middleName),    // Optional field
    nickname: _.trimToNull(userData.nickname),        // Optional field
    bio: _.trimToNull(userData.bio)                   // Optional field
  };
}

const rawUserData = {
  firstName: '  John  ',
  lastName: 'Doe',
  middleName: '   ',      // Whitespace only
  nickname: '',           // Empty
  bio: '  Software Developer  '
};

console.log(prepareUserData(rawUserData));
// {
//   firstName: 'John',
//   lastName: 'Doe',
//   middleName: null,     // Converted from whitespace
//   nickname: null,       // Converted from empty
//   bio: 'Software Developer'
// }

// Form validation with optional fields
function validateContactForm(formData) {
  const cleaned = {
    name: _.trimToNull(formData.name),
    email: _.trimToNull(formData.email),
    phone: _.trimToNull(formData.phone),      // Optional
    company: _.trimToNull(formData.company),  // Optional
    message: _.trimToNull(formData.message)
  };
  
  const errors = [];
  
  if (!cleaned.name) {
    errors.push('Name is required');
  }
  
  if (!cleaned.email) {
    errors.push('Email is required');
  }
  
  if (!cleaned.message) {
    errors.push('Message is required');
  }
  
  return { cleaned, errors };
}

// API response cleaning
function cleanApiResponse(response) {
  return {
    id: response.id,
    title: _.trimToNull(response.title),
    description: _.trimToNull(response.description),
    tags: response.tags?.map(tag => _.trimToNull(tag)).filter(tag => tag !== null),
    metadata: {
      author: _.trimToNull(response.metadata?.author),
      category: _.trimToNull(response.metadata?.category)
    }
  };
}

// Configuration processing
function processConfig(rawConfig) {
  const config = {};
  
  // Required settings
  config.apiUrl = _.trimToNull(rawConfig.apiUrl);
  if (!config.apiUrl) {
    throw new Error('API URL is required');
  }
  
  // Optional settings (null means use default)
  config.apiKey = _.trimToNull(rawConfig.apiKey);
  config.userAgent = _.trimToNull(rawConfig.userAgent);
  config.proxyUrl = _.trimToNull(rawConfig.proxyUrl);
  
  return config;
}
```

### Edge Cases and Common Pitfalls

#### Null vs Empty String Semantics
```javascript
const _ = require('cleaner-node');

// Understanding the difference between null and empty string
const data = {
  required: _.trimToNull('  value  '),      // 'value'
  optional1: _.trimToNull('   '),           // null (whitespace only)
  optional2: _.trimToNull(''),              // null (empty)
  optional3: _.trimToNull(null),            // null (already null)
  optional4: _.trimToNull(undefined)        // null (undefined)
};

// In database context, null often means "not provided" while empty string means "explicitly empty"
function insertUser(userData) {
  const sql = `
    INSERT INTO users (name, email, bio, website) 
    VALUES (?, ?, ?, ?)
  `;
  
  const values = [
    userData.name,                          // Required, should not be null
    userData.email,                         // Required, should not be null
    _.trimToNull(userData.bio),             // Optional, null = no bio provided
    _.trimToNull(userData.website)          // Optional, null = no website provided
  ];
  
  return { sql, values };
}
```

#### Comparison with trimString and trimToUndefined
```javascript
const _ = require('cleaner-node');

const testValue = '   ';

console.log(_.trimString(testValue));        // '' (empty string)
console.log(_.trimToNull(testValue));        // null
console.log(_.trimToUndefined(testValue));   // undefined

// Use cases for each:
// - trimString: When you want consistent string output
// - trimToNull: When null has semantic meaning (database, JSON)
// - trimToUndefined: When undefined has semantic meaning (optional object properties)
```

#### Array and Object Processing
```javascript
const _ = require('cleaner-node');

// Processing arrays of strings
function cleanStringArray(arr) {
  if (!Array.isArray(arr)) return [];
  
  return arr
    .map(item => _.trimToNull(item))
    .filter(item => item !== null);  // Remove null values
}

console.log(cleanStringArray(['  hello  ', '   ', 'world', '']));
// ['hello', 'world']

// Processing object properties
function cleanObjectStrings(obj) {
  const result = {};
  
  Object.keys(obj).forEach(key => {
    const value = obj[key];
    if (typeof value === 'string') {
      const trimmed = _.trimToNull(value);
      if (trimmed !== null) {
        result[key] = trimmed;  // Only include non-null values
      }
    } else {
      result[key] = value;
    }
  });
  
  return result;
}

const messyObject = {
  name: '  John  ',
  email: 'john@example.com',
  bio: '   ',           // Will be excluded
  website: '',          // Will be excluded
  age: 30
};

console.log(cleanObjectStrings(messyObject));
// { name: 'John', email: 'john@example.com', age: 30 }
```

## Implementation Details
The function first trims the string using `trimString()`, then checks if the result is a valid non-empty string using `isValidString()` with `EMPTY_OK` set to `false`. If the trimmed result is empty, it returns `null`.

```javascript
const trimToNull = value => {
  value = trimString(value);
  return isValidString(value, EMPTY_OK) ? value : null;
};
```

Where `EMPTY_OK` is `false`, meaning empty strings are not considered valid.

## Related Functions
- **[trimString](./trim-string.md)** - Trims string and returns empty string for invalid input
- **[trimToUndefined](./trim-to-undefined.md)** - Trims string and returns undefined if empty
- **[isValidString](./is-valid-string.md)** - Validates non-empty strings
- **[cleanString](./clean-string.md)** - Cleans string with custom character patterns

## Use Cases
- **Database Field Preparation**: Converting empty strings to null for database storage
- **API Response Cleaning**: Normalizing optional string fields in API responses
- **Form Data Processing**: Handling optional form fields where empty means "not provided"
- **Configuration Processing**: Handling optional config values
- **JSON Serialization**: Preparing data where null has semantic meaning
- **Data Import**: Cleaning imported data where empty values should be null

## Performance Notes
- Fast operation using optimized trimString() and validation
- Minimal overhead for null checking
- Safe for use in high-frequency data processing
- Efficient for bulk data cleaning operations

## Best Practices
- Use when null has semantic meaning in your application (e.g., database fields)
- Ideal for optional fields where "not provided" should be represented as null
- Combine with validation to ensure required fields are not null
- Consider the difference between null, undefined, and empty string in your data model
- Useful for API data cleaning where consistent null handling is important 