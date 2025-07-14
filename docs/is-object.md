# isObject

Checks if a value is a plain JavaScript object (not null, not an array).

## Purpose

The `isObject` function determines whether a value is a plain JavaScript object. It specifically excludes `null` (which is technically an object in JavaScript) and arrays, returning `true` only for genuine object literals and object instances.

## Syntax

```javascript
const _ = require('cleaner-node');
const result = _.isObject(value);
```

## Parameters

- **value** (any): The value to check

## Returns

**boolean**: `true` if the value is a plain object, `false` otherwise

## Examples

### Basic Usage

```javascript
const _ = require('cleaner-node');

// Plain objects
console.log(_.isObject({}));              // true
console.log(_.isObject({ key: 'value' })); // true
console.log(_.isObject(new Object()));     // true

// Not plain objects
console.log(_.isObject(null));            // false
console.log(_.isObject([]));              // false
console.log(_.isObject([1, 2, 3]));       // false
console.log(_.isObject('string'));        // false
console.log(_.isObject(123));             // false
console.log(_.isObject(true));            // false
console.log(_.isObject(undefined));       // false
console.log(_.isObject(new Date()));      // true (Date objects are still objects)
console.log(_.isObject(new RegExp()));    // true (RegExp objects are still objects)
```

### Data Validation

```javascript
const _ = require('cleaner-node');

function validateUserData(data) {
  if (!_.isObject(data)) {
    return {
      isValid: false,
      error: 'Data must be an object'
    };
  }
  
  const requiredFields = ['name', 'email'];
  const missingFields = requiredFields.filter(field => !data[field]);
  
  if (missingFields.length > 0) {
    return {
      isValid: false,
      error: `Missing required fields: ${missingFields.join(', ')}`
    };
  }
  
  return { isValid: true };
}

// Valid user data
const validUser = {
  name: 'John Doe',
  email: 'john@example.com',
  age: 30
};
console.log(validateUserData(validUser)); // { isValid: true }

// Invalid data types
console.log(validateUserData(null));     // { isValid: false, error: 'Data must be an object' }
console.log(validateUserData([]));       // { isValid: false, error: 'Data must be an object' }
console.log(validateUserData('string')); // { isValid: false, error: 'Data must be an object' }
```

### Configuration Processing

```javascript
const _ = require('cleaner-node');

function processConfig(config) {
  if (!_.isObject(config)) {
    throw new Error('Configuration must be an object');
  }
  
  // Apply defaults for missing properties
  const defaultConfig = {
    host: 'localhost',
    port: 3000,
    ssl: false,
    debug: false
  };
  
  return { ...defaultConfig, ...config };
}

function validateNestedConfig(config) {
  const errors = [];
  
  if (!_.isObject(config)) {
    errors.push('Root configuration must be an object');
    return errors;
  }
  
  // Check nested objects
  if (config.database !== undefined && !_.isObject(config.database)) {
    errors.push('database configuration must be an object');
  }
  
  if (config.logging !== undefined && !_.isObject(config.logging)) {
    errors.push('logging configuration must be an object');
  }
  
  return errors;
}

// Valid configurations
const validConfig = {
  host: 'api.example.com',
  port: 8080,
  database: {
    host: 'db.example.com',
    port: 5432
  }
};

console.log(processConfig(validConfig));
// { host: 'api.example.com', port: 8080, ssl: false, debug: false, database: { host: 'db.example.com', port: 5432 } }

console.log(validateNestedConfig(validConfig)); // []

// Invalid configurations
console.log(validateNestedConfig({
  database: 'invalid',  // Should be object
  logging: []           // Should be object, not array
}));
// ['database configuration must be an object', 'logging configuration must be an object']
```

### API Response Processing

```javascript
const _ = require('cleaner-node');

function processApiResponse(response) {
  if (!_.isObject(response)) {
    throw new Error('API response must be an object');
  }
  
  const result = {
    success: false,
    data: null,
    error: null
  };
  
  if (response.success === true) {
    result.success = true;
    result.data = response.data;
  } else {
    result.error = response.error || 'Unknown error';
  }
  
  return result;
}

function validateResponseStructure(responses) {
  if (!Array.isArray(responses)) {
    return { valid: false, error: 'Responses must be an array' };
  }
  
  const invalidResponses = responses
    .map((response, index) => ({ response, index }))
    .filter(({ response }) => !_.isObject(response))
    .map(({ index }) => index);
  
  if (invalidResponses.length > 0) {
    return {
      valid: false,
      error: `Responses at indices ${invalidResponses.join(', ')} are not objects`
    };
  }
  
  return { valid: true };
}

// Valid API responses
const validResponse = { success: true, data: { users: [] } };
console.log(processApiResponse(validResponse)); // { success: true, data: { users: [] }, error: null }

const responses = [
  { success: true, data: {} },
  { success: false, error: 'Not found' },
  { success: true, data: { count: 5 } }
];
console.log(validateResponseStructure(responses)); // { valid: true }

// Invalid responses
const invalidResponses = [
  { success: true },
  'not an object',  // Invalid
  { success: false },
  null             // Invalid
];
console.log(validateResponseStructure(invalidResponses)); 
// { valid: false, error: 'Responses at indices 1, 3 are not objects' }
```

### Deep Object Validation

```javascript
const _ = require('cleaner-node');

function validateObjectStructure(obj, schema) {
  if (!_.isObject(obj)) {
    return { valid: false, errors: ['Root value must be an object'] };
  }
  
  const errors = [];
  
  for (const [key, expectedType] of Object.entries(schema)) {
    const value = obj[key];
    
    if (expectedType === 'object' && value !== undefined && !_.isObject(value)) {
      errors.push(`${key} must be an object`);
    }
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}

const userSchema = {
  profile: 'object',
  settings: 'object',
  preferences: 'object'
};

const validUser = {
  name: 'John',
  profile: { bio: 'Developer' },
  settings: { theme: 'dark' },
  preferences: { notifications: true }
};

const invalidUser = {
  name: 'Jane',
  profile: 'string instead of object',  // Invalid
  settings: { theme: 'light' },
  preferences: []                       // Invalid - array instead of object
};

console.log(validateObjectStructure(validUser, userSchema)); // { valid: true, errors: [] }
console.log(validateObjectStructure(invalidUser, userSchema)); 
// { valid: false, errors: ['profile must be an object', 'preferences must be an object'] }
```

## Related Functions

- [`isValidObject`](./is-valid-object.md) - Validates objects with additional criteria
- [`isSet`](./is-set.md) - Checks if a value is not null or undefined
- [`isDefined`](./is-defined.md) - Checks if a value is not undefined
- [`isValidArray`](./is-valid-array.md) - Validates array values
- [`isFunction`](./is-function.md) - Validates function values 