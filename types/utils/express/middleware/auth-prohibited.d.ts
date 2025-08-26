export = authProhibited;
/**
 * Express middleware to prohibit access for authenticated users.
 * If a valid, non-expired session exists, it sends a 405 Method Not Allowed response.
 * Otherwise, it calls the next middleware.
 * @param {Express.Request} req The Express request object.
 * @param {Express.Response} res The Express response object.
 * @param {Express.NextFunction} next The next middleware function.
 */
declare function authProhibited(req: Express.Request, res: Express.Response, next: Express.NextFunction): any;
