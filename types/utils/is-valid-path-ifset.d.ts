export = isValidPathIfSet;
/**
 * Checks if a value is either not set (null or undefined) or is a valid path (file or folder).
 * Useful for optional path parameters.
 *
 * @param {string} value - The path string to check.
 * @returns {boolean} True if the value is not set or is a valid path, false otherwise.
 */
declare function isValidPathIfSet(value: string): boolean;
