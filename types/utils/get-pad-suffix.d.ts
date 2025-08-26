export = getPadSuffix;
/**
 * Gets the trailing whitespace (suffix padding) of a string.
 * Returns null if the input is not a valid string (empty string is okay).
 * Returns an empty string if there is no trailing whitespace.
 * Otherwise, returns a string consisting of spaces matching the length of the trailing whitespace.
 *
 * @param {string} value - The string to analyze.
 * @returns {string|null} The trailing whitespace as a string of spaces, or an empty string, or null.
 */
declare function getPadSuffix(value: string): string | null;
