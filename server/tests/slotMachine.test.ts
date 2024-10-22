import { calculateSpinResult } from '../utils/spinResult';

describe('Slot Machine Winning Calculations', () => {

  // Test case: calculates winnings correctly for 3 cherries in a row
  test('calculates winnings correctly for 3 cherries in a row', () => {
    const result = ['cherry', 'cherry', 'cherry'];
    const winnings = calculateSpinResult(result);
    expect(winnings).toBe(50);
  });

  // Test case: calculates winnings correctly for 2 cherries in a row
  test('calculates winnings correctly for 2 cherries in a row', () => {
    const result = ['cherry', 'cherry', 'lemon'];
    const winnings = calculateSpinResult(result);
    expect(winnings).toBe(40);
  });

  // Test case: calculates winnings correctly for 3 apples in a row
  test('calculates winnings correctly for 3 apples in a row', () => {
    const result = ['apple', 'apple', 'apple'];
    const winnings = calculateSpinResult(result);
    expect(winnings).toBe(20);
  });

  // Test case: calculates winnings correctly for 2 apples in a row
  test('calculates winnings correctly for 2 apples in a row', () => {
    const result = ['apple', 'apple', 'lemon'];
    const winnings = calculateSpinResult(result);
    expect(winnings).toBe(10);
  });

  // Test case: calculates winnings correctly for 3 bananas in a row
  test('calculates winnings correctly for 3 bananas in a row', () => {
    const result = ['banana', 'banana', 'banana'];
    const winnings = calculateSpinResult(result);
    expect(winnings).toBe(15);
  });

  // Test case: calculates winnings correctly for 2 bananas in a row
  test('calculates winnings correctly for 2 bananas in a row', () => {
    const result = ['banana', 'banana', 'lemon'];
    const winnings = calculateSpinResult(result);
    expect(winnings).toBe(5);
  });

  // Test case: calculates winnings correctly for 3 lemons in a row
  test('calculates winnings correctly for 3 lemons in a row', () => {
    const result = ['lemon', 'lemon', 'lemon'];
    const winnings = calculateSpinResult(result);
    expect(winnings).toBe(3);
  });

  // Test case: calculates winnings correctly for no matching symbols
  test('calculates winnings correctly for no matching symbols', () => {
    const result = ['lemon', 'banana', 'apple'];
    const winnings = calculateSpinResult(result);
    expect(winnings).toBe(0);
  });
});
