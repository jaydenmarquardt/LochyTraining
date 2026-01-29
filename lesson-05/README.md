# Lesson 5: Introduction to JavaScript

## Learning Objectives

- Understand what JavaScript is and what it does
- Learn to create variables
- Use the browser console
- Log output to the console

## What You'll Build

Your first JavaScript program that:

- Creates variables
- Stores different types of data
- Logs information to the console

## What is JavaScript?

JavaScript makes websites interactive! It can:

- Respond to user actions (clicks, typing)
- Change content dynamically
- Perform calculations
- Store and manipulate data

## Instructions

### Step 1: Open the Browser Console

1. Open `index.html` in your browser
2. Press F12 (or Cmd+Option+I on Mac)
3. Click the "Console" tab
4. You'll see "Lesson 5 loaded!" already

### Step 2: Create Variables in script.js

Variables store data. Use `const` for values that don't change:

```javascript
const name = "Alex";
const age = 25;
const favoriteColor = "blue";
```

### Step 3: Log Variables to Console

```javascript
console.log("Name:", name);
console.log("Age:", age);
console.log("Favorite Color:", favoriteColor);
```

### Step 4: String Concatenation

Combine strings with the `+` operator:

```javascript
console.log("Hello, my name is " + name + " and I am " + age + " years old.");
```

### Step 5: Template Literals (Modern Way)

Use backticks and `${}` for cleaner code:

```javascript
console.log(`My favorite color is ${favoriteColor}.`);
```

## Key JavaScript Concepts

### Variables

- `const` - Cannot be reassigned (use for most things)
- `let` - Can be reassigned
- `var` - Old way (avoid using)

### Data Types

- **String**: Text in quotes `"hello"` or `'hello'`
- **Number**: `42` or `3.14`
- **Boolean**: `true` or `false`
- **Array**: `[1, 2, 3]`
- **Object**: `{name: "Alex", age: 25}`

### Console Methods

- `console.log()` - Print to console
- `console.error()` - Print error message
- `console.warn()` - Print warning

## Experiments to Try

1. Create more variables:

   ```javascript
   const hobby = "gaming";
   const isStudent = true;
   const numberOfPets = 2;
   ```

2. Try different console methods:

   ```javascript
   console.error("This is an error!");
   console.warn("This is a warning!");
   ```

3. Create an array:
   ```javascript
   const hobbies = ["reading", "gaming", "hiking"];
   console.log(hobbies);
   ```

## Tips

- End JavaScript statements with semicolons `;`
- Strings can use single `'` or double `"` quotes
- Always check the console for errors (red text)
- Use meaningful variable names

## Check Your Solution

Compare your code with the `solution/` folder.
