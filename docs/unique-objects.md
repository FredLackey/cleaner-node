# uniqueObjects

## Purpose
Extracts unique objects from an array, preserving the order of the first appearance. It can determine uniqueness based on either object reference (strict equality) or by comparing their JSON string representations.

## Syntax
```javascript
const _ = require('cleaner-node');

_.uniqueObjects(values, strict)
```

## Parameters
- **values** (Array): An array containing a mix of values. Non-object values are filtered out.
- **strict** (boolean, optional): 
  - If `true` (default), uniqueness is based on strict equality (`===`), meaning it checks for the same object instance in memory.
  - If `false`, uniqueness is based on the stringified JSON value of the objects.

## Returns
- **Array<Object>**: A new array containing only the unique objects.

## Examples

### Strict Mode (Default)
```javascript
const _ = require('cleaner-node');

const obj1 = { id: 1 };
const obj2 = { id: 2 };
const obj3 = { id: 1 }; // Different instance, same content as obj1

const objects = [obj1, obj2, obj1, obj3, 'not an object'];
console.log(_.uniqueObjects(objects));
// Output: [{ id: 1 }, { id: 2 }, { id: 1 }]
// obj1 is included once, obj2 is included, obj3 is a different instance and is also included.
```

### Non-Strict Mode (Value-based)
```javascript
const _ = require('cleaner-node');

const obj1 = { id: 1, name: 'A' };
const obj2 = { id: 2, name: 'B' };
const obj3 = { id: 1, name: 'A' }; // Same value as obj1

const objects = [obj1, obj2, obj3, 'not an object'];
console.log(_.uniqueObjects(objects, false));
// Output: [{ id: 1, name: 'A' }, { id: 2, name: 'B' }]
// obj3 is excluded because its stringified value is the same as obj1.
```

## Related Functions
- **[unique](./unique.md)** - A general-purpose uniqueness filter for arrays.
- **[uniqueStrings](./unique-strings.md)** - Gets unique strings from an array.
- **[uniqueNumbers](./unique-numbers.md)** - Gets unique numbers from an array.
- **[isObject](./is-object.md)** - Checks if a value is an object.
- **[stringify](./stringify.md)** - Safely converts a value to a JSON string. 