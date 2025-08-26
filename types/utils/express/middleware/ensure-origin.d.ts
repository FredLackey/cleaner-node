export = ensureOrigin;
/**
 * Express middleware to validate the 'Origin' header.
 * Ensures the header is present and represents a valid HTTP/HTTPS URL.
 * Sends a 400 Bad Request response if the origin is missing or invalid.
 * Otherwise, it calls the next middleware.
 * @param {Express.Request} req The Express request object.
 * @param {Express.Response} res The Express response object.
 * @param {Express.NextFunction} next The next middleware function.
 */
declare function ensureOrigin(req: Express.Request, res: Express.Response, next: Express.NextFunction): any;
