# isDate

## Purpose
Checks if a value is a valid JavaScript `Date` object. It ensures the value is an instance of `Date` and that it represents a valid date (not `Invalid Date`).

## Syntax
```javascript
const _ = require('cleaner-node');

_.isDate(value)
```

## Parameters
- **value** (any): The value to check.

## Returns
- **boolean**: `true` if the value is a valid `Date` object, otherwise `false`.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Valid dates
console.log(_.isDate(new Date()));                // true
console.log(_.isDate(new Date('2024-01-01')));   // true

// Invalid dates
console.log(_.isDate(new Date('not a real date'))); // false (results in 'Invalid Date')
console.log(_.isDate(Date.now()));               // false (it's a number, not a Date object)
console.log(_.isDate('2024-01-01'));             // false (it's a string)
console.log(_.isDate(null));                     // false
console.log(_.isDate({}));                       // false
```

## Related Functions
- **[isIsoDate](./is-iso-date.md)** - Checks if a string is in ISO 8601 format.
- **[fromIsoDate](./from-iso-date.md)** - Creates a `Date` object from an ISO string.
- **[isZeroDate](./is-zero-date.md)** - Checks if a date is the "zero" or epoch start date. 