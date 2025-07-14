# blockdate

## Purpose
Provides a set of utilities to work with "blockdate" strings, a compact, numbers-only date format (e.g., `YYYYMMDDHHmmssSSS`).

## Functions

### `isBlockDate(value, [maxYear])`
Checks if a value is a valid blockdate string.

- **value** (string): The string to check.
- **maxYear** (number, optional): The maximum allowed year. Defaults to the current year.
- **Returns** (boolean): `true` if the value is a valid blockdate string.

### `parseBlockDate(value, [maxYear])`
Parses a blockdate string into its components.

- **value** (string): The blockdate string to parse.
- **maxYear** (number, optional): The maximum allowed year. Defaults to the current year.
- **Returns** (Object | null): An object with the date components, or `null` if invalid.

### `fromBlockDate(value)` or `toDate(value)`
Converts a blockdate string into a JavaScript `Date` object.

- **value** (string): The blockdate string.
- **Returns** (Date | null): The corresponding `Date` object, or `null` if invalid.

## Supported Formats
- `YYYYMMDD`
- `YYYYMMDDHHmm`
- `YYYYMMDDHHmmss`
- `YYYYMMDDHHmmssSSS`

## Examples

### Checking a Blockdate
```javascript
const _ = require('cleaner-node');

console.log(_.isBlockDate('20240101'));                // true
console.log(_.isBlockDate('20240101123000'));          // true
console.log(_.isBlockDate('2024-01-01'));              // false (contains hyphens)
console.log(_.isBlockDate('not a date'));              // false
```

### Parsing a Blockdate
```javascript
const _ = require('cleaner-node');

const parsed = _.parseBlockDate('20240101123059');
console.log(parsed.year.value);   // 2024
console.log(parsed.month.value);  // 0 (January)
console.log(parsed.day.value);    // 1
console.log(parsed.hour.value);   // 12
console.log(parsed.minute.value); // 30
console.log(parsed.second.value); // 59
```

### Converting from a Blockdate
```javascript
const _ = require('cleaner-node');

const date = _.fromBlockDate('20240101120000');
console.log(date.toUTCString()); // 'Mon, 01 Jan 2024 12:00:00 GMT' (timezone dependent)

const anotherDate = _.toDate('20231225');
console.log(anotherDate.toDateString()); // 'Mon Dec 25 2023'
```
## Related Functions
- **[isDate](./is-date.md)** - Checks if a value is a valid `Date` object.
- **[fromIsoDate](./from-iso-date.md)** - Creates a `Date` object from an ISO 8601 string. 