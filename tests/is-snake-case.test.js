const { isSnakeCase } = require('..');

describe('isSnakeCase', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('returns true for a valid snake_case string', () => {
    const input = 'valid_snake_case';
    expect(isSnakeCase(input)).toBe(true);
  });

  it('returns false for a string that is not in snake_case', () => {
    const input = 'notSnakeCase';
    expect(isSnakeCase(input)).toBe(false);
  });

  it('returns false for an invalid string', () => {
    const input = 'invalid/string\\test';
    expect(isSnakeCase(input)).toBe(false);
  });

  it('returns false for an empty string', () => {
    expect(isSnakeCase('')).toBe(false);
  });

  it('handles non-string inputs', () => {
    const cases = [null, undefined, 123, {}, []];
    cases.forEach(testCase => {
      expect(isSnakeCase(testCase)).toBe(false);
    });
  });
});
