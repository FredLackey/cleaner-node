export = getEmails;
/**
 * Extracts all valid email addresses found in a string using a regular expression.
 * @param {string} value The string to search for email addresses.
 * @returns {string[]} An array of all valid email addresses found, or an empty array if none are found or the input is invalid.
 */
declare function getEmails(value: string): string[];
