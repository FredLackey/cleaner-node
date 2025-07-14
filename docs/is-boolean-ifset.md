# isBooleanIfSet

Checks if a value is either not set (null or undefined) or is a boolean (true or false).

## Purpose

The `isBooleanIfSet` function is useful for validating optional boolean parameters. It returns `true` if the value is either unset (null or undefined) or is a valid boolean. This is particularly helpful when dealing with optional flags or settings that should be boolean when provided.

## Syntax

```javascript
const _ = require('cleaner-node');
const result = _.isBooleanIfSet(value);
```

## Parameters

- **value** (any): The value to check

## Returns

**boolean**: `true` if the value is not set or is a boolean, `false` otherwise

## Examples

### Basic Usage

```javascript
const _ = require('cleaner-node');

// Valid cases (not set)
console.log(_.isBooleanIfSet(null));      // true
console.log(_.isBooleanIfSet(undefined)); // true

// Valid cases (boolean)
console.log(_.isBooleanIfSet(true));      // true
console.log(_.isBooleanIfSet(false));     // true

// Invalid cases
console.log(_.isBooleanIfSet('true'));    // false
console.log(_.isBooleanIfSet(1));         // false
console.log(_.isBooleanIfSet(0));         // false
console.log(_.isBooleanIfSet(''));        // false
```

### Optional Configuration Validation

```javascript
const _ = require('cleaner-node');

function validateConfig(config) {
  const validation = {
    isValid: true,
    errors: []
  };
  
  // Optional boolean flags
  if (!_.isBooleanIfSet(config.debug)) {
    validation.isValid = false;
    validation.errors.push('debug must be a boolean or not provided');
  }
  
  if (!_.isBooleanIfSet(config.verbose)) {
    validation.isValid = false;
    validation.errors.push('verbose must be a boolean or not provided');
  }
  
  if (!_.isBooleanIfSet(config.enableCache)) {
    validation.isValid = false;
    validation.errors.push('enableCache must be a boolean or not provided');
  }
  
  return validation;
}

// Valid configurations
console.log(validateConfig({})); // { isValid: true, errors: [] }
console.log(validateConfig({ debug: true })); // { isValid: true, errors: [] }
console.log(validateConfig({ debug: false, verbose: true })); // { isValid: true, errors: [] }

// Invalid configuration
console.log(validateConfig({ debug: 'yes', verbose: 1 }));
// { isValid: false, errors: ['debug must be a boolean or not provided', 'verbose must be a boolean or not provided'] }
```

### Function with Optional Parameters

```javascript
const _ = require('cleaner-node');

function processData(data, options = {}) {
  // Validate optional boolean parameters
  if (!_.isBooleanIfSet(options.async)) {
    throw new Error('async option must be a boolean if provided');
  }
  
  if (!_.isBooleanIfSet(options.cache)) {
    throw new Error('cache option must be a boolean if provided');
  }
  
  if (!_.isBooleanIfSet(options.verbose)) {
    throw new Error('verbose option must be a boolean if provided');
  }
  
  // Use defaults for unset options
  const config = {
    async: options.async ?? false,
    cache: options.cache ?? true,
    verbose: options.verbose ?? false
  };
  
  console.log('Processing with config:', config);
  return { processed: true, config };
}

// Valid calls
processData('data');                        // Uses all defaults
processData('data', { async: true });       // Sets async, uses other defaults
processData('data', { cache: false, verbose: true }); // Sets multiple options

// Invalid calls - these would throw errors
// processData('data', { async: 'yes' });    // Error: async must be boolean
// processData('data', { cache: 1 });        // Error: cache must be boolean
```

### Form Field Validation

```javascript
const _ = require('cleaner-node');

function validateUserPreferences(preferences) {
  const optionalBooleanFields = [
    'emailNotifications',
    'darkMode',
    'autoSave',
    'showTutorials'
  ];
  
  const errors = [];
  
  optionalBooleanFields.forEach(field => {
    if (!_.isBooleanIfSet(preferences[field])) {
      errors.push(`${field} must be a boolean if provided`);
    }
  });
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

// Valid preferences
const validPrefs1 = {}; // No preferences set
const validPrefs2 = { emailNotifications: true, darkMode: false };

console.log(validateUserPreferences(validPrefs1)); // { isValid: true, errors: [] }
console.log(validateUserPreferences(validPrefs2)); // { isValid: true, errors: [] }

// Invalid preferences
const invalidPrefs = { 
  emailNotifications: 'yes', 
  darkMode: 1,
  autoSave: true  // This one is valid
};
console.log(validateUserPreferences(invalidPrefs));
// { isValid: false, errors: ['emailNotifications must be a boolean if provided', 'darkMode must be a boolean if provided'] }
```

## Related Functions

- [`isBoolean`](./is-boolean.md) - Validates strict boolean values
- [`isSet`](./is-set.md) - Checks if a value is not null or undefined
- [`isDefined`](./is-defined.md) - Checks if a value is not undefined
- [`isValidStringIfSet`](./is-valid-string-ifset.md) - Similar pattern for optional strings
- [`isValidArrayIfSet`](./is-valid-array-ifset.md) - Similar pattern for optional arrays 