# Lesson 4: Flexbox Layout

## Learning Objectives

- Understand CSS Flexbox layout system
- Learn to arrange items horizontally and vertically
- Center content easily
- Create responsive layouts

## What You'll Build

A flexbox container with three items that are:

- Arranged horizontally
- Centered on the page
- Evenly spaced

## What is Flexbox?

Flexbox is a CSS layout system that makes it easy to:

- Arrange items in rows or columns
- Align items vertically and horizontally
- Distribute space between items
- Create responsive layouts

## Instructions

### Step 1: Make Container a Flex Container

```css
.container {
  display: flex;
}
```

### Step 2: Arrange Items Horizontally (default)

Flex items are arranged horizontally by default, but you can specify:

```css
.container {
  display: flex;
  flex-direction: row; /* or column */
}
```

### Step 3: Center Items Horizontally

```css
.container {
  display: flex;
  justify-content: center;
}
```

### Step 4: Center Items Vertically

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### Step 5: Add Space Between Items

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
```

## Key Flexbox Properties

### Container Properties

- `display: flex` - Makes element a flex container
- `flex-direction` - row (horizontal) or column (vertical)
- `justify-content` - Alignment along main axis
  - `flex-start` - Start of container
  - `center` - Center
  - `flex-end` - End of container
  - `space-between` - Space between items
  - `space-around` - Space around items
- `align-items` - Alignment along cross axis
  - `flex-start`, `center`, `flex-end`, `stretch`
- `gap` - Space between flex items

### Item Properties

- `flex-grow` - How much item can grow
- `flex-shrink` - How much item can shrink
- `flex-basis` - Default size of item

## Experiments to Try

1. Change `justify-content` to different values:
   - `flex-start`
   - `space-between`
   - `space-around`
   - `space-evenly`

2. Change `flex-direction` to `column`

3. Try different `gap` values

4. Add more items to see how flexbox adapts

## Check Your Solution

See the `solution/` folder for the complete implementation.
