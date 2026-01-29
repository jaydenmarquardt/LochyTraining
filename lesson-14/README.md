# Lesson 14: Objects

## 🎯 Learning Objectives

- Understand what objects are and why they're useful
- Create objects with properties and methods
- Access object properties using dot and bracket notation
- Use object destructuring
- Work with the `this` keyword
- Understand the difference between objects and primitives

## 📚 What are Objects?

Objects are collections of related data and functionality. They store data as **key-value pairs** called properties, and can also contain functions called **methods**.

### Creating Objects

```javascript
// Object literal syntax (most common)
const person = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
};

// Using the Object constructor
const car = new Object();
car.brand = "Toyota";
car.model = "Camry";
```

### Accessing Properties

```javascript
// Dot notation (preferred)
console.log(person.name); // "Alice"

// Bracket notation (useful for dynamic properties)
console.log(person["age"]); // 25

// Dynamic property access
const property = "email";
console.log(person[property]); // "alice@example.com"
```

### Object Methods

Objects can contain functions called methods:

```javascript
const calculator = {
  value: 0,
  add: function (num) {
    this.value += num;
  },
  getValue: function () {
    return this.value;
  },
};

calculator.add(5);
console.log(calculator.getValue()); // 5
```

### Object Destructuring

Extract properties into variables:

```javascript
const user = { name: "Bob", age: 30, city: "NYC" };

// Extract specific properties
const { name, age } = user;
console.log(name); // "Bob"
console.log(age); // 30

// With different variable names
const { name: userName } = user;
console.log(userName); // "Bob"
```

## ✏️ Your Tasks

### Project 1: User Profile Manager

1. Create a user object with name, age, and email properties
2. Display the user information on the page
3. Log the object to the console
4. Try accessing properties with both dot and bracket notation

### Project 2: Product Catalog

1. Create a product object with name, price, and stock properties
2. Add a method `getTotalValue()` that returns price × stock
3. Store products in an array
4. Display all products with their total values

## 💡 Tips

- Use dot notation when you know the property name
- Use bracket notation for dynamic property access
- `this` refers to the object the method belongs to
- Objects are passed by reference, not by value
- Use meaningful property names

## 🎓 Key Concepts

- **Properties**: Data stored in an object
- **Methods**: Functions stored in an object
- **this keyword**: Refers to the current object
- **Dot notation**: `object.property`
- **Bracket notation**: `object["property"]`
- **Destructuring**: Extract multiple properties at once

## 🔍 Check Your Understanding

After completing this lesson, you should be able to:

- Create objects with multiple properties
- Access and modify object properties
- Add methods to objects
- Use the `this` keyword correctly
- Destructure object properties

Check the solution folder to see the complete working code!
