# copyFile

## Purpose
Synchronously copies a file from a source path to a destination path. This is a simple, blocking way to duplicate a file.

## Syntax
```javascript
const _ = require('cleaner-node');

_.copyFile(sourcePath, targetPath)
```

## Parameters
- **sourcePath** (string): The path to the source file.
- **targetPath** (string): The path to the destination file. It will be created or overwritten.

## Returns
- **boolean**: `true` if the copy operation was successful, `false` otherwise.

## Example
```javascript
const _ = require('cleaner-node');
const fs = require('fs');
const path = require('path');

function testCopyFile() {
  const source = path.join(__dirname, 'source.txt');
  const destination = path.join(__dirname, 'destination.txt');

  // Create a source file
  fs.writeFileSync(source, 'Hello, world!');

  // Copy the file
  const success = _.copyFile(source, destination);
  console.log('Copy successful:', success); // true

  // Verify the copy
  const content = fs.readFileSync(destination, 'utf-8');
  console.log('File content:', content); // 'Hello, world!'

  // Clean up
  fs.unlinkSync(source);
  fs.unlinkSync(destination);
}

testCopyFile();
```

## Related Functions
- **[copyContents](./copy-contents.md)** - An asynchronous method for copying file contents.
- **[moveFile](./move-file.md)** - Moves a file from a source to a destination.
- **[deleteFile](./delete-file.md)** - Deletes a file. 