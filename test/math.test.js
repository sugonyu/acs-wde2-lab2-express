// Adjust the require path according to your file location. (e.g., '../src/math' or './math')
const { add, subtract, multiply, divide } = require('../src/math'); 

describe("Math functions test", () => {
  test('1 + 2 should equal 3', () => {
    // This means we expect the result of add(1, 2) to be 3.
    expect(add(1, 2)).toBe(3); 
  });

  test('5 - 2 should equal 3', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test('3 * 4 should equal 12', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test('10 / 2 should equal 5', () => {
    expect(divide(10, 2)).toBe(5);
  });
});