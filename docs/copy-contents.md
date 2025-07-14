# copyContents

## Purpose
Asynchronously copies the contents of a source file to a destination file, line by line. This method is useful for duplicating files efficiently.

## Syntax
```javascript
const _ = require('cleaner-node');

await _.copyContents(sourceFile, destinationFile)
```

## Parameters
- **sourceFile** (string): The path to the source file.
- **destinationFile** (string): The path to the destination file. If the file exists, it will be overwritten; otherwise, it will be created.

## Returns
- **Promise<void>**: A promise that resolves when the file has been successfully copied.

## Example
```javascript
const _ = require('cleaner-node');
const fs = require('fs');
const path = require('path');

async function testCopyContents() {
  const source = path.join(__dirname, 'source.txt');
  const destination = path.join(__dirname, 'destination.txt');

  // Create a source file
  fs.writeFileSync(source, 'line 1\nline 2');

  // Copy the contents
  await _.copyContents(source, destination);

  // Verify the copy
  const content = fs.readFileSync(destination, 'utf-8');
  console.log(content);
  // Expected output (will have OS-specific line endings):
  // line 1
  // line 2

  // Clean up
  fs.unlinkSync(source);
  fs.unlinkSync(destination);
}

testCopyContents();
```

## Related Functions
- **[copyFile](./copy-file.md)** - A simpler, synchronous file copy utility.
- **[moveFile](./move-file.md)** - Moves a file from a source to a destination.
- **[readFile](./read-file.md)** - Reads the contents of a file.
- **[writeFile](./write-file.md)** - Writes content to a file. 