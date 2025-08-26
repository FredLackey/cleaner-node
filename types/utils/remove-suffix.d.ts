export = removeSuffix;
/**
 * Removes a specified suffix from the end of a string, potentially multiple times.
 * Returns the original string if the input value or suffix is not a valid string (empty strings are allowed).
 *
 * @param {string} value - The string to remove the suffix from.
 * @param {string} suffix - The suffix to remove.
 * @returns {string} The string with the suffix removed, or the original string if conditions aren't met.
 */
declare function removeSuffix(value: string, suffix: string): string;
