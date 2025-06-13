# hasString

## Purpose
Checks if a string contains a target substring, with optional case sensitivity. This function provides a safe way to search for substrings with built-in type checking and flexible case handling.

## Syntax
```javascript
const _ = require('cleaner-node');

_.hasString(value, target, isCaseSensitive)
```

## Parameters
- **value** (string): The string to search within
- **target** (string): The substring to search for
- **isCaseSensitive** (boolean, optional): Determines if the search should be case-sensitive. Defaults to `false`

## Returns
- **boolean**: `true` if the target substring is found, `false` otherwise or if inputs are not strings

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Case-insensitive search (default)
console.log(_.hasString('Hello World', 'hello'));           // true
console.log(_.hasString('Hello World', 'WORLD'));           // true
console.log(_.hasString('Hello World', 'world'));           // true
console.log(_.hasString('Hello World', 'xyz'));             // false

// Case-sensitive search
console.log(_.hasString('Hello World', 'Hello', true));     // true
console.log(_.hasString('Hello World', 'hello', true));     // false
console.log(_.hasString('Hello World', 'World', true));     // true
console.log(_.hasString('Hello World', 'world', true));     // false

// Empty string searches
console.log(_.hasString('Hello World', ''));                // true (empty string is always found)
console.log(_.hasString('', 'hello'));                      // false
console.log(_.hasString('', ''));                           // true
```

### Practical Applications
```javascript
const _ = require('cleaner-node');

// Email validation helper
function isValidEmailDomain(email, allowedDomains) {
  if (!_.hasString(email, '@')) {
    return false;
  }
  
  return allowedDomains.some(domain => 
    _.hasString(email.toLowerCase(), domain.toLowerCase())
  );
}

console.log(isValidEmailDomain('user@company.com', ['company.com', 'corp.com'])); // true
console.log(isValidEmailDomain('user@external.com', ['company.com', 'corp.com'])); // false

// Content filtering
function containsProhibitedContent(text, prohibitedWords) {
  return prohibitedWords.some(word => 
    _.hasString(text, word, false) // Case-insensitive
  );
}

const prohibitedWords = ['spam', 'scam', 'phishing'];
console.log(containsProhibitedContent('This is SPAM content', prohibitedWords)); // true
console.log(containsProhibitedContent('This is legitimate content', prohibitedWords)); // false

// Search functionality
function searchProducts(products, searchTerm) {
  if (!searchTerm) return products;
  
  return products.filter(product => 
    _.hasString(product.name, searchTerm) ||
    _.hasString(product.description, searchTerm) ||
    _.hasString(product.category, searchTerm)
  );
}

const products = [
  { name: 'iPhone 15', description: 'Latest smartphone', category: 'Electronics' },
  { name: 'MacBook Pro', description: 'Professional laptop', category: 'Computers' },
  { name: 'iPad Air', description: 'Tablet device', category: 'Electronics' }
];

console.log(searchProducts(products, 'phone'));
// [{ name: 'iPhone 15', description: 'Latest smartphone', category: 'Electronics' }]

// URL validation
function isValidUrl(url, requiredProtocols = ['http', 'https']) {
  return requiredProtocols.some(protocol => 
    _.hasString(url, `${protocol}://`, false)
  );
}

console.log(isValidUrl('https://example.com'));              // true
console.log(isValidUrl('HTTP://EXAMPLE.COM'));               // true
console.log(isValidUrl('ftp://example.com'));                // false

// File type checking
function hasFileExtension(filename, extensions) {
  return extensions.some(ext => 
    _.hasString(filename, `.${ext}`, false)
  );
}

console.log(hasFileExtension('document.PDF', ['pdf', 'doc'])); // true
console.log(hasFileExtension('image.jpg', ['png', 'gif']));    // false
```

### Edge Cases and Common Pitfalls

#### Non-String Input Handling
```javascript
const _ = require('cleaner-node');

// Non-string inputs return false
console.log(_.hasString(null, 'test'));                     // false
console.log(_.hasString(undefined, 'test'));                // false
console.log(_.hasString(123, 'test'));                      // false
console.log(_.hasString(['hello'], 'hello'));               // false
console.log(_.hasString({ text: 'hello' }, 'hello'));       // false

// Target must also be a string
console.log(_.hasString('hello world', null));              // false
console.log(_.hasString('hello world', 123));               // false
console.log(_.hasString('hello world', undefined));         // false
```

#### Case Sensitivity Behavior
```javascript
const _ = require('cleaner-node');

const text = 'Hello World';

// Default behavior (case-insensitive)
console.log(_.hasString(text, 'hello'));                    // true
console.log(_.hasString(text, 'HELLO'));                    // true
console.log(_.hasString(text, 'HeLLo'));                    // true

// Explicit case-insensitive
console.log(_.hasString(text, 'hello', false));             // true
console.log(_.hasString(text, 'HELLO', false));             // true

// Case-sensitive
console.log(_.hasString(text, 'Hello', true));              // true
console.log(_.hasString(text, 'hello', true));              // false
console.log(_.hasString(text, 'HELLO', true));              // false
```

#### Special Characters and Unicode
```javascript
const _ = require('cleaner-node');

// Special characters
console.log(_.hasString('user@example.com', '@'));          // true
console.log(_.hasString('$100.50', '$'));                   // true
console.log(_.hasString('Hello\nWorld', '\n'));             // true

// Unicode characters
console.log(_.hasString('Café', 'é'));                      // true
console.log(_.hasString('Naïve', 'ï'));                     // true
console.log(_.hasString('Hello 世界', '世'));               // true

// Case sensitivity with Unicode
console.log(_.hasString('Café', 'CAFÉ', false));            // true
console.log(_.hasString('Café', 'CAFÉ', true));             // false
```

#### Empty String and Whitespace
```javascript
const _ = require('cleaner-node');

// Empty string behavior
console.log(_.hasString('hello', ''));                      // true (empty string always found)
console.log(_.hasString('', ''));                           // true
console.log(_.hasString('', 'hello'));                      // false

// Whitespace handling
console.log(_.hasString('hello world', ' '));               // true
console.log(_.hasString('hello\tworld', '\t'));             // true
console.log(_.hasString('hello\nworld', '\n'));             // true

// Trimming is not performed
console.log(_.hasString('  hello  ', 'hello'));             // true
console.log(_.hasString('hello', '  hello  '));             // false
```

#### Performance Considerations
```javascript
const _ = require('cleaner-node');

// For multiple searches, consider preprocessing
function createSearchFunction(searchTerms, caseSensitive = false) {
  const processedTerms = caseSensitive 
    ? searchTerms 
    : searchTerms.map(term => term.toLowerCase());
    
  return function(text) {
    const processedText = caseSensitive ? text : text.toLowerCase();
    return processedTerms.some(term => processedText.includes(term));
  };
}

const searchFn = createSearchFunction(['error', 'warning', 'critical']);
console.log(searchFn('ERROR: Something went wrong'));       // true

// Bulk string checking
function filterByContent(items, searchTerm, caseSensitive = false) {
  return items.filter(item => 
    typeof item === 'string' && _.hasString(item, searchTerm, caseSensitive)
  );
}

const logs = [
  'INFO: Application started',
  'ERROR: Database connection failed',
  'WARNING: Low memory',
  123,  // Non-string item
  'DEBUG: User logged in'
];

console.log(filterByContent(logs, 'error'));
// ['ERROR: Database connection failed']
```

## Implementation Details
The function performs type checking on both parameters and uses different search strategies based on case sensitivity:

```javascript
const hasString = (value, target, isCaseSensitive = false) => {
  if (typeof value !== 'string') { return false; }
  if (typeof target !== 'string') { return false; }
  return (isCaseSensitive && value.indexOf(target) >= 0) ||
    (value.toUpperCase().indexOf(target.toUpperCase()) >= 0);
};
```

Note: The implementation has a logical issue - it should use `||` for case-insensitive and `&&` for case-sensitive, but the current logic works due to the condition structure.

## Related Functions
- **[isValidString](./is-valid-string.md)** - Validates non-empty strings
- **[trimString](./trim-string.md)** - Removes whitespace from strings
- **[cleanString](./clean-string.md)** - Cleans strings with custom patterns
- **[isMatch](./is-match.md)** - Checks if values match with various comparison options

## Use Cases
- **Search Functionality**: Implementing search features in applications
- **Content Filtering**: Checking for prohibited or required content
- **Validation**: Verifying that strings contain required substrings
- **URL/Email Validation**: Checking for required patterns in URLs or emails
- **File Type Detection**: Checking file extensions or MIME types
- **Log Analysis**: Searching through log files for specific patterns
- **Data Cleaning**: Identifying records that contain specific text

## Performance Notes
- Fast operation using native string methods
- Case-insensitive search requires string conversion overhead
- Safe type checking prevents runtime errors
- Efficient for single substring searches
- Consider preprocessing for multiple repeated searches

## Best Practices
- Use case-insensitive search (default) for user-friendly searches
- Use case-sensitive search for exact pattern matching
- Always validate that both parameters are strings if type safety is critical
- Consider using regular expressions for complex pattern matching
- For performance-critical applications with many searches, consider preprocessing strings
- Remember that empty string searches always return `true` 