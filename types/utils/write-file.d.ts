export = writeFile;
/**
 * Writes content to a file, creating the necessary directory structure if it doesn't exist.
 *
 * @param {string} filePath - The full path of the file to write to.
 * @param {string} [contents=''] - The content to write to the file. Defaults to an empty string.
 * @returns {boolean} True if the file was written successfully, false otherwise.
 */
declare function writeFile(filePath: string, contents?: string): boolean;
