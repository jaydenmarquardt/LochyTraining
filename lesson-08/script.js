// Lesson 8: Forms and Validation
// TODO: Add event listener for form submission
// TODO: Validate that username is at least 3 characters
// TODO: Validate that email contains @ symbol
// TODO: Display success or error message

console.log("Lesson 8 loaded!");

const form = document.getElementById("myForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();

  let isValid = true;
  let errorMessage = "";

  if (username.length < 3) {
    isValid = false;
    errorMessage += "Username must be at least 3 characters. ";
    usernameInput.classList.add("error");
  } else {
   usernameInput.classList.add("success");
  }

  if (!email.includes("@") || email.length < 5) {
    isValid = false;
    errorMessage += "Please enter a valid email address. ";
    emailInput.classList.add("error");
  } else {
    emailInput.classList.add("success");
  }

  if (isValid) {
    result.className = "success-message";
    result.textContent = `Success! Welcome, ${username}!`;
    form.reset(); // Clear the form
  } else {
    result.className = "error-message";
    result.textContent = errorMessage;
  }
});

