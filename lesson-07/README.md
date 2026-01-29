# Lesson 7: Event Handlers

## Learning Objectives

- Understand what events are in JavaScript
- Learn to add event listeners
- Respond to user interactions (clicks)
- Update the page based on user actions

## What You'll Build

An interactive counter that:

- Responds to button clicks
- Displays a message
- Counts how many times the button was clicked
- Changes appearance after multiple clicks

## What are Events?

Events are actions that happen in the browser:

- **Click** - User clicks something
- **Mouseover** - Mouse moves over element
- **Keypress** - User types a key
- **Submit** - Form is submitted
- **Load** - Page finishes loading

## Instructions

### Step 1: Set Up Variables

```javascript
let clickCount = 0;

const button = document.getElementById("myButton");
const message = document.getElementById("message");
const countDisplay = document.getElementById("count");
```

### Step 2: Add Event Listener

```javascript
button.addEventListener("click", function () {
  // Code here runs when button is clicked
});
```

### Step 3: Increment Counter

```javascript
button.addEventListener("click", function () {
  clickCount++;
});
```

### Step 4: Update Display

```javascript
button.addEventListener("click", function () {
  clickCount++;
  message.textContent = `Button clicked! Total clicks: ${clickCount}`;
  countDisplay.textContent = clickCount;
});
```

### Step 5: Add Special Behavior (Bonus)

```javascript
button.addEventListener("click", function () {
  clickCount++;
  message.textContent = `Button clicked! Total clicks: ${clickCount}`;
  countDisplay.textContent = clickCount;

  // Change button after 5 clicks
  if (clickCount >= 5) {
    button.style.backgroundColor = "#2ecc71";
    button.textContent = "You did it!";
  }
});
```

## Key Concepts

### addEventListener Syntax

```javascript
element.addEventListener("eventType", function () {
  // Code to run when event happens
});
```

### Common Events

- `'click'` - Element is clicked
- `'dblclick'` - Element is double-clicked
- `'mouseover'` - Mouse enters element
- `'mouseout'` - Mouse leaves element
- `'keydown'` - Key is pressed
- `'keyup'` - Key is released
- `'submit'` - Form is submitted

### Function Types

Traditional function:

```javascript
button.addEventListener("click", function () {
  console.log("Clicked!");
});
```

Arrow function (modern):

```javascript
button.addEventListener("click", () => {
  console.log("Clicked!");
});
```

Named function:

```javascript
function handleClick() {
  console.log("Clicked!");
}
button.addEventListener("click", handleClick);
```

## Experiments to Try

1. Add a reset button:

   ```javascript
   const resetBtn = document.getElementById("resetBtn");
   resetBtn.addEventListener("click", () => {
     clickCount = 0;
     countDisplay.textContent = clickCount;
   });
   ```

2. Change on mouseover:

   ```javascript
   button.addEventListener("mouseover", () => {
     button.style.transform = "scale(1.1)";
   });
   ```

3. Show an alert:
   ```javascript
   if (clickCount === 10) {
     alert("You reached 10 clicks!");
   }
   ```

## Debugging Tips

- Use `console.log()` inside event handlers to see if they're firing
- Check if you're selecting the right element
- Make sure IDs match between HTML and JavaScript

## Check Your Solution

Compare with the `solution/` folder to see the complete implementation.
