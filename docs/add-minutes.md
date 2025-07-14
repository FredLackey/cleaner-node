# addMinutes

## Purpose
Adds a specified number of minutes to a given `Date` object, returning a new `Date` object with the calculated date and time.

## Syntax
```javascript
const _ = require('cleaner-node');

_.addMinutes(date, minutesToAdd)
```

## Parameters
- **date** (Date): The starting date.
- **minutesToAdd** (number): The number of minutes to add. Can be a negative number to subtract minutes.

## Returns
- **Date | undefined**: A new `Date` object representing the resulting date and time, or `undefined` if the inputs are invalid.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

const startTime = new Date('2024-01-01T12:00:00Z');

// Add minutes
const futureTime = _.addMinutes(startTime, 30);
console.log(futureTime.toISOString()); // '2024-01-01T12:30:00.000Z'

// Subtract minutes
const pastTime = _.addMinutes(startTime, -90);
console.log(pastTime.toISOString());   // '2024-01-01T10:30:00.000Z'
```

### Edge Cases
```javascript
const _ = require('cleaner-node');

const date = new Date('2024-01-01T23:45:00Z');

// Adding zero minutes
console.log(_.addMinutes(date, 0).toISOString()); // '2024-01-01T23:45:00.000Z'

// Crossing day boundary
console.log(_.addMinutes(date, 30).toISOString());  // '2024-01-02T00:15:00.000Z'

// Invalid inputs
console.log(_.addMinutes('not a date', 10));  // undefined
console.log(_.addMinutes(date, 'not a number')); // undefined
console.log(_.addMinutes(null, 5));           // undefined
```

## Related Functions
- **[addDays](./add-days.md)** - Adds days to a date.
- **[isDate](./is-date.md)** - Checks if a value is a valid `Date` object.
- **[isNumber](./is-number.md)** - Checks if a value is a number. 