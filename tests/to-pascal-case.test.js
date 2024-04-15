const { toPascalCase } = require('..');

describe('toPascalCase', () => {
  it('returns an empty string for an invalid input', () => {
    const input = null;
    expect(toPascalCase(input)).toBe('');
  });

  it('converts a single word to PascalCase', () => {
    const input = 'hello';
    expect(toPascalCase(input)).toBe('Hello');
  });

  it('converts a kebab-case string to PascalCase', () => {
    const input = 'hello-world';
    expect(toPascalCase(input)).toBe('HelloWorld');
  });

  it('converts a snake_case string to PascalCase', () => {
    const input = 'hello_world';
    expect(toPascalCase(input)).toBe('HelloWorld');
  });

  it('converts a camelCase string to PascalCase', () => {
    const input = 'helloWorld';
    expect(toPascalCase(input)).toBe('HelloWorld');
  });

  it('converts a mixed case string to PascalCase', () => {
    const input = 'hello-World';
    expect(toPascalCase(input)).toBe('HelloWorld');
  });

  it('converts an empty string to an empty string', () => {
    const input = '';
    expect(toPascalCase(input)).toBe('');
  });

  it('handles non-string inputs', () => {
    const cases = [null, undefined, 123, {}, []];
    cases.forEach(testCase => {
      expect(toPascalCase(testCase)).toBe('');
    });
  });
});