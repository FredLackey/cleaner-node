# isValidStringIfSet

## Purpose
Validates that a value is either not set (null or undefined) or is a valid string. This function is specifically designed for optional string parameters where the absence of a value is acceptable, but if a value is provided, it must be a valid (non-empty) string.

## Syntax
```javascript
const _ = require('cleaner-node');

_.isValidStringIfSet(value, isEmptyOkay)
```

## Parameters
- **value** (any): The value to validate as a string, or null/undefined
- **isEmptyOkay** (boolean, optional): If `true`, empty strings are considered valid. Defaults to `false`

## Returns
- **boolean**: `true` if the value is not set (null/undefined) or is a valid string, `false` otherwise

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Valid cases (returns true)
console.log(_.isValidStringIfSet(null));                  // true (not set)
console.log(_.isValidStringIfSet(undefined));             // true (not set)
console.log(_.isValidStringIfSet('hello'));               // true (valid string)
console.log(_.isValidStringIfSet('world'));               // true (valid string)

// Invalid cases (returns false)
console.log(_.isValidStringIfSet(''));                    // false (empty string, default behavior)
console.log(_.isValidStringIfSet(123));                   // false (number)
console.log(_.isValidStringIfSet({}));                    // false (object)
console.log(_.isValidStringIfSet([]));                    // false (array)
console.log(_.isValidStringIfSet(true));                  // false (boolean)
```

### Using the isEmptyOkay Parameter
```javascript
const _ = require('cleaner-node');

// With isEmptyOkay = false (default)
console.log(_.isValidStringIfSet('', false));             // false
console.log(_.isValidStringIfSet('hello', false));        // true
console.log(_.isValidStringIfSet(null, false));           // true

// With isEmptyOkay = true
console.log(_.isValidStringIfSet('', true));              // true (empty string allowed)
console.log(_.isValidStringIfSet('hello', true));         // true
console.log(_.isValidStringIfSet(null, true));            // true
console.log(_.isValidStringIfSet(123, true));             // false (still not a string)
```

### Practical Applications
```javascript
const _ = require('cleaner-node');

// Optional user profile fields
function updateUserProfile(userId, updates) {
  const errors = [];
  
  // Optional fields that can be null/undefined but must be valid if provided
  if (!_.isValidStringIfSet(updates.firstName)) {
    errors.push('firstName must be a valid string if provided');
  }
  
  if (!_.isValidStringIfSet(updates.lastName)) {
    errors.push('lastName must be a valid string if provided');
  }
  
  // Optional field where empty string is acceptable
  if (!_.isValidStringIfSet(updates.middleName, true)) {
    errors.push('middleName must be a string if provided');
  }
  
  if (errors.length > 0) {
    throw new Error(errors.join(', '));
  }
  
  // Process updates...
  console.log('Updating user profile:', updates);
}

// Valid usage
updateUserProfile('user123', {
  firstName: 'John',
  lastName: null,        // Optional, not set
  middleName: ''         // Optional, empty string allowed
});

// API endpoint with optional query parameters
function searchUsers(req, res) {
  const { name, email, department } = req.query;
  
  // All search parameters are optional
  if (!_.isValidStringIfSet(name)) {
    return res.status(400).json({ error: 'Invalid name parameter' });
  }
  
  if (!_.isValidStringIfSet(email)) {
    return res.status(400).json({ error: 'Invalid email parameter' });
  }
  
  if (!_.isValidStringIfSet(department)) {
    return res.status(400).json({ error: 'Invalid department parameter' });
  }
  
  // Build search criteria
  const criteria = {};
  if (name) criteria.name = name;
  if (email) criteria.email = email;
  if (department) criteria.department = department;
  
  res.json({ message: 'Searching users', criteria });
}

// Configuration validation with optional string settings
function validateConfig(config) {
  const errors = [];
  
  // Required string
  if (!_.isValidString(config.appName)) {
    errors.push('appName is required');
  }
  
  // Optional strings
  if (!_.isValidStringIfSet(config.description)) {
    errors.push('description must be valid if provided');
  }
  
  if (!_.isValidStringIfSet(config.version)) {
    errors.push('version must be valid if provided');
  }
  
  // Optional string where empty is okay
  if (!_.isValidStringIfSet(config.notes, true)) {
    errors.push('notes must be a string if provided');
  }
  
  return errors;
}
```

### Edge Cases and Common Pitfalls

#### Distinguishing Between Not Set and Invalid
```javascript
const _ = require('cleaner-node');

// These are considered "not set" and are valid
console.log(_.isValidStringIfSet(null));        // true
console.log(_.isValidStringIfSet(undefined));   // true

// These are "set" but may be invalid depending on isEmptyOkay
console.log(_.isValidStringIfSet(''));          // false (empty string, isEmptyOkay=false)
console.log(_.isValidStringIfSet('', true));    // true (empty string, isEmptyOkay=true)
console.log(_.isValidStringIfSet(0));           // false (zero is set but not a string)
console.log(_.isValidStringIfSet(false));       // false (false is set but not a string)
```

#### Form Validation Scenarios
```javascript
const _ = require('cleaner-node');

// Form data validation where some fields are optional
function validateFormData(formData) {
  const errors = {};
  
  // Required field
  if (!_.isValidString(formData.email)) {
    errors.email = 'Email is required';
  }
  
  // Optional fields - can be null/undefined but must be valid if provided
  if (!_.isValidStringIfSet(formData.phone)) {
    errors.phone = 'Phone must be valid if provided';
  }
  
  if (!_.isValidStringIfSet(formData.website)) {
    errors.website = 'Website must be valid if provided';
  }
  
  // Optional field where empty string is acceptable (like comments)
  if (!_.isValidStringIfSet(formData.comments, true)) {
    errors.comments = 'Comments must be a string if provided';
  }
  
  return Object.keys(errors).length === 0 ? null : errors;
}

// Valid form submissions
console.log(validateFormData({
  email: 'user@example.com',
  phone: '123-456-7890',
  website: null,           // Optional, not provided
  comments: ''             // Optional, empty string
})); // null (no errors)

console.log(validateFormData({
  email: 'user@example.com'
  // All optional fields undefined
})); // null (no errors)

// Invalid form submission
console.log(validateFormData({
  email: 'user@example.com',
  phone: '',               // Set but empty (invalid)
  website: 123,            // Set but not a string
  comments: []             // Set but not a string
})); 
// { phone: 'Phone must be valid if provided', 
//   website: 'Website must be valid if provided',
//   comments: 'Comments must be a string if provided' }
```

## Implementation Details
The function combines two validation checks:
1. Uses `isSet()` to determine if the value is null or undefined
2. If the value is set, uses `isValidString(value, isEmptyOkay)` to validate the string

The logic: `!isSet(value) || isValidString(value, isEmptyOkay)`
- If not set (null/undefined): returns `true`
- If set: returns the result of `isValidString(value, isEmptyOkay)`

## Related Functions
- **[isValidString](./is-valid-string.md)** - Validates string format (required)
- **[isValidPathIfSet](./is-valid-path-ifset.md)** - Validates optional paths
- **[isValidArrayIfSet](./is-valid-array-ifset.md)** - Validates optional arrays
- **[isSet](./is-set.md)** - Checks if value is not null/undefined
- **[isDefined](./is-defined.md)** - Checks if value is not undefined

## Use Cases
- **Optional Form Fields**: Validating optional string inputs in forms
- **API Parameters**: Handling optional string parameters in REST APIs
- **Configuration Validation**: Validating optional string configuration values
- **User Profile Updates**: Handling optional profile field updates
- **Search Parameters**: Validating optional search query strings
- **Database Fields**: Validating optional string fields in data models

## Performance Notes
- Very fast operation with minimal overhead
- Short-circuits evaluation: if value is not set, doesn't call `isValidString()`
- Safe for use in high-frequency validation scenarios
- Passes through the `isEmptyOkay` parameter efficiently

## Best Practices
- Use for optional string parameters where null/undefined is acceptable
- Consider whether empty strings should be valid for your use case
- Combine with required string validation using `isValidString()` for mandatory fields
- Provide clear error messages that distinguish between "not provided" and "invalid format"
- Use `isEmptyOkay=true` for fields like comments or descriptions where empty content is meaningful 