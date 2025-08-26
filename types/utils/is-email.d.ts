export = isEmail;
/**
 * Checks if a string is a valid email address format.
 * It uses `getEmail` to potentially clean the input and then compares it to the original value.
 *
 * @param {string} value - The string to check.
 * @returns {boolean} True if the string matches the cleaned email format, false otherwise.
 */
declare function isEmail(value: string): boolean;
