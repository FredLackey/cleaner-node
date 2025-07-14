# getFileSize

## Purpose
Gets the size of a file in bytes.

## Syntax
```javascript
const _ = require('cleaner-node');

_.getFileSize(filePath)
```

## Parameters
- **filePath** (string): The path to the file.

## Returns
- **number**: The size of the file in bytes. Returns `-1` if the path does not point to a file or if an error occurs.

## Example
```javascript
const _ = require('cleaner-node');
const fs = require('fs');
const path = require('path');

function testGetFileSize() {
  const filePath = path.join(__dirname, 'temp-file.txt');
  const content = 'This file has content.';

  // Create a test file
  fs.writeFileSync(filePath, content);

  // Get the file size
  const size = _.getFileSize(filePath);
  console.log('File size:', size); // e.g., 22

  // Get size of non-existent file
  const badSize = _.getFileSize('no-such-file.txt');
  console.log('Size of non-existent file:', badSize); // -1

  // Clean up
  fs.unlinkSync(filePath);
}

testGetFileSize();
```

## Related Functions
- **[getStringSize](./get-string-size.md)** - Gets the size of a string in bytes.
- **[isFile](./is-file.md)** - Checks if a path points to a file.
- **[getFileContents](./get-file-contents.md)** - Reads the contents of a file. 