export = hashFile;
/**
 * Computes a hash of a file's contents synchronously.
 * @param {string} value The path to the file.
 * @param {string} [algorithm='md5'] The hashing algorithm to use (e.g., 'md5', 'sha1', 'sha256').
 * @param {string} [digest='hex'] The encoding for the output hash (e.g., 'hex', 'base64').
 * @returns {string|null|undefined} The hash string, null if the input is not a file, or undefined if an error occurs during file reading or hashing.
 */
declare function hashFile(value: string, algorithm?: string, digest?: string): string | null | undefined;
