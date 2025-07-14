# toEpoch

## Purpose
Converts a JavaScript `Date` object into a Unix epoch timestamp (the number of seconds that have elapsed since January 1, 1970).

## Syntax
```javascript
const _ = require('cleaner-node');

_.toEpoch(date)
```

## Parameters
- **date** (Date, optional): The `Date` object to convert. If not provided, it defaults to the current date and time.

## Returns
- **number**: The Unix epoch timestamp in seconds.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

const myDate = new Date('2023-01-01T00:00:00Z');
console.log(_.toEpoch(myDate)); // 1672531200

// Without a date, it uses the current time
const nowInEpoch = _.toEpoch();
console.log(nowInEpoch); // e.g., 1721247835
```

## Related Functions
- **[fromEpoch](./from-epoch.md)** - Converts an epoch timestamp back to a `Date` object.
- **[isDate](./is-date.md)** - Checks if a value is a valid `Date` object. 