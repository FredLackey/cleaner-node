/**
 * Removes multi-line comments (/* ... *\/) from an array of strings (lines).
 * Handles comments spanning multiple lines and comments starting/ending on the same line.
 * @param {string[]} lines An array of strings representing lines of code.
 * @returns {string[]} A new array of strings with multi-line comments removed.
 */
export function removeComments(lines: string[]): string[];
