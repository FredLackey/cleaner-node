export = newSalt;
/**
 * Generates a cryptographically random salt string.
 *
 * @param {number} byteCount - The number of random bytes to generate.
 * @param {string} [saltOption=c.SALT_OPTION] - The encoding format for the output string (e.g., 'hex', 'base64'). Defaults to `c.SALT_OPTION`.
 * @returns {string} The generated salt string in the specified encoding.
 */
declare function newSalt(byteCount: number, saltOption?: string): string;
