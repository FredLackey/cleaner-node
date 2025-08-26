export = undouble;
/**
 * Replaces consecutive occurrences of specified target characters within a string with a single instance.
 * For example, undouble('a//b/c', '/') would return 'a/b/c'.
 *
 * @param {string} value - The input string to process.
 * @param {string|string[]} targets - A string or array of single characters to "undouble".
 * @returns {string} The processed string with doubled target characters reduced to one.
 */
declare function undouble(value: string, targets: string | string[]): string;
