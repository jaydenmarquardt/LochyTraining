// Lesson 9: CSS Animations
// TODO: Add event listener to button
// TODO: Add animation classes to boxes when button is clicked

console.log("Lesson 9 loaded!");

const animateBtn = document.getElementById("animateBtn");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");

animateBtn.addEventListener("click", function () {
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