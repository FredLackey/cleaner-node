export = logRequest;
/**
 * Express middleware to log request details in development environments.
 * Logs the request method, URL, Origin header, Referrer header, and request body.
 * Only logs if NODE_ENV is set to 'development'.
 * @param {Express.Request} req The Express request object.
 * @param {Express.Response} res The Express response object.
 * @param {Express.NextFunction} next The next middleware function.
 */
declare function logRequest(req: Express.Request, res: Express.Response, next: Express.NextFunction): any;
