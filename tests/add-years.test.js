const addYears = require('../src/utils/add-years');

describe('addYears', () => {
  it('should add years to a date', () => {
    const date = new Date('2024-01-15T12:00:00.000Z');
    const newDate = addYears(date, 5);
    expect(newDate.toISOString()).toBe('2029-01-15T12:00:00.000Z');
  });

  it('should handle subtracting years', () => {
    const date = new Date('2024-03-15T00:00:00.000Z');
    const newDate = addYears(date, -4);
    expect(newDate.toISOString()).toBe('2020-03-15T00:00:00.000Z');
  });

  it('should handle leap years correctly', () => {
    // From a leap year to a non-leap year
    const leapDate = new Date('2024-02-29T10:00:00.000Z');
    const newDate = addYears(leapDate, 1);
    expect(newDate.toISOString()).toBe('2025-02-28T10:00:00.000Z');
  });

    it('should handle moving from a non-leap to a leap year', () => {
    // From a non-leap year to a leap year, day should remain the same
    const date = new Date('2023-02-28T10:00:00.000Z');
    const newDate = addYears(date, 1);
    expect(newDate.toISOString()).toBe('2024-02-28T10:00:00.000Z');
  });

  it('should return undefined for invalid date', () => {
    const newDate = addYears('not a date', 5);
    expect(newDate).toBeUndefined();
  });

  it('should return undefined for invalid quantity', () => {
    const date = new Date();
    const newDate = addYears(date, 'not a number');
    expect(newDate).toBeUndefined();
  });
});
