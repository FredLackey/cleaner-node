# writeLines

## Purpose
Writes an array of strings to a file, with each string becoming a new line. It automatically uses the appropriate end-of-line character for the operating system (e.g., `\n` on Linux, `\r\n` on Windows).

## Syntax
```javascript
const _ = require('cleaner-node');

await _.writeLines(filePath, lines)
```

## Parameters
- **filePath** (string): The full path of the file to write.
- **lines** (Array<string>): An array of strings to be written as lines to the file.

## Returns
- **Promise<boolean>**: A promise that resolves to `true` if the file was written successfully, `false` otherwise.

## Example
```javascript
const _ = require('cleaner-node');
const fs = require('fs');
const path = require('path');

async function testWriteLines() {
  const filePath = path.join(__dirname, 'test.txt');
  const linesToWrite = ['Line 1', 'Line 2', 'Line 3'];

  const success = await _.writeLines(filePath, linesToWrite);
  console.log('Write successful:', success); // true

  const content = fs.readFileSync(filePath, 'utf-8');
  console.log(content);
  // Expected output (with OS-specific line endings):
  // Line 1
  // Line 2
  // Line 3

  fs.unlinkSync(filePath);
}

testWriteLines();
```

## Related Functions
- **[writeFile](./write-file.md)** - Writes a single string to a file.
- **[readLines](./read-lines.md)** - Reads a file into an array of lines.
- **[createPath](./create-path.md)** - Ensures a directory path exists. 