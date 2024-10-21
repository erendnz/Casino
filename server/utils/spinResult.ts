export function calculateSpinResult(result: string[]): number {
    const [first, second, third] = result;
  
    // Check if all three symbols match
    if (first === second && second === third) {
      switch (first) {
        case 'cherry': return 50;
        case 'apple': return 20;
        case 'banana': return 15;
        case 'lemon': return 3;
        default: return 0;
      }
    }
  
    // Check if any two consecutive symbols match
    if (first === second || second === third) {
      switch (second) {
        case 'cherry': return 40;
        case 'apple': return 10;
        case 'banana': return 5;
        default: return 0;
      }
    }
  
    return 0;
  }
  