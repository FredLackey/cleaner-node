# isFolder

## Purpose
Checks if a given path points to an existing directory (folder) on the file system.

## Syntax
```javascript
const _ = require('cleaner-node');

_.isFolder(folderPath)
```

## Parameters
- **folderPath** (string): The path to check.

## Returns
- **boolean**: `true` if the path exists and is a directory, `false` otherwise (e.g., it's a file, or the path does not exist).

## Example
```javascript
const _ = require('cleaner-node');
const fs = require('fs');
const path = require('path');

function testIsFolder() {
  const testDir = path.join(__dirname, 'is-folder-test');
  const testFile = path.join(testDir, 'file.txt');

  // Create test directory and file
  fs.mkdirSync(testDir, { recursive: true });
  fs.writeFileSync(testFile, 'content');

  // Check the directory
  console.log('Is a folder:', _.isFolder(testDir)); // true

  // Check the file
  console.log('Is a file a folder:', _.isFolder(testFile)); // false

  // Check non-existent path
  console.log('Is a non-existent path a folder:', _.isFolder('no-such-dir')); // false

  // Clean up
  fs.rmdirSync(testDir, { recursive: true });
}

testIsFolder();
```

## Related Functions
- **[isFile](./is-file.md)** - Checks if a path points to a file.
- **[createPath](./create-path.md)** - Creates a directory path.
- **[getFiles](./get-files.md)** - Gets the contents of a directory. 