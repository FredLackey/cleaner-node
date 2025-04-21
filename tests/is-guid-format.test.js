const { isGuidFormat, newGuid } = require('../src/utils');

describe('isGuidFormat', () => {
    test('should return true for a valid GUID', () => {
        const validGuid = newGuid(); // Generate a known valid GUID
        expect(isGuidFormat(validGuid)).toBe(true);
        expect(isGuidFormat('123e4567-e89b-12d3-a456-426614174000')).toBe(true);
        expect(isGuidFormat('{123e4567-e89b-12d3-a456-426614174000}')).toBe(true);
    });

    test('should return false for invalid GUID formats', () => {
        expect(isGuidFormat('not-a-guid')).toBe(false);
        expect(isGuidFormat(12345)).toBe(false);
        expect(isGuidFormat(null)).toBe(false);
        expect(isGuidFormat(undefined)).toBe(false);
        expect(isGuidFormat('')).toBe(false);
        expect(isGuidFormat('123e4567-e89b-12d3-a456-42661417400')).toBe(false); // Too short
        expect(isGuidFormat('123e4567-e89b-12d3-a456-4266141740000')).toBe(false); // Too long
        expect(isGuidFormat('123e4567 e89b 12d3 a456 426614174000')).toBe(false); // Wrong separators
        expect(isGuidFormat('g23e4567-e89b-12d3-a456-426614174000')).toBe(false); // Invalid characters
    });

     test('should return false for UIDs', () => {
        expect(isGuidFormat('u123e4567e89b12d3a456426614174000')).toBe(false);
     });
}); 