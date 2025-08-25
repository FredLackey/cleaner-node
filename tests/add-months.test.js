const addMonths = require('../src/utils/add-months');

describe('addMonths', () => {
  it('should add months to a date', () => {
    const date = new Date('2024-01-15T12:00:00.000Z');
    const newDate = addMonths(date, 2);
    expect(newDate.toISOString()).toBe('2024-03-15T12:00:00.000Z');
  });

  it('should handle month overflow into the next year', () => {
    const date = new Date('2023-11-20T00:00:00.000Z');
    const newDate = addMonths(date, 3);
    expect(newDate.toISOString()).toBe('2024-02-20T00:00:00.000Z');
  });

  it('should handle same number of days in target month', () => {
    const date = new Date('2024-07-31T00:00:00.000Z');
    const newDate = addMonths(date, 1); // Aug 31
    expect(newDate.toISOString()).toBe('2024-08-31T00:00:00.000Z');
  });

  it('should adjust day when target month has fewer days', () => {
    const date = new Date('2024-01-31T00:00:00.000Z');
    const newDate = addMonths(date, 1); // Feb 29 in a leap year
    expect(newDate.toISOString()).toBe('2024-02-29T00:00:00.000Z');
  });

  it('should adjust day when target month has fewer days (non-leap year)', () => {
    const date = new Date('2023-01-31T00:00:00.000Z');
    const newDate = addMonths(date, 1); // Feb 28
    expect(newDate.toISOString()).toBe('2023-02-28T00:00:00.000Z');
  });

  it('should handle subtracting months', () => {
    const date = new Date('2024-03-15T00:00:00.000Z');
    const newDate = addMonths(date, -2);
    expect(newDate.toISOString()).toBe('2024-01-15T00:00:00.000Z');
  });

    it('should adjust day when subtracting to a shorter month', () => {
    const date = new Date('2024-03-31T00:00:00.000Z');
    const newDate = addMonths(date, -1);
    expect(newDate.toISOString()).toBe('2024-02-29T00:00:00.000Z');
  });

  it('should return undefined for invalid date', () => {
    const newDate = addMonths('not a date', 5);
    expect(newDate).toBeUndefined();
  });

  it('should return undefined for invalid quantity', () => {
    const date = new Date();
    const newDate = addMonths(date, 'not a number');
    expect(newDate).toBeUndefined();
  });
});
