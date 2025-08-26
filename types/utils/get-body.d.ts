export = getBody;
/**
 * Asynchronously extracts the request body from a request object (req).
 * Primarily designed for Next.js environments, falling back to `req.body` if present.
 * Logs an error and returns an empty object if the request object is invalid.
 * @param {object} req The request object (e.g., from an HTTP request).
 * @returns {Promise<object>} A promise that resolves to the request body object.
 */
declare function getBody(req: object): Promise<object>;
