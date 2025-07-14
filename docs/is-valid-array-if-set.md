# isValidArrayIfSet

## Purpose
Checks if a value is either not set (null or undefined) or is a valid array. This is useful for optional array parameters where the value can be omitted entirely.

## Syntax
```javascript
const _ = require('cleaner-node');

_.isValidArrayIfSet(value, isEmptyOkay)
```

## Parameters
- **value** (any): The value to check.
- **isEmptyOkay** (boolean, optional): If `true`, an empty array is considered valid. Defaults to `false`.

## Returns
- **boolean**: `true` if the value is not set or is a valid array (considering `isEmptyOkay`), `false` otherwise.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Valid cases (returns true)
console.log(_.isValidArrayIfSet([1, 2, 3]));   // true
console.log(_.isValidArrayIfSet([]));          // false (empty not okay by default)
console.log(_.isValidArrayIfSet([], true));    // true (empty okay when specified)
console.log(_.isValidArrayIfSet(null));        // true (not set)
console.log(_.isValidArrayIfSet(undefined));   // true (not set)

// Invalid cases (returns false)
console.log(_.isValidArrayIfSet('array'));     // false
console.log(_.isValidArrayIfSet(123));         // false
console.log(_.isValidArrayIfSet({}));          // false
console.log(_.isValidArrayIfSet(''));          // false
```

### Function Parameter Validation
```javascript
const _ = require('cleaner-node');

function processItems(items, options = {}) {
  // Validate optional array parameters
  if (!_.isValidArrayIfSet(options.filters)) {
    throw new Error('filters must be an array or omitted');
  }
  
  if (!_.isValidArrayIfSet(options.excludeIds, true)) {
    throw new Error('excludeIds must be an array or omitted');
  }
  
  // Use defaults when not set
  const filters = options.filters || ['active'];
  const excludeIds = options.excludeIds || [];
  
  console.log(`Processing with filters: ${filters}, excluding: ${excludeIds}`);
}

// Valid calls
processItems([], { filters: ['active', 'published'] });  // ✓
processItems([], { excludeIds: [] });                    // ✓ (empty okay)
processItems([], {});                                    // ✓ (all omitted)

// Invalid calls  
// processItems([], { filters: 'active' });              // ✗ Throws error
// processItems([], { excludeIds: 123 });                // ✗ Throws error
```

### API Parameter Validation
```javascript
const _ = require('cleaner-node');

app.post('/api/bulk-update', (req, res) => {
  const { ids, tags, categories } = req.body;
  
  // Validate optional array fields
  const arrayFields = { tags, categories };
  
  for (const [key, value] of Object.entries(arrayFields)) {
    if (!_.isValidArrayIfSet(value, true)) {
      return res.status(400).json({ 
        error: `${key} must be an array or omitted` 
      });
    }
  }
  
  // Set defaults for omitted values
  const updateData = {
    ids: ids || [],
    tags: tags || [],
    categories: categories || []
  };
  
  res.json({ success: true, data: updateData });
});
```

## Related Functions
- **[isValidArray](./is-valid-array.md)** - Checks if a value is strictly a valid array.
- **[isSet](./is-set.md)** - Checks if a value is set (not null or undefined).
- **[isValidStringIfSet](./is-valid-string-if-set.md)** - Similar validation for optional strings.
- **[isBooleanIfSet](./is-boolean-if-set.md)** - Similar validation for optional booleans.
