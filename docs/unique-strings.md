# uniqueStrings

## Purpose
Extracts unique strings from an array, preserving the order of the first appearance. It provides options for case-insensitive comparison and for trimming whitespace from strings before checking for uniqueness.

## Syntax
```javascript
const _ = require('cleaner-node');

_.uniqueStrings(values, isCaseSensitive, trim)
```

## Parameters
- **values** (Array): An array containing a mix of values. Non-string values are filtered out.
- **isCaseSensitive** (boolean, optional): If `true`, the comparison will be case-sensitive. Defaults to `false`.
- **trim** (boolean, optional): If `true`, trims leading and trailing whitespace from each string before comparison. Defaults to `true`.

## Returns
- **Array<string>**: A new array containing only the unique strings.

## Examples

### Default Behavior (Case-Insensitive, Trimmed)
```javascript
const _ = require('cleaner-node');

const strings = ['Apple', 'Banana', '  apple  ', 'Cherry', 'banana', null];
console.log(_.uniqueStrings(strings));
// Output: ['Apple', 'Banana', 'Cherry']
```

### Case-Sensitive
```javascript
const _ = require('cleaner-node');

const strings = ['apple', 'Apple', 'apple'];
console.log(_.uniqueStrings(strings, true));
// Output: ['apple', 'Apple']
```

### Without Trimming
```javascript
const _ = require('cleaner-node');

const strings = [' apple', 'apple ', 'apple'];
console.log(_.uniqueStrings(strings, false, false));
// Output: [' apple', 'apple ', 'apple']
```

## Related Functions
- **[unique](./unique.md)** - A general-purpose uniqueness filter for arrays.
- **[uniqueNumbers](./unique-numbers.md)** - Gets unique numbers from an array.
- **[uniqueObjects](./unique-objects.md)** - Gets unique objects from an array.
- **[isValidString](./is-valid-string.md)** - Checks if a value is a valid string.
- **[trimString](./trim-string.md)** - Removes whitespace from the beginning and end of a string. 