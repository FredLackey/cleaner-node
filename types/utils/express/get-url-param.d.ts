export = getUrlParam;
/**
 * Extracts a specific query parameter value from a URL string.
 * @param {string} urlText The URL string to parse.
 * @param {string} name The name of the query parameter to retrieve.
 * @returns {string|null} The value of the specified query parameter, or null if not found.
 */
declare function getUrlParam(urlText: string, name: string): string | null;
