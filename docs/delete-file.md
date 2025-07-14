# deleteFile

## Purpose
Synchronously deletes a file from the file system.

## Syntax
```javascript
const _ = require('cleaner-node');

_.deleteFile(filePath, missingOkay)
```

## Parameters
- **filePath** (string): The path to the file to be deleted.
- **missingOkay** (boolean, optional): If `true` (the default), the function will return `true` even if the file doesn't exist to begin with. If `false`, it will return `false` in that case.

## Returns
- **boolean**: `true` if the file was successfully deleted or if it didn't exist and `missingOkay` is true. `false` otherwise.

## Example
```javascript
const _ = require('cleaner-node');
const fs = require('fs');
const path = require('path');

function testDeleteFile() {
  const fileToDelete = path.join(__dirname, 'temp.txt');

  // Create a file to delete
  fs.writeFileSync(fileToDelete, 'some content');
  console.log('File exists before:', fs.existsSync(fileToDelete)); // true

  // Delete the file
  const success = _.deleteFile(fileToDelete);
  console.log('Deletion successful:', success); // true

  // Verify it's gone
  console.log('File exists after:', fs.existsSync(fileToDelete)); // false
  
  // Try deleting a non-existent file
  const successMissing = _.deleteFile('non-existent-file.txt');
  console.log('Deletion of missing file successful:', successMissing); // true (because missingOkay is true by default)
  
  const failureMissing = _.deleteFile('non-existent-file.txt', false);
  console.log('Deletion of missing file fails:', failureMissing); // false
}

testDeleteFile();
```

## Related Functions
- **[deleteDirectory](./delete-directory.md)** - Deletes a directory and its contents.
- **[isFile](./is-file.md)** - Checks if a path is a file.
- **[writeFile](./write-file.md)** - Writes content to a file. 