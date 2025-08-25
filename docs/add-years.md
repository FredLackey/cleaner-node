# addYears

## Purpose
Adds a specified number of years to a given `Date` object, returning a new `Date` object with the calculated date. It correctly handles leap years.

## Syntax
```javascript
const _ = require('cleaner-node');

_.addYears(date, yearsToAdd)
```

## Parameters
- **date** (Date): The starting date.
- **yearsToAdd** (number): The number of years to add. Can be a negative number to subtract years.

## Returns
- **Date | undefined**: A new `Date` object representing the resulting date, or `undefined` if the inputs are invalid.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

const date = new Date('2024-07-15');

// Add years
const futureDate = _.addYears(date, 5);
console.log(futureDate.toISOString().split('T')[0]); // '2029-07-15'

// Subtract years
const pastDate = _.addYears(date, -3);
console.log(pastDate.toISOString().split('T')[0]);   // '2021-07-15'
```

### Edge Cases
```javascript
const _ = require('cleaner-node');

// Handling leap years
const feb29 = new Date('2024-02-29');
const nextYear = _.addYears(feb29, 1);
console.log(nextYear.toISOString().split('T')[0]); // '2025-02-28'

const feb28 = new Date('2023-02-28');
const leapYear = _.addYears(feb28, 1);
console.log(leapYear.toISOString().split('T')[0]); // '2024-02-28'

// Invalid inputs
console.log(_.addYears('not a date', 10));  // undefined
console.log(_.addYears(new Date(), 'not a number')); // undefined
```

## Related Functions
- **[addMonths](./add-months.md)** - Adds months to a date.
- **[addDays](./add-days.md)** - Adds days to a date.
- **[isDate](./is-date.md)** - Checks if a value is a valid `Date` object.
