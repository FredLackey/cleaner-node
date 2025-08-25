# Cleaner Node (`cleaner-node`)  

[![npm version](https://badge.fury.io/js/cleaner-node.svg)](https://badge.fury.io/js/cleaner-node)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen.svg)](https://nodejs.org/)

Helpful utilities and scripts to make Node projects more legible and easier for the next developer to take over.

## Background  

There are several libraries out there designed to make life easier for developers (`moment`, `lodash`, `underscore`, etc.).  However, for the most part, the goals of those utilities are to *add on* to what Node and JavaScript bring to the table.  And, as Node and JavaScript mature, developers find them to be less of a _necessity_ and end up removing them.  While `cleaner-node` is _also_ a helper package, and completely unnecessary, its goal is to abstract some of the more redundant and verbose syntaxes.  The end result is a codebase that still functions as it would _without_ `cleaner-node` but is easier to read *and maintain*.  Unlike those other libraries, which shrink over time, I intend on growing `cleaner-node` for as long as Node exists so that I don't have to write the same code again, and again, and again, and again, and ag....

## Requirements

- **Node.js**: >= 20.0.0
- **Dependencies**: jsonwebtoken, uuid, semver, rimraf

## Installation  

```bash
npm install cleaner-node
```

## Quick Start

```javascript
const _ = require('cleaner-node');

// String manipulation
const cleaned = _.cleanString('  Hello World!  '); // "Hello World!"
const isValid = _.isValidString(cleaned); // true
const email = _.getEmail('Contact us at support@example.com today'); // "support@example.com"

// Array operations  
const unique = _.unique([1, 2, 2, 3, 3, 3]); // [1, 2, 3]
const first = _.getFirst(['a', 'b', 'c']); // 'a'
const count = _.getArrayCount([1, 2, 3]); // 3

// Validation
const isEmail = _.isEmail('user@example.com'); // true
const isGuid = _.isGuidFormat('550e8400-e29b-41d4-a716-446655440000'); // true
const isCamel = _.isCamelCase('myVariableName'); // true

// File operations (synchronous)
const exists = _.isFile('./package.json'); // true
const content = _.readFile('./package.json'); // file contents as string
const files = _.getFiles('./src'); // array of file paths

// Object manipulation
const cleaned = _.cleanObject({ name: 'John', age: undefined, city: 'NYC' }); 
// Result: { name: 'John', city: 'NYC' } (undefined removed)

// Date utilities
const tomorrow = _.addDays(new Date(), 1); // adds 1 day to current date
const timestamp = _.toEpoch(new Date()); // converts to Unix timestamp

// ID generation
const guid = _.newGuid(); // "550e8400-e29b-41d4-a716-446655440000"
const uid = _.newUid(); // "A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6"

// HTTP requests
const response = await _.doGet('https://api.example.com/data');
const result = await _.doPost('https://api.example.com/users', { name: 'John' });
```

## Documentation

📚 **Comprehensive documentation is now available in the [`/docs`](./docs) directory!**

Each function has its own detailed documentation file with:
- Clear purpose and description
- Complete parameter documentation
- Multiple usage examples
- Edge cases and error handling
- Related functions and cross-references

**Quick Links:**
- [📖 Full Documentation Index](./docs/README.md) - Complete navigation to all functions
- [🔍 String Functions](./docs/README.md#string-functions) - String manipulation utilities
- [📊 Array Functions](./docs/README.md#array-functions) - Array processing utilities  
- [✅ Validation Functions](./docs/README.md#validation-functions) - Type checking and validation
- [🛠️ Utility Functions](./docs/README.md#utility-functions) - General purpose utilities

**For AI Tools:** The documentation is specifically structured to help AI tools understand and generate code using the `cleaner-node` package. Each function includes comprehensive examples and clear parameter descriptions.

## Popular Functions

Here are some of the most commonly used functions in `cleaner-node`:

> **Note:** This is just a small selection of popular functions. The complete library includes **194 functions** covering string manipulation, file operations, validation, HTTP requests, date handling, cryptography, and much more. See the [complete function reference](#functions--usage) below or the [full documentation](./docs/README.md) for all available functions.

### 🔥 Most Popular
- **`isValidString(value)`** - Comprehensive string validation
- **`cleanString(value)`** - Clean and normalize strings  
- **`isEmail(value)`** - Email address validation
- **`newGuid()`** - Generate UUID v4
- **`copyObject(obj)`** - Deep copy objects
- **`readFile(path)`** - Synchronous file reading
- **`isFile(path)`** / **`isFolder(path)`** - Path existence checking

### ⚡ String Utilities  
- **`trimToNull(str)`** - Trim string or return null if empty
- **`getEmail(text)`** - Extract first email from text
- **`cleanAlphanumeric(str)`** - Keep only letters and numbers
- **`isCamelCase(str)`** / **`toCamelCase(str)`** - Case checking/conversion

### 📋 Array & Object Tools
- **`unique(array)`** - Remove duplicates intelligently
- **`getFirst(array)`** / **`getLast(array)`** - Safe array access
- **`removeProperty(obj, key)`** - Remove property recursively
- **`cleanObject(obj)`** - Remove undefined values

### 🛡️ Validation Suite
- **`isGuidFormat(str)`** - GUID format validation
- **`isValidArray(arr)`** - Array validation with options
- **`isNumber(value)`** - Flexible number checking
- **`isDefined(value)`** - Check if not undefined

## Functions & Usage

### String Manipulation

| Function | Description |
|---|---|
| `cleanAlphaNumeric` | Convenience alias for `cleanAlphanumeric`. |
| `cleanAlphanumeric` | Removes all characters from a string except for letters and numbers. |
| `cleanDigits` | Removes all non-digit characters from a string. |
| `cleanString` | Cleans a string by keeping only specified valid characters and removing specified invalid characters. |
| `getBracket` | Finds the matching bracket pair that encloses the given string value. |
| `getEmail` | Extracts the first valid email address found in a string. |
| `getEmails` | Extracts all valid email addresses found in a string using a regular expression. |
| `getInnerTokens` | Extracts the innermost content enclosed by a specified pair of opening and closing brackets/tokens. |
| `getPadPrefix` | Gets the leading whitespace (prefix padding) of a string. |
| `getPadSuffix` | Gets the trailing whitespace (suffix padding) of a string. |
| `getPads` | Calculates the length of leading (prefix) and trailing (suffix) whitespace in a string. |
| `getStringSize` | Calculates the byte size of a string using the specified encoding. |
| `getSubstring` | Finds the longest common starting substring among an array of strings. |
| `getTokenizedSegments` | Extracts segments from a string that are enclosed by specified opening and closing brackets. |
| `hasString` | Checks if a string contains a target substring, with optional case sensitivity. |
| `removePrefix` | Removes a specified prefix from the beginning of a string, potentially multiple times. |
| `removeSuffix` | Removes a specified suffix from the end of a string, potentially multiple times. |
| `splitFirst` | Splits a string at the first occurrence of a specified separator. |
| `stringify` | Converts a JavaScript value to a JSON string, safely handling circular references. |
| `toCamelCase` | Converts a string to camelCase. |
| `toKebabCase` | Converts a string to kebab-case. |
| `toPascalCase` | Converts a string to PascalCase. |
| `toReq` | Convenience alias for `toRequest`. |
| `toSnakeCase` | Converts a string to snake_case. |
| `trimString` | Trims leading and trailing whitespace from a string. |
| `trimToNull` | Trims leading and trailing whitespace from a string, returning null if empty. |
| `trimToUndefined` | Trims leading and trailing whitespace from a string, returning undefined if empty. |
| `undouble` | Replaces consecutive occurrences of specified target characters within a string with a single instance. |
| `unQuote` | Convenience alias for `unquote`. |
| `unquote` | Removes leading and trailing quote characters (") from a string. |

### File System Operations

| Function | Description |
|---|---|
| `copyContents` | Asynchronously copies the contents of a source file to a destination file, line by line. |
| `copyFile` | Synchronously copies a file from a source path to a target path. |
| `createPath` | Creates a directory path recursively if it doesn't already exist. |
| `deleteDirectory` | Synchronously deletes a directory and its contents recursively. |
| `deleteFile` | Synchronously deletes a file. |
| `getCommonPath` | Finds the longest common base directory path from an array of file paths. |
| `getFileContents` | Synchronously reads the contents of a file. |
| `getFileName` | Extracts the file name from a file path, optionally including or excluding the extension. |
| `getFileSize` | Gets the size of a file in bytes. |
| `getFiles` | Synchronously reads the contents of a directory and returns an array of full paths for its direct children (files and subdirectories). |
| `getFolderContents` | Convenience alias for `getFiles`. |
| `isFile` | Checks if a given path points to an existing file. |
| `isFolder` | Checks if a given path points to an existing directory. |
| `isDirectory` | Convenience alias for `isFolder`. |
| `isValidPath` | Checks if a string appears to be a valid file/folder path based on its basename. |
| `isValidPathIfSet` | Checks if a value is not set or is a valid path. |
| `loadJson` | Reads a file, parses its content as JSON, and returns the resulting object or array. |
| `makePath` | Convenience alias for `createPath`. |
| `moveFile` | Moves a file from a source path to a destination path. |
| `readFile` | Convenience alias for `getFileContents`. |
| `readLines` | Asynchronously reads a file line by line and returns an array of strings. |
| `saveJson` | Converts an object or array to a JSON string and saves it to a file. |
| `walk` | Walks a directory recursively and returns an object containing lists of all files and folders found. |
| `writeFile` | Writes content to a file, creating the necessary directory structure if it doesn't exist. |
| `writeLines` | Writes an array of strings to a file, joining them with the OS-specific end-of-line character. |

### Date & Time

| Function | Description |
|---|---|
| `addDays` | Adds a specified number of days to a date. |
| `addMinutes` | Adds a specified number of minutes to a date. |
| `addMonths` | Adds a specified number of months to a date. |
| `addYears` | Adds a specified number of years to a date. |
| `blockdate` | Module containing blockdate utilities (`fromBlockDate`, `isBlockDate`, etc.). |
| `fromBlockDate` | Converts a blockdate string to a JavaScript Date object. |
| `fromEpoch` | Converts a Unix epoch timestamp (seconds) to a JavaScript Date object. |
| `fromIsoDate` | Converts an ISO 8601 date string to a JavaScript Date object. |
| `fromShortDate` | Converts a short date string (YYYY-MM-DD or YYYY/MM/DD) to a JavaScript Date object. |
| `getBlockDate` | Formats a Date object into a blockdate string (e.g., YYYYMMDDHHmmssSSS). |
| `getDayName` | Gets the full name of the day of the week for a given Date or ISO date string. |
| `getDuration` | Calculates the duration between two timestamps (or Date objects) and formats it. |
| `maxDate` | Finds the latest date from an array of Date objects. |
| `minDate` | Finds the earliest date from an array of Date objects. |
| `now` | Returns the current date and time. |
| `toEpoch` | Converts a Date object to its Unix epoch timestamp (seconds). |

### Object & Array Processing

| Function | Description |
|---|---|
| `ascending` | Sorts an array in ascending order (convenience function). |
| `cleanDto` | Cleans DTOs by removing audit fields, handling ID/UID properties, removing nulls etc. Modifies input in place. |
| `cleanObject` | Recursively cleans an object or array by removing properties with `undefined` values. |
| `copy` | Convenience alias for `copyObject`. |
| `copyObject` | Creates a deep copy of an object using JSON stringification and parsing. |
| `count` | Convenience alias for `getArrayCount`. |
| `descending` | Sorts an array in descending order (convenience function). |
| `findAllUids` | Finds all unique UID strings within an object or array, including nested structures. |
| `first` | Convenience alias for `getFirst`. |
| `fromDto` | Converts string representations within DTOs to JS types (e.g., ISO strings to Dates). Modifies input in place. |
| `fromResult` | Extracts the nested 'result' property from an object recursively. |
| `getArrayCount` | Gets the length of an array, handling non-arrays gracefully. |
| `getEnum` | Retrieves the enum value from an object. |
| `getEnums` | Extracts enum values from a given object or array of objects. |
| `getFirst` | Gets the first element of an array or the first character of a string. |
| `getId` | Extracts an ID ('id' or '_id') from an object or returns the input if already an ID. |
| `getIds` | Extracts IDs from an array of items or IDs, ensuring each item is processed by `getId`. |
| `getLast` | Gets the last element of an array or the last character of a string. |
| `getMax` | Finds the maximum numeric value in an array. |
| `getMin` | Finds the minimum numeric value in an array. |
| `getSingle` | Returns the first element of an array if it contains exactly one element, otherwise undefined. |
| `getUid` | Extracts a UID/GUID from an item or returns the input if it's already valid. |
| `getUids` | Extracts UIDs from an array of items, ensuring each item is processed by `getUid`. |
| `initArray` | Ensures the input value is an array and filters out undefined elements. |
| `last` | Convenience alias for `getLast`. |
| `max` | Convenience alias for `getMax`. |
| `min` | Convenience alias for `getMin`. |
| `print` | Prints the key-value pairs of an object to the console in a formatted manner. |
| `removeAuditFields` | Recursively removes standard audit fields from an object or array. |
| `removeDeleted` | Recursively removes items marked as deleted (using a checker function) from a structure. |
| `removeProperty` | Recursively removes a specified property from an object and nested structures. |
| `replaceValues` | Recursively replaces values within an object or array structure based on source/target arrays. |
| `single` | Convenience alias for `getSingle`. |
| `sort` | Sorts an array containing numbers (or string representations), filtering non-numerics. |
| `toColumn` | Formats an array of values into a single column of strings, padded to the width of the longest value. |
| `toRequest` | Transforms a raw HTTP request object into a standardized format. |
| `toResponse` | Formats a response based on the structure of the original input (object/array). |
| `toResult` | Returns a single item or an array based on the sample array. |
| `toTable` | Converts an array of delimited strings into a formatted text table with borders. |
| `trimArray` | Trims leading/trailing non-valid-string elements from an array. |
| `unique` | Creates a new array with unique values based on the predominant data type (numbers, objects, or strings). |
| `uniqueNumbers` | Filters an array to contain only unique numbers or string representations of numbers. |
| `uniqueObjects` | Filters an array to contain only unique objects (by strict equality or stringification). |
| `uniqueStrings` | Filters an array to contain only unique strings (case-sensitive/trim options available). |

### Validation & Type Checking

| Function | Description |
|---|---|
| `isAlpha` | Checks if a string contains only alphabetic characters. |
| `isAlphaNumeric` | Convenience alias for `isAlphanumeric`. |
| `isAlphanumeric` | Checks if a string contains only alphanumeric characters. |
| `isAsync` | Checks if a value is an async function. |
| `isBlockDate` | Checks if a value is a valid blockdate format. |
| `isBoolean` | Checks if a value is strictly true or false. |
| `isBooleanIfSet` | Checks if a value is not set (null/undefined) or is a boolean. |
| `isBracketted` | Checks if a string starts and ends with corresponding brackets. |
| `isCamelCase` | Checks if a string is in camelCase format. |
| `isCaps` | Checks if a string is entirely uppercase. |
| `isDate` | Checks if a value is a valid JavaScript Date object. |
| `isDefined` | Checks if a value is defined (not `undefined`). |
| `isDeleted` | Checks if an item is considered "deleted" based on a provided checking function. |
| `isDigits` | Checks if a string contains only numeric digits. |
| `isEmptyArray` | Checks if a value is an array that contains no elements. |
| `isEmail` | Checks if a string is a valid email address format. |
| `isEqualDate` | Checks if two values are valid Dates representing the exact same time. |
| `isFunction` | Checks if a value is a function. |
| `isGuidFormat` | Checks if a value conforms to the standard GUID format. |
| `isIpAddress` | Checks if a string represents a valid IPv4 address (allows 'localhost', '0.0.0.0'). |
| `isIsoDate` | Checks if a string represents a valid ISO 8601 date format. |
| `isJson` | Checks if a string is valid JSON (either an object or array). |
| `isJsonArray` | Checks if a string is a valid JSON array, including whitespace handling and validation. |
| `isJsonObject` | Checks if a string is a valid JSON object, including whitespace handling and validation. |
| `isKebabCase` | Checks if a string is in kebab-case format. |
| `isLowerCase` | Checks if a string is entirely lowercase. |
| `isMatch` | Compares two strings for equality with options for case sensitivity and whitespace. |
| `isNumber` | Checks if a value can be interpreted as a finite number. |
| `isObject` | Checks if a value is a plain JavaScript object (not null, not an array). |
| `isPascalCase` | Checks if a string is in PascalCase format. |
| `isPhoneNumber` | Checks if a string matches a common phone number format. |
| `isSameDate` | Convenience alias for `isEqualDate`. |
| `isSemver` | Checks if a string is a valid Semantic Versioning (SemVer) string. |
| `isSet` | Checks if a value is neither null nor undefined. |
| `isShortDate` | Checks if a string represents a valid date in YYYY/MM/DD or YYYY-MM-DD format. |
| `isSnakeCase` | Checks if a string is in snake_case format. |
| `isUidFormat` | Checks if a value is a valid UID format (32 alphanumeric chars). |
| `isUrl` | Checks if a string is a valid URL (starts with http/https and is parseable). |
| `isValidArray` | Checks if a value is an array and optionally if it's non-empty. |
| `isValidArrayIfSet` | Checks if a value is not set or is a valid array. |
| `isValidChars` | Checks if a string contains only characters from a specified set. |
| `isValidObject` | Checks if a value is a non-empty plain JavaScript object. |
| `isValidString` | Checks if a value is a string and optionally if it's non-empty after trimming. |
| `isValidStringIfSet` | Checks if a value is not set or is a valid string. |
| `isZeroDate` | Checks if a value represents the "zero date" (epoch or constant). |

### Data Conversion & Formatting

| Function | Description |
|---|---|
| `fromDto` | Converts string representations within DTOs to JS types (e.g., ISO strings to Dates). Modifies input in place. |
| `getCircularReplacer` | Creates a replacer function for `JSON.stringify` that handles circular references. |
| `parseJson` | Safely parses a JSON string into a JavaScript object. |
| `stringify` | Converts a JavaScript value to a JSON string, safely handling circular references. |
| `toBoolean` | Converts various input types (boolean, string, number) into a boolean value. |
| `toCamelCase` | Converts a string to camelCase. |
| `toColumn` | Formats an array of values into a single column of strings, padded to the width of the longest value. |
| `toGuidFormat` | Converts a UID or GUID string into the standard lowercase GUID format. |
| `toKebabCase` | Converts a string to kebab-case. |
| `toPascalCase` | Converts a string to PascalCase. |
| `toRequest` | Transforms a raw HTTP request object into a standardized format. |
| `toSnakeCase` | Converts a string to snake_case. |
| `toTable` | Converts an array of delimited strings into a formatted text table with borders. |
| `toUidFormat` | Converts a GUID or UID string into the standard 32-character uppercase UID format. |

### Environment & Configuration

| Function | Description |
|---|---|
| `getVars` | Retrieves environment variables, optionally filtering and sorting. |

### Hashing, Cryptography & JWT

| Function | Description |
|---|---|
| `decode` | Decodes a JWT token without verifying the signature. |
| `decryptString` | Decrypts a string that was encrypted using encryptString function with the same password. |
| `encode` | Encodes (signs) a payload into a JWT token. |
| `encryptString` | Encrypts a string using AES-256-CBC encryption with a password. |
| `fromClaims` | Converts a standard JWT claims object into an application-specific payload object. |
| `getHash` | Calculates the MD5 hash of a given string value. |
| `hash` | Computes an HMAC hash of a value using a salt. |
| `hashFile` | Computes a hash of a file's contents synchronously. |
| `hashFileContents` | Computes a hash of the file contents asynchronously. |
| `hashLines` | Computes a hash of an array of lines. |
| `hashObject` | Generates a hash value for a given object or array by converting it to a string representation and then computing its hash. |
| `hashString` | Computes a hash (md5/hex by default) of a string. |
| `newSalt` | Generates a cryptographically random salt string. |
| `parseJwt` | Parses a JWT, returning details including claims, payload, validity, and expiration status. |
| `toClaims` | Converts an application-specific payload object into a standard JWT claims object. |
| `verify` | Verifies a JWT token using a secret or public key. |

### Networking & HTTP

| Function | Description |
|---|---|
| `doDelete` | Performs a DELETE request. |
| `doGet` | Performs a GET request. |
| `doPost` | Performs a POST request. |
| `doPut` | Performs a PUT request. |
| `getBody` | Asynchronously extracts the request body from a request object (Node/Next.js). |
| `ping` | Performs a GET request to the root path ('/') to check connectivity. |

### Utility Modules & Framework Integration

| Function | Description |
|---|---|
| `body` | Experimental utility for extracting request body with auto-detection. |
| `comments` | Module containing comment utilities (`hasComments`, `removeComments`). |
| `env` | Module containing environment variable utilities. |
| `execute` | Convenience alias for `execution.execute`. |
| `executePromise` | Convenience alias for `execution.executePromise`. |
| `execution` | Module containing command execution utilities. |
| `express` | Module containing Express.js utilities and middleware. |
| `hasComments` | Checks if code contains comments. |
| `jwt` | Module containing JWT utilities (`decode`, `encode`, `parseJwt`, etc.). |
| `nextjs` | Module containing Next.js utilities. |
| `removeComments` | Removes comments from code. |

### Hashing & Cryptography

| Function | Description |
|---|---|
| `decryptString` | Decrypts a string that was encrypted using encryptString function with the same password. |
| `encryptString` | Encrypts a string using AES-256-CBC encryption with a password. |
| `getHash` | Calculates the MD5 hash of a given string value. |
| `hash` | Computes an HMAC hash of a value using a salt. |
| `hashFile` | Computes a hash of a file's contents synchronously. |
| `hashFileContents` | Computes a hash of the file contents asynchronously. |
| `hashLines` | Computes a hash of an array of lines. |
| `hashObject` | Generates a hash value for a given object or array by converting it to a string representation and then computing its hash. |
| `hashString` | Computes a hash (md5/hex by default) of a string. |
| `newSalt` | Generates a cryptographically random salt string. |
| `parseJwt` | Parses a JWT, returning details including claims, payload, validity, and expiration status. |

### Data Parsing & Conversion

| Function | Description |
|---|---|
| `parseJson` | Safely parses a JSON string into a JavaScript object. |
| `toBoolean` | Converts various input types (boolean, string, number) into a boolean value. |
| `toGuidFormat` | Converts a UID or GUID string into the standard lowercase GUID format. |
| `toUidFormat` | Converts a GUID or UID string into the standard 32-character uppercase UID format. |

### Environment & Variables

| Function | Description |
|---|---|
| `getVars` | Retrieves environment variables, optionally filtering and sorting. |

### Unique ID & Code Generation

| Function | Description |
|---|---|
| `newCode` | Generates a random code string of a specified length using given characters. |
| `newGuid` | Generates a new version 4 UUID (GUID). |
| `newUid` | Generates a new 32-character uppercase alphanumeric UID string. |

## Testing

Run the test suite to ensure everything works correctly:

```bash
# Run all tests
npm test

# Run linting
npm run lint

# Fix linting issues automatically
npm run lint:fix
```

## Migration from Lodash/Underscore

If you're migrating from lodash or underscore, here are some common equivalents:

```javascript
// Lodash/Underscore → cleaner-node
_.isString(value)     → _.isValidString(value)
_.isArray(value)      → _.isValidArray(value)  
_.isEmpty(array)      → _.isEmptyArray(array)
_.first(array)        → _.getFirst(array)
_.last(array)         → _.getLast(array)
_.uniq(array)         → _.unique(array)
_.clone(object)       → _.copyObject(object)
_.isEqual(a, b)       → _.isMatch(a, b)

// Plus many additional utilities not found in lodash:
_.isEmail(email)      → Email validation
_.isGuidFormat(guid)  → GUID format checking
_.cleanString(str)    → String cleaning
_.newGuid()           → GUID generation
_.readFile(path)      → Synchronous file reading
```

## Performance Notes

- Most string and validation functions are highly optimized for performance
- File operations are synchronous by design for simplicity
- HTTP functions use native fetch API where available
- Object operations use JSON serialization for deep copying (suitable for most use cases)

## API Stability

This package follows [Semantic Versioning](https://semver.org/). The API is stable and backward-compatible changes are guaranteed within major versions.

## Contributing

We welcome contributions! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass (`npm test`)
6. Run linting (`npm run lint:fix`)
7. Commit your changes (`git commit -m 'Add amazing feature'`)
8. Push to the branch (`git push origin feature/amazing-feature`)
9. Open a Pull Request

### Development Setup

```bash
git clone https://github.com/FredLackey/cleaner-node.git
cd cleaner-node
npm install
npm test
```

## Changelog

See [UPDATES.md](./UPDATES.md) for a detailed changelog of all versions.

## License

Apache-2.0 - see [LICENSE](./LICENSE) file for details.

## Contact  

If you have any questions, comments, or concerns, please feel free to reach out to me at...

**Fred Lackey**  
[fred.lackey@gmail.com](mailto:fred.lackey@gmail.com)  
[http://fredlackey.com](http://fredlackey.com)

---

**Links:**
- [GitHub Repository](https://github.com/FredLackey/cleaner-node)
- [NPM Package](https://www.npmjs.com/package/cleaner-node)
- [Issue Tracker](https://github.com/FredLackey/cleaner-node/issues)
- [Full Documentation](./docs/README.md)  
