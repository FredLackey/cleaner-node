export = isGuidFormat;
/**
 * Checks if a value conforms to the standard GUID format (e.g., 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx').
 * It validates the structure by splitting the string by hyphens and comparing the length and content
 * of each part against a template GUID.
 *
 * @param {string} value - The string value to check.
 * @returns {boolean} True if the value is in a valid GUID format, false otherwise.
 */
declare function isGuidFormat(value: string): boolean;
