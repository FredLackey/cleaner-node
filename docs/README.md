# Cleaner-Node Documentation

This directory contains comprehensive documentation for all functions in the `cleaner-node` package. Each function has its own dedicated documentation file with detailed explanations, parameters, examples, and usage scenarios.

## File Naming Convention

- Function documentation files follow the pattern: `[function-name].md`
- For functions with special characters or complex names, use kebab-case
- Constants and utilities are grouped in their respective sections

## Navigation

### Array Functions
- [ascending](./ascending.md) - Sort array in ascending order
- [descending](./descending.md) - Sort array in descending order
- [getArrayCount](./get-array-count.md) - Get count of items in array
- [getFirst](./get-first.md) - Get first element from array
- [getLast](./get-last.md) - Get last element from array
- [getSingle](./get-single.md) - Get single element from array
- [initArray](./init-array.md) - Initialize array with default values
- [isEmptyArray](./is-empty-array.md) - Check if array is empty
- [isValidArray](./is-valid-array.md) - Validate array structure
- [isValidArrayIfSet](./is-valid-array-ifset.md) - Validate array if set
- [sort](./sort.md) - Sort array with custom comparator
- [trimArray](./trim-array.md) - Trim whitespace from array elements
- [unique](./unique.md) - Get unique elements from array
- [uniqueNumbers](./unique-numbers.md) - Get unique numbers from array
- [uniqueObjects](./unique-objects.md) - Get unique objects from array
- [uniqueStrings](./unique-strings.md) - Get unique strings from array

### String Functions
- [cleanAlphanumeric](./clean-alphanumeric.md) - Clean string to alphanumeric only
- [cleanDigits](./clean-digits.md) - Extract digits from string
- [cleanString](./clean-string.md) - Clean and normalize string
- [hasString](./has-string.md) - Check if string contains substring
- [isAlpha](./is-alpha.md) - Check if string contains only letters
- [isAlphanumeric](./is-alphanumeric.md) - Check if string is alphanumeric
- [isCamelCase](./is-camel-case.md) - Check if string is camelCase
- [isCaps](./is-caps.md) - Check if string is uppercase
- [isKebabCase](./is-kebab-case.md) - Check if string is kebab-case
- [isLowerCase](./is-lowercase.md) - Check if string is lowercase
- [isPascalCase](./is-pascal-case.md) - Check if string is PascalCase
- [isSnakeCase](./is-snake-case.md) - Check if string is snake_case
- [isValidString](./is-valid-string.md) - Validate string
- [isValidStringIfSet](./is-valid-string-ifset.md) - Validate string if set
- [removePrefix](./remove-prefix.md) - Remove prefix from string
- [removeSuffix](./remove-suffix.md) - Remove suffix from string
- [toCamelCase](./to-camel-case.md) - Convert string to camelCase
- [toKebabCase](./to-kebab-case.md) - Convert string to kebab-case
- [toPascalCase](./to-pascal-case.md) - Convert string to PascalCase
- [toSnakeCase](./to-snake-case.md) - Convert string to snake_case
- [trimString](./trim-string.md) - Trim whitespace from string
- [trimToNull](./trim-to-null.md) - Trim string or return null
- [trimToUndefined](./trim-to-undefined.md) - Trim string or return undefined
- [undouble](./undouble.md) - Remove double characters
- [unquote](./unquote.md) - Remove quotes from string

### Date Functions
- [addDays](./add-days.md) - Add days to date
- [addMinutes](./add-minutes.md) - Add minutes to date
- [blockdate](./blockdate.md) - Work with block dates
- [fromEpoch](./from-epoch.md) - Convert from epoch timestamp
- [fromIsoDate](./from-iso-date.md) - Convert from ISO date string
- [fromShortDate](./from-short-date.md) - Convert from short date format
- [getDayName](./get-day-name.md) - Get day name from date
- [isDate](./is-date.md) - Check if value is a date
- [isEqualDate](./is-equal-date.md) - Check if dates are equal
- [isIsoDate](./is-iso-date.md) - Check if string is ISO date
- [isSameDate](./is-same-date.md) - Check if dates are the same
- [isShortDate](./is-short-date.md) - Check if string is short date
- [isZeroDate](./is-zero-date.md) - Check if date is zero date
- [maxDate](./max-date.md) - Get maximum date from array
- [minDate](./min-date.md) - Get minimum date from array
- [toEpoch](./to-epoch.md) - Convert date to epoch timestamp

### File System Functions
- [copyContents](./copy-contents.md) - Copy directory contents
- [copyFile](./copy-file.md) - Copy file
- [createPath](./create-path.md) - Create directory path
- [deleteDirectory](./delete-directory.md) - Delete directory
- [deleteFile](./delete-file.md) - Delete file
- [getCommonPath](./get-common-path.md) - Get common path from array
- [getFileContents](./get-file-contents.md) - Read file contents
- [getFileName](./get-file-name.md) - Extract filename from path
- [getFileSize](./get-file-size.md) - Get file size
- [getFiles](./get-files.md) - Get files in directory
- [getFolderContents](./get-folder-contents.md) - Get folder contents
- [isFile](./is-file.md) - Check if path is file
- [isFolder](./is-folder.md) - Check if path is folder
- [isValidPath](./is-valid-path.md) - Validate file path
- [isValidPathIfSet](./is-valid-path-ifset.md) - Validate path if set
- [makePath](./make-path.md) - Create file path
- [moveFile](./move-file.md) - Move file
- [readFile](./read-file.md) - Read file
- [readLines](./read-lines.md) - Read file lines
- [walk](./walk.md) - Walk directory tree
- [writeFile](./write-file.md) - Write file
- [writeLines](./write-lines.md) - Write file lines

### Validation Functions
- [isBoolean](./is-boolean.md) - Check if value is boolean
- [isBooleanIfSet](./is-boolean-ifset.md) - Check if boolean when set
- [isDefined](./is-defined.md) - Check if value is defined
- [isDigits](./is-digits.md) - Check if string contains only digits
- [isEmail](./is-email.md) - Validate email address
- [isFunction](./is-function.md) - Check if value is function
- [isGuidFormat](./is-guid-format.md) - Check if string is GUID format
- [isIpAddress](./is-ip-address.md) - Validate IP address
- [isJson](./is-json.md) - Check if string is valid JSON
- [isJsonArray](./is-json-array.md) - Check if string is JSON array
- [isJsonObject](./is-json-object.md) - Check if string is JSON object
- [isMatch](./is-match.md) - Check if values match pattern
- [isNumber](./is-number.md) - Check if value is number
- [isObject](./is-object.md) - Check if value is object
- [isPhoneNumber](./is-phone-number.md) - Validate phone number
- [isSemver](./is-semver.md) - Check if string is semantic version
- [isSet](./is-set.md) - Check if value is set
- [isUidFormat](./is-uid-format.md) - Check if string is UID format
- [isUrl](./is-url.md) - Validate URL
- [isValidChars](./is-valid-chars.md) - Check if string has valid characters
- [isValidObject](./is-valid-object.md) - Validate object structure

### Utility Functions
- [copyObject](./copy-object.md) - Deep copy object
- [cleanDto](./clean-dto.md) - Clean data transfer object
- [cleanObject](./clean-object.md) - Clean object properties
- [fromDto](./from-dto.md) - Convert from DTO
- [fromResult](./from-result.md) - Extract value from result
- [getDuration](./get-duration.md) - Calculate duration
- [getHash](./get-hash.md) - Generate hash
- [getId](./get-id.md) - Extract ID from value
- [getIds](./get-ids.md) - Extract IDs from array
- [getMax](./get-max.md) - Get maximum value
- [getMin](./get-min.md) - Get minimum value
- [getStringSize](./get-string-size.md) - Get string byte size
- [getSubstring](./get-substring.md) - Extract substring
- [getUid](./get-uid.md) - Extract UID from value
- [getUids](./get-uids.md) - Extract UIDs from array
- [hashFile](./hash-file.md) - Hash file contents
- [hashFileContents](./hash-file-contents.md) - Hash file contents directly
- [hashLines](./hash-lines.md) - Hash array of lines
- [hashString](./hash-string.md) - Hash string value
- [loadJson](./load-json.md) - Load JSON from file
- [newCode](./new-code.md) - Generate new code
- [newGuid](./new-guid.md) - Generate new GUID
- [newSalt](./new-salt.md) - Generate new salt
- [newUid](./new-uid.md) - Generate new UID
- [parseJson](./parse-json.md) - Parse JSON string
- [parseJwt](./parse-jwt.md) - Parse JWT token
- [print](./print.md) - Print formatted output
- [removeAuditFields](./remove-audit-fields.md) - Remove audit fields
- [removeDeleted](./remove-deleted.md) - Remove deleted items
- [removeProperty](./remove-property.md) - Remove object property
- [replaceValues](./replace-values.md) - Replace values in object
- [saveJson](./save-json.md) - Save JSON to file
- [splitFirst](./split-first.md) - Split string at first occurrence
- [stringify](./stringify.md) - Convert to string
- [toBoolean](./to-boolean.md) - Convert to boolean
- [toColumn](./to-column.md) - Convert to column format
- [toGuidFormat](./to-guid-format.md) - Convert to GUID format
- [toRequest](./to-request.md) - Convert to request format
- [toResponse](./to-response.md) - Convert to response format
- [toResult](./to-result.md) - Convert to result format
- [toTable](./to-table.md) - Convert to table format
- [toUidFormat](./to-uid-format.md) - Convert to UID format

### HTTP Functions
- [doGet](./do-get.md) - Perform HTTP GET request
- [doPost](./do-post.md) - Perform HTTP POST request
- [doPut](./do-put.md) - Perform HTTP PUT request
- [doDelete](./do-delete.md) - Perform HTTP DELETE request
- [ping](./ping.md) - Ping HTTP endpoint

### Encryption Functions
- [decryptString](./decrypt-string.md) - Decrypt string
- [encryptString](./encrypt-string.md) - Encrypt string

### JWT Functions
- [jwt](./jwt.md) - JWT utilities

### Environment Functions
- [env](./env.md) - Environment utilities

### Execution Functions
- [execution](./execution.md) - Command execution utilities

### Express Functions
- [express](./express.md) - Express.js utilities

### Next.js Functions
- [nextjs](./nextjs.md) - Next.js utilities

### Comment Functions
- [comments](./comments.md) - Code comment utilities

### Special Functions
- [findAllUids](./find-all-uids.md) - Find all UIDs in text
- [getBracket](./get-bracket.md) - Get bracketed content
- [getEmail](./get-email.md) - Extract email from text
- [getEmails](./get-emails.md) - Extract emails from text
- [getEnum](./get-enum.md) - Get enum value
- [getEnums](./get-enums.md) - Get enum values
- [getInnerTokens](./get-inner-tokens.md) - Get inner tokens
- [getPadPrefix](./get-pad-prefix.md) - Get padding prefix
- [getPadSuffix](./get-pad-suffix.md) - Get padding suffix
- [getPads](./get-pads.md) - Get padding values
- [getTokenizedSegments](./get-tokenized-segments.md) - Get tokenized segments
- [getVars](./get-vars.md) - Get variables from text
- [isBracketted](./is-bracketted.md) - Check if text is bracketed
- [isDeleted](./is-deleted.md) - Check if item is deleted
- [isAsync](./is-async.md) - Check if function is async

## Constants

The package also exports various constants:
- `ALPHA` - Alphabetic characters
- `ALPHANUMERIC` - Alphanumeric characters  
- `BRACKETS` - Bracket characters
- `CLEAR_CODE` - Clear code constant
- `DIGITS` - Digit characters
- `ENUM_NAME` - Enum naming constant
- `EMPTY_GUID` - Empty GUID constant
- `EMPTY_UID` - Empty UID constant
- `HTTP` - HTTP status codes and utilities
- `TYPES` - Type constants
- `DEFAULTS` - Default values
- `ZERO_DATE` - Zero date constant

## Usage

Import the package and use any function:

```javascript
const _ = require('cleaner-node');

// Example usage
const isValid = _.isValidString('hello world');
const cleaned = _.cleanString('  hello world  ');
const guid = _.newGuid();
```

## AI Tool Integration

This documentation is specifically structured to help AI tools understand and generate code using the `cleaner-node` package. Each function documentation includes:

- Clear purpose and description
- Input parameter types and descriptions
- Return value types and descriptions
- Multiple usage examples
- Edge cases and error handling
- Related functions and cross-references

For best results with AI tools, reference the specific function documentation when asking for code generation assistance. 