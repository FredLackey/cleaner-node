# isBooleanIfSet

## Purpose
Checks if a value is either not set (null or undefined) or is a boolean (true or false). Useful for validating optional boolean parameters where the value can be omitted entirely.

## Syntax
```javascript
const _ = require('cleaner-node');

_.isBooleanIfSet(value)
```

## Parameters
- **value** (any): The value to check.

## Returns
- **boolean**: `true` if the value is not set or is a boolean, `false` otherwise.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Valid cases (returns true)
console.log(_.isBooleanIfSet(true));      // true
console.log(_.isBooleanIfSet(false));     // true
console.log(_.isBooleanIfSet(null));      // true
console.log(_.isBooleanIfSet(undefined)); // true

// Invalid cases (returns false)
console.log(_.isBooleanIfSet('true'));    // false
console.log(_.isBooleanIfSet(1));         // false
console.log(_.isBooleanIfSet(0));         // false
console.log(_.isBooleanIfSet(''));        // false
console.log(_.isBooleanIfSet([]));        // false
console.log(_.isBooleanIfSet({}));        // false
```

### Function Parameter Validation
```javascript
const _ = require('cleaner-node');

function processData(data, options = {}) {
  // Validate optional boolean flags
  if (!_.isBooleanIfSet(options.verbose)) {
    throw new Error('verbose must be a boolean or omitted');
  }
  
  if (!_.isBooleanIfSet(options.async)) {
    throw new Error('async must be a boolean or omitted');
  }
  
  if (!_.isBooleanIfSet(options.cache)) {
    throw new Error('cache must be a boolean or omitted');
  }
  
  // Use defaults when not set
  const verbose = options.verbose ?? false;
  const async = options.async ?? true;
  const cache = options.cache ?? true;
  
  console.log(`Processing with verbose=${verbose}, async=${async}, cache=${cache}`);
}

// Valid calls
processData({}, { verbose: true });        // ✓
processData({}, { verbose: false });       // ✓
processData({}, { verbose: undefined });   // ✓
processData({}, {});                       // ✓ (all omitted)

// Invalid calls
// processData({}, { verbose: 'yes' });    // ✗ Throws error
// processData({}, { async: 1 });          // ✗ Throws error
```

### Configuration Validation
```javascript
const _ = require('cleaner-node');

function validateConfig(config) {
  const optionalBooleans = [
    'enableLogging', 'useCache', 'debugMode', 
    'autoSave', 'strictMode', 'devMode'
  ];
  
  const errors = [];
  
  optionalBooleans.forEach(key => {
    if (!_.isBooleanIfSet(config[key])) {
      errors.push(`${key} must be a boolean or omitted`);
    }
  });
  
  if (errors.length > 0) {
    throw new Error(`Configuration errors: ${errors.join(', ')}`);
  }
  
  return true;
}

// Valid configurations
validateConfig({}); // ✓ All omitted
validateConfig({ enableLogging: true }); // ✓
validateConfig({ useCache: false, debugMode: true }); // ✓
validateConfig({ enableLogging: undefined }); // ✓

// Invalid configurations
// validateConfig({ enableLogging: 'true' }); // ✗ Throws error
// validateConfig({ useCache: 1 }); // ✗ Throws error
```

### API Parameter Validation
```javascript
const _ = require('cleaner-node');

// Express.js route handler
app.post('/api/users', (req, res) => {
  const { name, email, isAdmin, isActive, sendEmail } = req.body;
  
  // Validate required fields
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  
  // Validate optional boolean fields
  const optionalBooleans = { isAdmin, isActive, sendEmail };
  
  for (const [key, value] of Object.entries(optionalBooleans)) {
    if (!_.isBooleanIfSet(value)) {
      return res.status(400).json({ 
        error: `${key} must be a boolean or omitted` 
      });
    }
  }
  
  // Set defaults for omitted values
  const userData = {
    name,
    email,
    isAdmin: isAdmin ?? false,
    isActive: isActive ?? true,
    sendEmail: sendEmail ?? true
  };
  
  // Process user creation...
  res.json({ success: true, user: userData });
});
```

### Form Validation
```javascript
const _ = require('cleaner-node');

function validateFormData(formData) {
  const validation = {
    isValid: true,
    errors: []
  };
  
  // Check optional checkboxes/toggles
  const optionalFlags = [
    'agreeToTerms', 'subscribeNewsletter', 'allowCookies',
    'enableNotifications', 'makeProfilePublic'
  ];
  
  optionalFlags.forEach(flag => {
    if (flag in formData && !_.isBooleanIfSet(formData[flag])) {
      validation.errors.push(`${flag} must be a boolean value`);
      validation.isValid = false;
    }
  });
  
  return validation;
}

// Test form data
const form1 = { 
  agreeToTerms: true, 
  subscribeNewsletter: false 
}; // ✓ Valid

const form2 = { 
  agreeToTerms: 'yes',  // ✗ Invalid
  allowCookies: true 
};

console.log(validateFormData(form1)); // { isValid: true, errors: [] }
console.log(validateFormData(form2)); // { isValid: false, errors: [...] }
```

### Utility Function Builder
```javascript
const _ = require('cleaner-node');

function createProcessor(options = {}) {
  // Validate all optional boolean options upfront
  const booleanOptions = ['verbose', 'strict', 'async', 'cache'];
  
  booleanOptions.forEach(option => {
    if (!_.isBooleanIfSet(options[option])) {
      throw new Error(`Option '${option}' must be boolean or omitted`);
    }
  });
  
  // Apply defaults
  const config = {
    verbose: options.verbose ?? false,
    strict: options.strict ?? true,
    async: options.async ?? false,
    cache: options.cache ?? true
  };
  
  return {
    config,
    process: (data) => {
      if (config.verbose) console.log('Processing:', data);
      // Processing logic...
      return `Processed: ${data}`;
    }
  };
}

// Usage
const processor1 = createProcessor(); // Uses all defaults
const processor2 = createProcessor({ verbose: true }); // Override one option
const processor3 = createProcessor({ verbose: true, async: false }); // Override multiple
```

## Related Functions
- **[isBoolean](./is-boolean.md)** - Checks if a value is strictly a boolean.
- **[isSet](./is-set.md)** - Checks if a value is set (not null or undefined).
- **[isValidString](./is-valid-string.md)** - Validates string values with similar optional pattern.
- **[isValidArray](./is-valid-array.md)** - Validates array values with similar optional pattern.
