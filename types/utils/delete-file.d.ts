export = deleteFile;
/**
 * Synchronously deletes a file.
 * @param {string} filePath The path to the file to delete.
 * @param {boolean} [missingOkay=true] If true, returns true even if the file doesn't exist. If false, returns false if the file doesn't exist.
 * @returns {boolean} True if the file is successfully deleted (or didn't exist and missingOkay is true), false otherwise.
 */
declare function deleteFile(filePath: string, missingOkay?: boolean): boolean;
