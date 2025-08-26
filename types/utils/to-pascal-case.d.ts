export = toPascalCase;
/**
 * Converts a string to PascalCase (also known as UpperCamelCase).
 * First converts the string to camelCase, then capitalizes the first letter.
 * Returns an empty string if the input is not a valid string.
 *
 * @param {string} value - The string to convert.
 * @returns {string} The PascalCase version of the string, or an empty string if the input was invalid.
 */
declare function toPascalCase(value: string): string;
