export = getFileName;
/**
 * Extracts the file name from a file path, optionally including or excluding the extension.
 * @param {string} filePath The full path to the file.
 * @param {boolean} [includeExtension=true] Whether to include the file extension in the returned name.
 * @returns {string|null} The file name (with or without extension), or null if an error occurs (e.g., invalid path).
 */
declare function getFileName(filePath: string, includeExtension?: boolean): string | null;
