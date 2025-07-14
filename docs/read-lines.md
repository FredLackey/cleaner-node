# readLines

## Purpose
Asynchronously reads a file and returns its contents as an array of strings, with each string representing a line.

## Syntax
```javascript
const _ = require('cleaner-node');

await _.readLines(filePath)
```

## Parameters
- **filePath** (string): The path to the file.

## Returns
- **Promise<Array<string> | undefined>**: A promise that resolves to an array of strings, with each element being a line from the file. It resolves to `undefined` if an error occurs.

## Example
```javascript
const _ = require('cleaner-node');
const fs = require('fs');
const path = require('path');

async function testReadLines() {
  const filePath = path.join(__dirname, 'test-lines.txt');
  fs.writeFileSync(filePath, 'first line\nsecond line\nthird line');

  const lines = await _.readLines(filePath);
  console.log(lines); // [ 'first line', 'second line', 'third line' ]

  // Non-existent file
  const badLines = await _.readLines('no-such-file.txt');
  console.log(badLines); // undefined

  fs.unlinkSync(filePath);
}

testReadLines();
```

## Related Functions
- **[readFile](./read-file.md)** - Reads the entire file content into a single string.
- **[writeLines](./write-lines.md)** - Writes an array of strings to a file.
- **[getFileContents](./get-file-contents.md)** - A synchronous utility to read file contents. 