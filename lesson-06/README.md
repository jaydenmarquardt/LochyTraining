# Lesson 6: DOM Manipulation

## Learning Objectives

- Understand the Document Object Model (DOM)
- Learn to select HTML elements with JavaScript
- Change content dynamically
- Modify styles with JavaScript

## What You'll Build

A JavaScript program that:

- Selects elements from the page
- Changes their text content
- Adds new HTML elements
- Modifies CSS styles

## What is the DOM?

The DOM (Document Object Model) is a representation of your HTML that JavaScript can interact with. Think of it as a tree of elements that you can:

- Find (select)
- Change (modify)
- Create (add new)
- Remove (delete)

## Instructions

### Step 1: Select an Element by ID

```javascript
const textElement = document.getElementById("text");
```

This finds the element with `id="text"` in your HTML.

### Step 2: Change Text Content

```javascript
textElement.textContent = "The text has been changed with JavaScript!";
```

### Step 3: Change CSS Styles

```javascript
textElement.style.color = "#e74c3c";
textElement.style.fontSize = "2em";
```

### Step 4: Select Another Element

```javascript
const contentDiv = document.getElementById("content");
```

### Step 5: Add HTML Content

```javascript
contentDiv.innerHTML = `
    <h2>Content Added by JavaScript</h2>
    <p>This paragraph was created dynamically!</p>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
`;
```

## Key DOM Methods

### Selecting Elements

- `document.getElementById('id')` - Select by ID
- `document.querySelector('.class')` - Select first match
- `document.querySelectorAll('.class')` - Select all matches
- `document.getElementsByClassName('class')` - Select by class

### Changing Content

- `element.textContent` - Get/set text only
- `element.innerHTML` - Get/set HTML content
- `element.innerText` - Get/set visible text

### Changing Styles

- `element.style.property = 'value'`
- Examples:
  - `element.style.color = 'red'`
  - `element.style.backgroundColor = 'blue'`
  - `element.style.fontSize = '20px'`

### CSS Property Names in JavaScript

- CSS: `background-color` → JS: `backgroundColor`
- CSS: `font-size` → JS: `fontSize`
- CSS: `border-radius` → JS: `borderRadius`

## Experiments to Try

1. Change more styles:

   ```javascript
   textElement.style.backgroundColor = "yellow";
   textElement.style.padding = "10px";
   textElement.style.borderRadius = "5px";
   ```

2. Add more content:

   ```javascript
   contentDiv.innerHTML += "<p>Another paragraph!</p>";
   ```

3. Select elements with querySelector:
   ```javascript
   const heading = document.querySelector("h1");
   heading.style.color = "purple";
   ```

## Common Mistakes

- Forgetting quotes around IDs: `getElementById(text)` ❌ → `getElementById('text')` ✅
- Using CSS names in JS: `.style.font-size` ❌ → `.style.fontSize` ✅
- Selecting before element exists (put script at end of body)

## Check Your Solution

See the `solution/` folder for the complete code.
