# isZeroDate

## Purpose
Checks if a `Date` object or an ISO date string represents the "zero date," which is defined as the start of the Unix epoch (`1970-01-01T00:00:00.000Z`).

## Syntax
```javascript
const _ = require('cleaner-node');

_.isZeroDate(value)
```

## Parameters
- **value** (Date | string): The `Date` object or ISO 8601 date string to check.

## Returns
- **boolean**: `true` if the value represents the zero date, otherwise `false`.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

const zeroDate = new Date('1970-01-01T00:00:00.000Z');
const nonZeroDate = new Date();

// From a Date object
console.log(_.isZeroDate(zeroDate));      // true
console.log(_.isZeroDate(nonZeroDate));   // false

// From an ISO string
console.log(_.isZeroDate('1970-01-01T00:00:00.000Z')); // true
console.log(_.isZeroDate(new Date().toISOString()));  // false

// Invalid inputs
console.log(_.isZeroDate(null));          // false
console.log(_.isZeroDate('not a date'));  // false
```

## Related Functions
- **[isDate](./is-date.md)** - Checks if a value is a valid `Date` object.
- **[isEqualDate](./is-equal-date.md)** - Checks if two dates are the same.
- **[ZERO_DATE](../constants.md)** - The constant value for the zero date. 