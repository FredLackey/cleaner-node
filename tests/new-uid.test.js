const { newUid, isUidFormat } = require('../src/utils');

describe('newUid', () => {
    test('should generate a valid UID', () => {
        const uid = newUid();
        expect(uid).toBeDefined();
        expect(typeof uid).toBe('string');
        // Check if the generated string matches the UID format
        expect(isUidFormat(uid)).toBe(true);
    });

    test('should generate unique UIDs', () => {
        const uid1 = newUid();
        const uid2 = newUid();
        expect(uid1).not.toBe(uid2);
    });

    test('should generate 100 unique UIDs quickly', () => {
        const uids = new Set();
        for (let i = 0; i < 100; i++) {
            uids.add(newUid());
        }
        expect(uids.size).toBe(100);
    });
}); 