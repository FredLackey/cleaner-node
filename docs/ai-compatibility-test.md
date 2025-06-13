# AI Tool Compatibility Test

This document serves as a test to verify that AI tools can properly parse and understand the `cleaner-node` documentation structure.

## Test Scenarios

### 1. Function Discovery
AI tools should be able to identify all available functions from the documentation:

**Test**: Can the AI identify that `isValidString` is available in the cleaner-node package?
**Expected**: Yes, from the main README.md navigation and individual function documentation.

**Test**: Can the AI understand the function signature for `cleanString`?
**Expected**: Yes, the syntax section clearly shows `cleanString(value, valid, invalid, isCaseSensitive)`.

### 2. Parameter Understanding
AI tools should understand function parameters and their types:

**Test**: What parameters does `isValidArray` accept?
**Expected**: `value` (any type) and `isEmptyOkay` (boolean, default false).

**Test**: What is the default behavior of `isValidString` for empty strings?
**Expected**: Empty strings are considered invalid by default (isEmptyOkay defaults to false).

### 3. Usage Examples
AI tools should be able to generate code based on the examples:

**Test**: Generate code to validate a user input string.
**Expected**: Should use `_.isValidString(userInput)` pattern.

**Test**: Generate code to clean a phone number.
**Expected**: Should use `_.cleanString()` with appropriate valid characters.

### 4. Return Value Understanding
AI tools should understand what functions return:

**Test**: What does `newGuid()` return?
**Expected**: A string in UUID v4 format.

**Test**: What does `isValidArray([])` return by default?
**Expected**: false (empty arrays are invalid by default).

### 5. Error Handling
AI tools should understand error handling patterns:

**Test**: Do validation functions throw errors?
**Expected**: No, they return boolean values instead of throwing.

**Test**: What happens when `cleanString` receives invalid input?
**Expected**: Returns undefined for non-string inputs.

## Verification Checklist

- [ ] Function names are clearly identifiable
- [ ] Parameter types and defaults are explicit
- [ ] Return values are clearly documented
- [ ] Examples are comprehensive and realistic
- [ ] Error handling is clearly explained
- [ ] Related functions are cross-referenced
- [ ] Import patterns are consistent (`const _ = require('cleaner-node')`)
- [ ] Edge cases are documented
- [ ] Common use cases are provided

## AI Tool Integration Notes

### For Code Generation
- All examples use the standard import pattern: `const _ = require('cleaner-node')`
- Function calls follow the pattern: `_.functionName(parameters)`
- Examples include realistic scenarios, not just basic usage
- Error handling patterns are demonstrated

### For Code Understanding
- Each function has a clear purpose statement
- Parameters are documented with types and descriptions
- Return values include both type and description
- Edge cases are explicitly covered

### For Documentation Parsing
- Consistent markdown structure across all files
- Clear section headers for easy parsing
- Table format for parameters
- Code blocks are properly formatted and language-tagged

## Test Results

This section would be updated after testing with various AI tools to document their ability to parse and understand the documentation structure.

### Cursor IDE
- [ ] Can identify available functions
- [ ] Can understand function signatures
- [ ] Can generate appropriate usage code
- [ ] Can understand parameter requirements
- [ ] Can handle error cases appropriately

### GitHub Copilot
- [ ] Can suggest appropriate function usage
- [ ] Can complete function calls with correct parameters
- [ ] Can understand context and suggest related functions

### ChatGPT/Claude
- [ ] Can explain function purposes accurately
- [ ] Can generate code examples based on documentation
- [ ] Can answer questions about edge cases
- [ ] Can suggest appropriate functions for use cases 