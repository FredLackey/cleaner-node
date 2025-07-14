# isBoolean

Checks if a value is strictly true or false.

## Purpose

The `isBoolean` function determines whether a value is exactly `true` or `false`, providing strict boolean validation. Unlike JavaScript's truthy/falsy evaluation, this function only returns `true` for actual boolean primitives.

## Syntax

```javascript
const _ = require('cleaner-node');
const result = _.isBoolean(value);
```

## Parameters

- **value** (any): The value to check

## Returns

**boolean**: `true` if the value is exactly `true` or `false`, `false` otherwise

## Examples

### Basic Usage

```javascript
const _ = require('cleaner-node');

// Boolean primitives
console.log(_.isBoolean(true));    // true
console.log(_.isBoolean(false));   // true

// Other types
console.log(_.isBoolean(1));       // false
console.log(_.isBoolean(0));       // false
console.log(_.isBoolean('true'));  // false
console.log(_.isBoolean('false')); // false
console.log(_.isBoolean(null));    // false
console.log(_.isBoolean(undefined)); // false
```

### Form Validation

```javascript
const _ = require('cleaner-node');

function validateForm(data) {
  const validation = {
    isValid: true,
    errors: []
  };
  
  if (!_.isBoolean(data.isActive)) {
    validation.isValid = false;
    validation.errors.push('isActive must be a boolean');
  }
  
  if (!_.isBoolean(data.acceptTerms)) {
    validation.isValid = false;
    validation.errors.push('acceptTerms must be a boolean');
  }
  
  return validation;
}

// Valid form data
const validData = {
  isActive: true,
  acceptTerms: false
};
console.log(validateForm(validData)); // { isValid: true, errors: [] }

// Invalid form data
const invalidData = {
  isActive: 'yes',
  acceptTerms: 1
};
console.log(validateForm(invalidData)); 
// { isValid: false, errors: ['isActive must be a boolean', 'acceptTerms must be a boolean'] }
```

### API Response Validation

```javascript
const _ = require('cleaner-node');

function validateApiResponse(response) {
  const requiredBooleans = ['success', 'isPublic', 'hasErrors'];
  
  return requiredBooleans.every(field => {
    const value = response[field];
    if (!_.isBoolean(value)) {
      console.error(`Invalid boolean field: ${field} = ${value}`);
      return false;
    }
    return true;
  });
}

const validResponse = {
  success: true,
  isPublic: false,
  hasErrors: false,
  data: {}
};
console.log(validateApiResponse(validResponse)); // true

const invalidResponse = {
  success: 'true',
  isPublic: 1,
  hasErrors: false,
  data: {}
};
console.log(validateApiResponse(invalidResponse)); // false
```

## Related Functions

- [`isBooleanIfSet`](./is-boolean-ifset.md) - Validates boolean or unset values
- [`isSet`](./is-set.md) - Checks if a value is not null or undefined
- [`isDefined`](./is-defined.md) - Checks if a value is not undefined 