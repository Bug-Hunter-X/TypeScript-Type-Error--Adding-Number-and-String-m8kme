function add(a: number, b: number): number {
  return a + b;
}

const result1 = add(1, 2); // Correct: Both arguments are numbers
const result2 = add(1, parseInt('2', 10)); // Correct: String converted to number

// Type checking before calling the function
function addSafe(a: number | string, b: number | string): number {
  if (typeof a === 'string') a = parseInt(a, 10);
  if (typeof b === 'string') b = parseInt(b, 10);
  return a + b;
}

const result3 = addSafe(1, '2'); // Correct: String is handled within the function