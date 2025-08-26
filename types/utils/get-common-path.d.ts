export = getBaseDir;
/**
 * Finds the longest common base directory path from an array of file paths.
 * Ensures all paths share the same root directory before finding the common subdirectory path.
 * Handles different path separators (Windows/Unix).
 * @param {string[]} values An array of file path strings.
 * @returns {string|null} The longest common base directory path, or null if paths don't share a common root or if the input is invalid.
 */
declare function getBaseDir(values: string[]): string | null;
