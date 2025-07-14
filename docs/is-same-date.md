# isSameDate

## Purpose
Checks if two values are both valid `Date` objects that represent the exact same moment in time (down to the millisecond).

**Note:** This function is an alias for `isEqualDate` and performs the exact same logic.

## Syntax
```javascript
const _ = require('cleaner-node');

_.isSameDate(date1, date2)
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
const dateC = new Date('2024-01-01T12:00:00.001Z');

console.log(_.isSameDate(dateA, dateB)); // true
console.log(_.isSameDate(dateA, dateC)); // false
```

## Related Functions
- **[isEqualDate](./is-equal-date.md)** - An alias for this function.
- **[isDate](./is-date.md)** - Checks if a value is a valid `Date` object. 