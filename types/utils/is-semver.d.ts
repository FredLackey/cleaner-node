export = isSemver;
/**
 * Checks if a string is a valid Semantic Versioning (SemVer) string.
 * Uses the `semver` library for validation.
 *
 * @param {string} value - The string to check.
 * @returns {boolean} True if the value is a valid SemVer string, false otherwise.
 */
declare function isSemver(value: string): boolean;
