export = getPadPrefix;
/**
 * Gets the leading whitespace (prefix padding) of a string.
 * Returns null if the input is not a valid string (empty string is okay).
 * Returns an empty string if there is no leading whitespace.
 * Otherwise, returns a string consisting of spaces matching the length of the leading whitespace.
 *
 * @param {string} value - The string to analyze.
 * @returns {string|null} The leading whitespace as a string of spaces, or an empty string, or null.
 */
declare function getPadPrefix(value: string): string | null;
