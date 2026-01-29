# Lesson 8: Forms and Validation

## Learning Objectives

- Work with HTML forms
- Prevent default form submission
- Validate user input with JavaScript
- Display success and error messages
- Add/remove CSS classes dynamically

## What You'll Build

A form validation system that:

- Checks username length (minimum 3 characters)
- Validates email format (must contain @)
- Displays helpful error messages
- Shows success message when valid
- Adds visual feedback with CSS classes

## Form Validation is Important!

Before sending data to a server, validate it to:

- Ensure data is in the correct format
- Provide immediate feedback to users
- Prevent invalid data submission
- Improve user experience

## Instructions

### Step 1: Select Form Elements

```javascript
const form = document.getElementById("myForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const result = document.getElementById("result");
```

### Step 2: Prevent Default Submission

```javascript
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Stop form from submitting
});
```

### Step 3: Get Input Values

```javascript
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
});
```

### Step 4: Validate Username

```javascript
let isValid = true;
let errorMessage = "";

if (username.length < 3) {
  isValid = false;
  errorMessage += "Username must be at least 3 characters. ";
  usernameInput.classList.add("error");
} else {
  usernameInput.classList.add("success");
}
```

### Step 5: Validate Email

```javascript
if (!email.includes("@") || email.length < 5) {
  isValid = false;
  errorMessage += "Please enter a valid email address. ";
  emailInput.classList.add("error");
} else {
  emailInput.classList.add("success");
}
```

### Step 6: Display Result

```javascript
if (isValid) {
  result.className = "success-message";
  result.textContent = `Success! Welcome, ${username}!`;
  form.reset(); // Clear the form
} else {
  result.className = "error-message";
  result.textContent = errorMessage;
}
```

## Key Concepts

### Form Events

- `submit` - Form is submitted (triggered by button or Enter key)
- `input` - Input value changes
- `change` - Input loses focus after value changed
- `focus` - Input receives focus
- `blur` - Input loses focus

### Preventing Default Behavior

```javascript
event.preventDefault();
```

Stops the default action (form submission, link navigation, etc.)

### Getting Input Values

- `input.value` - Get current value
- `.trim()` - Remove whitespace from start/end

### Working with Classes

- `element.classList.add('class')` - Add class
- `element.classList.remove('class')` - Remove class
- `element.classList.toggle('class')` - Toggle class
- `element.className = 'class'` - Replace all classes

### String Methods

- `string.length` - Get string length
- `string.includes('@')` - Check if contains character
- `string.trim()` - Remove whitespace

## Validation Examples

### Check if empty:

```javascript
if (username === "") {
  // Empty
}
```

### Check minimum length:

```javascript
if (username.length < 3) {
  // Too short
}
```

### Check email format:

```javascript
if (!email.includes("@")) {
  // Invalid email
}
```

### Check number:

```javascript
if (isNaN(age)) {
  // Not a number
}
```

## Experiments to Try

1. Add password validation:
   - Minimum 8 characters
   - Must contain a number

2. Add a confirm password field:
   - Check if passwords match

3. Add real-time validation:
   ```javascript
   usernameInput.addEventListener("input", () => {
     if (usernameInput.value.length >= 3) {
       usernameInput.classList.add("success");
     }
   });
   ```

## Check Your Solution

See the `solution/` folder for complete validation code with CSS feedback.
