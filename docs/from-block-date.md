# fromBlockDate

## Purpose
Converts a blockdate string (YYYYMMDDHHmmssSSS) into a JavaScript Date object. Returns null if the input is invalid.

## Syntax
```javascript
const _ = require('cleaner-node');

_.fromBlockDate(value)
```

## Parameters
- **value** (string): The blockdate string to convert.

## Returns
- **Date|null**: The corresponding Date object, or null if the input is invalid.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Full blockdate
console.log(_.fromBlockDate('20240115142530123')); // Date object

// Partial blockdates
console.log(_.fromBlockDate('20240115'));          // Date with time 00:00:00
console.log(_.fromBlockDate('202401151425'));      // Date with seconds 00

// Invalid input
console.log(_.fromBlockDate('invalid'));          // null
```

## Related Functions
- **[getBlockDate](./get-block-date.md)** - Converts Date objects to blockdate strings.
- **[isBlockDate](./is-block-date.md)** - Checks if a string is a valid blockdate.
