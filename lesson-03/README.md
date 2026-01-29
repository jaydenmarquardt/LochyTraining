# Lesson 3: CSS Box Model

## Learning Objectives

- Understand the CSS Box Model (content, padding, border, margin)
- Learn to control spacing around elements
- Create visual separation between sections
- Apply different border styles

## What You'll Build

Three styled boxes, each demonstrating different aspects of the box model:

- Box with padding
- Box with margin
- Box with custom borders

## The Box Model Explained

Every HTML element is a box with four layers:

1. **Content** - The actual content (text, images)
2. **Padding** - Space between content and border
3. **Border** - Line around the padding
4. **Margin** - Space outside the border

```
+------------------------+
|       Margin           |
|  +------------------+  |
|  |     Border       |  |
|  |  +------------+  |  |
|  |  |  Padding   |  |  |
|  |  |  +------+  |  |  |
|  |  |  |Content|  |  |  |
|  |  |  +------+  |  |  |
|  |  +------------+  |  |
|  +------------------+  |
+------------------------+
```

## Instructions

### Step 1: Style Box 1 - Padding

Add padding to create space inside the box:

```css
.box1 {
  padding: 30px;
  border: 2px solid #3498db;
}
```

### Step 2: Style Box 2 - Margin

Add different margin values:

```css
.box2 {
  padding: 20px;
  margin: 40px 20px; /* vertical horizontal */
  border: 2px solid #2ecc71;
}
```

### Step 3: Style Box 3 - Border Styles

Experiment with border styles:

```css
.box3 {
  padding: 25px;
  margin: 20px;
  border: 5px dashed #e74c3c;
  border-radius: 10px;
}
```

## Key Properties

### Padding (space inside)

- `padding: 20px;` - All sides
- `padding: 10px 20px;` - Vertical Horizontal
- `padding: 10px 20px 30px 40px;` - Top Right Bottom Left

### Margin (space outside)

- Same syntax as padding
- Can use `margin: auto;` to center

### Border

- `border: width style color;`
- Styles: solid, dashed, dotted, double
- `border-radius` - Rounded corners

## Experiment!

Try changing:

- Padding values (make them bigger/smaller)
- Margin values (see how boxes move)
- Border styles (solid, dashed, dotted)
- Border colors
- Border radius for rounded corners

## Check Your Solution

Compare with the `solution/` folder to see one approach.
