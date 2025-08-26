export = hashString;
/**
 * Computes a hash (md5/hex by default) of a string after trimming leading/trailing whitespace.
 * @param {string} value The string to hash.
 * @returns {string|undefined} The hash string, or undefined if the input is not a valid string (even after trimming).
 */
declare function hashString(value: string): string | undefined;
