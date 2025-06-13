# isValidArray

Checks if a value is an array and optionally validates that it contains at least one element.

## Purpose

This function provides robust array validation by checking both the type and content of a value. It's particularly useful for API input validation, data processing pipelines, and form validation where you need to ensure a value is not only an array but also contains meaningful data.

## Syntax

```javascript
isValidArray(value, isEmptyOkay)
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `value` | `*` | - | The value to check (can be any type) |
| `isEmptyOkay` | `boolean` | `false` | If `true`, empty arrays are considered valid. If `false`, the array must contain at least one element |

## Return Value

- **Type**: `boolean`
- **Returns**: `true` if the value is an array and meets the emptiness condition, `false` otherwise

## Examples

### Basic Usage

```javascript
const _ = require('cleaner-node');

// Valid arrays
console.log(_.isValidArray([1, 2, 3])); // true
console.log(_.isValidArray(['a', 'b', 'c'])); // true
console.log(_.isValidArray([{ id: 1 }])); // true

// Invalid - not arrays
console.log(_.isValidArray('hello')); // false
console.log(_.isValidArray(123)); // false
console.log(_.isValidArray(null)); // false
console.log(_.isValidArray(undefined)); // false
console.log(_.isValidArray({})); // false
```

### Empty Array Handling

```javascript
const _ = require('cleaner-node');

// Default behavior - empty arrays are invalid
console.log(_.isValidArray([])); // false

// Allow empty arrays
console.log(_.isValidArray([], true)); // true
```

### API Input Validation

```javascript
const _ = require('cleaner-node');

function processApiRequest(req, res) {
  const { items, tags, categories } = req.body;
  
  // Validate required array fields
  if (!_.isValidArray(items)) {
    return res.status(400).json({ 
      error: 'Items must be a non-empty array' 
    });
  }
  
  // Optional array fields - empty allowed
  if (tags !== undefined && !_.isValidArray(tags, true)) {
    return res.status(400).json({ 
      error: 'Tags must be an array if provided' 
    });
  }
  
  // Process valid input...
  console.log(`Processing ${items.length} items`);
}
```

### Data Processing Pipeline

```javascript
const _ = require('cleaner-node');

function processDataBatch(data) {
  const errors = [];
  const results = [];
  
  // Validate input is a non-empty array
  if (!_.isValidArray(data)) {
    throw new Error('Input must be a non-empty array');
  }
  
  data.forEach((item, index) => {
    try {
      // Process each item
      const processed = processItem(item);
      results.push(processed);
    } catch (error) {
      errors.push({ index, error: error.message });
    }
  });
  
  return { results, errors };
}

function processItem(item) {
  // Item processing logic
  return { ...item, processed: true };
}

// Usage
const batch = [{ id: 1 }, { id: 2 }, { id: 3 }];
const result = processDataBatch(batch);
console.log(result.results.length); // 3
```

### Form Validation

```javascript
const _ = require('cleaner-node');

function validateFormData(formData) {
  const errors = [];
  
  // Required array fields
  if (!_.isValidArray(formData.skills)) {
    errors.push('Skills must be a non-empty array');
  }
  
  if (!_.isValidArray(formData.interests)) {
    errors.push('Interests must be a non-empty array');
  }
  
  // Optional array fields
  if (formData.hobbies !== undefined && !_.isValidArray(formData.hobbies, true)) {
    errors.push('Hobbies must be an array if provided');
  }
  
  return errors;
}

// Usage
const validForm = {
  skills: ['JavaScript', 'Node.js'],
  interests: ['Programming', 'Music'],
  hobbies: []
};

const invalidForm = {
  skills: 'JavaScript', // Should be array
  interests: null,      // Should be array
  hobbies: 'Reading'    // Should be array if provided
};

console.log(validateFormData(validForm));   // []
console.log(validateFormData(invalidForm)); // ['Skills must be...', 'Interests must be...', 'Hobbies must be...']
```

### Configuration Validation

```javascript
const _ = require('cleaner-node');

function validateConfig(config) {
  const requiredArrays = ['servers', 'databases', 'environments'];
  const optionalArrays = ['plugins', 'middlewares'];
  
  for (const key of requiredArrays) {
    if (!_.isValidArray(config[key])) {
      throw new Error(`Configuration error: ${key} must be a non-empty array`);
    }
  }
  
  for (const key of optionalArrays) {
    if (config[key] !== undefined && !_.isValidArray(config[key], true)) {
      throw new Error(`Configuration error: ${key} must be an array if provided`);
    }
  }
  
  return true;
}

// Valid configuration
const validConfig = {
  servers: ['server1', 'server2'],
  databases: ['db1'],
  environments: ['dev', 'prod'],
  plugins: [],
  middlewares: ['auth', 'cors']
};

console.log(validateConfig(validConfig)); // true
```

## Edge Cases

### Array-Like Objects

```javascript
const _ = require('cleaner-node');

// These are NOT considered valid arrays
console.log(_.isValidArray(arguments)); // false (arguments object)
console.log(_.isValidArray({ 0: 'a', 1: 'b', length: 2 })); // false (array-like object)
console.log(_.isValidArray('hello')); // false (string with length property)
console.log(_.isValidArray(new Set([1, 2, 3]))); // false (Set object)
```

### Special Array Types

```javascript
const _ = require('cleaner-node');

// All valid arrays
console.log(_.isValidArray(new Array(3))); // false (sparse array with undefined elements)
console.log(_.isValidArray(new Array(1, 2, 3))); // true (array with elements)
console.log(_.isValidArray(Array.from('hello'))); // true (['h', 'e', 'l', 'l', 'o'])
console.log(_.isValidArray([...new Set([1, 2, 3])])); // true (spread from Set)
```

### Nested Arrays

```javascript
const _ = require('cleaner-node');

// Nested arrays are valid
console.log(_.isValidArray([[1, 2], [3, 4]])); // true
console.log(_.isValidArray([[], []])); // true (contains empty arrays)
console.log(_.isValidArray([[]])); // true (contains one empty array)
```

## Common Use Cases

1. **API Input Validation**: Ensure request bodies contain valid array data
2. **Data Processing**: Validate input before processing batches of data
3. **Configuration Validation**: Check configuration arrays are properly formatted
4. **Form Validation**: Validate multi-select fields and list inputs
5. **Database Query Validation**: Ensure query parameters are valid arrays
6. **File Processing**: Validate arrays of file paths or file objects
7. **Bulk Operations**: Validate arrays before performing bulk operations

## Error Handling

This function does not throw errors. It returns `false` for any invalid input rather than throwing exceptions, making it safe to use in validation chains.

```javascript
const _ = require('cleaner-node');

// Safe to call with any value
const values = [null, undefined, 'string', [], [1, 2, 3], {}];
const validArrays = values.filter(_.isValidArray);
console.log(validArrays); // [[1, 2, 3]]
```

## Performance Notes

- Very fast operation - only performs type checking and length checking
- No iteration through array elements
- Safe for high-frequency validation scenarios
- Efficient for large arrays (only checks type and length, not contents)

## Related Functions

- [`isValidArrayIfSet`](./is-valid-array-ifset.md) - Validates arrays only if the value is defined
- [`isEmptyArray`](./is-empty-array.md) - Specifically checks if an array is empty
- [`getArrayCount`](./get-array-count.md) - Gets the count of items in an array
- [`initArray`](./init-array.md) - Initializes arrays with default values
- [`trimArray`](./trim-array.md) - Trims whitespace from array elements
- [`unique`](./unique.md) - Gets unique elements from an array

## See Also

- [Array Functions](./README.md#array-functions) - All array-related utilities
- [Validation Functions](./README.md#validation-functions) - All validation utilities 