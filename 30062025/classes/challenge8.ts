interface MathOperation {
    (x: number, y: number): number;
}

const add: MathOperation = (x, y) => { return x + y; };
const multiply: MathOperation = (x, y) => { return x * y; };

// Test
console.log(add(2, 3));       // 5
console.log(multiply(2, 3));  // 6