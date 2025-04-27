# Cleaner Node (`cleaner-node`)  

Helpful utilities and scripts to make Node projects more legible and easier for the next developer to take over.

## Background  

There are several libraries out there designed to make life easier for developers (`moment`, `lodash`, `underscore`, etc.).  However, for the most part, the goals of those utilities are to *add on* to what Node and JavaScript bring to the table.  And, as Node and JavaScript mature, developers find them to be less of a _neccessity_ and end up removing them.  While `cleaner-node` is _also_ a helper package, and completely unnecessary, it's goal is to abstract some of the more redundant and verbose syntaxes.  The end result is a codebase that still functions as it would _without_ `cleaner-node` but is easier to read *and maintain*.  Unlike those other libraries, which shrink over time, I intend on growing `cleaner-node` for as long as Node exists so that I don't have to write the same code again, and again, and again, and again, and ag....

## Installation  

`npm i cleaner-node`

## Functions & Usage

Please review the [`FUNCTIONS.md`](./FUNCTIONS.md) file for a complete list of functions.

### String Manipulation

| Function | Description |
|---|---|
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
| `trimBrackets` | Recursively removes matching pairs of brackets ( (), [], {} ) from the start and end of a string. |
| `trimString` | Trims leading and trailing whitespace from a string. |
| `trimToNull` | Trims leading and trailing whitespace from a string, returning null if empty. |
| `trimToUndefined` | Trims leading and trailing whitespace from a string, returning undefined if empty. |
| `undouble` | Replaces consecutive occurrences of specified target characters within a string with a single instance. |
| `unQuote` | Removes leading and trailing quote characters (") from a string. |

### File System Operations

| Function | Description |
|---|---|
| `copyContents` | Asynchronously copies the contents of a source file to a destination file, line by line. |
| `copyFile` | Synchronously copies a file from a source path to a target path. |
| `createPath` | Creates a directory path recursively if it doesn't already exist. (Alias: `makePath`) |
| `deleteDirectory` | Synchronously deletes a directory and its contents recursively. |
| `deleteFile` | Synchronously deletes a file. |
| `getBaseDir` | Finds the longest common base directory path from an array of file paths. |
| `getFileContents` | Synchronously reads the contents of a file. (Alias: `readFile`) |
| `getFileName` | Extracts the file name from a file path, optionally including or excluding the extension. |
| `getFileSize` | Gets the size of a file in bytes. |
| `getFiles` | Synchronously reads the contents of a directory and returns an array of full paths for its direct children (files and subdirectories). (Alias: `getFolderContents`) |
| `loadJson` | Reads a file, parses its content as JSON, and returns the resulting object or array. |
| `moveFile` | Moves a file from a source path to a destination path. |
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
| `fromEpoch` | Converts a Unix epoch timestamp (seconds) to a JavaScript Date object. |
| `fromIsoDate` | Converts an ISO 8601 date string to a JavaScript Date object. |
| `fromShortDate` | Converts a short date string (YYYY-MM-DD or YYYY/MM/DD) to a JavaScript Date object. |
| `getBlockDate` | Formats a Date object into a blockdate string (e.g., YYYYMMDDHHmmssSSS). |
| `getDayName` | Gets the full name of the day of the week for a given Date or ISO date string. |
| `getDuration` | Calculates the duration between two timestamps (or Date objects) and formats it. |
| `maxDate` | Finds the latest date from an array of Date objects. |
| `minDate` | Finds the earliest date from an array of Date objects. |
| `toEpoch` | Converts a Date object to its Unix epoch timestamp (seconds). |

### Object & Array Processing

| Function | Description |
|---|---|
| `cleanDto` | Cleans DTOs by removing audit fields, handling ID/UID properties, removing nulls etc. Modifies input in place. |
| `copyObject` | Creates a deep copy of an object using JSON stringification and parsing. |
| `findAllUids` | Finds all unique UID strings within an object or array, including nested structures. |
| `fromResult` | Extracts the nested 'result' property from an object recursively. |
| `getArrayCount` | Gets the length of an array, handling non-arrays gracefully. |
| `getFirst` | Gets the first element of an array or the first character of a string. |
| `getLast` | Gets the last element of an array or the last character of a string. |
| `getMax` | Finds the maximum numeric value in an array. |
| `getMin` | Finds the minimum numeric value in an array. |
| `getId` | Extracts an ID ('id' or '_id') from an object or returns the input if already an ID. |
| `getSingle` | Returns the first element of an array if it contains exactly one element, otherwise undefined. |
| `getUid` | Extracts a UID/GUID from an item or returns the input if it's already valid. |
| `initArray` | Ensures the input value is an array and filters out undefined elements. |
| `print` | Prints the key-value pairs of an object to the console in a formatted manner. |
| `processItem` | Processes a single item object within `cleanDto`. |
| `processItems` | Recursively processes an array of items within `cleanDto`. |
| `removeAuditFields` | Recursively removes standard audit fields from an object or array. |
| `removeDeleted` | Recursively removes items marked as deleted (using a checker function) from a structure. |
| `removeId` | Removes the ID property from an object (used in `cleanDto`). |
| `removeAudit` | Removes audit trail properties from an object (used in `cleanDto`). |
| `moveUid` | Moves UID value to ID property if ID is missing (used in `cleanDto`). |
| `moveIds` | Renames properties ending with '-uid' or '_uid' (used in `cleanDto`). |
| `trimIds` | Renames properties ending with '-id', '_id', '-uid', or '_uid' to the base key (used in `cleanDto`). |
| `removeNulls` | Removes properties with null values from an object (used in `cleanDto`). |
| `removeProperty` | Recursively removes a specified property from an object and nested structures. |
| `replaceValues` | Recursively replaces values within an object or array structure based on source/target arrays. |
| `sort` | Sorts an array containing numbers (or string representations), filtering non-numerics. |
| `sortAscending` | Sorts an array of numbers in ascending order. |
| `sortDescending` | Sorts an array of numbers in descending order. |
| `toResult` | Returns a single item or an array based on the sample array. |
| `trim` | Trims leading/trailing non-valid-string elements from an array. |
| `trimTop` | Trims leading non-valid-string elements from an array. |
| `trimBottom` | Trims trailing non-valid-string elements from an array. |
| `unique` | Creates a new array with unique values based on the predominant data type (numbers, objects, or strings). |
| `uniqueNumbers` | Filters an array to contain only unique numbers or string representations of numbers. |
| `uniqueObjects` | Filters an array to contain only unique objects (by strict equality or stringification). |
| `uniqueString` | Filters an array to contain only unique strings (case-sensitive/trim options available). |

### Validation & Type Checking

| Function | Description |
|---|---|
| `isAlpha` | Checks if a string contains only alphabetic characters. |
| `isAlphanumeric` | Checks if a string contains only alphanumeric characters. |
| `isAsync` | Checks if a value is an async function. |
| `isBoolean` | Checks if a value is strictly true or false. |
| `isBooleanIfSet` | Checks if a value is not set (null/undefined) or is a boolean. |
| `isBracketted` | Checks if a string starts and ends with corresponding brackets. |
| `isCamelCase` | Checks if a string is in camelCase format. |
| `isCaps` | Checks if a string is entirely uppercase. |
| `isDate` | Checks if a value is a valid JavaScript Date object. |
| `isDefined` | Checks if a value is defined (not `undefined`). |
| `isDeleted` | Checks if an item is considered "deleted" based on a provided checking function. |
| `isDigits` | Checks if a string contains only numeric digits. |
| `isEmail` | Checks if a string is a valid email address format. |
| `isEqualDate` | Checks if two values are valid Dates representing the exact same time. (Alias: `isSameDate`) |
| `isFile` | Checks if a given path points to an existing file. |
| `isFolder` | Checks if a given path points to an existing directory. |
| `isFunction` | Checks if a value is a function. |
| `isGuidFormat` | Checks if a value conforms to the standard GUID format. |
| `isIpAddress` | Checks if a string represents a valid IPv4 address (allows 'localhost', '0.0.0.0'). |
| `isIsoDate` | Checks if a string represents a valid ISO 8601 date format. |
| `isKebabCase` | Checks if a string is in kebab-case format. |
| `isLowerCase` | Checks if a string is entirely lowercase. |
| `isMatch` | Compares two strings for equality with options for case sensitivity and whitespace. |
| `isNumber` | Checks if a value can be interpreted as a finite number. |
| `isObject` | Checks if a value is a plain JavaScript object (not null, not an array). |
| `isPascalCase` | Checks if a string is in PascalCase format. |
| `isPhoneNumber` | Checks if a string matches a common phone number format. |
| `isSemver` | Checks if a string is a valid Semantic Versioning (SemVer) string. |
| `isSet` | Checks if a value is neither null nor undefined. |
| `isValidShortDate` | Checks if a string represents a valid date in YYYY/MM/DD or YYYY-MM-DD format. |
| `isSnakeCase` | Checks if a string is in snake_case format. |
| `isUidFormat` | Checks if a value is a valid UID format (32 alphanumeric chars). |
| `isUrl` | Checks if a string is a valid URL (starts with http/https and is parseable). |
| `isValidArray` | Checks if a value is an array and optionally if it's non-empty. |
| `isValidArrayIfSet` | Checks if a value is not set or is a valid array. |
| `isValidChars` | Checks if a string contains only characters from a specified set. |
| `isValidObject` | Checks if a value is a non-empty plain JavaScript object. |
| `isValidPath` | Checks if a string appears to be a valid file/folder path based on its basename. |
| `isValidPathIfSet` | Checks if a value is not set or is a valid path. |
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
| `encode` | Encodes (signs) a payload into a JWT token. |
| `fromClaims` | Converts a standard JWT claims object into an application-specific payload object. |
| `getHash` | Calculates the MD5 hash of a given string value. |
| `hash` | Computes an HMAC hash of a value using a salt. |
| `hashFile` | Computes a hash of a file's contents synchronously. |
| `hashFileContents` | Computes a hash of the file contents asynchronously. |
| `hashLines` | Computes a hash of an array of lines. |
| `hashString` | Computes a hash (md5/hex by default) of a string. |
| `newSalt` | Generates a cryptographically random salt string. |
| `parseJwt` | Parses a JWT, returning details including claims, payload, validity, and expiration status. |
| `toClaims` | Converts an application-specific payload object into a standard JWT claims object. |
| `verify` | Verifies a JWT token using a secret or public key. |

### Networking & HTTP

| Function | Description |
|---|---|
| `addHeaders` | Merges default headers, provided headers, and adds Authorization headers. |
| `doDelete` | Performs a DELETE request. |
| `doGet` | Performs a GET request. |
| `doPost` | Performs a POST request. |
| `doPromise` | Performs a fetch request with specified options. |
| `doPut` | Performs a PUT request. |
| `getBody` | Asynchronously extracts the request body from a request object (Node/Next.js). |
| `ping` | Performs a GET request to the root path ('/') to check connectivity. |
| `removeBlankContentType` | Removes the Content-Type header if its value is blank. |
| `toBody` | Converts a value to a string suitable for an HTTP request body. |
| `toUrl` | Converts a value into a full URL string (http/https). |

### Unique ID & Code Generation

| Function | Description |
|---|---|
| `newCode` | Generates a random code string of a specified length using given characters. |
| `newGuid` | Generates a new version 4 UUID (GUID). |
| `newUid` | Generates a new 32-character uppercase alphanumeric UID string. |

## Changes  

### v0.0.1 - v0.22.2

The first iteration of `cleaner-node` proved to be very successful.  It was used in several projects and was great at reducing the noise in the codebase.  It actually lead to the development of other projects, such as [`restutils-host`](https://www.npmjs.com/package/restutils-host) and [`restutils-client`](https://www.npmjs.com/package/restutils-client); tools that allow instant API creation from any JavaScript file or Node package.  During this time there was experimentation with both CommonJS and JavaScript Modules.  It was decided that, while JavaScript Modules are the future, CommonJS is still the standard for Node projects and will be for some time.  As such, the first release of `cleaner-node` will be in CommonJS with other projects, such as [`nextjs-helpers`](https://www.npmjs.com/package/nextjs-helpers), focusing on JavaScript Modules.

### v1.0.0  

The first actual release of `cleaner-node`, this version focuses on reducing code complexity for common tasks within Node projects.  It is written using CommonJS and is intended to be used in Node projects.  It is not intended to be used in the browser, though it may work in some cases.  It is also not intended to be used in React projects, though it may work in some cases.  

## Contact  

If you have any questions, comments, or concerns, please feel free to reach out to me at...

**Fred Lackey**  
[fred.lackey@gmail.com](mailto:fred.lackey@gmail.com)  
[http://fredlackey.com](http://fredlackey.com)  
