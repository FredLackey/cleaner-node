# makePath

## Purpose
Ensures a directory path exists by creating it, including any necessary parent directories, if it doesn't already.

**Note:** This function is an alias for `createPath` and performs the exact same logic.

## Syntax
```javascript
const _ = require('cleaner-node');

_.makePath(dirPath)
```

## Parameters
- **dirPath** (string): The directory path to create.

## Returns
- **boolean**: `true` if the path already existed or was successfully created, `false` otherwise.

## Example
```javascript
const _ = require('cleaner-node');
const fs = require('fs');
const path = require('path');

function testMakePath() {
  const newPath = path.join(__dirname, 'test-make-path');

  const success = _.makePath(newPath);
  console.log('Path created:', success); // true

  const exists = fs.existsSync(newPath);
  console.log('Path exists:', exists); // true

  // Clean up
  fs.rmdirSync(newPath, { recursive: true });
}

testMakePath();
```

## Related Functions
- **[createPath](./create-path.md)** - An alias for this function.
- **[isFolder](./is-folder.md)** - Checks if a path is a directory.
- **[deleteDirectory](./delete-directory.md)** - Deletes a directory. 