// Basic array type annotations
let numbers: number[] = [1, 2, 3]; // Array of numbers
let strings: string[] = ["Dude", "Hello", "TypeScript"]; // Array of strings

// Multi-dimensional arrays
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
]; // 2D array of numbers

// Array methods with type safety
numbers.push(4); // Works fine
// numbers.push("Not a number"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'

// Mixed types using union
let mixedArray: (string | number)[] = [1, "two", 3, "four"]; // Array with numbers and strings

// Tuples: Fixed-size, ordered collections
let mixedTuple: [string, number] = ["Hello", 42]; // Tuple with a string and a number

// Accessing tuple elements
let greeting: string = mixedTuple[0]; // "Hello"
let answer: number = mixedTuple[1]; // 42numbers

// Optional tuple elements
let optionalTuple: [string, number?] = ["Optional"]; // Second element is optional

// Named tuples for clarity
let userTuple: [id: number, name: string, isActive: boolean] = [1, "Dude", true];

// Tuple with rest elements
let extendedTuple: [string, ...number[]] = ["Hello", 1, 2, 3]; // A tuple with a string and a rest array of numbers

// Array destructuring
let [first, second] = numbers; // Destructuring first two elements
console.log(`First: ${first}, Second: ${second}`); // Outputs: First: 1, Second: 2

// Tuple destructuring
let [word, number] = mixedTuple; // Destructure tuple
console.log(`Word: ${word}, Number: ${number}`); // Outputs: Word: Hello, Number: 42
