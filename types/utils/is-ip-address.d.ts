export = isIpAddress;
/**
 * Checks if a string represents a valid IPv4 address.
 * Allows specific strings like '0.0.0.0' and 'localhost'.
 * Validates the format (four parts separated by dots) and the range of each part (0-255).
 * Also checks that the first part is not 0 (unless it's the specific '0.0.0.0' address).
 *
 * @param {string} value - The string to validate as an IP address.
 * @returns {boolean} True if the string is a valid IPv4 address or an acceptable special case, false otherwise.
 */
declare function isIpAddress(value: string): boolean;
