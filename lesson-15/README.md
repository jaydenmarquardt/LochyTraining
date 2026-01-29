# Lesson 15: Arrays & Loops

## 🎯 Learning Objectives

- Understand what arrays are and how to create them
- Add, remove, and access array elements
- Master different types of loops (for, while, for...of)
- Iterate through arrays effectively
- Use array length property
- Understand array indices (0-based)

## 📚 What are Arrays?

Arrays are ordered collections of values. They can store multiple values in a single variable and are one of the most commonly used data structures in JavaScript.

### Creating Arrays

```javascript
// Array literal (most common)
const numbers = [1, 2, 3, 4, 5];
const names = ["Alice", "Bob", "Charlie"];
const mixed = [1, "hello", true, null];

// Array constructor
const colors = new Array("red", "green", "blue");
```

### Accessing Array Elements

```javascript
const fruits = ["apple", "banana", "orange"];

console.log(fruits[0]); // 'apple' (first element)
console.log(fruits[1]); // 'banana' (second element)
console.log(fruits[2]); // 'orange' (third element)

// Array length
console.log(fruits.length); // 3

// Last element
console.log(fruits[fruits.length - 1]); // 'orange'
```

### Modifying Arrays

```javascript
const todos = ["task1", "task2"];

// Add to end
todos.push("task3"); // ['task1', 'task2', 'task3']

// Add to beginning
todos.unshift("task0"); // ['task0', 'task1', 'task2', 'task3']

// Remove from end
todos.pop(); // ['task0', 'task1', 'task2']

// Remove from beginning
todos.shift(); // ['task1', 'task2']

// Remove/add at specific index
todos.splice(1, 1); // Remove 1 element at index 1
todos.splice(1, 0, "new"); // Add 'new' at index 1
```

## 🔄 Loops

Loops allow you to execute code repeatedly, perfect for working with arrays.

### For Loop

```javascript
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

### For...of Loop (Modern)

```javascript
const fruits = ["apple", "banana", "orange"];

for (const fruit of fruits) {
  console.log(fruit);
}
```

### While Loop

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

### Do...While Loop

```javascript
let count = 0;
do {
  console.log(count);
  count++;
} while (count < 3);
```

## ✏️ Your Tasks

### Project 1: Todo List Manager

1. Create an array to store todo items
2. Add tasks to the array using `push()`
3. Display all tasks using a loop
4. Remove tasks using `splice()`
5. Show total task count

### Project 2: Number Processor

1. Create an array to store numbers
2. Add numbers to the array
3. Display all numbers using a loop
4. Calculate sum, average, min, and max using loops
5. Display statistics

## 💡 Tips

- Arrays are 0-indexed (first element is at index 0)
- Use `push()` to add to the end, `unshift()` to add to the beginning
- Use `pop()` to remove from end, `shift()` to remove from beginning
- `for...of` is cleaner when you don't need the index
- Traditional `for` loop gives you more control with the index

## 🎓 Key Concepts

- **Array**: Ordered collection of values
- **Index**: Position of an element (0-based)
- **Length**: Number of elements in array
- **Iteration**: Looping through each element
- **Push/Pop**: Add/remove from end
- **Unshift/Shift**: Add/remove from beginning

## 🔍 Loop Comparison

| Loop Type    | Use When                              |
| ------------ | ------------------------------------- |
| `for`        | Need index, complex iteration logic   |
| `for...of`   | Simple iteration, don't need index    |
| `while`      | Don't know iteration count beforehand |
| `do...while` | Need to run at least once             |

## 🔍 Check Your Understanding

After completing this lesson, you should be able to:

- Create and manipulate arrays
- Access array elements by index
- Use different loop types appropriately
- Iterate through arrays effectively
- Calculate statistics from array data

Check the solution folder to see the complete working code!
