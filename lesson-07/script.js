// Lesson 7: Event Handlers
// TODO: Add an event listener to the button
// TODO: When clicked, display a message
// TODO: Increment the counter each time the button is clicked

console.log("Lesson 7 loaded!");

let clickCount = 0;

const button = document.getElementById("myButton");
const message = document.getElementById("message");
const countDisplay = document.getElementById("count");

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