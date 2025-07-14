# isValidPathIfSet

## Purpose
Checks if a value is either not set (null or undefined) or is a valid path (file or folder). Useful for optional path parameters where the value can be omitted entirely.

## Syntax
```javascript
const _ = require('cleaner-node');

_.isValidPathIfSet(value)
```

## Parameters
- **value** (string): The path string to check.

## Returns
- **boolean**: `true` if the value is not set or is a valid path, `false` otherwise.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Valid cases (returns true)
console.log(_.isValidPathIfSet('/path/to/file'));   // true (if path exists)
console.log(_.isValidPathIfSet('./local/path'));    // true (if path exists)
console.log(_.isValidPathIfSet(null));              // true (not set)
console.log(_.isValidPathIfSet(undefined));         // true (not set)

// Invalid cases (returns false)
console.log(_.isValidPathIfSet('/nonexistent'));    // false (path doesn't exist)
console.log(_.isValidPathIfSet(''));                // false (empty string)
console.log(_.isValidPathIfSet(123));               // false (not string)
console.log(_.isValidPathIfSet([]));                // false (not string)
```

### Configuration Validation
```javascript
const _ = require('cleaner-node');

function validateConfig(config) {
  const pathOptions = ['logPath', 'cachePath', 'uploadPath', 'backupPath'];
  
  const errors = [];
  
  pathOptions.forEach(option => {
    if (!_.isValidPathIfSet(config[option])) {
      errors.push(`${option} must be a valid path or omitted`);
    }
  });
  
  if (errors.length > 0) {
    throw new Error(`Configuration errors: ${errors.join(', ')}`);
  }
  
  return true;
}

// Valid configurations
validateConfig({});                           // ✓ All omitted
validateConfig({ logPath: './logs' });       // ✓ (if path exists)
validateConfig({ cachePath: undefined });    // ✓ (not set)

// Invalid configurations
// validateConfig({ logPath: '/invalid/path' }); // ✗ Throws error if path doesn't exist
```

### Function Parameter Validation
```javascript
const _ = require('cleaner-node');

function processFiles(inputPath, options = {}) {
  // Validate optional path parameters
  if (!_.isValidPathIfSet(options.outputPath)) {
    throw new Error('outputPath must be a valid path or omitted');
  }
  
  if (!_.isValidPathIfSet(options.tempPath)) {
    throw new Error('tempPath must be a valid path or omitted');
  }
  
  // Use defaults when not set
  const outputPath = options.outputPath || './output';
  const tempPath = options.tempPath || '/tmp';
  
  console.log(`Processing from ${inputPath} to ${outputPath}, temp: ${tempPath}`);
}
```

## Related Functions
- **[isValidPath](./is-valid-path.md)** - Checks if a value is strictly a valid path.
- **[isSet](./is-set.md)** - Checks if a value is set (not null or undefined).
- **[isFile](./is-file.md)** - Checks if a path points to a file.
- **[isFolder](./is-folder.md)** - Checks if a path points to a directory.
