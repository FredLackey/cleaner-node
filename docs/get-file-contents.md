# getFileContents

## Purpose
Synchronously reads the entire contents of a file and returns it as a string.

## Syntax
```javascript
const _ = require('cleaner-node');

_.getFileContents(filePath, options, format)
```

## Parameters
- **filePath** (string): The path to the file.
- **options** (Object | string, optional): Options passed to the underlying `fs.readFileSync` call, or a string specifying the encoding. Common options include `{ encoding: 'utf8', flag: 'r' }`.
- **format** (string, optional): The encoding to use for converting the file buffer to a string. Defaults to `'utf8'`.

## Returns
- **string | undefined**: The contents of the file as a string, or `undefined` if an error occurs (e.g., file not found).

## Example
```javascript
const _ = require('cleaner-node');
const fs = require('fs');
const path = require('path');

function testGetFileContents() {
  const filePath = path.join(__dirname, 'test.txt');

  // Create a test file
  fs.writeFileSync(filePath, 'Hello, cleaner-node!');

  // Read the contents
  const contents = _.getFileContents(filePath);
  console.log(contents); // 'Hello, cleaner-node!'

  // Read a non-existent file
  const badContents = _.getFileContents('no-such-file.txt');
  console.log(badContents); // undefined

  // Clean up
  fs.unlinkSync(filePath);
}

testGetFileContents();
```

## Related Functions
- **[readFile](./read-file.md)** - An alias for this function or a similar utility.
- **[readLines](./read-lines.md)** - Reads a file into an array of lines.
- **[writeFile](./write-file.md)** - Writes content to a file.
- **[isFile](./is-file.md)** - Checks if a path points to a file. 