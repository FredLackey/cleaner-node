# readFile

## Purpose
Synchronously reads the entire contents of a file and returns it as a UTF-8 encoded string.

**Note:** This function is very similar to `getFileContents`, but it returns `null` on error instead of `undefined`.

## Syntax
```javascript
const _ = require('cleaner-node');

_.readFile(filePath)
```

## Parameters
- **filePath** (string): The path to the file.

## Returns
- **string | null**: The contents of the file as a string, or `null` if an error occurs or the file does not exist.

## Example
```javascript
const _ = require('cleaner-node');
const fs = require('fs');
const path = require('path');

function testReadFile() {
  const filePath = path.join(__dirname, 'test-read-file.txt');
  fs.writeFileSync(filePath, 'Hello from readFile!');

  const contents = _.readFile(filePath);
  console.log(contents); // 'Hello from readFile!'

  const badContents = _.readFile('no-such-file.txt');
  console.log(badContents); // null

  fs.unlinkSync(filePath);
}

testReadFile();
```

## Related Functions
- **[getFileContents](./get-file-contents.md)** - A similar utility that returns `undefined` on error.
- **[readLines](./read-lines.md)** - Reads a file into an array of lines.
- **[writeFile](./write-file.md)** - Writes content to a file. 