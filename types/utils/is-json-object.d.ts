export = isJsonObject;
/**
 * Checks if a string is a valid JSON object
 * @param {string} str - The string to check
 * @returns {boolean} True if the string is a valid JSON object, false otherwise
 * @description
 * The function:
 * 1. Validates the input is a non-empty string
 * 2. Removes whitespace, tabs, and newlines
 * 3. Attempts to parse the string as JSON
 * 4. Verifies the parsed result is a valid object
 */
declare function isJsonObject(str: string): boolean;
