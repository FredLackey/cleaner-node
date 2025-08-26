export = splitFirst;
/**
 * Splits a string at the first occurrence of a specified separator.
 * Returns an array containing the part before the separator and the part after.
 * If the separator is not found, the array contains the original string as the only element.
 * Throws an error if the input string or separator is invalid or empty.
 *
 * @param {string} str - The string to split.
 * @param {string} separator - The separator string to split by.
 * @returns {string[]} An array containing one or two parts of the split string.
 * @throws {Error} If `str` or `separator` is not a non-empty valid string.
 */
declare function splitFirst(str: string, separator: string): string[];
