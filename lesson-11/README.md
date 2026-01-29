# Lesson 11: Variables & Data Types

## Learning Objectives

- Understand var, let, and const
- Learn JavaScript's primitive data types
- Understand reference vs primitive types
- Use typeof to check data types
- Understand scope and hoisting

## What You'll Build

A comprehensive exploration of JavaScript variables and data types through console examples.

## Variable Declarations

### var (old way - avoid)

```javascript
var name = "John";
var name = "Jane"; // Can redeclare (bad!)
```

### let (modern - use for values that change)

```javascript
let age = 25;
age = 26; // Can reassign
// let age = 30; // ERROR: Cannot redeclare
```

### const (modern - use by default)

```javascript
const PI = 3.14159;
// PI = 3.14; // ERROR: Cannot reassign
```

## Primitive Data Types

### String

```javascript
const firstName = "John";
const lastName = "Doe";
const fullName = `${firstName} ${lastName}`; // Template literal
```

### Number

```javascript
const age = 25;
const price = 19.99;
const negative = -42;
const infinity = Infinity;
const notANumber = NaN;
```

### Boolean

```javascript
const isActive = true;
const isLoggedIn = false;
```

### Null

```javascript
const emptyValue = null; // Intentional absence of value
```

### Undefined

```javascript
let notAssigned; // undefined
const obj = {};
console.log(obj.missingProperty); // undefined
```

## Reference Types

### Objects

```javascript
const person = {
  name: "John",
  age: 30,
};
```

### Arrays

```javascript
const numbers = [1, 2, 3, 4, 5];
```

## Key Differences

### Primitive Types

- Stored directly in variable
- Copying creates new value
- Immutable

```javascript
let x = 10;
let y = x; // Copies the value
y = 20;
console.log(x); // 10 (unchanged)
```

### Reference Types

- Variable holds reference (memory address)
- Copying shares the reference
- Mutable

```javascript
const arr1 = [1, 2, 3];
const arr2 = arr1; // Copies the reference
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4] (changed!)
```

## Type Checking

### typeof operator

```javascript
console.log(typeof "hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (quirk!)
console.log(typeof {}); // "object"
console.log(typeof []); // "object" (arrays are objects)
console.log(typeof function () {}); // "function"
```

## Scope

### Global Scope

```javascript
const globalVar = "I'm global";

function test() {
  console.log(globalVar); // Accessible
}
```

### Function Scope

```javascript
function test() {
  const localVar = "I'm local";
  console.log(localVar); // Accessible
}
// console.log(localVar); // ERROR: Not accessible
```

### Block Scope (let & const)

```javascript
if (true) {
  let blockVar = "I'm in a block";
  const alsoBlock = "Me too";
}
// console.log(blockVar); // ERROR: Not accessible
```

### var is Function Scoped (problem!)

```javascript
if (true) {
  var leakyVar = "I leak out!";
}
console.log(leakyVar); // "I leak out!" (bad!)
```

## Type Coercion

JavaScript automatically converts types:

```javascript
console.log("5" + 3); // "53" (number to string)
console.log("5" - 3); // 2 (string to number)
console.log("5" * "2"); // 10 (both to numbers)
console.log(true + 1); // 2 (true becomes 1)
console.log(false + 1); // 1 (false becomes 0)
```

## Best Practices

1. **Use const by default**
2. **Use let when you need to reassign**
3. **Never use var**
4. **Use meaningful variable names**
5. **Use camelCase for variables**: `myVariableName`
6. **Use UPPER_CASE for constants**: `MAX_SIZE`

## Exercises

1. Create variables of each primitive type
2. Use typeof to log their types
3. Create two variables pointing to the same object
4. Modify one and observe both change
5. Create two primitive variables with the same value
6. Modify one and observe the other doesn't change

## Common Mistakes

- Using var instead of let/const
- Assuming const makes objects immutable (it doesn't!)
- Forgetting typeof null returns "object"
- Not understanding reference vs primitive types

## Check Your Solution

Compare with the files in the Solutions/lesson-11 folder.
