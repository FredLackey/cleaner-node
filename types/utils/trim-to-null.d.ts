export = trimToNull;
/**
 * Trims leading and trailing whitespace from a string.
 * If the resulting string is empty or the input was not a valid string, it returns null.
 *
 * @param {string} value - The string to trim.
 * @returns {string|null} The trimmed string, or null if the result is empty or the input was invalid.
 */
declare function trimToNull(value: string): string | null;
