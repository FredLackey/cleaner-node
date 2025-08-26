export = fromDto;
/**
 * Converts specific string representations within a DTO (or array of DTOs) to their corresponding JavaScript types (e.g., ISO date strings to Date objects).
 * This function modifies the input object(s) in place.
 * NOTE: The conversion of digit strings to Dates via `Date(item[key])` in `makeIntegers` seems incorrect and likely should convert to Numbers.
 * @param {object|Array<object>} itemOrItems The DTO or array of DTOs to process.
 * @param {object} [params=DEFAULT_PARAMS] Configuration options (currently unused beyond cache initialization).
 */
declare function fromDto(itemOrItems: object | Array<object>, params?: object): void;
