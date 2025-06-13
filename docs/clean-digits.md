# cleanDigits

## Purpose
Removes all non-digit characters from a string, returning a clean string containing only numeric digits (0-9). This function is useful for extracting numbers from formatted strings, cleaning phone numbers, or preparing numeric data for processing.

## Syntax
```javascript
const _ = require('cleaner-node');

_.cleanDigits(value)
```

## Parameters
- **value** (any): The input value to clean (will be converted to string if not already)

## Returns
- **string**: A string containing only digits (0-9), or an empty string if no digits are found

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Extract digits from formatted strings
console.log(_.cleanDigits('(555) 123-4567'));               // '5551234567'
console.log(_.cleanDigits('$1,234.56'));                    // '123456'
console.log(_.cleanDigits('Product-123-v2.0'));             // '1232'
console.log(_.cleanDigits('ABC-789-XYZ'));                  // '789'

// Pure numbers are preserved
console.log(_.cleanDigits('123456'));                       // '123456'
console.log(_.cleanDigits('000123'));                       // '000123'

// Mixed content
console.log(_.cleanDigits('Order #12345'));                 // '12345'
console.log(_.cleanDigits('Version 2.1.3'));                // '213'
console.log(_.cleanDigits('Room 101A'));                    // '101'

// No digits found
console.log(_.cleanDigits('Hello World'));                  // ''
console.log(_.cleanDigits('ABC-XYZ'));                      // ''
console.log(_.cleanDigits('!@#$%^&*()'));                   // ''
```

### Practical Applications
```javascript
const _ = require('cleaner-node');

// Phone number cleaning
function cleanPhoneNumber(phone) {
  const digits = _.cleanDigits(phone);
  
  if (digits.length === 0) {
    throw new Error('Phone number must contain digits');
  }
  
  if (digits.length === 10) {
    // Format as (XXX) XXX-XXXX
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  } else if (digits.length === 11 && digits.startsWith('1')) {
    // Remove country code and format
    const local = digits.slice(1);
    return `(${local.slice(0, 3)}) ${local.slice(3, 6)}-${local.slice(6)}`;
  } else {
    return digits; // Return as-is for international numbers
  }
}

console.log(cleanPhoneNumber('(555) 123-4567'));            // '(555) 123-4567'
console.log(cleanPhoneNumber('555.123.4567'));              // '(555) 123-4567'
console.log(cleanPhoneNumber('1-555-123-4567'));            // '(555) 123-4567'
console.log(cleanPhoneNumber('+1 555 123 4567'));           // '(555) 123-4567'

// Credit card number extraction
function extractCardNumber(input) {
  const digits = _.cleanDigits(input);
  
  if (digits.length < 13 || digits.length > 19) {
    throw new Error('Invalid credit card number length');
  }
  
  // Format with spaces every 4 digits
  return digits.replace(/(\d{4})(?=\d)/g, '$1 ');
}

console.log(extractCardNumber('4532-1234-5678-9012'));      // '4532 1234 5678 9012'
console.log(extractCardNumber('4532 1234 5678 9012'));      // '4532 1234 5678 9012'
console.log(extractCardNumber('Card: 4532123456789012'));   // '4532 1234 5678 9012'

// Price extraction from formatted strings
function extractPrice(priceString) {
  const digits = _.cleanDigits(priceString);
  
  if (digits.length === 0) {
    return 0;
  }
  
  // Assume last 2 digits are cents
  if (digits.length >= 3) {
    const dollars = digits.slice(0, -2);
    const cents = digits.slice(-2);
    return parseFloat(`${dollars}.${cents}`);
  } else {
    return parseFloat(`0.${digits.padStart(2, '0')}`);
  }
}

console.log(extractPrice('$12.34'));                        // 12.34
console.log(extractPrice('Price: $1,234.56'));              // 1234.56
console.log(extractPrice('€99'));                           // 0.99
console.log(extractPrice('$5'));                            // 0.05

// Order number extraction
function extractOrderNumber(orderString) {
  const digits = _.cleanDigits(orderString);
  
  if (digits.length === 0) {
    throw new Error('No order number found');
  }
  
  return `ORD-${digits}`;
}

console.log(extractOrderNumber('Order #123456'));           // 'ORD-123456'
console.log(extractOrderNumber('Ref: ABC-789-XYZ'));        // 'ORD-789'
console.log(extractOrderNumber('Invoice 2024-001'));        // 'ORD-2024001'
```

### Edge Cases and Common Pitfalls

#### Non-String Input Handling
```javascript
const _ = require('cleaner-node');

// Numbers are converted to strings first
console.log(_.cleanDigits(12345));                          // '12345'
console.log(_.cleanDigits(123.45));                         // '12345'
console.log(_.cleanDigits(-123));                           // '123' (minus sign removed)

// Booleans and other types
console.log(_.cleanDigits(true));                           // '' (no digits in 'true')
console.log(_.cleanDigits(false));                          // '' (no digits in 'false')

// Objects and arrays
console.log(_.cleanDigits({ value: 123 }));                 // '123'
console.log(_.cleanDigits([1, 2, 3]));                      // '123'

// Null and undefined
console.log(_.cleanDigits(null));                           // ''
console.log(_.cleanDigits(undefined));                      // ''
```

#### Decimal Points and Negative Signs
```javascript
const _ = require('cleaner-node');

// Decimal points are removed
console.log(_.cleanDigits('123.45'));                       // '12345'
console.log(_.cleanDigits('0.99'));                         // '099'
console.log(_.cleanDigits('.50'));                          // '50'

// Negative signs are removed
console.log(_.cleanDigits('-123'));                         // '123'
console.log(_.cleanDigits('(-456)'));                       // '456'

// Scientific notation
console.log(_.cleanDigits('1.23e10'));                      // '12310'
console.log(_.cleanDigits('5E-3'));                         // '53'
```

#### Empty Results and Validation
```javascript
const _ = require('cleaner-node');

// Inputs with no digits
console.log(_.cleanDigits('Hello World'));                  // ''
console.log(_.cleanDigits('ABC-XYZ'));                      // ''
console.log(_.cleanDigits('!@#$%^&*()'));                   // ''

// Validation for empty results
function validateDigitExtraction(input) {
  const digits = _.cleanDigits(input);
  
  if (digits.length === 0) {
    throw new Error('Input must contain at least one digit');
  }
  
  return digits;
}

// Safe extraction with fallback
function safeExtractDigits(input, fallback = '0') {
  const digits = _.cleanDigits(input);
  return digits.length > 0 ? digits : fallback;
}

console.log(safeExtractDigits('ABC-123'));                  // '123'
console.log(safeExtractDigits('No digits here'));          // '0'
console.log(safeExtractDigits('No digits', '999'));        // '999'
```

## Implementation Details
The function uses the `cleanString()` utility with the `DIGITS` constant, which contains the pattern for valid digit characters (0-9). The cleaning process:

1. Converts the input to a string using `cleanString()`
2. Applies the digits-only character filter
3. Returns only characters that match the pattern `[0-9]`

## Related Functions
- **[cleanString](./clean-string.md)** - Base function for string cleaning with custom patterns
- **[cleanAlphanumeric](./clean-alphanumeric.md)** - Removes all non-alphanumeric characters
- **[isDigits](./is-digits.md)** - Checks if string contains only digits
- **[isNumber](./is-number.md)** - Checks if value is a valid number
- **[trimString](./trim-string.md)** - Removes whitespace from string ends

## Use Cases
- **Phone Number Cleaning**: Extracting digits from formatted phone numbers
- **Credit Card Processing**: Cleaning card numbers for validation
- **Price Extraction**: Getting numeric values from formatted prices
- **Order Number Processing**: Extracting numeric IDs from order strings
- **Data Import**: Cleaning numeric data from CSV or text files
- **Form Input Sanitization**: Ensuring only digits in numeric fields
- **Barcode Processing**: Extracting numeric codes from scanned data

## Performance Notes
- Very fast operation using optimized string cleaning
- Minimal memory overhead
- Safe for use in high-frequency data processing
- Leverages the efficient `cleanString()` implementation

## Best Practices
- Always validate that the result is not empty if digits are required
- Consider the context when processing decimal numbers (you may lose the decimal point)
- Use for data cleaning before numeric conversion with `parseInt()` or `parseFloat()`
- Remember that leading zeros are preserved in the string result
- Combine with length validation for specific numeric format requirements
- Be aware that negative signs and decimal points are removed 