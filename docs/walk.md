# walk

## Purpose
Recursively walks through a directory and returns an object containing the root path and two arrays: one for all discovered sub-folders and one for all discovered files. The paths in the arrays are relative to the starting directory.

## Syntax
```javascript
const _ = require('cleaner-node');

_.walk(folderPath)
```

## Parameters
- **folderPath** (string): The path of the directory to start walking from.

## Returns
- **Object | undefined**: An object with the following properties, or `undefined` if the input path is not a valid directory.
  - `root` (string): The absolute path of the folder that was walked.
  - `folders` (Array<string>): An array of folder paths relative to the root.
  - `files` (Array<string>): An array of file paths relative to the root.

## Example
```javascript
const _ = require('cleaner-node');
const fs = require('fs');
const path = require('path');

function testWalk() {
  const rootDir = path.join(__dirname, 'walk-test');
  const subDir1 = path.join(rootDir, 'subdir1');
  const subDir2 = path.join(subDir1, 'subdir2');
  const file1 = path.join(rootDir, 'file1.txt');
  const file2 = path.join(subDir1, 'file2.txt');
  const file3 = path.join(subDir2, 'file3.txt');

  // Create test structure
  fs.mkdirSync(subDir2, { recursive: true });
  fs.writeFileSync(file1, 'content');
  fs.writeFileSync(file2, 'content');
  fs.writeFileSync(file3, 'content');

  // Walk the directory
  const results = _.walk(rootDir);
  console.log(results);
  // Expected output (paths will use OS-specific separators):
  // {
  //   root: '.../walk-test',
  //   folders: [ '/subdir1', '/subdir1/subdir2' ],
  //   files: [ '/file1.txt', '/subdir1/file2.txt', '/subdir1/subdir2/file3.txt' ]
  // }

  // Clean up
  fs.rmdirSync(rootDir, { recursive: true });
}

testWalk();
```

## Related Functions
- **[getFiles](./get-files.md)** - Gets the immediate contents (files and folders) of a directory.
- **[getFolderContents](./get-folder-contents.md)** - A similar utility to `getFiles`.
- **[isFolder](./is-folder.md)** - Checks if a path is a directory. 