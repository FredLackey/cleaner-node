# getFiles

## Purpose
Synchronously reads a directory and returns an array of full paths for all the files and subdirectories it contains.

## Syntax
```javascript
const _ = require('cleaner-node');

_.getFiles(folderPath)
```

## Parameters
- **folderPath** (string): The path to the directory.

## Returns
- **Array<string> | null**: An array of the full paths of the items within the directory. Returns `null` if the path is not a valid directory or if an error occurs.

## Example
```javascript
const _ = require('cleaner-node');
const fs = require('fs');
const path = require('path');

function testGetFiles() {
  const testDir = path.join(__dirname, 'get-files-test');
  const file1 = path.join(testDir, 'file1.txt');
  const file2 = path.join(testDir, 'file2.txt');
  const subDir = path.join(testDir, 'subdir');

  // Create test directory and files
  fs.mkdirSync(testDir, { recursive: true });
  fs.writeFileSync(file1, 'content');
  fs.writeFileSync(file2, 'content');
  fs.mkdirSync(subDir);

  // Get the files
  const files = _.getFiles(testDir);
  console.log(files);
  // Expected output (order may vary):
  // [
  //   '.../get-files-test/file1.txt',
  //   '.../get-files-test/file2.txt',
  //   '.../get-files-test/subdir'
  // ]

  // Clean up
  fs.rmdirSync(testDir, { recursive: true });
}

testGetFiles();
```

## Related Functions
- **[getFolderContents](./get-folder-contents.md)** - Recursively gets all contents of a folder.
- **[walk](./walk.md)** - A more advanced, recursive directory walker.
- **[isFolder](./is-folder.md)** - Checks if a path points to a directory. 