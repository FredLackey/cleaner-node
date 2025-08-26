export = authRequired;
/**
 * Express middleware to require authentication.
 * Checks for a valid, non-expired session.
 * If the session is missing, invalid, or expired, it sends a 401 Unauthorized response.
 * Otherwise, it calls the next middleware.
 * @param {Express.Request} req The Express request object.
 * @param {Express.Response} res The Express response object.
 * @param {Express.NextFunction} next The next middleware function.
 */
declare function authRequired(req: Express.Request, res: Express.Response, next: Express.NextFunction): any;
