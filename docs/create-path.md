# createPath

## Purpose
Ensures a directory path exists by creating it, including any necessary parent directories, if it doesn't already.

## Syntax
```javascript
const _ = require('cleaner-node');

_.createPath(path)
```

## Parameters
- **path** (string): The directory path to create.

## Returns
- **boolean**: `true` if the path already existed or was successfully created, `false` otherwise.

## Example
```javascript
const _ = require('cleaner-node');
const fs = require('fs');
const path = require('path');

function testCreatePath() {
  const newPath = path.join(__dirname, 'test', 'path', 'to', 'create');

  // Create the path
  const success = _.createPath(newPath);
  console.log('Path created successfully:', success); // true

  // Verify the path exists
  const exists = fs.existsSync(newPath);
  console.log('Path exists:', exists); // true

  // Clean up
  fs.rmdirSync(newPath, { recursive: true });
}

testCreatePath();
```

## Related Functions
- **[makePath](./make-path.md)** - Joins path segments together.
- **[isFolder](./is-folder.md)** - Checks if a path is a directory.
- **[deleteDirectory](./delete-directory.md)** - Deletes a directory. 