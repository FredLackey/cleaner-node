# isValidObject

## Purpose
Validates that a value is a non-empty plain JavaScript object. This function ensures the value is not only an object (not null, not an array), but also contains at least one property, making it truly "valid" for use in applications.

## Syntax
```javascript
const _ = require('cleaner-node');

_.isValidObject(value)
```

## Parameters
- **value** (any): The value to validate as a non-empty object

## Returns
- **boolean**: `true` if the value is a plain JavaScript object with at least one property, `false` otherwise

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Valid objects (returns true)
console.log(_.isValidObject({ name: 'John' }));           // true
console.log(_.isValidObject({ a: 1, b: 2 }));            // true
console.log(_.isValidObject({ nested: { key: 'value' }})); // true

// Invalid objects (returns false)
console.log(_.isValidObject({}));                        // false (empty object)
console.log(_.isValidObject(null));                      // false
console.log(_.isValidObject(undefined));                 // false
console.log(_.isValidObject([]));                        // false (array)
console.log(_.isValidObject([1, 2, 3]));                // false (array)
console.log(_.isValidObject('string'));                  // false
console.log(_.isValidObject(123));                       // false
console.log(_.isValidObject(true));                      // false
```

### Practical Applications
```javascript
const _ = require('cleaner-node');

// Validating API request data
function processUserData(userData) {
  if (!_.isValidObject(userData)) {
    throw new Error('Invalid user data: must be a non-empty object');
  }
  
  // Safe to process userData properties
  return {
    id: userData.id,
    name: userData.name,
    email: userData.email
  };
}

// Filtering arrays for valid objects
const mixedData = [
  { name: 'John' },
  null,
  {},
  { age: 30 },
  [],
  'string',
  { city: 'New York', country: 'USA' }
];

const validObjects = mixedData.filter(_.isValidObject);
console.log(validObjects);
// Output: [{ name: 'John' }, { age: 30 }, { city: 'New York', country: 'USA' }]

// Configuration validation
function initializeApp(config) {
  if (!_.isValidObject(config)) {
    console.warn('No valid configuration provided, using defaults');
    config = { mode: 'development', debug: true };
  }
  
  return {
    mode: config.mode || 'production',
    debug: config.debug || false,
    port: config.port || 3000
  };
}
```

### Edge Cases and Common Pitfalls

#### Empty Objects
```javascript
const _ = require('cleaner-node');

// Empty objects are considered invalid
console.log(_.isValidObject({}));                    // false
console.log(_.isValidObject(Object.create(null)));   // false

// Objects with properties are valid
console.log(_.isValidObject({ key: undefined }));    // true (has a key)
console.log(_.isValidObject({ key: null }));         // true (has a key)
```

#### Arrays vs Objects
```javascript
const _ = require('cleaner-node');

// Arrays are not considered valid objects
console.log(_.isValidObject([]));                    // false
console.log(_.isValidObject([1, 2, 3]));            // false
console.log(_.isValidObject(new Array()));           // false

// Array-like objects are valid if they have properties
console.log(_.isValidObject({ 0: 'a', 1: 'b', length: 2 })); // true
```

#### Special Object Types
```javascript
const _ = require('cleaner-node');

// Date objects are considered valid objects
console.log(_.isValidObject(new Date()));            // true

// RegExp objects are considered valid objects  
console.log(_.isValidObject(/pattern/));             // true

// Function objects are considered valid objects
console.log(_.isValidObject(function() {}));         // true

// Built-in objects with properties are valid
console.log(_.isValidObject(new Error('message')));  // true
```

## Implementation Details
The function performs a two-step validation:
1. Uses `isObject()` to ensure the value is a plain JavaScript object (not null, not an array)
2. Checks that the object has at least one enumerable property using `Object.keys().length > 0`

## Related Functions
- **[isObject](./is-object.md)** - Checks if value is a plain JavaScript object (allows empty objects)
- **[isValidString](./is-valid-string.md)** - Validates non-empty strings
- **[isValidArray](./is-valid-array.md)** - Validates non-empty arrays
- **[isDefined](./is-defined.md)** - Checks if value is not null or undefined
- **[isSet](./is-set.md)** - Checks if value is set (not null, undefined, or empty)

## Use Cases
- **API Validation**: Ensuring request payloads contain actual data
- **Configuration Validation**: Verifying configuration objects have settings
- **Data Processing**: Filtering collections for objects with content
- **Form Validation**: Checking that form data objects contain fields
- **Database Operations**: Validating objects before persistence
- **Conditional Logic**: Making decisions based on object validity

## Performance Notes
- Very fast operation with O(1) complexity for the object check
- O(n) complexity for counting keys, where n is the number of enumerable properties
- Minimal memory overhead
- Safe for use in high-frequency validation scenarios 