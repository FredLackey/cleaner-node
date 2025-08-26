export = removePrefix;
/**
 * Removes a specified prefix from the beginning of a string, potentially multiple times.
 * If the string consists only of the prefix, an empty string is returned.
 * Returns the original string if the input value or prefix is not a valid string (empty strings are allowed).
 *
 * @param {string} value - The string to remove the prefix from.
 * @param {string} prefix - The prefix to remove.
 * @returns {string} The string with the prefix removed, or the original string if conditions aren't met.
 */
declare function removePrefix(value: string, prefix: string): string;
