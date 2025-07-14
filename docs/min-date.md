# minDate

## Purpose
Finds the earliest date (the minimum value) from an array of `Date` objects.

## Syntax
```javascript
const _ = require('cleaner-node');

_.minDate(dates)
```

## Parameters
- **dates** (Array<Date>): An array of `Date` objects.

## Returns
- **Date | null**: The `Date` object representing the earliest date in the array, or `null` if the input is empty or not an array.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

const date1 = new Date('2024-01-01');
const date2 = new Date('2024-03-15');
const date3 = new Date('2023-12-25');

const dates = [date1, date2, date3];
const earliest = _.minDate(dates);

console.log(earliest.toDateString()); // 'Mon Dec 25 2023'
```

### Edge Cases
```javascript
const _ = require('cleaner-node');

// Empty array
console.log(_.minDate([])); // null

// Array with one date
const singleDate = new Date('2025-01-01');
console.log(_.minDate([singleDate])); // 2025-01-01T00:00:00.000Z

// Invalid input
console.log(_.minDate('not an array')); // null
console.log(_.minDate(null));           // null
```

## Related Functions
- **[maxDate](./max-date.md)** - Finds the latest date from an array.
- **[isDate](./is-date.md)** - Checks if a value is a valid `Date` object.
- **[sort](./sort.md)** - A generic sorting utility. 