# Lesson 2: CSS Styling Basics

## Learning Objectives

- Learn how to style HTML elements with CSS
- Understand selectors: elements, classes, and IDs
- Apply colors, fonts, and spacing
- Make your webpage visually appealing

## What You'll Build

Style the existing HTML page with:

- Custom colors and fonts
- Different styles for different sections
- Spacing and layout improvements

## Instructions

### Step 1: Open style.css

The HTML is already complete. Now you'll add CSS styles to make it look better!

### Step 2: Style the Body

Add a background color and improve readability:

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  padding: 20px;
  line-height: 1.6;
}
```

### Step 3: Style Headings

Make the `<h1>` stand out:

```css
h1 {
  color: #2c3e50;
  font-size: 2.5em;
}
```

### Step 4: Style the .intro Class

Target elements with the class "intro":

```css
.intro {
  font-style: italic;
  font-size: 1.2em;
  color: #555;
}
```

### Step 5: Style the .highlight Section

Make the highlighted section pop:

```css
.highlight {
  background-color: #fffacd;
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
}
```

## Key CSS Concepts

### Selectors

- **Element selector**: `h1 { }` - Targets all `<h1>` elements
- **Class selector**: `.intro { }` - Targets elements with class="intro"
- **ID selector**: `#myId { }` - Targets element with id="myId"

### Common Properties

- `color` - Text color
- `background-color` - Background color
- `font-size` - Size of text (px, em, rem)
- `padding` - Space inside element
- `margin` - Space outside element
- `border-radius` - Rounded corners

## Tips

- Use hex colors (#2c3e50) or color names (blue)
- 1em = current font size
- Experiment with different values!

## Check Your Solution

Compare your styling with the `solution/` folder to see the final result.
