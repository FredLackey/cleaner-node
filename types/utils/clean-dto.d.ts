export = cleanDto;
/**
 * Cleans a DTO (Data Transfer Object) or an array of DTOs by applying various transformations like removing audit fields, handling ID/UID properties, and removing nulls.
 * This function modifies the input object(s) in place.
 * @param {object|Array<object>} itemOrItems The DTO or array of DTOs to clean.
 * @param {object} [params=DEFAULT_PARAMS] Configuration options:
 * @param {string} [params.id=''] The name of the primary ID field.
 * @param {string} [params.uid=''] The name of the unique ID field (often used before the primary ID is assigned).
 * @param {string[]} [params.audit=[]] An array of property names considered audit fields to be removed.
 * @param {boolean} [params.force=false] If true, forces removal of the `id` field even if `uid` is not present.
 * @param {boolean} [params.nulls=false] If true, keeps properties with null values; otherwise, they are removed.
 */
declare function cleanDto(itemOrItems: object | Array<object>, params?: {
    id?: string;
    uid?: string;
    audit?: string[];
    force?: boolean;
    nulls?: boolean;
}): void;
