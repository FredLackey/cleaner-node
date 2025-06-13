# isValidArrayIfSet

## Purpose
Validates that a value is either not set (null or undefined) or is a valid array. This function is specifically designed for optional array parameters where the absence of a value is acceptable, but if a value is provided, it must be a valid (non-empty) array.

## Syntax
```javascript
const _ = require('cleaner-node');

_.isValidArrayIfSet(value, isEmptyOkay)
```

## Parameters
- **value** (any): The value to validate as an array, or null/undefined
- **isEmptyOkay** (boolean, optional): If `true`, empty arrays are considered valid. Defaults to `false`

## Returns
- **boolean**: `true` if the value is not set (null/undefined) or is a valid array, `false` otherwise

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Valid cases (returns true)
console.log(_.isValidArrayIfSet(null));                   // true (not set)
console.log(_.isValidArrayIfSet(undefined));              // true (not set)
console.log(_.isValidArrayIfSet([1, 2, 3]));             // true (valid array)
console.log(_.isValidArrayIfSet(['a', 'b']));            // true (valid array)

// Invalid cases (returns false)
console.log(_.isValidArrayIfSet([]));                     // false (empty array, default behavior)
console.log(_.isValidArrayIfSet('string'));               // false (string)
console.log(_.isValidArrayIfSet(123));                    // false (number)
console.log(_.isValidArrayIfSet({}));                     // false (object)
console.log(_.isValidArrayIfSet(true));                   // false (boolean)
```

### Using the isEmptyOkay Parameter
```javascript
const _ = require('cleaner-node');

// With isEmptyOkay = false (default)
console.log(_.isValidArrayIfSet([], false));              // false
console.log(_.isValidArrayIfSet([1, 2], false));          // true
console.log(_.isValidArrayIfSet(null, false));            // true

// With isEmptyOkay = true
console.log(_.isValidArrayIfSet([], true));               // true (empty array allowed)
console.log(_.isValidArrayIfSet([1, 2], true));           // true
console.log(_.isValidArrayIfSet(null, true));             // true
console.log(_.isValidArrayIfSet('string', true));         // false (still not an array)
```

### Practical Applications
```javascript
const _ = require('cleaner-node');

// Optional filter parameters in API
function searchProducts(req, res) {
  const { categories, tags, colors } = req.body;
  
  // All filter arrays are optional
  if (!_.isValidArrayIfSet(categories)) {
    return res.status(400).json({ error: 'Invalid categories filter' });
  }
  
  if (!_.isValidArrayIfSet(tags)) {
    return res.status(400).json({ error: 'Invalid tags filter' });
  }
  
  if (!_.isValidArrayIfSet(colors)) {
    return res.status(400).json({ error: 'Invalid colors filter' });
  }
  
  // Build search criteria
  const filters = {};
  if (categories) filters.categories = categories;
  if (tags) filters.tags = tags;
  if (colors) filters.colors = colors;
  
  res.json({ message: 'Searching products', filters });
}

// Configuration validation with optional array settings
function validateAppConfig(config) {
  const errors = [];
  
  // Required array
  if (!_.isValidArray(config.requiredModules)) {
    errors.push('requiredModules is required and must be a non-empty array');
  }
  
  // Optional arrays
  if (!_.isValidArrayIfSet(config.optionalModules)) {
    errors.push('optionalModules must be a valid array if provided');
  }
  
  if (!_.isValidArrayIfSet(config.excludedPaths)) {
    errors.push('excludedPaths must be a valid array if provided');
  }
  
  // Optional array where empty is acceptable
  if (!_.isValidArrayIfSet(config.debugFlags, true)) {
    errors.push('debugFlags must be an array if provided');
  }
  
  return errors;
}

// User preferences with optional arrays
function updateUserPreferences(userId, preferences) {
  const errors = [];
  
  // Optional preference arrays
  if (!_.isValidArrayIfSet(preferences.favoriteCategories)) {
    errors.push('favoriteCategories must be an array if provided');
  }
  
  if (!_.isValidArrayIfSet(preferences.blockedUsers)) {
    errors.push('blockedUsers must be an array if provided');
  }
  
  // Optional array where empty array means "clear all notifications"
  if (!_.isValidArrayIfSet(preferences.notificationTypes, true)) {
    errors.push('notificationTypes must be an array if provided');
  }
  
  if (errors.length > 0) {
    throw new Error(errors.join(', '));
  }
  
  console.log('Updating preferences for user:', userId, preferences);
}

// Valid usage
updateUserPreferences('user123', {
  favoriteCategories: ['tech', 'sports'],
  blockedUsers: null,           // Optional, not set
  notificationTypes: []         // Optional, empty array to clear all
});
```

### Edge Cases and Common Pitfalls

#### Distinguishing Between Not Set and Invalid
```javascript
const _ = require('cleaner-node');

// These are considered "not set" and are valid
console.log(_.isValidArrayIfSet(null));        // true
console.log(_.isValidArrayIfSet(undefined));   // true

// These are "set" but may be invalid depending on isEmptyOkay
console.log(_.isValidArrayIfSet([]));          // false (empty array, isEmptyOkay=false)
console.log(_.isValidArrayIfSet([], true));    // true (empty array, isEmptyOkay=true)
console.log(_.isValidArrayIfSet(''));          // false (empty string is set but not an array)
console.log(_.isValidArrayIfSet(0));           // false (zero is set but not an array)
```

#### Array-like Objects vs Real Arrays
```javascript
const _ = require('cleaner-node');

// Real arrays are valid
console.log(_.isValidArrayIfSet([1, 2, 3]));           // true
console.log(_.isValidArrayIfSet(new Array(3)));        // false (empty array by default)
console.log(_.isValidArrayIfSet(new Array(1, 2, 3)));  // true

// Array-like objects are not considered arrays
console.log(_.isValidArrayIfSet({ 0: 'a', 1: 'b', length: 2 })); // false
console.log(_.isValidArrayIfSet(arguments));           // false (in function context)

// NodeList, HTMLCollection, etc. are not considered arrays
// console.log(_.isValidArrayIfSet(document.querySelectorAll('div'))); // false
```

#### Bulk Data Validation
```javascript
const _ = require('cleaner-node');

// Validating multiple optional array fields
function validateBulkData(data) {
  const errors = {};
  
  // Check each optional array field
  const optionalArrayFields = ['items', 'categories', 'tags', 'metadata'];
  
  optionalArrayFields.forEach(field => {
    if (!_.isValidArrayIfSet(data[field])) {
      errors[field] = `${field} must be a valid array if provided`;
    }
  });
  
  return Object.keys(errors).length === 0 ? null : errors;
}

// Valid data
console.log(validateBulkData({
  items: [1, 2, 3],
  categories: null,     // Optional, not set
  tags: ['tag1'],       // Optional, provided
  metadata: undefined   // Optional, not set
})); // null (no errors)

// Invalid data
console.log(validateBulkData({
  items: [1, 2, 3],
  categories: 'string', // Set but not an array
  tags: [],             // Set but empty (invalid by default)
  metadata: {}          // Set but not an array
})); 
// { categories: 'categories must be a valid array if provided',
//   tags: 'tags must be a valid array if provided',
//   metadata: 'metadata must be a valid array if provided' }
```

## Implementation Details
The function combines two validation checks:
1. Uses `isSet()` to determine if the value is null or undefined
2. If the value is set, uses `isValidArray(value, isEmptyOkay)` to validate the array

The logic: `!isSet(value) || isValidArray(value, isEmptyOkay)`
- If not set (null/undefined): returns `true`
- If set: returns the result of `isValidArray(value, isEmptyOkay)`

## Related Functions
- **[isValidArray](./is-valid-array.md)** - Validates array format (required)
- **[isValidStringIfSet](./is-valid-string-ifset.md)** - Validates optional strings
- **[isValidPathIfSet](./is-valid-path-ifset.md)** - Validates optional paths
- **[isSet](./is-set.md)** - Checks if value is not null/undefined
- **[isDefined](./is-defined.md)** - Checks if value is not undefined

## Use Cases
- **Optional Filter Parameters**: Validating optional array filters in search APIs
- **Configuration Arrays**: Validating optional array configuration values
- **User Preferences**: Handling optional array preferences (favorites, blocked items)
- **Bulk Operations**: Validating optional arrays in bulk data processing
- **Form Data**: Validating optional multi-select form inputs
- **API Parameters**: Handling optional array parameters in REST endpoints

## Performance Notes
- Very fast operation with minimal overhead
- Short-circuits evaluation: if value is not set, doesn't call `isValidArray()`
- Safe for use in high-frequency validation scenarios
- Passes through the `isEmptyOkay` parameter efficiently

## Best Practices
- Use for optional array parameters where null/undefined is acceptable
- Consider whether empty arrays should be valid for your use case
- Use `isEmptyOkay=true` when empty arrays have semantic meaning (like "clear all")
- Combine with required array validation using `isValidArray()` for mandatory fields
- Provide clear error messages that distinguish between "not provided" and "invalid format"
- Remember that array-like objects are not considered valid arrays 