export = copyContents;
/**
 * Asynchronously copies the contents of a source file to a destination file, line by line.
 * Uses OS-specific end-of-line characters.
 * @param {string} sourceFile The path to the source file.
 * @param {string} destinationFile The path to the destination file. It will be created or overwritten.
 * @returns {Promise<void>} A promise that resolves when the copy operation is complete.
 */
declare function copyContents(sourceFile: string, destinationFile: string): Promise<void>;
