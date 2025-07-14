# isDirectory

## Purpose
Checks if a given path points to an existing directory (folder). This is a convenience alias for the `isFolder` function.

## Syntax
```javascript
const _ = require('cleaner-node');

_.isDirectory(filePath)
```

## Parameters
- **filePath** (string): The path to check.

## Returns
- **boolean**: True if the path exists and is a directory, false otherwise.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Check directories
console.log(_.isDirectory('./src'));        // true (if exists)
console.log(_.isDirectory('./docs'));       // true (if exists)
console.log(_.isDirectory('./nonexistent')); // false

// Check files (should return false)
console.log(_.isDirectory('./package.json')); // false
```

## Related Functions
- **[isFolder](./is-folder.md)** - The full function that this aliases.
- **[isFile](./is-file.md)** - Checks if a path points to a file.
- **[isValidPath](./is-valid-path.md)** - Checks if a path is valid.
