const { isPascalCase } = require('..');

describe('isPascalCase', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('returns true for a valid pascal string', () => {
    const input = 'ValidPascalCase';
    expect(isPascalCase(input)).toBe(true);
  });

  it('returns false for a string that is not in pascal', () => {
    const input = 'notPacalCase';
    expect(isPascalCase(input)).toBe(false);
  });

  it('returns false for an invalid string', () => {
    const input = 'invalid/string\\test';
    expect(isPascalCase(input)).toBe(false);
  });

  it('returns false for an empty string', () => {
    expect(isPascalCase('')).toBe(false);
  });

  it('handles non-string inputs', () => {
    const cases = [null, undefined, 123, {}, []];
    cases.forEach(testCase => {
      expect(isPascalCase(testCase)).toBe(false);
    });
  });
});
