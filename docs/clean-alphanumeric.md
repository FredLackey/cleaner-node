# cleanAlphanumeric

## Purpose
Removes all characters from a string except for letters and numbers, returning a clean string containing only alphanumeric characters. This function is useful for sanitizing input data, creating clean identifiers, or preparing strings for systems that only accept alphanumeric characters.

## Syntax
```javascript
const _ = require('cleaner-node');

_.cleanAlphanumeric(value)
```

## Parameters
- **value** (any): The input value to clean (will be converted to string if not already)

## Returns
- **string**: A string containing only alphanumeric characters (A-Z, a-z, 0-9), or an empty string if the input is invalid

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Clean strings with mixed characters
console.log(_.cleanAlphanumeric('Hello, World!'));           // 'HelloWorld'
console.log(_.cleanAlphanumeric('user@example.com'));        // 'userexamplecom'
console.log(_.cleanAlphanumeric('Product-123_v2.0'));        // 'Product123v20'
console.log(_.cleanAlphanumeric('ABC-123-XYZ'));             // 'ABC123XYZ'

// Numbers and letters are preserved
console.log(_.cleanAlphanumeric('Test123'));                 // 'Test123'
console.log(_.cleanAlphanumeric('123ABC'));                  // '123ABC'
console.log(_.cleanAlphanumeric('MixedCase123'));            // 'MixedCase123'

// Special characters are removed
console.log(_.cleanAlphanumeric('!@#$%^&*()'));              // ''
console.log(_.cleanAlphanumeric('   spaces   '));            // 'spaces'
console.log(_.cleanAlphanumeric('tab\there'));               // 'tabthere'
console.log(_.cleanAlphanumeric('new\nline'));               // 'newline'
```

### Practical Applications
```javascript
const _ = require('cleaner-node');

// Creating clean usernames
function createUsername(input) {
  const cleaned = _.cleanAlphanumeric(input);
  
  if (cleaned.length === 0) {
    throw new Error('Username must contain at least one alphanumeric character');
  }
  
  if (cleaned.length < 3) {
    throw new Error('Username must be at least 3 characters long');
  }
  
  return cleaned.toLowerCase();
}

console.log(createUsername('John Doe'));                     // 'johndoe'
console.log(createUsername('user@123'));                     // 'user123'
console.log(createUsername('Cool_User_2024!'));              // 'cooluser2024'

// Sanitizing product codes
function sanitizeProductCode(code) {
  const cleaned = _.cleanAlphanumeric(code);
  return cleaned.toUpperCase();
}

console.log(sanitizeProductCode('PROD-123-A'));              // 'PROD123A'
console.log(sanitizeProductCode('item_456_b'));              // 'ITEM456B'
console.log(sanitizeProductCode('SKU#789$C'));               // 'SKU789C'

// Creating file names
function createSafeFileName(name, extension = 'txt') {
  const cleanName = _.cleanAlphanumeric(name);
  
  if (cleanName.length === 0) {
    return `file_${Date.now()}.${extension}`;
  }
  
  return `${cleanName}.${extension}`;
}

console.log(createSafeFileName('My Document!'));             // 'MyDocument.txt'
console.log(createSafeFileName('Report (2024)'));            // 'Report2024.txt'
console.log(createSafeFileName('Data & Analysis'));          // 'DataAnalysis.txt'

// Form input sanitization
function sanitizeFormInput(formData) {
  return {
    productId: _.cleanAlphanumeric(formData.productId),
    categoryCode: _.cleanAlphanumeric(formData.categoryCode),
    referenceNumber: _.cleanAlphanumeric(formData.referenceNumber)
  };
}

const formInput = {
  productId: 'PROD-123!',
  categoryCode: 'CAT_A@B',
  referenceNumber: 'REF#456$'
};

console.log(sanitizeFormInput(formInput));
// { productId: 'PROD123', categoryCode: 'CATAB', referenceNumber: 'REF456' }
```

### Edge Cases and Common Pitfalls

#### Non-String Input Handling
```javascript
const _ = require('cleaner-node');

// Numbers are converted to strings first
console.log(_.cleanAlphanumeric(12345));                     // '12345'
console.log(_.cleanAlphanumeric(123.45));                    // '12345'
console.log(_.cleanAlphanumeric(-123));                      // '123'

// Booleans are converted to strings
console.log(_.cleanAlphanumeric(true));                      // 'true'
console.log(_.cleanAlphanumeric(false));                     // 'false'

// Objects and arrays
console.log(_.cleanAlphanumeric({ key: 'value' }));          // 'objectObject'
console.log(_.cleanAlphanumeric([1, 2, 3]));                 // '123'

// Null and undefined
console.log(_.cleanAlphanumeric(null));                      // ''
console.log(_.cleanAlphanumeric(undefined));                 // ''
```

#### Unicode and International Characters
```javascript
const _ = require('cleaner-node');

// Unicode letters are preserved
console.log(_.cleanAlphanumeric('Café123'));                 // 'Caf123' (é is removed)
console.log(_.cleanAlphanumeric('Naïve'));                   // 'Nave' (ï is removed)
console.log(_.cleanAlphanumeric('Résumé'));                  // 'Rsum' (é is removed)

// Only ASCII alphanumeric characters are kept
console.log(_.cleanAlphanumeric('Hello世界123'));             // 'Hello123' (Chinese characters removed)
console.log(_.cleanAlphanumeric('Привет123'));               // '123' (Cyrillic characters removed)
console.log(_.cleanAlphanumeric('مرحبا123'));                 // '123' (Arabic characters removed)
```

#### Empty Results
```javascript
const _ = require('cleaner-node');

// Inputs that result in empty strings
console.log(_.cleanAlphanumeric('!@#$%^&*()'));              // ''
console.log(_.cleanAlphanumeric('   '));                     // ''
console.log(_.cleanAlphanumeric('---'));                     // ''
console.log(_.cleanAlphanumeric(''));                        // ''

// Validation for empty results
function validateCleanedInput(input) {
  const cleaned = _.cleanAlphanumeric(input);
  
  if (cleaned.length === 0) {
    throw new Error('Input must contain at least one alphanumeric character');
  }
  
  return cleaned;
}
```

## Implementation Details
The function uses the `cleanString()` utility with the `ALPHANUMERIC` constant, which contains the pattern for valid alphanumeric characters (A-Z, a-z, 0-9). The cleaning process:

1. Converts the input to a string using `cleanString()`
2. Applies the alphanumeric character filter
3. Returns only characters that match the pattern `[A-Za-z0-9]`

## Related Functions
- **[cleanString](./clean-string.md)** - Base function for string cleaning with custom patterns
- **[cleanDigits](./clean-digits.md)** - Removes all non-digit characters
- **[isAlphanumeric](./is-alphanumeric.md)** - Checks if string contains only alphanumeric characters
- **[isAlpha](./is-alpha.md)** - Checks if string contains only alphabetic characters
- **[isDigits](./is-digits.md)** - Checks if string contains only digits
- **[trimString](./trim-string.md)** - Removes whitespace from string ends

## Use Cases
- **Username Generation**: Creating clean usernames from user input
- **Product Code Sanitization**: Cleaning product identifiers for databases
- **File Name Creation**: Generating safe file names from user input
- **Form Input Sanitization**: Cleaning form data before processing
- **API Parameter Cleaning**: Sanitizing API parameters that must be alphanumeric
- **Database Key Generation**: Creating clean keys for database records
- **URL Slug Creation**: Preparing text for URL-safe identifiers

## Performance Notes
- Very fast operation using optimized string cleaning
- Minimal memory overhead
- Safe for use in high-frequency data processing
- Leverages the efficient `cleanString()` implementation

## Best Practices
- Always validate that the result is not empty if alphanumeric content is required
- Consider case conversion (upper/lower) after cleaning if needed
- Use for input sanitization before database storage
- Combine with length validation for specific requirements
- Remember that Unicode characters will be removed - use with caution for international content 