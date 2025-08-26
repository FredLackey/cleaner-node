import multiLine = require("./multi-line");
import singleLine = require("./single-line");
/**
 * Checks if a line or array of lines contains single-line or multi-line comments.
 * @param {string|string[]} lineOrLines The input line or lines.
 * @returns {boolean} True if comments are found, false otherwise.
 */
export function hasComments(lineOrLines: string | string[]): boolean;
/**
 * Removes single-line and multi-line comments from a line or an array of lines.
 * @param {string|string[]} lineOrLines The input line or lines.
 * @returns {string|string[]} The line or lines with comments removed, maintaining the original input type (string or array).
 */
export function removeComments(lineOrLines: string | string[]): string | string[];
export { multiLine, singleLine };
