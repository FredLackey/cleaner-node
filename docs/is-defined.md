# isDefined

## Purpose
Checks if a value is defined (i.e., not `undefined`). This is a fundamental validation function that determines whether a variable has been assigned any value, including `null`, empty strings, or falsy values.

## Syntax
```javascript
const _ = require('cleaner-node');

_.isDefined(value)
```

## Parameters
- **value** (any): The value to check for definition

## Returns
- **boolean**: `true` if the value is not `undefined`, `false` if it is `undefined`

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Defined values (returns true)
console.log(_.isDefined('hello'));           // true
console.log(_.isDefined(123));               // true
console.log(_.isDefined(0));                 // true
console.log(_.isDefined(false));             // true
console.log(_.isDefined(null));              // true (null is defined)
console.log(_.isDefined(''));                // true (empty string is defined)
console.log(_.isDefined([]));                // true
console.log(_.isDefined({}));                // true

// Undefined values (returns false)
console.log(_.isDefined(undefined));         // false
let uninitialized;
console.log(_.isDefined(uninitialized));     // false
```

### Practical Applications
```javascript
const _ = require('cleaner-node');

// Function parameter validation
function processUser(user) {
  if (!_.isDefined(user)) {
    throw new Error('User parameter is required');
  }
  
  // user could be null, but at least it was passed
  if (user === null) {
    console.log('User is explicitly null');
  } else {
    console.log('Processing user:', user);
  }
}

// Valid calls
processUser({ name: 'John' });    // Works
processUser(null);                // Works (null is defined)
processUser('');                  // Works (empty string is defined)
// processUser();                 // Would throw error (undefined)

// Object property checking
function validateConfig(config) {
  const errors = [];
  
  // Check if properties are defined (even if they're null or empty)
  if (!_.isDefined(config.apiKey)) {
    errors.push('apiKey must be defined');
  }
  
  if (!_.isDefined(config.timeout)) {
    errors.push('timeout must be defined');
  }
  
  if (!_.isDefined(config.retries)) {
    errors.push('retries must be defined');
  }
  
  return errors;
}

// Valid config (all properties defined, even if some are null/0)
console.log(validateConfig({
  apiKey: 'abc123',
  timeout: 5000,
  retries: 0        // Defined as 0
})); // []

// Invalid config (missing properties)
console.log(validateConfig({
  apiKey: 'abc123'
  // timeout and retries are undefined
})); // ['timeout must be defined', 'retries must be defined']

// API response validation
function handleApiResponse(response) {
  if (!_.isDefined(response)) {
    throw new Error('Response is undefined');
  }
  
  // Response could be null (error case) or an object (success case)
  if (response === null) {
    console.log('API returned null response');
    return { error: 'No data available' };
  }
  
  return { data: response };
}
```

### Edge Cases and Common Pitfalls

#### Distinguishing Between Undefined and Other Falsy Values
```javascript
const _ = require('cleaner-node');

// All of these are defined, even though they're falsy
console.log(_.isDefined(null));              // true
console.log(_.isDefined(false));             // true
console.log(_.isDefined(0));                 // true
console.log(_.isDefined(''));                // true
console.log(_.isDefined(NaN));               // true

// Only undefined is not defined
console.log(_.isDefined(undefined));         // false

// Variable declarations without assignment
let declared;
console.log(_.isDefined(declared));          // false

// Object properties that don't exist
const obj = { a: 1 };
console.log(_.isDefined(obj.a));             // true
console.log(_.isDefined(obj.b));             // false (property doesn't exist)
```

#### Function Parameters and Default Values
```javascript
const _ = require('cleaner-node');

// Traditional parameter checking
function oldWay(param1, param2, param3) {
  if (!_.isDefined(param1)) {
    param1 = 'default1';
  }
  if (!_.isDefined(param2)) {
    param2 = 'default2';
  }
  if (!_.isDefined(param3)) {
    param3 = 'default3';
  }
  
  console.log({ param1, param2, param3 });
}

// Modern ES6 way (for comparison)
function modernWay(param1 = 'default1', param2 = 'default2', param3 = 'default3') {
  console.log({ param1, param2, param3 });
}

// Both handle undefined the same way
oldWay('a', undefined, 'c');    // { param1: 'a', param2: 'default2', param3: 'c' }
modernWay('a', undefined, 'c'); // { param1: 'a', param2: 'default2', param3: 'c' }

// But they handle null differently
oldWay('a', null, 'c');         // { param1: 'a', param2: null, param3: 'c' }
modernWay('a', null, 'c');      // { param1: 'a', param2: null, param3: 'c' }
```

#### Array and Object Property Validation
```javascript
const _ = require('cleaner-node');

// Checking array elements
const arr = [1, 2, , 4]; // Note the empty slot at index 2
console.log(_.isDefined(arr[0]));    // true
console.log(_.isDefined(arr[1]));    // true
console.log(_.isDefined(arr[2]));    // false (empty slot)
console.log(_.isDefined(arr[3]));    // true
console.log(_.isDefined(arr[10]));   // false (out of bounds)

// Checking nested object properties
const nested = {
  level1: {
    level2: {
      value: null
    }
  }
};

console.log(_.isDefined(nested.level1));                    // true
console.log(_.isDefined(nested.level1.level2));             // true
console.log(_.isDefined(nested.level1.level2.value));       // true (null is defined)
console.log(_.isDefined(nested.level1.level2.missing));     // false
// console.log(_.isDefined(nested.missing.level2));         // Would throw error
```

## Implementation Details
The function uses a simple `typeof` check to determine if a value is undefined:
```javascript
const isDefined = value => (typeof value !== 'undefined');
```

This is more reliable than comparing directly to `undefined` because it works even if `undefined` has been reassigned (in older JavaScript environments).

## Related Functions
- **[isSet](./is-set.md)** - Checks if value is not null and not undefined
- **[isValidString](./is-valid-string.md)** - Validates non-empty strings
- **[isValidArray](./is-valid-array.md)** - Validates non-empty arrays
- **[isValidObject](./is-valid-object.md)** - Validates non-empty objects
- **[isValidStringIfSet](./is-valid-string-ifset.md)** - Validates strings only if defined
- **[isValidArrayIfSet](./is-valid-array-ifset.md)** - Validates arrays only if defined

## Use Cases
- **Parameter Validation**: Ensuring function parameters are provided
- **Configuration Checking**: Verifying config properties are defined
- **API Response Validation**: Checking if response data is defined
- **Object Property Validation**: Ensuring required properties exist
- **Default Value Assignment**: Determining when to use default values
- **Debugging**: Identifying undefined variables during development

## Performance Notes
- Extremely fast operation with minimal overhead
- Uses native `typeof` operator for maximum performance
- Safe for use in high-frequency validation scenarios
- No memory allocation or complex logic

## Best Practices
- Use `isDefined()` when you need to distinguish between `undefined` and other falsy values
- Combine with other validation functions for comprehensive checks
- Consider using `isSet()` if you want to exclude both `null` and `undefined`
- Remember that `null` is considered defined - use `isSet()` if this matters
- Useful for parameter validation in functions that need to handle `null` differently from `undefined` 