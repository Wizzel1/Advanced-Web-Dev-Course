import { isPalindrome } from "./palindrome";

test('returns true for a palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
});

test('returns false for a non-palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
});

test('returns true for an empty string', () => {
    expect(isPalindrome('')).toBe(true);
});

test('returns true for a single letter', () => {
    expect(isPalindrome('a')).toBe(true);
});
