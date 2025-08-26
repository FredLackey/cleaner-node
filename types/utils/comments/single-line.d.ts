/**
 * Finds the starting position of the first single-line comment delimiter ('#' or '//')
 * in a string, ignoring delimiters within quoted strings.
 * @param {string} line The line of text to search.
 * @returns {number} The 0-based index of the start of the comment, or -1 if no comment delimiter is found.
 */
export function getDelimPosition(line: string): number;
/**
 * Checks if a line contains a single-line comment delimiter, ignoring delimiters within quotes.
 * @param {string} line The line to check.
 * @returns {boolean} True if a delimiter is found, false otherwise.
 */
export function hasDelimeter(line: string): boolean;
/**
 * Removes the single-line comment (and subsequent text) from a string, ignoring delimiters within quotes.
 * @param {string} line The line to process.
 * @returns {string} The line with the comment removed.
 */
export function removeComment(line: string): string;
/**
 * Removes single-line comments from a single string or an array of strings.
 * @param {string|string[]} lineOrLines The input string or array of strings.
 * @returns {string|string[]|undefined} The processed string or array with comments removed, or undefined if the input type is invalid.
 */
export function removeComments(lineOrLines: string | string[]): string | string[] | undefined;
