# Lesson 17: JSON & Data Storage

## 🎯 Learning Objectives

- Understand what JSON is and why it's important
- Convert JavaScript objects to JSON strings
- Parse JSON strings back into objects
- Use localStorage to persist data in the browser
- Handle JSON parsing errors
- Work with complex nested data structures

## 📚 What is JSON?

**JSON** (JavaScript Object Notation) is a text format for storing and transporting data. It's the standard way to send data between a browser and a server.

### JSON Syntax Rules

- Data is in name/value pairs
- Data is separated by commas
- Curly braces hold objects
- Square brackets hold arrays
- Strings must use double quotes

```json
{
  "name": "Alice",
  "age": 25,
  "active": true,
  "hobbies": ["reading", "coding"],
  "address": {
    "city": "NYC",
    "zip": "10001"
  }
}
```

## 🔄 Converting Between JSON and Objects

### JSON.stringify() - Object to JSON

Converts a JavaScript object into a JSON string.

```javascript
const person = {
  name: "Alice",
  age: 25,
  hobbies: ["reading", "coding"],
};

const jsonString = JSON.stringify(person);
console.log(jsonString);
// '{"name":"Alice","age":25,"hobbies":["reading","coding"]}'

// Pretty print with indentation
const prettyJSON = JSON.stringify(person, null, 2);
```

### JSON.parse() - JSON to Object

Converts a JSON string into a JavaScript object.

```javascript
const jsonString = '{"name":"Bob","age":30}';
const person = JSON.parse(jsonString);

console.log(person.name); // "Bob"
console.log(person.age); // 30
```

### Error Handling

Always wrap `JSON.parse()` in a try-catch:

```javascript
try {
  const obj = JSON.parse(jsonString);
  console.log(obj);
} catch (error) {
  console.error("Invalid JSON:", error);
}
```

## 💾 localStorage

localStorage allows you to store data in the browser that persists even after closing the browser.

### Basic Operations

```javascript
// Save data (must be strings)
localStorage.setItem("username", "Alice");

// Get data
const username = localStorage.getItem("username");

// Remove data
localStorage.removeItem("username");

// Clear all data
localStorage.clear();

// Check if key exists
if (localStorage.getItem("username")) {
  console.log("Username exists");
}
```

### Storing Objects

localStorage only stores strings, so use JSON:

```javascript
// Save object
const user = { name: "Alice", age: 25 };
localStorage.setItem("user", JSON.stringify(user));

// Retrieve object
const userJSON = localStorage.getItem("user");
const user = JSON.parse(userJSON);
console.log(user.name); // "Alice"
```

### Storing Arrays

```javascript
// Save array
const todos = ["Buy milk", "Walk dog"];
localStorage.setItem("todos", JSON.stringify(todos));

// Retrieve array
const todosJSON = localStorage.getItem("todos");
const todos = JSON.parse(todosJSON);
console.log(todos[0]); // "Buy milk"
```

## ✏️ Your Tasks

### Project 1: JSON Data Converter

1. Create an object from form inputs
2. Convert the object to JSON using `JSON.stringify()`
3. Display the JSON string
4. Parse user-entered JSON using `JSON.parse()`
5. Handle parsing errors with try-catch

### Project 2: Settings Manager

1. Create a settings object from form inputs
2. Convert to JSON and save to localStorage
3. Load settings from localStorage on page load
4. Parse JSON back into object
5. Update UI with loaded settings
6. Clear settings from localStorage

## 💡 Tips

- JSON property names must use double quotes
- localStorage is limited to ~5-10MB per domain
- Always use try-catch with `JSON.parse()`
- Remember to convert objects to JSON before storing
- Check if data exists before parsing
- Use `JSON.stringify(obj, null, 2)` for readable formatting

## 🎓 Key Concepts

- **JSON**: Text format for data exchange
- **Serialization**: Converting object → JSON string
- **Deserialization**: Converting JSON string → object
- **localStorage**: Browser storage that persists data
- **Session Storage**: Similar to localStorage but clears when browser closes

## 🔍 Common Use Cases

- Saving user preferences (theme, language)
- Storing form data temporarily
- Caching API responses
- Keeping shopping cart data
- Persisting app state
- Sending data to servers (APIs)

## 📊 JSON vs JavaScript Object

| JavaScript Object       | JSON                       |
| ----------------------- | -------------------------- |
| Keys can be unquoted    | Keys must be double-quoted |
| Can have functions      | No functions allowed       |
| Can have undefined      | No undefined (use null)    |
| Single or double quotes | Double quotes only         |

## 🔍 Check Your Understanding

After completing this lesson, you should be able to:

- Convert objects to JSON strings
- Parse JSON strings into objects
- Save data to localStorage
- Retrieve and parse data from localStorage
- Handle JSON parsing errors
- Work with nested JSON structures

Check the solution folder to see the complete working code!
