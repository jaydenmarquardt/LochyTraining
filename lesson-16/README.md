# Lesson 16: Array Methods

## 🎯 Learning Objectives

- Master essential array methods for data transformation
- Understand when to use map, filter, forEach, reduce
- Learn to find and test elements with find, some, every
- Write cleaner, more functional code
- Chain array methods together

## 📚 Essential Array Methods

### .forEach() - Execute for Each Element

Runs a function for each element (doesn't return anything).

```javascript
const numbers = [1, 2, 3];
numbers.forEach((num) => {
  console.log(num * 2);
});
```

### .map() - Transform Elements

Creates a **new array** by transforming each element.

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
// doubled: [2, 4, 6, 8]

const prices = [10, 20, 30];
const withTax = prices.map((price) => price * 1.1);
// withTax: [11, 22, 33]
```

### .filter() - Keep Matching Elements

Creates a **new array** with elements that pass a test.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter((num) => num % 2 === 0);
// evens: [2, 4, 6]

const products = [
  { name: "Book", price: 10 },
  { name: "Laptop", price: 1000 },
];
const expensive = products.filter((p) => p.price > 50);
// expensive: [{ name: "Laptop", price: 1000 }]
```

### .reduce() - Reduce to Single Value

Reduces array to a single value (sum, product, object, etc).

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, num) => total + num, 0);
// sum: 10

const cart = [
  { name: "Book", price: 10 },
  { name: "Pen", price: 2 },
];
const total = cart.reduce((sum, item) => sum + item.price, 0);
// total: 12
```

### .find() - Find First Match

Returns the **first element** that passes a test.

```javascript
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
const user = users.find((u) => u.id === 2);
// user: { id: 2, name: "Bob" }
```

### .some() - Test if Any Match

Returns `true` if **any element** passes a test.

```javascript
const numbers = [1, 2, 3, 4];
const hasEven = numbers.some((num) => num % 2 === 0);
// hasEven: true
```

### .every() - Test if All Match

Returns `true` if **all elements** pass a test.

```javascript
const numbers = [2, 4, 6, 8];
const allEven = numbers.every((num) => num % 2 === 0);
// allEven: true
```

## 🔗 Method Chaining

Combine methods for powerful transformations:

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers
  .filter((num) => num > 2) // [3, 4, 5, 6]
  .map((num) => num * 2) // [6, 8, 10, 12]
  .reduce((sum, num) => sum + num, 0); // 36
```

## ✏️ Your Tasks

### Project 1: Data Transformer

1. Use `.map()` to double all numbers
2. Use `.filter()` to get only even numbers
3. Use `.reduce()` to calculate the sum
4. Use `.find()` to find first number greater than 5

### Project 2: Shopping Cart Calculator

1. Use `.forEach()` to display all products
2. Use `.filter()` to show products over $20
3. Use `.reduce()` to calculate total cart value
4. Use `.map()` to apply a 10% discount to all prices
5. Use `.every()` or `.some()` to check stock status

## 💡 Tips

- These methods **don't modify** the original array
- Always return a value in `.map()` and `.filter()`
- `.reduce()` needs an initial value (second parameter)
- Use arrow functions for concise code
- Chain methods together for complex transformations

## 🎓 Method Comparison

| Method       | Returns              | Modifies Original | Use When                              |
| ------------ | -------------------- | ----------------- | ------------------------------------- |
| `.forEach()` | undefined            | No                | Need to execute code for each element |
| `.map()`     | New array            | No                | Transform each element                |
| `.filter()`  | New array            | No                | Keep elements matching condition      |
| `.reduce()`  | Single value         | No                | Calculate aggregate value             |
| `.find()`    | Element or undefined | No                | Find one element                      |
| `.some()`    | Boolean              | No                | Check if any match                    |
| `.every()`   | Boolean              | No                | Check if all match                    |

## 🔍 Check Your Understanding

After completing this lesson, you should be able to:

- Choose the right array method for different tasks
- Transform arrays with `.map()`
- Filter arrays with `.filter()`
- Calculate totals with `.reduce()`
- Find elements with `.find()`
- Test arrays with `.some()` and `.every()`
- Chain methods together

Check the solution folder to see the complete working code!
