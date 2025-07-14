# isFile

## Purpose
Checks if a given path points to an existing file on the file system.

## Syntax
```javascript
const _ = require('cleaner-node');

_.isFile(filePath)
```

## Parameters
- **filePath** (string): The path to check.

## Returns
- **boolean**: `true` if the path exists and is a file, `false` otherwise (e.g., it's a directory, or the path does not exist).

## Example
```javascript
const _ = require('cleaner-node');
const fs = require('fs');
const path = require('path');

function testIsFile() {
  const testDir = path.join(__dirname, 'is-file-test');
  const testFile = path.join(testDir, 'file.txt');

  // Create test directory and file
  fs.mkdirSync(testDir, { recursive: true });
  fs.writeFileSync(testFile, 'content');

  // Check the file
  console.log('Is a file:', _.isFile(testFile)); // true

  // Check the directory
  console.log('Is a directory a file:', _.isFile(testDir)); // false

  // Check non-existent path
  console.log('Is a non-existent path a file:', _.isFile('no-such-file.txt')); // false

  // Clean up
  fs.rmdirSync(testDir, { recursive: true });
}

testIsFile();
```

## Related Functions
- **[isFolder](./is-folder.md)** - Checks if a path points to a directory.
- **[isValidPath](./is-valid-path.md)** - Performs a basic validation check on a path string.
- **[getFileSize](./get-file-size.md)** - Gets the size of a file. 