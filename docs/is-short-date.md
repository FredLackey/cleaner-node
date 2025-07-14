# isShortDate

## Purpose
Checks if a string is a valid "short date" in `YYYY-MM-DD` or `YYYY/MM/DD` format. It also performs basic validation on the year, month, and day ranges.

## Syntax
```javascript
const _ = require('cleaner-node');

_.isShortDate(value, allowFuture, earliestYear)
```

## Parameters
- **value** (string): The date string to validate.
- **allowFuture** (boolean, optional): If `true`, dates in future years are allowed. Defaults to `false`.
- **earliestYear** (number, optional): The earliest year considered valid. Defaults to `1900`.

## Returns
- **boolean**: `true` if the value is a valid short date string, otherwise `false`.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Valid formats
console.log(_.isShortDate('2023-01-15')); // true
console.log(_.isShortDate('1999/12/31')); // true

// Invalid formats
console.log(_.isShortDate('2023-1-1'));   // false (requires MM/DD)
console.log(_.isShortDate('15-01-2023')); // false (not YYYY-MM-DD)
console.log(_.isShortDate('not a date')); // false
```

### With Options
```javascript
const _ = require('cleaner-node');

const futureYear = new Date().getFullYear() + 1;

// allowFuture
console.log(_.isShortDate(`${futureYear}-01-01`));          // false (default)
console.log(_.isShortDate(`${futureYear}-01-01`, true));    // true

// earliestYear
console.log(_.isShortDate('1899-12-31'));                   // false (default)
console.log(_.isShortDate('1899-12-31', false, 1800));      // true
```

## Related Functions
- **[fromShortDate](./from-short-date.md)** - Creates a `Date` object from a short date string.
- **[isDate](./is-date.md)** - Checks if a value is a valid `Date` object.
- **[isIsoDate](./is-iso-date.md)** - Checks for full ISO 8601 date format. 