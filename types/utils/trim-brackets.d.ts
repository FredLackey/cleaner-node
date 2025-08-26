export = trimBrackets;
/**
 * Recursively removes matching pairs of brackets ( (), [], {} ) from the start and end of a string.
 * Stops when the string is no longer enclosed in a matching bracket pair or becomes empty.
 *
 * @param {string} value - The string potentially enclosed in brackets.
 * @returns {string} The string with all outer matching bracket pairs removed.
 */
declare function trimBrackets(value: string): string;
