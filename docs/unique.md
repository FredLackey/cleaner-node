# unique

## Purpose
Creates a new array with unique values by delegating to more specific functions (`uniqueNumbers`, `uniqueObjects`, `uniqueStrings`) based on the predominant data type in the input array. It automatically detects whether the array contains primarily numbers, objects, or strings and applies the appropriate logic.

## Syntax
```javascript
const _ = require('cleaner-node');

_.unique(values, params)
```

## Parameters
- **values** (Array): The array from which to extract unique values.
- **params** (Object, optional): An object with parameters to be passed to the underlying `unique*` function.
  - **strict** (boolean, optional): For `uniqueObjects`. If `true`, uses strict equality (`===`). Defaults to `true`.
  - **isCaseSensitive** (boolean, optional): For `uniqueStrings`. If `true`, comparison is case-sensitive. Defaults to `false`.
  - **trim** (boolean, optional): For `uniqueStrings`. If `true`, trims whitespace from strings before comparing. Defaults to `true`.

## Returns
- **Array | null**: A new array with unique values. The type of the elements depends on the predominant type found. Returns `null` if no numbers, objects, or valid strings are found.

## Examples

### With Numbers
```javascript
const _ = require('cleaner-node');

console.log(_.unique([1, 2, 'a', 2, 3, 1]));
// Output: [1, 2, 3]
```

### With Strings
```javascript
const _ = require('cleaner-node');

console.log(_.unique(['apple', 'banana', 'apple', '  APPLE  ']));
// Output: ['apple', 'banana']

console.log(_.unique(['apple', 'banana', 'apple', 'APPLE'], { isCaseSensitive: true }));
// Output: ['apple', 'banana', 'APPLE']
```

### With Objects
```javascript
const _ = require('cleaner-node');

const obj1 = { id: 1 };
const obj2 = { id: 2 };
const obj3 = { id: 1 };
console.log(_.unique([obj1, obj2, obj3, obj1]));
// Output: [{ id: 1 }, { id: 2 }, { id: 1 }] (by default, object uniqueness is based on reference)
```

## Related Functions
- **[uniqueNumbers](./unique-numbers.md)** - Gets unique numbers from an array.
- **[uniqueObjects](./unique-objects.md)** - Gets unique objects from an array.
- **[uniqueStrings](./unique-strings.md)** - Gets unique strings from an array. 