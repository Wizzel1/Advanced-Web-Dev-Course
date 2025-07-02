import { greet } from "./greet";

test('returns greeting with given name "Lisa"', () => {
  expect(greet('Lisa')).toBe('Hello, Lisa!');
});

test('returns greeting with given name "Tim"', () => {
  expect(greet('Tim')).toBe('Hello, Tim!');
});