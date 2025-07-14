# isBlockDate

## Purpose
Checks if a value is a valid blockdate string by attempting to parse it.

## Syntax
```javascript
const _ = require('cleaner-node');

_.isBlockDate(value, maxYear)
```

## Parameters
- **value** (string): The value to check.
- **maxYear** (number, optional): The maximum allowed year. Defaults to current year.

## Returns
- **boolean**: True if the value is a valid blockdate string, false otherwise.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Valid blockdates
console.log(_.isBlockDate('20240115142530123')); // true
console.log(_.isBlockDate('20240115'));          // true

// Invalid blockdates
console.log(_.isBlockDate('invalid'));           // false
console.log(_.isBlockDate('20251301'));          // false (invalid month)
```

## Related Functions
- **[fromBlockDate](./from-block-date.md)** - Converts blockdate strings to Date objects.
- **[getBlockDate](./get-block-date.md)** - Converts Date objects to blockdate strings.
