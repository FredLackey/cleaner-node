# getDayName

## Purpose
Returns the full name of the day of the week (e.g., "Monday") for a given `Date` object or an ISO 8601 date string.

## Syntax
```javascript
const _ = require('cleaner-node');

_.getDayName(date)
```

## Parameters
- **date** (Date | string): The `Date` object or ISO 8601 date string.

## Returns
- **string | undefined**: The full name of the day, or `undefined` if the input is not a valid date.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// From a Date object
const myDate = new Date('2024-01-01'); // A Monday
console.log(_.getDayName(myDate));     // 'Monday'

// From an ISO string
console.log(_.getDayName('2024-07-04T12:00:00Z')); // A Thursday
// Output: 'Thursday'
```

### Edge Cases
```javascript
const _ = require('cleaner-node');

// Different days
console.log(_.getDayName('2023-12-25')); // 'Monday'
console.log(_.getDayName('2024-03-17')); // 'Sunday'

// Invalid input
console.log(_.getDayName('not a date'));   // undefined
console.log(_.getDayName(null));           // undefined
console.log(_.getDayName(12345));          // undefined
```

## Related Functions
- **[isDate](./is-date.md)** - Checks if a value is a valid `Date` object.
- **[isIsoDate](./is-iso-date.md)** - Checks if a string is in ISO 8601 format.
- **[addDays](./add-days.md)** - Adds days to a date. 