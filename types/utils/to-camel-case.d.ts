export = toCamelCase;
/**
 * Converts a string to camelCase.
 * First converts the string to snake_case, then transforms it to camelCase.
 * Handles single-character words and ensures the first character is lowercase.
 *
 * @param {string} value - The string to convert.
 * @returns {string} The camelCase version of the string.
 */
declare function toCamelCase(value: string): string;
