export = hashFileContents;
/**
 * Computes a hash of the file contents.
 * @param {string} value The path to the file.
 * @param {boolean} [trim=false] If true, reads the file line by line, trims whitespace from each line, and joins them with newline characters before hashing. Otherwise, reads the entire file buffer.
 * @param {string} [algorithm='md5'] The hashing algorithm to use (e.g., 'md5', 'sha1', 'sha256').
 * @param {string} [digest='hex'] The encoding for the output hash (e.g., 'hex', 'base64').
 * @returns {Promise<string|null|undefined>} A promise that resolves with the hash string, null if the input is not a file, or undefined if an error occurs during file reading or hashing.
 */
declare function hashFileContents(value: string, trim?: boolean, algorithm?: string, digest?: string): Promise<string | null | undefined>;
