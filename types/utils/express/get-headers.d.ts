export = getHeaders;
/**
 * Retrieves all headers from an Express request object.
 * Handles potential errors during header retrieval.
 * @param {Express.Request} request The Express request object.
 * @returns {object|undefined} An object containing all headers, or undefined if an error occurs.
 */
declare function getHeaders(request: Express.Request): object | undefined;
