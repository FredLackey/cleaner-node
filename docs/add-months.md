# addMonths

## Purpose
Adds a specified number of months to a given `Date` object, returning a new `Date` object with the calculated date. It correctly handles cases where the target month has fewer days than the original month.

## Syntax
```javascript
const _ = require('cleaner-node');

_.addMonths(date, monthsToAdd)
```

## Parameters
- **date** (Date): The starting date.
- **monthsToAdd** (number): The number of months to add. Can be a negative number to subtract months.

## Returns
- **Date | undefined**: A new `Date` object representing the resulting date, or `undefined` if the inputs are invalid.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

const date = new Date('2024-04-15');

// Add months
const futureDate = _.addMonths(date, 3);
console.log(futureDate.toISOString().split('T')[0]); // '2024-07-15'

// Subtract months
const pastDate = _.addMonths(date, -2);
console.log(pastDate.toISOString().split('T')[0]);   // '2024-02-15'
```

### Edge Cases
```javascript
const _ = require('cleaner-node');

// From a month with 31 days to a month with fewer days
const jan31 = new Date('2024-01-31');
const febFromJan = _.addMonths(jan31, 1);
console.log(febFromJan.toISOString().split('T')[0]); // '2024-02-29' (leap year)

const mar31 = new Date('2023-03-31');
const aprFromMar = _.addMonths(mar31, 1);
console.log(aprFromMar.toISOString().split('T')[0]); // '2023-04-30'

// Crossing year boundaries
const nov15 = new Date('2023-11-15');
const janFromNov = _.addMonths(nov15, 2);
console.log(janFromNov.toISOString().split('T')[0]); // '2024-01-15'

// Invalid inputs
console.log(_.addMonths('not a date', 10));  // undefined
console.log(_.addMonths(new Date(), 'not a number')); // undefined
```

## Related Functions
- **[addYears](./add-years.md)** - Adds years to a date.
- **[addDays](./add-days.md)** - Adds days to a date.
- **[addMinutes](./add-minutes.md)** - Adds minutes to a date.
- **[isDate](./is-date.md)** - Checks if a value is a valid `Date` object.
