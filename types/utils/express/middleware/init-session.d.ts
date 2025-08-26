export = initSession;
/**
 * Express middleware to initialize the session object (`req.session`) based on a JWT found in the Authorization header.
 * It decodes the JWT, verifies its signature (using JWT_SECRET), and checks for expiration.
 * Sets `req.session.valid` and `req.session.expired` accordingly.
 * @param {Express.Request} req The Express request object.
 * @param {Express.Response} res The Express response object.
 * @param {Express.NextFunction} next The next middleware function.
 */
declare function initSession(req: Express.Request, res: Express.Response, next: Express.NextFunction): any;
