# isIsoDate

## Purpose
Checks if a string is a valid date in ISO 8601 format (e.g., `YYYY-MM-DDTHH:mm:ss.sssZ`). It performs a robust validation by parsing the string and comparing it back to a generated ISO string.

## Syntax
```javascript
const _ = require('cleaner-node');

_.isIsoDate(value)
```

## Parameters
- **value** (string): The string to validate.

## Returns
- **boolean**: `true` if the value is a valid ISO 8601 date string, otherwise `false`.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Valid ISO date strings
console.log(_.isIsoDate('2024-01-01T12:00:00.000Z')); // true
console.log(_.isIsoDate('2023-12-25T00:00:00Z'));    // true
console.log(_.isIsoDate('2024-03-10T05:30:00.123Z')); // true

// Date only is not considered a full ISO date by this function
console.log(_.isIsoDate('2024-01-01'));               // false

// Invalid formats
console.log(_.isIsoDate('2024/01/01'));             // false
console.log(_.isIsoDate('Jan 1, 2024'));              // false
console.log(_.isIsoDate('not a date'));             // false
console.log(_.isIsoDate(null));                     // false
```

## Related Functions
- **[fromIsoDate](./from-iso-date.md)** - Creates a `Date` object from an ISO string.
- **[isDate](./is-date.md)** - Checks if a value is a valid `Date` object.
- **[isShortDate](./is-short-date.md)** - Checks for `YYYY-MM-DD` format. 