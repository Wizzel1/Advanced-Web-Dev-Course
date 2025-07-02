import { capitalize } from "./capitalize";

test('capitalizes a single lowercase word', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('capitalizes a single letter', () => {
    expect(capitalize('a')).toBe('A');
  });

  test('does nothing on an empty string', () => {
    expect(capitalize('')).toBe('');
  });

  test('capitalizes the first letter of javaScript', () => {
    expect(capitalize('javaScript')).toBe('JavaScript');
  });

  test('ignores symbols and capitalizes the first letter of a sentence', () => {
    expect(capitalize('!hello, world!')).toBe('!Hello, world!');
  });


  test('removes whitespace and capitalizes the first letter of a sentence', () => {
    expect(capitalize('  hello, world!')).toBe('Hello, world!');
  });