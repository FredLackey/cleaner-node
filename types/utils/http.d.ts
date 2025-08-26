/**
 * Performs a GET request to the root path ('/') to check connectivity.
 * @param {object} [creds={}] Credentials for Authorization header.
 * @param {object} [headers={}] Additional request headers.
 * @returns {Promise<*|string>} A promise that resolves with the response or 'FAILURE'.
 */
export function ping(creds?: object, headers?: object): Promise<any | string>;
/**
 * Performs a GET request.
 * @param {string} url The target URL.
 * @param {object} [creds={}] Credentials for Authorization header.
 * @param {object} [headers={}] Additional request headers.
 * @returns {Promise<*|null>} A promise that resolves with the JSON response, or null on error.
 */
export function doGet(url: string, creds?: object, headers?: object): Promise<any | null>;
/**
 * Performs a POST request.
 * @param {string} url The target URL.
 * @param {*} data The request body data.
 * @param {object} [creds={}] Credentials for Authorization header.
 * @param {object} [headers={}] Additional request headers.
 * @returns {Promise<*|null>} A promise that resolves with the JSON response, or null on error.
 */
export function doPost(url: string, data: any, creds?: object, headers?: object): Promise<any | null>;
/**
 * Performs a PUT request.
 * @param {string} url The target URL.
 * @param {*} data The request body data.
 * @param {object} [creds={}] Credentials for Authorization header.
 * @param {object} [headers={}] Additional request headers.
 * @returns {Promise<*|null>} A promise that resolves with the JSON response, or null on error.
 */
export function doPut(url: string, data: any, creds?: object, headers?: object): Promise<any | null>;
/**
 * Performs a DELETE request.
 * @param {string} url The target URL.
 * @param {*} [data] Optional request body data.
 * @param {object} [creds={}] Credentials for Authorization header.
 * @param {object} [headers={}] Additional request headers.
 * @returns {Promise<*|null>} A promise that resolves with the JSON response, or null on error.
 */
export function doDelete(url: string, data?: any, creds?: object, headers?: object): Promise<any | null>;
