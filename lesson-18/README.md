# Lesson 18: Fetch API & Async/Await

## 🎯 Learning Objectives

- Understand asynchronous programming in JavaScript
- Use the Fetch API to make HTTP requests
- Master async/await syntax
- Handle promises and errors properly
- Work with REST APIs
- Make GET, POST, and other HTTP requests

## 📚 What is Asynchronous Programming?

JavaScript is **single-threaded**, but can handle async operations (like API calls) without blocking other code.

### The Problem (Synchronous)

```javascript
// This would freeze the browser!
const data = downloadHugeFile(); // Takes 5 seconds
console.log(data); // Everything waits
console.log("Done"); // Can't run until download finishes
```

### The Solution (Asynchronous)

```javascript
// This doesn't block!
downloadHugeFile().then((data) => {
  console.log(data);
});
console.log("Done"); // Runs immediately!
```

## 🔄 Promises

A Promise represents a value that may not be available yet.

```javascript
const promise = fetch("https://api.example.com/data");

promise
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

## ⏳ Async/Await

A cleaner way to work with Promises.

```javascript
async function getData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

### Key Rules

- `async` function always returns a Promise
- `await` can only be used inside `async` functions
- `await` pauses execution until Promise resolves
- Always use try-catch for error handling

## 🌐 Fetch API

The modern way to make HTTP requests.

### Basic GET Request

```javascript
async function fetchUser() {
  const response = await fetch("https://api.example.com/user/1");
  const user = await response.json();
  console.log(user);
}
```

### Checking Response Status

```javascript
async function fetchData() {
  const response = await fetch("https://api.example.com/data");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}
```

### POST Request (Creating Data)

```javascript
async function createPost() {
  const response = await fetch("https://api.example.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "My Post",
      content: "Hello World",
    }),
  });

  const newPost = await response.json();
  return newPost;
}
```

### Other HTTP Methods

```javascript
// PUT - Update entire resource
await fetch(url, {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(updatedData),
});

// PATCH - Update part of resource
await fetch(url, {
  method: "PATCH",
  body: JSON.stringify(partialUpdate),
});

// DELETE - Remove resource
await fetch(url, {
  method: "DELETE",
});
```

## 🛡️ Error Handling

Always handle errors with async/await:

```javascript
async function fetchData() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch failed:", error);
    // Show error to user
    throw error; // Re-throw if needed
  }
}
```

## ✏️ Your Tasks

### Project 1: Random User Generator

1. Use fetch() to get data from `https://randomuser.me/api/`
2. Parse the JSON response
3. Extract user information (name, email, photo)
4. Display the user data on the page
5. Add loading state and error handling

### Project 2: Post Browser

1. Fetch all posts from JSONPlaceholder API
2. Display first 10 posts
3. Fetch a single post by ID
4. Handle "not found" errors
5. Show loading indicators

### Project 3: Create New Post

1. Create a POST request to JSONPlaceholder
2. Send title and body in request
3. Parse the response
4. Display success message with created post ID
5. Clear form after success

## 💡 Tips

- Always use try-catch with async/await
- Check `response.ok` before parsing JSON
- Use `response.json()` for JSON data
- Use `response.text()` for plain text
- Loading indicators improve user experience
- Most APIs require authentication (API keys)

## 🎓 Key Concepts

- **Async/Await**: Modern syntax for Promises
- **Promise**: Represents future value
- **Fetch**: Browser API for HTTP requests
- **HTTP Methods**: GET, POST, PUT, DELETE, PATCH
- **Response**: Object returned by fetch
- **Headers**: Metadata sent with requests
- **Body**: Data sent with POST/PUT requests

## 🔗 Common HTTP Status Codes

| Code | Meaning                            |
| ---- | ---------------------------------- |
| 200  | OK - Success                       |
| 201  | Created - Resource created         |
| 400  | Bad Request - Invalid data         |
| 401  | Unauthorized - Need auth           |
| 404  | Not Found - Resource doesn't exist |
| 500  | Server Error - Server problem      |

## 📋 Request Structure

```javascript
fetch(url, {
  method: "POST", // HTTP method
  headers: {
    // Request headers
    "Content-Type": "application/json",
    Authorization: "Bearer token",
  },
  body: JSON.stringify(data), // Request body (string)
});
```

## 🌟 Free APIs for Practice

- JSONPlaceholder: `https://jsonplaceholder.typicode.com`
- Random User: `https://randomuser.me/api/`
- Dog API: `https://dog.ceo/api/breeds/image/random`
- Chuck Norris Jokes: `https://api.chucknorris.io/jokes/random`

## 🔍 Check Your Understanding

After completing this lesson, you should be able to:

- Use async/await syntax correctly
- Make GET and POST requests with fetch
- Parse JSON responses
- Handle errors properly
- Display loading states
- Work with real APIs

Check the solution folder to see the complete working code!
