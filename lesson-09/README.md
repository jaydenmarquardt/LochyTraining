# Lesson 9: CSS Animations

## Learning Objectives

- Create CSS keyframe animations
- Apply animations to elements
- Trigger animations with JavaScript
- Use animation delays and timing

## What You'll Build

Three animated boxes that demonstrate:

- Fade in animation
- Slide in animation
- Bounce animation
- JavaScript-triggered animations

## What are CSS Animations?

CSS animations allow you to:

- Gradually change CSS properties over time
- Create smooth transitions and effects
- Bring your website to life
- Add visual interest and feedback

## Instructions

### Step 1: Create Fade In Animation

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

### Step 2: Create Slide In Animation

```css
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

### Step 3: Create Bounce Animation

```css
@keyframes bounce {
  0%,
  100% {
    opacity: 1;
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
}
```

### Step 4: Create Animation Classes

```css
.animate-fade {
  animation: fadeIn 1s ease-in forwards;
}

.animate-slide {
  animation: slideIn 1s ease-out forwards;
  animation-delay: 0.3s;
}

.animate-bounce {
  animation: bounce 1s ease-in-out forwards;
  animation-delay: 0.6s;
}
```

### Step 5: Trigger with JavaScript

```javascript
const animateBtn = document.getElementById("animateBtn");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");

animateBtn.addEventListener("click", function () {
  box1.classList.add("animate-fade");
  box2.classList.add("animate-slide");
  box3.classList.add("animate-bounce");
});
```

### Step 6: Allow Re-animation

```javascript
animateBtn.addEventListener("click", function () {
  // Remove animations
  box1.classList.remove("animate-fade");
  box2.classList.remove("animate-slide");
  box3.classList.remove("animate-bounce");

  // Force reflow (restart animation)
  void box1.offsetWidth;

  // Add animations back
  box1.classList.add("animate-fade");
  box2.classList.add("animate-slide");
  box3.classList.add("animate-bounce");
});
```

## Key Animation Concepts

### @keyframes Syntax

```css
@keyframes animationName {
  from {
    /* Starting styles */
  }
  to {
    /* Ending styles */
  }
}
```

Or with percentages:

```css
@keyframes animationName {
  0% {
    /* Start */
  }
  50% {
    /* Middle */
  }
  100% {
    /* End */
  }
}
```

### Animation Properties

```css
.element {
  animation-name: fadeIn;
  animation-duration: 1s;
  animation-timing-function: ease-in;
  animation-delay: 0.5s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
}
```

Shorthand:

```css
animation: name duration timing-function delay iteration-count direction
  fill-mode;
animation: fadeIn 1s ease-in 0s 1 normal forwards;
```

### Timing Functions

- `linear` - Constant speed
- `ease` - Slow start, fast middle, slow end (default)
- `ease-in` - Slow start
- `ease-out` - Slow end
- `ease-in-out` - Slow start and end

### Fill Modes

- `none` - No styles before/after animation
- `forwards` - Keep final state
- `backwards` - Apply first keyframe immediately
- `both` - Both forwards and backwards

### Transform Properties

- `translateX(100px)` - Move horizontally
- `translateY(100px)` - Move vertically
- `scale(1.5)` - Make bigger/smaller
- `rotate(45deg)` - Rotate
- `skew(20deg)` - Slant

## Animation Ideas to Try

1. **Rotate animation:**

   ```css
   @keyframes rotate {
     from {
       transform: rotate(0deg);
     }
     to {
       transform: rotate(360deg);
     }
   }
   ```

2. **Scale animation:**

   ```css
   @keyframes grow {
     from {
       transform: scale(1);
     }
     to {
       transform: scale(1.5);
     }
   }
   ```

3. **Color change:**

   ```css
   @keyframes colorChange {
     0% {
       background-color: red;
     }
     50% {
       background-color: blue;
     }
     100% {
       background-color: green;
     }
   }
   ```

4. **Infinite animation:**
   ```css
   .element {
     animation: pulse 2s ease-in-out infinite;
   }
   ```

## Tips

- Use `forwards` to keep the final state
- Use `animation-delay` to stagger animations
- Combine multiple transforms: `transform: translateX(100px) rotate(45deg);`
- Test animations on different browsers

## Check Your Solution

See the `solution/` folder for complete animations with JavaScript control.
