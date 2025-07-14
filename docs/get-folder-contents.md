# getFolderContents

## Purpose
Synchronously reads a directory and returns an array of full paths for all the files and subdirectories it contains.

**Note:** This function is very similar to `getFiles`, but it returns `undefined` on error instead of `null`.

## Syntax
```javascript
const _ = require('cleaner-node');

_.getFolderContents(folderPath)
```

## Parameters
- **folderPath** (string): The path to the directory.

## Returns
- **Array<string> | undefined**: An array of the full paths of the items within the directory. Returns `undefined` if the path is not a valid directory or if an error occurs.

## Example
```javascript
const _ = require('cleaner-node');
const fs = require('fs');
const path = require('path');

function testGetFolderContents() {
  const testDir = path.join(__dirname, 'get-folder-contents-test');
  fs.mkdirSync(testDir, { recursive: true });
  fs.writeFileSync(path.join(testDir, 'file.txt'), 'content');

  const contents = _.getFolderContents(testDir);
  console.log(contents); // [ '.../get-folder-contents-test/file.txt' ]

  // Invalid path
  const badContents = _.getFolderContents('no-such-dir');
  console.log(badContents); // undefined

  // Clean up
  fs.rmdirSync(testDir, { recursive: true });
}

testGetFolderContents();
```

## Related Functions
- **[getFiles](./get-files.md)** - A similar utility that returns `null` on error.
- **[walk](./walk.md)** - A more advanced, recursive directory walker.
- **[isFolder](./is-folder.md)** - Checks if a path points to a directory. 