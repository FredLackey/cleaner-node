# isNumber

Checks if a value can be interpreted as a finite number.

## Purpose

The `isNumber` function determines whether a value can be interpreted as a finite number. It handles both number primitives and strings that represent numbers, using `parseFloat` and `isFinite` for validation. This provides more flexible number validation than strict type checking.

## Syntax

```javascript
const _ = require('cleaner-node');
const result = _.isNumber(value);
```

## Parameters

- **value** (any): The value to check

## Returns

**boolean**: `true` if the value is a finite number or can be parsed as one, `false` otherwise

## Examples

### Basic Usage

```javascript
const _ = require('cleaner-node');

// Number primitives
console.log(_.isNumber(42));        // true
console.log(_.isNumber(3.14));      // true
console.log(_.isNumber(-10));       // true
console.log(_.isNumber(0));         // true

// String representations of numbers
console.log(_.isNumber('42'));      // true
console.log(_.isNumber('3.14'));    // true
console.log(_.isNumber('-10'));     // true
console.log(_.isNumber('0'));       // true

// Invalid numbers
console.log(_.isNumber(NaN));       // false
console.log(_.isNumber(Infinity));  // false
console.log(_.isNumber(-Infinity)); // false
console.log(_.isNumber('abc'));     // false
console.log(_.isNumber(''));        // false
console.log(_.isNumber(null));      // false
console.log(_.isNumber(undefined)); // false
console.log(_.isNumber({}));        // false
console.log(_.isNumber([]));        // false
```

### Form Input Validation

```javascript
const _ = require('cleaner-node');

function validateForm(formData) {
  const validation = {
    isValid: true,
    errors: []
  };
  
  if (!_.isNumber(formData.age)) {
    validation.isValid = false;
    validation.errors.push('Age must be a valid number');
  }
  
  if (!_.isNumber(formData.price)) {
    validation.isValid = false;
    validation.errors.push('Price must be a valid number');
  }
  
  if (!_.isNumber(formData.quantity)) {
    validation.isValid = false;
    validation.errors.push('Quantity must be a valid number');
  }
  
  return validation;
}

// Valid form data (mixed types)
const validData = {
  age: 25,           // number
  price: '19.99',    // string number
  quantity: '5'      // string number
};
console.log(validateForm(validData)); // { isValid: true, errors: [] }

// Invalid form data
const invalidData = {
  age: 'twenty-five',
  price: 'free',
  quantity: null
};
console.log(validateForm(invalidData)); 
// { isValid: false, errors: ['Age must be a valid number', 'Price must be a valid number', 'Quantity must be a valid number'] }
```

### Configuration Validation

```javascript
const _ = require('cleaner-node');

function validateServerConfig(config) {
  const numericFields = ['port', 'maxConnections', 'timeout'];
  const errors = [];
  
  numericFields.forEach(field => {
    if (config[field] !== undefined && !_.isNumber(config[field])) {
      errors.push(`${field} must be a valid number`);
    }
  });
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

// Valid configuration
const validConfig = {
  port: '3000',        // string number is ok
  maxConnections: 100, // number is ok
  timeout: '30000'     // string number is ok
};
console.log(validateServerConfig(validConfig)); // { isValid: true, errors: [] }

// Invalid configuration
const invalidConfig = {
  port: 'auto',
  maxConnections: 'unlimited',
  timeout: true
};
console.log(validateServerConfig(invalidConfig));
// { isValid: false, errors: ['port must be a valid number', 'maxConnections must be a valid number', 'timeout must be a valid number'] }
```

### Array Filtering

```javascript
const _ = require('cleaner-node');

function filterNumbers(array) {
  return array.filter(item => _.isNumber(item));
}

function processNumbers(array) {
  const numbers = filterNumbers(array);
  const sum = numbers.reduce((acc, num) => acc + parseFloat(num), 0);
  
  return {
    original: array,
    numbers: numbers,
    sum: sum,
    average: numbers.length > 0 ? sum / numbers.length : 0
  };
}

const mixedArray = [1, '2', '3.5', 'hello', null, '4.2', true, 0, 'world'];
console.log(processNumbers(mixedArray));
// {
//   original: [1, '2', '3.5', 'hello', null, '4.2', true, 0, 'world'],
//   numbers: [1, '2', '3.5', '4.2', 0],
//   sum: 10.7,
//   average: 2.14
// }
```

### API Parameter Validation

```javascript
const _ = require('cleaner-node');

function validateApiParameters(params) {
  const requiredNumbers = ['userId', 'limit'];
  const optionalNumbers = ['offset', 'timeout'];
  
  const errors = [];
  
  // Check required numeric parameters
  requiredNumbers.forEach(param => {
    if (!_.isNumber(params[param])) {
      errors.push(`${param} is required and must be a number`);
    }
  });
  
  // Check optional numeric parameters
  optionalNumbers.forEach(param => {
    if (params[param] !== undefined && !_.isNumber(params[param])) {
      errors.push(`${param} must be a number if provided`);
    }
  });
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

// Valid parameters
const validParams = {
  userId: '123',
  limit: 10,
  offset: '20'
};
console.log(validateApiParameters(validParams)); // { isValid: true, errors: [] }

// Invalid parameters
const invalidParams = {
  userId: 'abc',
  limit: 'all',
  timeout: 'forever'
};
console.log(validateApiParameters(invalidParams));
// { isValid: false, errors: ['userId is required and must be a number', 'limit is required and must be a number', 'timeout must be a number if provided'] }
```

## Related Functions

- [`isDigits`](./is-digits.md) - Checks if a string contains only digits
- [`isSet`](./is-set.md) - Checks if a value is not null or undefined
- [`isDefined`](./is-defined.md) - Checks if a value is not undefined
- [`isValidString`](./is-valid-string.md) - Validates string values 