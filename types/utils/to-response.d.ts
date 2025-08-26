export = toResponse;
/**
 * Formats a response based on the structure of the original input
 *
 * This utility helps create consistent responses by ensuring the response format
 * matches the original input structure:
 * - If original was an array, returns response as an array
 * - If original was an object and response is an object, returns the response object
 * - If response is an array with one item, extracts that single item
 *
 * @param {Object|Array} original - The original input structure
 * @param {*} response - The processed response data to format
 * @returns {Array|Object|*} The formatted response data
 *
 * @example
 * // If original is an array, response will be an array
 * const result = toResponse([{id:1}, {id:2}], [{name:'A'}, {name:'B'}]); // Returns [{name:'A'}, {name:'B'}]
 *
 * @example
 * // If original is an object and response is a single-item array, returns first item
 * const result = toResponse({id:1}, [{name:'A'}]); // Returns {name:'A'}
 */
declare function toResponse(original: any | any[], response: any): any[] | any | any;
