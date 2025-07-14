# addDays

## Purpose
Adds a specified number of days to a given `Date` object, returning a new `Date` object with the calculated date.

## Syntax
```javascript
const _ = require('cleaner-node');

_.addDays(date, daysToAdd)
```

## Parameters
- **date** (Date): The starting date.
- **daysToAdd** (number): The number of days to add. Can be a negative number to subtract days.

## Returns
- **Date | undefined**: A new `Date` object representing the resulting date, or `undefined` if the inputs are invalid.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

const today = new Date('2024-01-01');

// Add days
const futureDate = _.addDays(today, 10);
console.log(futureDate.toDateString()); // 'Thu Jan 11 2024'

// Subtract days
const pastDate = _.addDays(today, -5);
console.log(pastDate.toDateString());   // 'Wed Dec 27 2023'
```

### Edge Cases
```javascript
const _ = require('cleaner-node');

const date = new Date('2024-02-25');

// Adding zero days
console.log(_.addDays(date, 0).toDateString()); // 'Sun Feb 25 2024'

// Crossing month and year boundaries
console.log(_.addDays(date, 5).toDateString());  // 'Fri Mar 01 2024' (handles leap year)
console.log(_.addDays(date, 365).toDateString());// 'Mon Feb 24 2025'

// Invalid inputs
console.log(_.addDays('not a date', 10));  // undefined
console.log(_.addDays(date, 'not a number')); // undefined
console.log(_.addDays(null, 5));           // undefined
```

## Related Functions
- **[addMinutes](./add-minutes.md)** - Adds minutes to a date.
- **[isDate](./is-date.md)** - Checks if a value is a valid `Date` object.
- **[isNumber](./is-number.md)** - Checks if a value is a number. 