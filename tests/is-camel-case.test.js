const { isCamelCase } = require('..');

describe('isCamelCase', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('returns true for a valid camelCase string', () => {
    const input = 'validCamelCase';
    expect(isCamelCase(input)).toBe(true);
  });

  it('returns false for a string that is not in camelCase', () => {
    const input = 'NotCamelCase';
    expect(isCamelCase(input)).toBe(false);
  });

  it('returns false for an invalid string', () => {
    const input = 'invalid/string\\test';
    expect(isCamelCase(input)).toBe(false);
  });

  it('returns false for an empty string', () => {
    expect(isCamelCase('')).toBe(false);
  });

  it('handles non-string inputs', () => {
    const cases = [null, undefined, 123, {}, []];
    cases.forEach(testCase => {
      expect(isCamelCase(testCase)).toBe(false);
    });
  });
});
