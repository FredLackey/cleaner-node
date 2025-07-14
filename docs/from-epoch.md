# fromEpoch

## Purpose
Converts a Unix epoch timestamp (seconds since January 1, 1970) into a JavaScript `Date` object.

## Syntax
```javascript
const _ = require('cleaner-node');

_.fromEpoch(value)
```

## Parameters
- **value** (number | string): The epoch timestamp in seconds.

## Returns
- **Date | null**: A `Date` object, or `null` if the input is not a valid epoch value.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// From a number
const date1 = _.fromEpoch(1672531200); // Represents 2023-01-01 00:00:00 UTC
console.log(date1.toUTCString());   // 'Sun, 01 Jan 2023 00:00:00 GMT'

// From a string
const date2 = _.fromEpoch('1704067200'); // Represents 2024-01-01 00:00:00 UTC
console.log(date2.toUTCString());    // 'Mon, 01 Jan 2024 00:00:00 GMT'
```

### Edge Cases
```javascript
const _ = require('cleaner-node');

// The very beginning of epoch time
const epochStart = _.fromEpoch(0);
console.log(epochStart.toUTCString()); // 'Thu, 01 Jan 1970 00:00:00 GMT'

// Invalid inputs
console.log(_.fromEpoch(null));         // null
console.log(_.fromEpoch('not a number')); // null
console.log(_.fromEpoch({}));           // null
```

## Related Functions
- **[toEpoch](./to-epoch.md)** - Converts a `Date` object to an epoch timestamp.
- **[isDate](./is-date.md)** - Checks if a value is a valid `Date` object.
- **[fromIsoDate](./from-iso-date.md)** - Creates a `Date` from an ISO string. 