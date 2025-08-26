export = toTable;
/**
 * Converts an array of delimited strings into a formatted text table with borders.
 * Inserts a header line after the first row.
 *
 * @param {string[]} lines - An array of strings, each representing a row with delimited columns.
 * @param {string} delimiter - The character used to delimit columns.
 * @returns {string[]} An array of strings, representing the formatted lines of the text table.
 */
declare function toTable(lines: string[], delimiter: string): string[];
