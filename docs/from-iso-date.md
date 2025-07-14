# fromIsoDate

## Purpose
Converts a string in ISO 8601 format into a JavaScript `Date` object.

## Syntax
```javascript
const _ = require('cleaner-node');

_.fromIsoDate(value)
```

## Parameters
- **value** (string): The date string in ISO 8601 format.

## Returns
- **Date | null**: A `Date` object, or `null` if the input is not a valid ISO 8601 string.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

const date1 = _.fromIsoDate('2024-01-01T12:00:00.000Z');
console.log(date1.toUTCString()); // 'Mon, 01 Jan 2024 12:00:00 GMT'

const date2 = _.fromIsoDate('2023-12-25'); // Date only is also valid
console.log(date2.toUTCString()); // 'Mon, 25 Dec 2023 00:00:00 GMT'
```

### Edge Cases
```javascript
const _ = require('cleaner-node');

// Invalid formats
console.log(_.fromIsoDate('2024/01/01'));      // null
console.log(_.fromIsoDate('Jan 1, 2024'));     // null
console.log(_.fromIsoDate(null));             // null
console.log(_.fromIsoDate('not a date'));     // null
```

## Related Functions
- **[isIsoDate](./is-iso-date.md)** - Checks if a string is in ISO 8601 format.
- **[fromEpoch](./from-epoch.md)** - Creates a `Date` object from an epoch timestamp.
- **[isDate](./is-date.md)** - Checks if a value is a valid `Date` object. 