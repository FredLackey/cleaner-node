# isEqualDate

## Purpose
Checks if two values are both valid `Date` objects that represent the exact same moment in time (down to the millisecond).

## Syntax
```javascript
const _ = require('cleaner-node');

_.isEqualDate(date1, date2)
```

## Parameters
- **date1** (any): The first value to compare.
- **date2** (any): The second value to compare.

## Returns
- **boolean**: `true` if both values are valid `Date` objects and have the same time value, otherwise `false`.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

const dateA = new Date('2024-01-01T12:00:00.000Z');
const dateB = new Date('2024-01-01T12:00:00.000Z');
const dateC = new Date('2024-01-01T12:00:00.001Z'); // One millisecond later
const dateD = new Date('2023-01-01T12:00:00.000Z');

console.log(_.isEqualDate(dateA, dateB)); // true
console.log(_.isEqualDate(dateA, dateC)); // false
console.log(_.isEqualDate(dateA, dateD)); // false
```

### Edge Cases
```javascript
const _ = require('cleaner-node');

const date = new Date();

// Comparing with non-date values
console.log(_.isEqualDate(date, '2024-01-01')); // false
console.log(_.isEqualDate(date, Date.now()));    // false
console.log(_.isEqualDate(date, null));          // false
console.log(_.isEqualDate(null, date));          // false
console.log(_.isEqualDate(null, null));          // false
```

## Related Functions
- **[isSameDate](./is-same-date.md)** - Checks if two dates are on the same calendar day (ignores time).
- **[isDate](./is-date.md)** - Checks if a value is a valid `Date` object.
- **[maxDate](./max-date.md)** - Returns the latest date from an array of dates.
- **[minDate](./min-date.md)** - Returns the earliest date from an array of dates. 