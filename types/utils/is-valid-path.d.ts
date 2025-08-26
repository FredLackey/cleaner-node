export = isValidPath;
/**
 * Checks if a string appears to be a valid file or folder path by checking if its basename is a valid string.
 * This is a basic check and doesn't guarantee the path exists or is accessible.
 *
 * @param {string} value - The path string to check.
 * @returns {boolean} True if the basename of the path is a non-empty string, false otherwise.
 */
declare function isValidPath(value: string): boolean;
