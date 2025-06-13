# isSet

## Purpose
Checks if a value is neither `null` nor `undefined`. This function is useful for determining if a value has been meaningfully assigned, excluding both explicit null assignments and undefined variables.

## Syntax
```javascript
const _ = require('cleaner-node');

_.isSet(value)
```

## Parameters
- **value** (any): The value to check

## Returns
- **boolean**: `true` if the value is not `null` and not `undefined`, `false` otherwise

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Set values (returns true)
console.log(_.isSet('hello'));               // true
console.log(_.isSet(123));                   // true
console.log(_.isSet(0));                     // true
console.log(_.isSet(false));                 // true
console.log(_.isSet(''));                    // true (empty string is set)
console.log(_.isSet([]));                    // true
console.log(_.isSet({}));                    // true
console.log(_.isSet(NaN));                   // true

// Not set values (returns false)
console.log(_.isSet(null));                  // false
console.log(_.isSet(undefined));             // false
let uninitialized;
console.log(_.isSet(uninitialized));         // false
```

### Practical Applications
```javascript
const _ = require('cleaner-node');

// Optional parameter handling
function createUser(name, email, age = null) {
  const user = { name, email };
  
  // Only add age if it's actually set (not null or undefined)
  if (_.isSet(age)) {
    user.age = age;
  }
  
  return user;
}

console.log(createUser('John', 'john@example.com', 25));
// { name: 'John', email: 'john@example.com', age: 25 }

console.log(createUser('Jane', 'jane@example.com', null));
// { name: 'Jane', email: 'jane@example.com' }

console.log(createUser('Bob', 'bob@example.com'));
// { name: 'Bob', email: 'bob@example.com' }

// Configuration validation
function validateSettings(settings) {
  const errors = [];
  
  // Required settings must be set
  if (!_.isSet(settings.apiUrl)) {
    errors.push('apiUrl is required');
  }
  
  if (!_.isSet(settings.apiKey)) {
    errors.push('apiKey is required');
  }
  
  // Optional settings with defaults
  const config = {
    apiUrl: settings.apiUrl,
    apiKey: settings.apiKey,
    timeout: _.isSet(settings.timeout) ? settings.timeout : 5000,
    retries: _.isSet(settings.retries) ? settings.retries : 3,
    debug: _.isSet(settings.debug) ? settings.debug : false
  };
  
  return { errors, config };
}

// Valid settings
console.log(validateSettings({
  apiUrl: 'https://api.example.com',
  apiKey: 'abc123',
  timeout: 10000,
  retries: null,    // Will use default
  debug: undefined  // Will use default
}));

// Database record filtering
function filterRecords(records, filters) {
  return records.filter(record => {
    // Only apply filters that are actually set
    if (_.isSet(filters.status) && record.status !== filters.status) {
      return false;
    }
    
    if (_.isSet(filters.category) && record.category !== filters.category) {
      return false;
    }
    
    if (_.isSet(filters.minPrice) && record.price < filters.minPrice) {
      return false;
    }
    
    return true;
  });
}

const records = [
  { id: 1, status: 'active', category: 'A', price: 100 },
  { id: 2, status: 'inactive', category: 'B', price: 200 },
  { id: 3, status: 'active', category: 'A', price: 150 }
];

// Filter with some criteria set
console.log(filterRecords(records, {
  status: 'active',
  category: null,     // Ignored
  minPrice: undefined // Ignored
}));
// Returns records with status 'active'
```

### Edge Cases and Common Pitfalls

#### Distinguishing Between Not Set and Falsy Values
```javascript
const _ = require('cleaner-node');

// These are set (even though they're falsy)
console.log(_.isSet(false));                 // true
console.log(_.isSet(0));                     // true
console.log(_.isSet(''));                    // true
console.log(_.isSet(NaN));                   // true

// These are not set
console.log(_.isSet(null));                  // false
console.log(_.isSet(undefined));             // false

// This distinction is important for form validation
function validateForm(formData) {
  const errors = {};
  
  // Required field - must be set and not empty
  if (!_.isSet(formData.email) || formData.email === '') {
    errors.email = 'Email is required';
  }
  
  // Optional field - if set, must not be empty
  if (_.isSet(formData.phone) && formData.phone === '') {
    errors.phone = 'Phone cannot be empty if provided';
  }
  
  // Boolean field - false is a valid value
  if (!_.isSet(formData.newsletter)) {
    errors.newsletter = 'Newsletter preference must be specified';
  }
  
  return errors;
}
```

#### Object Property Checking
```javascript
const _ = require('cleaner-node');

// Checking object properties
const user = {
  name: 'John',
  email: 'john@example.com',
  age: null,        // Explicitly set to null
  phone: undefined  // Explicitly set to undefined
};

console.log(_.isSet(user.name));      // true
console.log(_.isSet(user.email));     // true
console.log(_.isSet(user.age));       // false (null)
console.log(_.isSet(user.phone));     // false (undefined)
console.log(_.isSet(user.address));   // false (property doesn't exist)

// Building clean objects
function buildCleanUser(userData) {
  const cleanUser = {};
  
  // Only include properties that are actually set
  Object.keys(userData).forEach(key => {
    if (_.isSet(userData[key])) {
      cleanUser[key] = userData[key];
    }
  });
  
  return cleanUser;
}

console.log(buildCleanUser(user));
// { name: 'John', email: 'john@example.com' }
```

#### API Response Handling
```javascript
const _ = require('cleaner-node');

// Handling API responses with optional fields
function processApiResponse(response) {
  const result = {
    id: response.id,
    name: response.name
  };
  
  // Optional fields - only include if set
  if (_.isSet(response.description)) {
    result.description = response.description;
  }
  
  if (_.isSet(response.metadata)) {
    result.metadata = response.metadata;
  }
  
  // Handle nested optional data
  if (_.isSet(response.user) && _.isSet(response.user.avatar)) {
    result.userAvatar = response.user.avatar;
  }
  
  return result;
}

// Response with some optional fields
const apiResponse = {
  id: 123,
  name: 'Product Name',
  description: 'Product description',
  metadata: null,     // Explicitly null
  user: {
    id: 456,
    avatar: undefined // Explicitly undefined
  }
};

console.log(processApiResponse(apiResponse));
// { id: 123, name: 'Product Name', description: 'Product description' }
```

## Implementation Details
The function performs a simple check for both `null` and `undefined`:
```javascript
const isSet = value => {
  return (value !== null && (typeof value !== 'undefined'));
};
```

This combines null checking with undefined checking in a single operation.

## Related Functions
- **[isDefined](./is-defined.md)** - Checks if value is not undefined (allows null)
- **[isValidString](./is-valid-string.md)** - Validates non-empty strings
- **[isValidArray](./is-valid-array.md)** - Validates non-empty arrays
- **[isValidObject](./is-valid-object.md)** - Validates non-empty objects
- **[isValidStringIfSet](./is-valid-string-ifset.md)** - Validates strings only if set
- **[isValidArrayIfSet](./is-valid-array-ifset.md)** - Validates arrays only if set
- **[isValidPathIfSet](./is-valid-path-ifset.md)** - Validates paths only if set

## Use Cases
- **Optional Parameter Handling**: Determining when to use default values
- **Configuration Validation**: Checking if config values are meaningfully set
- **Form Validation**: Distinguishing between unset and falsy form fields
- **API Response Processing**: Handling optional response fields
- **Object Cleaning**: Removing null/undefined properties from objects
- **Database Operations**: Filtering out unset values before persistence

## Performance Notes
- Very fast operation with minimal overhead
- Uses simple comparison operations
- Safe for use in high-frequency validation scenarios
- No memory allocation or complex logic

## Best Practices
- Use `isSet()` when you want to exclude both `null` and `undefined`
- Use `isDefined()` if you only want to exclude `undefined` (allowing `null`)
- Remember that falsy values like `false`, `0`, and `''` are considered "set"
- Useful for optional parameters where both `null` and `undefined` mean "not provided"
- Combine with other validation functions for comprehensive data validation 