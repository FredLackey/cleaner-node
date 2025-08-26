export = deleteDirectory;
/**
 * Synchronously deletes a directory and its contents recursively.
 * Uses the rimraf package.
 * @param {string} folderPath The path to the directory to delete.
 * @returns {boolean} True if the directory doesn't exist after the operation (or didn't exist initially), false otherwise.
 */
declare function deleteDirectory(folderPath: string): boolean;
