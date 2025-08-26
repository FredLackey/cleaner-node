export = fromResult;
/**
 * Extracts the nested 'result' property from an object, traversing down until a non-object 'result' is found or the property doesn't exist.
 * Useful for unwrapping nested API responses.
 * @param {object} item The input object, potentially containing nested 'result' properties.
 * @returns {any} The final extracted value from the deepest 'result' property, or the original item if no 'result' property is found initially.
 */
declare function fromResult(item: object): any;
