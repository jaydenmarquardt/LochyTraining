// Lesson 13: Functions

console.log("=== Lesson 13: Functions ===\n");

// TODO: Create a function that adds two numbers
// TODO: Create a function that subtracts two numbers
// TODO: Create a function that multiplies two numbers
// TODO: Create a function that divides two numbers
// TODO: Create a function that formats a name

// Example function:
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice"));

// Your code here:
function calculate(operation) {
  const firstNumber = Number(document.getElementById('num1').value);
  const secondNumber = Number(document.getElementById('num2').value);
  const output = document.getElementById('result');

  let equals;

  if (operation === 'add') {
    equals = firstNumber + secondNumber;
  } else if (operation === 'subtract') {
    equals = firstNumber - secondNumber;
  } else if (operation === 'multiply') {
    equals = firstNumber * secondNumber;
  } else if (operation === 'divide') {
    equals = firstNumber / secondNumber;
  } else {
    output.textContent = `input the NUMBERS`;
  }

  output.textContent = `The answer is: ${equals}`;
  console.log(equals);
}

function formatName() {
  const firstNameInput = document.getElementById('firstName');
  const lastNameInput = document.getElementById('lastName');
  const output = document.getElementById('nameResult');

  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();

  if (!firstName || !lastName) {
    output.textContent = 'Please enter both first and last names.';
    return;
  }

  const formattedName = `${firstName} ${lastName}`;
  output.textContent = formattedName;

  console.log(formattedName);
}