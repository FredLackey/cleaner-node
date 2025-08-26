export = getHeader;
/**
 * Retrieves a specific header value from an Express request object, case-insensitively.
 * @param {Express.Request} request The Express request object.
 * @param {string} name The name of the header to retrieve.
 * @returns {string|undefined} The value of the specified header, or undefined if not found.
 */
declare function getHeader(request: Express.Request, name: string): string | undefined;
