import { isEven } from "./isEven";

test('returns true for even numbers', () => {
    expect(isEven(4)).toBe(true);
  });
  
  test('returns false for odd numbers', () => {
    expect(isEven(3)).toBe(false);
  });

  test('returns true for 0', () => {
    expect(isEven(0)).toBe(true);
  });

  test('return true for -2', () => {
    expect(isEven(-2)).toBe(true);
  });

test('returns false for 101 ', () => {
    expect(isEven(101)).toBe(false);
  });
