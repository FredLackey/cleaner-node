/**
 * Custom error class for API errors.
 * @extends Error
 */
export class ApiError extends Error {
    /**
     * Creates an instance of ApiError.
     * @param {object} options - The error options.
     * @param {number} [options.status=500] - The HTTP status code.
     * @param {string|number|null} [options.number=null] - An optional error number or code.
     * @param {string} [options.message=''] - The error message.
     * @param {string|object} [options.details=''] - Additional error details.
     */
    constructor({ status, number, message, details }: {
        status?: number;
        number?: string | number | null;
        message?: string;
        details?: string | object;
    });
    status: any;
    number: string | number;
    details: any;
}
/**
 * Initializes a new ApiError instance.
 * @param {number} [status=''] - The HTTP status code. Defaults to INTERNAL_SERVER_ERROR if empty.
 * @param {string|number} [number=''] - An optional error number or code. Defaults to null if empty.
 * @param {string} [message=''] - The error message.
 * @param {string|object} [details=''] - Additional error details.
 * @returns {ApiError} A new ApiError instance.
 */
export function init(status?: number, number?: string | number, message?: string, details?: string | object): ApiError;
/**
 * Creates a new ApiError instance with a specific message.
 * @param {string} value - The error message.
 * @param {object} [params={}] - Optional parameters.
 * @param {number} [params.status] - The HTTP status code.
 * @param {string|number} [params.number] - An optional error number or code.
 * @param {string|object} [params.details] - Additional error details.
 * @returns {ApiError} A new ApiError instance.
 */
export function message(value: string, params?: {
    status?: number;
    number?: string | number;
    details?: string | object;
}): ApiError;
/**
 * Creates a new ApiError instance with a specific error number.
 * @param {string|number} value - The error number or code.
 * @param {object} [params={}] - Optional parameters.
 * @param {number} [params.status] - The HTTP status code.
 * @param {string} [params.message] - The error message.
 * @param {string|object} [params.details] - Additional error details.
 * @returns {ApiError} A new ApiError instance.
 */
export function number(value: string | number, params?: {
    status?: number;
    message?: string;
    details?: string | object;
}): ApiError;
/**
 * Creates a new ApiError instance with a specific status code.
 * @param {number} value - The HTTP status code.
 * @param {object} [params={}] - Optional parameters.
 * @param {string|number} [params.number] - An optional error number or code.
 * @param {string} [params.message] - The error message.
 * @param {string|object} [params.details] - Additional error details.
 * @returns {ApiError} A new ApiError instance.
 */
export function status(value: number, params?: {
    number?: string | number;
    message?: string;
    details?: string | object;
}): ApiError;
/**
 * Creates a new ApiError instance with specific details.
 * @param {string|object} value - The error details.
 * @param {object} [params={}] - Optional parameters.
 * @param {number} [params.status] - The HTTP status code.
 * @param {string|number} [params.number] - An optional error number or code.
 * @param {string} [params.message] - The error message.
 * @returns {ApiError} A new ApiError instance.
 */
export function details(value: string | object, params?: {
    status?: number;
    number?: string | number;
    message?: string;
}): ApiError;
/**
 * Checks if a value is an Error object.
 * @param {*} value - The value to check.
 * @param {boolean} [strict=false] - If true, checks if the value is strictly an instance of Error. If false, checks for common error properties (stack, message).
 * @returns {boolean} True if the value is considered an error, false otherwise.
 */
export function isError(value: any, strict?: boolean): boolean;
/**
 * Checks if a status code represents success (2xx).
 * @param {*} value - The value containing the status code (e.g., an error object or a number).
 * @param {boolean} [strict=true] - If true, checks specifically for status code 200. If false, checks for any status code between 200 and 299 (inclusive).
 * @returns {boolean} True if the status code is considered OK, false otherwise.
 */
export function isOK(value: any, strict?: boolean): boolean;
/**
 * Checks if a status code represents success (2xx) non-strictly.
 * Shorthand for `isOK(value, false)`.
 * @param {*} value - The value containing the status code.
 * @returns {boolean} True if the status code is between 200 and 299 (inclusive), false otherwise.
 */
export function isOKish(value: any): boolean;
