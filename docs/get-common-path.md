# getCommonPath

## Purpose
Finds the longest common base directory from an array of file paths. It correctly handles both Windows and Unix-style paths.

## Syntax
```javascript
const _ = require('cleaner-node');

_.getCommonPath(paths)
```

## Parameters
- **paths** (Array<string>): An array of file path strings.

## Returns
- **string | null**: The longest common directory path shared by all the input paths. Returns `null` if the paths do not share a common root or if the input is invalid.

## Example

### Unix-style Paths
```javascript
const _ = require('cleaner-node');
const path = require('path');

const unixPaths = [
  '/usr/local/bin/script1.sh',
  '/usr/local/bin/script2.sh',
  '/usr/local/lib/file.txt'
];

console.log(_.getCommonPath(unixPaths));
// Output (platform dependent, but will resolve to): /usr/local
```

### Windows-style Paths
```javascript
const _ = require('cleaner-node');
const path = require('path');

const windowsPaths = [
  'C:\\Users\\Fred\\Documents\\file1.txt',
  'C:\\Users\\Fred\\Documents\\Subfolder\\file2.txt',
  'C:\\Users\\Fred\\Downloads\\archive.zip'
];

console.log(_.getCommonPath(windowsPaths));
// Output (platform dependent, but will resolve to): C:\Users\Fred
```

### Edge Cases
```javascript
const _ = require('cleaner-node');

// No common path beyond the root
console.log(_.getCommonPath(['/home/user/file', '/var/log/sys.log'])); // '/'

// Different roots
console.log(_.getCommonPath(['C:\\file1.txt', 'D:\\file2.txt'])); // null

// Single path
console.log(_.getCommonPath(['/home/user/file.txt'])); // '/home/user/file.txt'

// Invalid input
console.log(_.getCommonPath([])); // null
console.log(_.getCommonPath(null)); // null
```

## Related Functions
- **[makePath](./make-path.md)** - Joins path segments together.
- **[isValidPath](./is-valid-path.md)** - Checks if a path is valid.
- **[getFileName](./get-file-name.md)** - Extracts the file name from a path. 