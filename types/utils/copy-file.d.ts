export = copyFile;
/**
 * Synchronously copies a file from a source path to a target path.
 * @param {string} sourcePath The path to the source file.
 * @param {string} targetPath The path to the destination file. It will be created or overwritten.
 * @returns {boolean} True if the copy was successful, false otherwise.
 */
declare function copyFile(sourcePath: string, targetPath: string): boolean;
