# getFileName

## Purpose
Extracts the file name from a full path string. It provides an option to either include or exclude the file extension.

## Syntax
```javascript
const _ = require('cleaner-node');

_.getFileName(filePath, includeExtension)
```

## Parameters
- **filePath** (string): The full path to the file.
- **includeExtension** (boolean, optional): If `true` (the default), the file name with its extension is returned. If `false`, only the name part is returned.

## Returns
- **string | null**: The file name, or `null` if the input path is invalid.

## Example
```javascript
const _ = require('cleaner-node');

const fullPath = '/home/user/documents/report.pdf';

// With extension (default)
console.log(_.getFileName(fullPath)); // 'report.pdf'

// Without extension
console.log(_.getFileName(fullPath, false)); // 'report'

// Edge cases
console.log(_.getFileName('notes.txt')); // 'notes.txt'
console.log(_.getFileName(null));      // null
```

## Related Functions
- **[getCommonPath](./get-common-path.md)** - Finds the common base directory from a list of paths.
- **[isFile](./is-file.md)** - Checks if a path points to a file.
- **[isValidPath](./is-valid-path.md)** - Validates a path string. 