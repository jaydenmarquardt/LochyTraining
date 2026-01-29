# Lesson 13: Functions

## Learning Objectives

- Understand what functions are and why they're useful
- Create function declarations
- Create function expressions
- Use arrow functions
- Work with parameters and return values
- Understand function scope

## What are Functions?

Functions are reusable blocks of code that perform specific tasks.

### Benefits:

- **Reusability**: Write once, use many times
- **Organization**: Break code into logical pieces
- **Maintainability**: Fix bugs in one place

## Function Declaration

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

const message = greet("Alice");
console.log(message); // "Hello, Alice!"
```

## Function Expression

```javascript
const greet = function (name) {
  return `Hello, ${name}!`;
};

console.log(greet("Bob"));
```

## Arrow Functions (Modern)

```javascript
// Single parameter, single expression
const greet = (name) => `Hello, ${name}!`;

// Multiple parameters
const add = (a, b) => a + b;

// Multiple statements
const calculate = (a, b) => {
  const result = a + b;
  return result * 2;
};
```

## Parameters and Arguments

```javascript
// Parameters are the names in the function definition
function multiply(x, y) {
  // x and y are parameters
  return x * y;
}

// Arguments are the actual values passed
const result = multiply(5, 3); // 5 and 3 are arguments
```

### Default Parameters

```javascript
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet()); // "Hello, Guest!"
console.log(greet("Alice")); // "Hello, Alice!"
```

### Rest Parameters

Collect multiple arguments into an array:

```javascript
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5)); // 15
```

## Return Statement

```javascript
function add(a, b) {
  return a + b; // Exit function and return value
  console.log("Never runs"); // Code after return is ignored
}

const result = add(5, 3); // 8
```

Functions without `return` return `undefined`:

```javascript
function logMessage(msg) {
  console.log(msg);
  // No return statement
}

const result = logMessage("Hello"); // undefined
```

## Function Scope

Variables declared in a function are only accessible inside:

```javascript
function test() {
  const localVar = "I am local";
  console.log(localVar); // Works
}

test();
// console.log(localVar); // ERROR: Not accessible
```

Functions can access outer variables:

```javascript
const outerVar = "I am outer";

function test() {
  console.log(outerVar); // Can access outer scope
}

test(); // "I am outer"
```

## Higher-Order Functions

Functions that accept or return other functions:

```javascript
function callTwice(func) {
  func();
  func();
}

function sayHello() {
  console.log("Hello!");
}

callTwice(sayHello);
// Prints "Hello!" twice
```

## Common Patterns

### Function Factory

```javascript
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

### Callback Functions

```javascript
function processUser(name, callback) {
  const user = { name: name, id: 123 };
  callback(user);
}

processUser("Alice", function (user) {
  console.log(user);
});
```

## Arrow Function vs Regular Function

Key differences:

```javascript
// 1. Syntax
function regular(x) {
  return x * 2;
}
const arrow = (x) => x * 2;

// 2. 'this' binding (learn later with objects)
// Regular functions have their own 'this'
// Arrow functions inherit 'this' from parent

// 3. Arrow functions can't be constructors
```

## Exercises

1. Create a function that calculates the area of a rectangle
2. Create a function that checks if a number is even
3. Create a function that returns the larger of two numbers
4. Create a function with default parameters
5. Convert a regular function to an arrow function

## Best Practices

- Use descriptive function names (verbs: `calculateTotal`, `getUserName`)
- Keep functions small and focused
- Use arrow functions for short, simple operations
- Use regular functions for complex logic
- Return early to avoid deep nesting

```javascript
// Good - early return
function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

// Bad - nested if/else
function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Cannot divide by zero";
  }
}
```

## Check Your Solution

Compare with Solutions/lesson-13 folder.
