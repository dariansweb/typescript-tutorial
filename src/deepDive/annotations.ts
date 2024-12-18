// Basic type annotations
let userName: string = "Dude"; // Type explicitly set as string
let userAge: number = 30; // Type explicitly set as number
let isLearning: boolean = true; // Type explicitly set as boolean

// More types
let favoriteColors: string[] = ["blue", "green", "red"]; // Array of strings
let birthYear: number | string = 1990; // Union type: number or string
let userDetails: { name: string; age: number; isStudent: boolean } = {
  name: "Dude",
  age: 30,
  isStudent: true,
}; // Object type with defined shape

// Function annotations
function greet(userName: string): string {
  return `Hello, ${userName}!`;
}

// Null and undefined
let maybeNull: string | null = null; // Can hold a string or null
let maybeUndefined: number | undefined; // Could be undefined

// Type inference
let inferredString = "This is a string"; // Automatically inferred as `string`
let inferredNumber = 42; // Automatically inferred as `number`

// Contextual typing in functions
const square = (num: number) => num * num; // Return type inferred as `number`
const multiply = (a: number, b: number) => a * b; // Return type inferred as `number`

// Explicitly annotated arrays
let typedArray: number[] = []; // Explicitly annotated as an array of numbers
typedArray.push(1); // Works
// typedArray.push("two"); // Error: TypeScript enforces number-only array

console.log(greet(userName)); // Outputs: Hello, Dude!
console.log(square(5)); // Outputs: 25
console.log(multiply(3, 4)); // Outputs: 12
