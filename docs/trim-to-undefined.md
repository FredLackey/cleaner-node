# trimToUndefined

## Purpose
Trims leading and trailing whitespace from a string and returns `undefined` if the resulting string is empty or the input was not a valid string. This function is useful when you want undefined to represent the absence of meaningful content, particularly in object properties and optional parameters.

## Syntax
```javascript
const _ = require('cleaner-node');

_.trimToUndefined(value)
```

## Parameters
- **value** (string): The string to trim

## Returns
- **string|undefined**: The trimmed string, or `undefined` if the result is empty or the input was invalid

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Trim strings with content
console.log(_.trimToUndefined('  hello  '));                // 'hello'
console.log(_.trimToUndefined('\t\nworld\t\n'));            // 'world'
console.log(_.trimToUndefined('   content   '));            // 'content'

// Empty and whitespace-only strings return undefined
console.log(_.trimToUndefined(''));                         // undefined
console.log(_.trimToUndefined('   '));                      // undefined
console.log(_.trimToUndefined('\t\n\r '));                  // undefined

// Non-string inputs return undefined
console.log(_.trimToUndefined(null));                       // undefined
console.log(_.trimToUndefined(undefined));                  // undefined
console.log(_.trimToUndefined(123));                        // undefined
console.log(_.trimToUndefined({}));                         // undefined
```

### Practical Applications
```javascript
const _ = require('cleaner-node');

// Object property cleaning (undefined properties are omitted in JSON)
function cleanUserProfile(profileData) {
  return {
    name: _.trimToUndefined(profileData.name),
    email: _.trimToUndefined(profileData.email),
    bio: _.trimToUndefined(profileData.bio),           // Optional
    website: _.trimToUndefined(profileData.website),   // Optional
    twitter: _.trimToUndefined(profileData.twitter),   // Optional
    linkedin: _.trimToUndefined(profileData.linkedin)  // Optional
  };
}

const rawProfile = {
  name: '  John Doe  ',
  email: 'john@example.com',
  bio: '   ',          // Whitespace only
  website: '',         // Empty
  twitter: '@johndoe',
  linkedin: '   '      // Whitespace only
};

const cleanProfile = cleanUserProfile(rawProfile);
console.log(cleanProfile);
// {
//   name: 'John Doe',
//   email: 'john@example.com',
//   bio: undefined,      // Will be omitted in JSON.stringify
//   website: undefined,  // Will be omitted in JSON.stringify
//   twitter: '@johndoe',
//   linkedin: undefined  // Will be omitted in JSON.stringify
// }

console.log(JSON.stringify(cleanProfile));
// {"name":"John Doe","email":"john@example.com","twitter":"@johndoe"}

// Function parameter defaults
function createApiRequest(endpoint, options = {}) {
  const config = {
    method: 'GET',
    url: endpoint,
    headers: {
      'User-Agent': _.trimToUndefined(options.userAgent),
      'Authorization': _.trimToUndefined(options.authToken),
      'Content-Type': _.trimToUndefined(options.contentType)
    }
  };
  
  // Remove undefined headers
  Object.keys(config.headers).forEach(key => {
    if (config.headers[key] === undefined) {
      delete config.headers[key];
    }
  });
  
  return config;
}

console.log(createApiRequest('/api/users', {
  userAgent: '  MyApp/1.0  ',
  authToken: '',           // Empty, will be undefined
  contentType: 'application/json'
}));
// {
//   method: 'GET',
//   url: '/api/users',
//   headers: {
//     'User-Agent': 'MyApp/1.0',
//     'Content-Type': 'application/json'
//   }
// }

// Form data processing with optional fields
function processFormData(formData) {
  const processed = {};
  
  // Required fields
  processed.firstName = _.trimToUndefined(formData.firstName);
  processed.lastName = _.trimToUndefined(formData.lastName);
  processed.email = _.trimToUndefined(formData.email);
  
  // Optional fields (undefined means not provided)
  const optionalFields = ['middleName', 'phone', 'company', 'notes'];
  optionalFields.forEach(field => {
    const value = _.trimToUndefined(formData[field]);
    if (value !== undefined) {
      processed[field] = value;
    }
  });
  
  return processed;
}

// Configuration merging
function mergeConfig(defaultConfig, userConfig) {
  const merged = { ...defaultConfig };
  
  Object.keys(userConfig).forEach(key => {
    const value = _.trimToUndefined(userConfig[key]);
    if (value !== undefined) {
      merged[key] = value;
    }
    // If undefined, keep the default value
  });
  
  return merged;
}

const defaultConfig = {
  apiUrl: 'https://api.default.com',
  timeout: 5000,
  retries: 3
};

const userConfig = {
  apiUrl: '  https://api.custom.com  ',
  timeout: '',     // Empty, will be undefined, keeps default
  retries: 5
};

console.log(mergeConfig(defaultConfig, userConfig));
// {
//   apiUrl: 'https://api.custom.com',
//   timeout: 5000,    // Kept default because user value was empty
//   retries: 5
// }
```

### Edge Cases and Common Pitfalls

#### Undefined vs Null vs Empty String
```javascript
const _ = require('cleaner-node');

const testValue = '   ';

console.log(_.trimString(testValue));        // '' (empty string)
console.log(_.trimToNull(testValue));        // null
console.log(_.trimToUndefined(testValue));   // undefined

// JSON serialization differences
const obj1 = { value: '' };
const obj2 = { value: null };
const obj3 = { value: undefined };

console.log(JSON.stringify(obj1));          // {"value":""}
console.log(JSON.stringify(obj2));          // {"value":null}
console.log(JSON.stringify(obj3));          // {} (property omitted)
```

#### Object Property Handling
```javascript
const _ = require('cleaner-node');

// Building objects with optional properties
function buildUserObject(data) {
  const user = {
    id: data.id,
    name: data.name
  };
  
  // Only add optional properties if they have meaningful values
  const optionalBio = _.trimToUndefined(data.bio);
  if (optionalBio !== undefined) {
    user.bio = optionalBio;
  }
  
  const optionalWebsite = _.trimToUndefined(data.website);
  if (optionalWebsite !== undefined) {
    user.website = optionalWebsite;
  }
  
  return user;
}

// Or using Object.assign with filtering
function buildUserObjectAlt(data) {
  const base = {
    id: data.id,
    name: data.name
  };
  
  const optional = {
    bio: _.trimToUndefined(data.bio),
    website: _.trimToUndefined(data.website),
    twitter: _.trimToUndefined(data.twitter)
  };
  
  // Filter out undefined values
  Object.keys(optional).forEach(key => {
    if (optional[key] === undefined) {
      delete optional[key];
    }
  });
  
  return Object.assign(base, optional);
}
```

#### Array Processing
```javascript
const _ = require('cleaner-node');

// Clean array of strings, removing empty ones
function cleanStringArray(arr) {
  if (!Array.isArray(arr)) return [];
  
  return arr
    .map(item => _.trimToUndefined(item))
    .filter(item => item !== undefined);
}

console.log(cleanStringArray(['  hello  ', '   ', 'world', '', null]));
// ['hello', 'world']

// Process array while preserving structure
function processArrayWithStructure(arr) {
  return arr.map(item => {
    if (typeof item === 'string') {
      return _.trimToUndefined(item);
    }
    return item;
  });
}

console.log(processArrayWithStructure(['  hello  ', 123, '   ', 'world']));
// ['hello', 123, undefined, 'world']
```

## Implementation Details
The function first trims the string using `trimString()`, then checks if the result is a valid non-empty string using `isValidString()` with `EMPTY_OK` set to `false`. If the trimmed result is empty, it returns `undefined`.

```javascript
const trimToUndefined = value => {
  value = trimString(value);
  return isValidString(value, EMPTY_OK) ? value : undefined;
};
```

Where `EMPTY_OK` is `false`, meaning empty strings are not considered valid.

## Related Functions
- **[trimString](./trim-string.md)** - Trims string and returns empty string for invalid input
- **[trimToNull](./trim-to-null.md)** - Trims string and returns null if empty
- **[isValidString](./is-valid-string.md)** - Validates non-empty strings
- **[cleanString](./clean-string.md)** - Cleans string with custom character patterns

## Use Cases
- **Object Property Cleaning**: Removing empty properties from objects (undefined properties are omitted in JSON)
- **Function Parameter Processing**: Handling optional parameters where undefined means "use default"
- **Configuration Merging**: Merging configs where undefined values should not override defaults
- **API Response Building**: Creating clean API responses where optional fields are omitted
- **Form Data Processing**: Handling optional form fields
- **Template Data Preparation**: Preparing data for templates where undefined properties are ignored

## Performance Notes
- Fast operation using optimized trimString() and validation
- Minimal overhead for undefined checking
- Safe for use in high-frequency data processing
- Efficient for object property cleaning operations

## Best Practices
- Use when undefined has semantic meaning (property not provided, use default value)
- Ideal for optional object properties that should be omitted when empty
- Useful for configuration merging where empty values shouldn't override defaults
- Consider JSON serialization behavior (undefined properties are omitted)
- Combine with object property filtering for clean API responses
- Remember that undefined properties don't appear in JSON.stringify() output 