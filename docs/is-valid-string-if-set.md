# isValidStringIfSet

## Purpose
Checks if a value is either not set (null or undefined) or is a valid string. Useful for optional string parameters where the value can be omitted entirely.

## Syntax
```javascript
const _ = require('cleaner-node');

_.isValidStringIfSet(value, isEmptyOkay)
```

## Parameters
- **value** (any): The value to check.
- **isEmptyOkay** (boolean, optional): If `true`, an empty string is considered valid. Defaults to `false`.

## Returns
- **boolean**: `true` if the value is not set or is a valid string (considering `isEmptyOkay`), `false` otherwise.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Valid cases (returns true)
console.log(_.isValidStringIfSet('hello'));     // true
console.log(_.isValidStringIfSet(''));          // false (empty not okay by default)
console.log(_.isValidStringIfSet('', true));    // true (empty okay when specified)
console.log(_.isValidStringIfSet(null));        // true (not set)
console.log(_.isValidStringIfSet(undefined));   // true (not set)

// Invalid cases (returns false)
console.log(_.isValidStringIfSet(123));         // false
console.log(_.isValidStringIfSet([]));          // false
console.log(_.isValidStringIfSet({}));          // false
console.log(_.isValidStringIfSet(true));        // false
```

### Function Parameter Validation
```javascript
const _ = require('cleaner-node');

function createUser(userData, options = {}) {
  // Validate optional string parameters
  if (!_.isValidStringIfSet(options.department)) {
    throw new Error('department must be a string or omitted');
  }
  
  if (!_.isValidStringIfSet(options.notes, true)) {
    throw new Error('notes must be a string or omitted');
  }
  
  // Use defaults when not set
  const department = options.department || 'General';
  const notes = options.notes || '';
  
  console.log(`Creating user in ${department} with notes: "${notes}"`);
}

// Valid calls
createUser({}, { department: 'Engineering' });    // ✓
createUser({}, { notes: '' });                    // ✓ (empty okay for notes)
createUser({}, {});                               // ✓ (all omitted)

// Invalid calls
// createUser({}, { department: 123 });           // ✗ Throws error
// createUser({}, { notes: null });               // ✗ Throws error (null not valid string)
```

### API Parameter Validation
```javascript
const _ = require('cleaner-node');

app.post('/api/products', (req, res) => {
  const { name, price, description, category, tags } = req.body;
  
  // Validate required fields
  if (!name || !price) {
    return res.status(400).json({ error: 'Name and price are required' });
  }
  
  // Validate optional string fields
  const optionalStrings = { description, category, tags };
  
  for (const [key, value] of Object.entries(optionalStrings)) {
    const allowEmpty = key === 'description'; // Allow empty descriptions
    
    if (!_.isValidStringIfSet(value, allowEmpty)) {
      return res.status(400).json({ 
        error: `${key} must be a string or omitted` 
      });
    }
  }
  
  // Set defaults for omitted values
  const productData = {
    name,
    price,
    description: description || '',
    category: category || 'Uncategorized',
    tags: tags || 'general'
  };
  
  res.json({ success: true, product: productData });
});
```

## Related Functions
- **[isValidString](./is-valid-string.md)** - Checks if a value is strictly a valid string.
- **[isSet](./is-set.md)** - Checks if a value is set (not null or undefined).
- **[isValidArrayIfSet](./is-valid-array-if-set.md)** - Similar validation for optional arrays.
- **[isBooleanIfSet](./is-boolean-if-set.md)** - Similar validation for optional booleans.
