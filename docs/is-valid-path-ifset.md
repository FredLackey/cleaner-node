# isValidPathIfSet

## Purpose
Validates that a value is either not set (null or undefined) or is a valid path. This function is specifically designed for optional path parameters where the absence of a value is acceptable, but if a value is provided, it must be a valid path format.

## Syntax
```javascript
const _ = require('cleaner-node');

_.isValidPathIfSet(value)
```

## Parameters
- **value** (string|null|undefined): The path string to validate, or null/undefined

## Returns
- **boolean**: `true` if the value is not set (null/undefined) or is a valid path, `false` otherwise

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Valid cases (returns true)
console.log(_.isValidPathIfSet(null));                    // true (not set)
console.log(_.isValidPathIfSet(undefined));               // true (not set)
console.log(_.isValidPathIfSet('/home/user/file.txt'));   // true (valid path)
console.log(_.isValidPathIfSet('./config.json'));        // true (valid path)
console.log(_.isValidPathIfSet('C:\\Users\\file.pdf'));   // true (valid path)

// Invalid cases (returns false)
console.log(_.isValidPathIfSet(''));                      // false (empty string)
console.log(_.isValidPathIfSet('/'));                     // false (root only)
console.log(_.isValidPathIfSet('./'));                    // false (directory only)
console.log(_.isValidPathIfSet(123));                     // false (not a string)
console.log(_.isValidPathIfSet({}));                      // false (object)
```

### Practical Applications
```javascript
const _ = require('cleaner-node');

// Optional configuration file path
function loadConfig(configPath) {
  if (!_.isValidPathIfSet(configPath)) {
    throw new Error('Invalid configuration path provided');
  }
  
  if (configPath) {
    console.log(`Loading config from: ${configPath}`);
    // Load from specified path
  } else {
    console.log('Using default configuration');
    // Use default config
  }
}

// Usage examples
loadConfig('./custom-config.json');  // Valid: loads custom config
loadConfig(null);                    // Valid: uses default config
loadConfig(undefined);               // Valid: uses default config
// loadConfig('');                   // Invalid: would throw error

// API endpoint with optional file path
function processFile(req, res) {
  const { inputPath, outputPath } = req.body;
  
  // inputPath is required, outputPath is optional
  if (!_.isValidPath(inputPath)) {
    return res.status(400).json({ error: 'Invalid input path' });
  }
  
  if (!_.isValidPathIfSet(outputPath)) {
    return res.status(400).json({ error: 'Invalid output path format' });
  }
  
  const finalOutputPath = outputPath || './default-output.txt';
  
  res.json({ 
    message: `Processing ${inputPath} to ${finalOutputPath}` 
  });
}

// Function with optional backup path
function saveData(data, primaryPath, backupPath = null) {
  if (!_.isValidPath(primaryPath)) {
    throw new Error('Primary path is required and must be valid');
  }
  
  if (!_.isValidPathIfSet(backupPath)) {
    throw new Error('Backup path must be valid if provided');
  }
  
  // Save to primary location
  console.log(`Saving to: ${primaryPath}`);
  
  // Optionally save backup
  if (backupPath) {
    console.log(`Creating backup at: ${backupPath}`);
  }
}
```

### Edge Cases and Common Pitfalls

#### Distinguishing Between Not Set and Invalid
```javascript
const _ = require('cleaner-node');

// These are considered "not set" and are valid
console.log(_.isValidPathIfSet(null));        // true
console.log(_.isValidPathIfSet(undefined));   // true

// These are "set" but invalid
console.log(_.isValidPathIfSet(''));          // false (empty string is set but invalid)
console.log(_.isValidPathIfSet(0));           // false (zero is set but not a valid path)
console.log(_.isValidPathIfSet(false));       // false (false is set but not a valid path)
```

#### Optional Path Validation in Objects
```javascript
const _ = require('cleaner-node');

// Validating configuration objects with optional paths
function validateConfig(config) {
  const errors = [];
  
  // Required path
  if (!_.isValidPath(config.dataPath)) {
    errors.push('dataPath is required and must be valid');
  }
  
  // Optional paths
  if (!_.isValidPathIfSet(config.logPath)) {
    errors.push('logPath must be valid if provided');
  }
  
  if (!_.isValidPathIfSet(config.backupPath)) {
    errors.push('backupPath must be valid if provided');
  }
  
  return errors;
}

// Valid configurations
console.log(validateConfig({
  dataPath: './data.json',
  logPath: './app.log',
  backupPath: null  // Optional, not set
})); // []

console.log(validateConfig({
  dataPath: './data.json'
  // logPath and backupPath are undefined (not set)
})); // []

// Invalid configuration
console.log(validateConfig({
  dataPath: './data.json',
  logPath: '',  // Set but invalid
  backupPath: './'  // Set but invalid
})); // ['logPath must be valid if provided', 'backupPath must be valid if provided']
```

## Implementation Details
The function combines two validation checks:
1. Uses `isSet()` to determine if the value is null or undefined
2. If the value is set, uses `isValidPath()` to validate the path format

The logic: `!isSet(value) || isValidPath(value)`
- If not set (null/undefined): returns `true`
- If set: returns the result of `isValidPath(value)`

## Related Functions
- **[isValidPath](./is-valid-path.md)** - Validates path format (required)
- **[isValidStringIfSet](./is-valid-string-ifset.md)** - Validates optional strings
- **[isValidArrayIfSet](./is-valid-array-ifset.md)** - Validates optional arrays
- **[isSet](./is-set.md)** - Checks if value is not null/undefined
- **[isDefined](./is-defined.md)** - Checks if value is not undefined

## Use Cases
- **Optional Configuration**: Validating optional config file paths
- **API Parameters**: Handling optional path parameters in REST APIs
- **CLI Arguments**: Validating optional command-line path arguments
- **Form Validation**: Handling optional file path inputs
- **Function Parameters**: Validating optional path parameters in functions
- **Database Fields**: Validating optional path fields in data models

## Performance Notes
- Very fast operation with minimal overhead
- Short-circuits evaluation: if value is not set, doesn't call `isValidPath()`
- Safe for use in high-frequency validation scenarios
- No additional memory allocation for validation logic

## Best Practices
- Use for optional path parameters where null/undefined is acceptable
- Combine with required path validation using `isValidPath()` for mandatory fields
- Clear error messages should distinguish between "not provided" and "invalid format"
- Consider default values when paths are not provided 