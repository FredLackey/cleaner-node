const hashLines = require('../src/utils/hash-lines');

describe('hashLines', () => {

  it('padded words - trimmed', () => {
    const LINES = ['  Hello  ', ' 123 '];
    const TRIM_LINES = true;
    const EXPECTED_HASH = 'd0aabe9a362cb2712ee90e04810902f3';

    const result = hashLines(LINES, TRIM_LINES);

    expect(result).toBe(EXPECTED_HASH);
  });
  it('padded words - not trimmed', () => {
    const LINES = ['  Hello  ', ' 123 '];
    const TRIM_LINES = false;
    const EXPECTED_HASH = '49eb45f0df22378fa910693bb64e244b';

    const result = hashLines(LINES, TRIM_LINES);

    expect(result).toBe(EXPECTED_HASH);
  });

  it('words - trimmed', () => {
    const LINES = ['Hello', '123', 'true', ' world'];
    const TRIM_LINES = true;
    const EXPECTED_HASH = '1efca8b32c898ecc46419224ecfbac42';

    const result = hashLines(LINES, TRIM_LINES);

    expect(result).toBe(EXPECTED_HASH);
  });
  it('words - not trimmed', () => {
    const LINES = ['Hello', '123', 'true', ' world'];
    const TRIM_LINES = false;
    const EXPECTED_HASH = '720b8d3991fb2ee6099ccc50228a1f1f';

    const result = hashLines(LINES, TRIM_LINES);

    expect(result).toBe(EXPECTED_HASH);
  });

});
