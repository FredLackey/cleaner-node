const { isKebabCase } = require('..');

describe('isKebabCase', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('returns true for a valid kebab-case string', () => {
    const input = 'valid-kebab-case';
    expect(isKebabCase(input)).toBe(true);
  });

  it('returns false for a string that is not in kebab-case', () => {
    const input = 'notKebabCase';
    expect(isKebabCase(input)).toBe(false);
  });

  it('returns false for an invalid string', () => {
    const input = 'invalid/string\\test';
    expect(isKebabCase(input)).toBe(false);
  });

  it('returns false for an empty string', () => {
    expect(isKebabCase('')).toBe(false);
  });

  it('handles non-string inputs', () => {
    const cases = [null, undefined, 123, {}, []];
    cases.forEach(testCase => {
      expect(isKebabCase(testCase)).toBe(false);
    });
  });
});
