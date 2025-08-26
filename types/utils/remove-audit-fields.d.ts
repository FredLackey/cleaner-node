export = removeAuditFields;
/**
 * Recursively removes standard audit fields (defined in `constants.AUDIT_FIELDS`)
 * from an object or an array of objects.
 * Can operate on the original object/array or create a deep copy first.
 *
 * @param {object|Array} itemOrItems - The object or array to remove audit fields from.
 * @param {boolean} [makeCopy=false] - If true, creates a deep copy before removing fields. Otherwise, modifies the original.
 * @returns {object|Array} The processed object or array with audit fields removed.
 */
declare function removeAuditFields(itemOrItems: object | any[], makeCopy?: boolean): object | any[];
