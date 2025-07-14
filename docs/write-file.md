# writeFile

## Purpose
Synchronously writes content to a file. It will automatically create any necessary parent directories for the file path.

## Syntax
```javascript
const _ = require('cleaner-node');

_.writeFile(filePath, contents)
```

## Parameters
- **filePath** (string): The full path of the file to write.
- **contents** (string, optional): The content to write to the file. Defaults to an empty string.

## Returns
- **boolean**: `true` if the file was written successfully, `false` otherwise.

## Example
```javascript
const _ = require('cleaner-node');
const fs = require('fs');
const path = require('path');

function testWriteFile() {
  const dir = path.join(__dirname, 'test-write');
  const filePath = path.join(dir, 'new-file.txt');

  // Write the file (directory will be created)
  const success = _.writeFile(filePath, 'Hello from writeFile!');
  console.log('Write successful:', success); // true

  // Verify the content
  const content = fs.readFileSync(filePath, 'utf-8');
  console.log('File content:', content); // 'Hello from writeFile!'

  // Clean up
  fs.unlinkSync(filePath);
  fs.rmdirSync(dir);
}

testWriteFile();
```

## Related Functions
- **[writeLines](./write-lines.md)** - Writes an array of strings to a file.
- **[readFile](./read-file.md)** - Reads the contents of a file.
- **[createPath](./create-path.md)** - Ensures a directory path exists. 