export = getBracket;
/**
 * Finds the matching bracket pair (e.g., { open: '(', close: ')' }) from a predefined list
 * (`constants.BRACKETS`) that encloses the given string value.
 * @param {string} value The string to check for enclosing brackets.
 * @returns {object|undefined} The matching bracket pair object if found, otherwise undefined.
 */
declare function getBracket(value: string): object | undefined;
