# fromShortDate

## Purpose
Converts a "short date" string (in `YYYY-MM-DD` or `YYYY/MM/DD` format) into a JavaScript `Date` object.

## Syntax
```javascript
const _ = require('cleaner-node');

_.fromShortDate(value)
```

## Parameters
- **value** (string): The date string in a short format.

## Returns
- **Date | null**: A `Date` object, or `null` if the input is not a valid short date string.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Using hyphens
const date1 = _.fromShortDate('2024-01-15');
console.log(date1.toDateString()); // 'Mon Jan 15 2024'

// Using slashes
const date2 = _.fromShortDate('2023/12/25');
console.log(date2.toDateString()); // 'Mon Dec 25 2023'
```

### Edge Cases
```javascript
const _ = require('cleaner-node');

// Invalid formats
console.log(_.fromShortDate('01-15-2024'));      // null (not YYYY-MM-DD)
console.log(_.fromShortDate('2024-1-15'));       // null (requires MM and DD)
console.log(_.fromShortDate('not a date'));      // null
console.log(_.fromShortDate(null));              // null
```

## Related Functions
- **[isShortDate](./is-short-date.md)** - Checks if a string is in a short date format.
- **[fromIsoDate](./from-iso-date.md)** - Creates a `Date` object from an ISO string.
- **[blockdate](./blockdate.md)** - Utilities for working with blockdate strings. 