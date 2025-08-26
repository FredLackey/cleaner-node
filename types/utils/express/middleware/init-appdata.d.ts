export = initAppData;
/**
 * Express middleware to initialize the `req.appData` object if it doesn't exist.
 * Ensures `req.appData` is always available for subsequent middleware or route handlers.
 * @param {Express.Request} req The Express request object.
 * @param {Express.Response} res The Express response object.
 * @param {Express.NextFunction} next The next middleware function.
 */
declare function initAppData(req: Express.Request, res: Express.Response, next: Express.NextFunction): any;
