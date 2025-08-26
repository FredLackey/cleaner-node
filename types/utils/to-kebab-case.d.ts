export = toKebabCase;
/**
 * Converts a string to kebab-case.
 * Handles various casing formats like camelCase, PascalCase, and strings with acronyms.
 * Uses a regex to split the string into parts and joins them with hyphens.
 *
 * @param {string} value - The string to convert.
 * @returns {string} The kebab-case version of the string.
 */
declare function toKebabCase(value: string): string;
