export = unQuote;
/**
 * Removes leading and trailing quote characters (") from a string, preserving any leading/trailing whitespace.
 * If the string is not valid, is less than 3 characters long after trimming, or doesn't start and end with a quote, the original value is returned.
 *
 * @param {string} value - The string to unquote.
 * @returns {string} The unquoted string or the original value if unquoting is not applicable.
 */
declare function unQuote(value: string): string;
