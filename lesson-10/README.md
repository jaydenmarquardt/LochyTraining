# Lesson 10: Interactive Gallery

## Learning Objectives

- Combine HTML, CSS, and JavaScript skills
- Create dynamic content with JavaScript
- Build a modal popup
- Handle multiple event listeners
- Create a complete interactive feature

## What You'll Build

A complete interactive image gallery with:

- Grid layout of image cards
- Hover effects
- Click to open full-size in modal
- Modal with close button
- Keyboard support (Escape key)

## Project Overview

This is a capstone lesson that combines everything you've learned:

- **HTML**: Structure for gallery and modal
- **CSS**: Grid layout, styling, animations
- **JavaScript**: Dynamic content, events, DOM manipulation

## Instructions

### Part 1: Create Image Data (JavaScript)

```javascript
const images = [
  {
    url: "https://via.placeholder.com/400x300/3498db/ffffff?text=Image+1",
    title: "Blue Landscape",
  },
  {
    url: "https://via.placeholder.com/400x300/e74c3c/ffffff?text=Image+2",
    title: "Red Sunset",
  },
  // Add more images...
];
```

### Part 2: Select Elements

```javascript
const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const caption = document.getElementById("caption");
const closeBtn = document.querySelector(".close");
```

### Part 3: Generate Gallery Cards

```javascript
images.forEach((image, index) => {
  const item = document.createElement("div");
  item.className = "gallery-item";
  item.innerHTML = `
        <img src="${image.url}" alt="${image.title}">
        <div class="gallery-item-title">${image.title}</div>
    `;

  // Add click event
  item.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = image.url;
    caption.textContent = image.title;
  });

  gallery.appendChild(item);
});
```

### Part 4: Style the Gallery (CSS)

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.gallery-item {
  background-color: white;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s;
}

.gallery-item:hover {
  transform: translateY(-5px);
}
```

### Part 5: Style the Modal (CSS)

```css
.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
}

.modal-content {
  margin: auto;
  display: block;
  max-width: 80%;
  animation: zoom 0.3s;
}

@keyframes zoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
```

### Part 6: Close Modal (JavaScript)

```javascript
// Close button
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Click outside image
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && modal.style.display === "block") {
    modal.style.display = "none";
  }
});
```

## Key Concepts Used

### Creating Elements

```javascript
const div = document.createElement("div");
div.className = "my-class";
div.innerHTML = "<p>Content</p>";
parent.appendChild(div);
```

### CSS Grid

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

### Modal Pattern

1. Hidden by default (`display: none`)
2. Fixed position, full screen
3. Semi-transparent background
4. Content centered
5. Close on: button, outside click, Escape key

### Event Object

```javascript
element.addEventListener("click", function (event) {
  event.target; // Element that was clicked
  event.preventDefault(); // Prevent default action
  event.key; // Key that was pressed (keydown event)
});
```

## Enhancements to Try

1. **Add navigation arrows:**
   - Previous/Next buttons in modal
   - Navigate through images

2. **Add image categories:**
   - Filter buttons
   - Show/hide based on category

3. **Add loading states:**
   - Show spinner while images load
   - Handle image load errors

4. **Add animations:**
   - Stagger gallery item appearance
   - Smooth modal transitions

5. **Make it responsive:**
   - Adjust grid columns for mobile
   - Touch-friendly close button

6. **Add real images:**
   - Replace placeholder URLs
   - Use your own photos

## Project Structure

```
lesson-10/
├── index.html          # Gallery structure
├── style.css           # Grid, modal, animations
├── script.js           # Dynamic gallery, events
└── solution/           # Complete working version
```

## Testing Checklist

- [ ] Gallery displays in grid
- [ ] Hover effects work
- [ ] Click opens modal
- [ ] Modal displays correct image
- [ ] Close button works
- [ ] Click outside modal closes it
- [ ] Escape key closes modal
- [ ] All images load correctly

## Check Your Solution

The `solution/` folder contains a complete, working gallery. Compare your implementation and see if you can add your own improvements!

## Congratulations! 🎉

You've completed all 10 lessons! You now have a solid foundation in HTML, CSS, and JavaScript. Keep building projects and experimenting with new ideas!
