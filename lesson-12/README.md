# Lesson 12: Conditionals (if/else/switch)

## Learning Objectives

- Use if/else statements
- Chain conditions with else if
- Use switch statements
- Learn comparison and logical operators
- Use ternary operator
- Understand truthy and falsy values

## Conditional Statements

### if Statement

```javascript
if (condition) {
  // Code runs if condition is true
}
```

Example:

```javascript
const age = 18;
if (age >= 18) {
  console.log("You can vote!");
}
```

### if/else Statement

```javascript
if (condition) {
  // Runs if true
} else {
  // Runs if false
}
```

Example:

```javascript
const temperature = 25;
if (temperature > 30) {
  console.log("It's hot!");
} else {
  console.log("It's comfortable!");
}
```

### if/else if/else Chain

```javascript
const score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
```

## Comparison Operators

```javascript
5 == "5"; // true (loose equality - converts types)
5 === "5"; // false (strict equality - checks type too)
5 != "5"; // false
5 !== "5"; // true
5 > 3; // true
5 < 3; // false
5 >= 5; // true
5 <= 4; // false
```

**Always use === and !== (strict equality)**

## Logical Operators

### AND (&&)

```javascript
const age = 25;
const hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("Can drive!");
}
```

### OR (||)

```javascript
const isWeekend = true;
const isHoliday = false;

if (isWeekend || isHoliday) {
  console.log("No work today!");
}
```

### NOT (!)

```javascript
const isRaining = false;

if (!isRaining) {
  console.log("Let's go outside!");
}
```

## Switch Statement

Use when comparing one value against many possibilities:

```javascript
const day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Other day");
}
```

**Don't forget `break`!** Without it, execution continues to next case.

### Multiple Cases

```javascript
const day = 6;

switch (day) {
  case 6:
  case 7:
    console.log("Weekend!");
    break;
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Weekday");
    break;
}
```

## Ternary Operator

Shorthand for simple if/else:

```javascript
// Syntax: condition ? valueIfTrue : valueIfFalse

const age = 20;
const canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // "Yes"

// Same as:
let canVote;
if (age >= 18) {
  canVote = "Yes";
} else {
  canVote = "No";
}
```

## Truthy and Falsy Values

### Falsy Values (evaluate to false)

- `false`
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

### Truthy Values (everything else)

- `true`
- Any non-zero number
- Any non-empty string
- Objects and arrays (even empty ones!)

```javascript
if ("hello") {
  console.log("Runs!"); // Strings are truthy
}

if (0) {
  console.log("Doesn't run"); // 0 is falsy
}

if ([]) {
  console.log("Runs!"); // Empty arrays are truthy
}
```

## Nested Conditionals

```javascript
const age = 25;
const hasTicket = true;

if (age >= 18) {
  if (hasTicket) {
    console.log("Can enter the concert!");
  } else {
    console.log("Need a ticket");
  }
} else {
  console.log("Too young");
}

// Better with &&:
if (age >= 18 && hasTicket) {
  console.log("Can enter the concert!");
}
```

## Common Patterns

### Checking for existence

```javascript
if (user) {
  console.log(user.name);
}

// Or with optional chaining (modern):
console.log(user?.name);
```

### Default values

```javascript
const name = userName || "Guest";

// Or with nullish coalescing (modern):
const name = userName ?? "Guest";
```

### Guard clauses

```javascript
function processUser(user) {
  if (!user) {
    return; // Exit early
  }

  // Process user...
}
```

## Exercises

1. Create an age validator (child, teen, adult, senior)
2. Create a grade calculator (A-F based on score)
3. Create a day type checker (weekday/weekend) using switch
4. Use ternary operator to set a message
5. Check multiple conditions with && and ||

## Best Practices

- Use `===` instead of `==`
- Use switch for multiple equality checks
- Keep conditions simple and readable
- Avoid deeply nested conditionals
- Use guard clauses to exit early

## Check Your Solution

Compare with Solutions/lesson-12 folder.
