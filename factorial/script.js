// Factorial using filter and reduce

function factorial(n) {
  if (n < 0) return "Factorial not defined for negative numbers";

  return Array.from({ length: n + 1 }, (_, i) => i) // [0, 1, 2, ..., n]
    .filter(num => num > 0)                        // remove 0
    .reduce((acc, curr) => acc * curr, 1);         // multiply all numbers
}

// Example:
console.log(factorial(5)); // Output: 120
// Factorial using filter and reduce

function factorial(n) {
  if (n < 0) return "Factorial not defined for negative numbers";

  return Array.from({ length: n + 1 }, (_, i) => i) // [0, 1, 2, ..., n]
    .filter(num => num > 0)                        // remove 0
    .reduce((acc, curr) => acc * curr, 1);         // multiply all numbers
}

// Example:
console.log(factorial(5)); // Output: 120
// Factorial using filter and reduce

function factorial(n) {
  if (n < 0) return "Factorial not defined for negative numbers";

  return Array.from({ length: n + 1 }, (_, i) => i) // [0, 1, 2, ..., n]
    .filter(num => num > 0)                        // remove 0
    .reduce((acc, curr) => acc * curr, 1);         // multiply all numbers
}

// Example:
console.log(factorial(5)); // Output: 120
// Factorial using filter and reduce

function factorial(n) {
  if (n < 0) return "Factorial not defined for negative numbers";

  return Array.from({ length: n + 1 }, (_, i) => i) // [0, 1, 2, ..., n]
    .filter(num => num > 0)                        // remove 0
    .reduce((acc, curr) => acc * curr, 1);         // multiply all numbers
}

// Example:
console.log(factorial(5)); // Output: 120...
