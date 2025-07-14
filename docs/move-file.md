# moveFile

## Purpose
Moves a file from a source path to a destination path. It first attempts an atomic `rename` operation. If that fails (e.g., when moving across different filesystems or devices), it falls back to a copy-and-delete strategy. It will also create the destination directory if it doesn't exist.

## Syntax
```javascript
const _ = require('cleaner-node');

_.moveFile(sourcePath, destinationPath)
```

## Parameters
- **sourcePath** (string): The path of the file to move.
- **destinationPath** (string): The target path where the file should be moved.

## Returns
- **boolean**: `true` if the file was successfully moved, `false` otherwise.

## Example
```javascript
const _ =require('cleaner-node');
const fs = require('fs');
const path = require('path');

function testMoveFile() {
  const sourceDir = path.join(__dirname, 'source');
  const destDir = path.join(__dirname, 'destination');
  const sourceFile = path.join(sourceDir, 'file-to-move.txt');
  const destFile = path.join(destDir, 'moved-file.txt');

  // Setup directories and source file
  fs.mkdirSync(sourceDir, { recursive: true });
  fs.mkdirSync(destDir, { recursive: true });
  fs.writeFileSync(sourceFile, 'This file will be moved.');

  console.log('Source exists before:', fs.existsSync(sourceFile)); // true
  console.log('Destination exists before:', fs.existsSync(destFile)); // false

  // Move the file
  const success = _.moveFile(sourceFile, destFile);
  console.log('Move successful:', success); // true

  console.log('Source exists after:', fs.existsSync(sourceFile)); // false
  console.log('Destination exists after:', fs.existsSync(destFile)); // true

  // Clean up
  fs.unlinkSync(destFile);
  fs.rmdirSync(sourceDir);
  fs.rmdirSync(destDir);
}

testMoveFile();
```

## Related Functions
- **[copyFile](./copy-file.md)** - Copies a file.
- **[deleteFile](./delete-file.md)** - Deletes a file.
- **[createPath](./create-path.md)** - Creates a directory path. 