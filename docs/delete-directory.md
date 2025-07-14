# deleteDirectory

## Purpose
Synchronously and recursively deletes a directory and all its contents. It uses the `rimraf` package to ensure a robust deletion, similar to `rm -rf`.

## Syntax
```javascript
const _ = require('cleaner-node');

_.deleteDirectory(folderPath)
```

## Parameters
- **folderPath** (string): The path to the directory to be deleted.

## Returns
- **boolean**: `true` if the directory was successfully deleted (or didn't exist in the first place), `false` if an error occurred and the directory still exists.

## Example
```javascript
const _ = require('cleaner-node');
const fs = require('fs');
const path = require('path');

function testDeleteDirectory() {
  const dirToDelete = path.join(__dirname, 'temp-dir');

  // Create a directory to delete
  fs.mkdirSync(dirToDelete, { recursive: true });
  fs.writeFileSync(path.join(dirToDelete, 'file.txt'), 'content');
  console.log('Directory exists before:', fs.existsSync(dirToDelete)); // true

  // Delete the directory
  const success = _.deleteDirectory(dirToDelete);
  console.log('Deletion successful:', success); // true

  // Verify it's gone
  console.log('Directory exists after:', fs.existsSync(dirToDelete)); // false
}

testDeleteDirectory();
```

## Related Functions
- **[createPath](./create-path.md)** - Creates a directory path.
- **[isFolder](./is-folder.md)** - Checks if a path is a directory.
- **[deleteFile](./delete-file.md)** - Deletes a single file. 