// TODO: Create an array to store todos
const todos = [];

// TODO: Add a todo to the array
function addTodo() {
  const input = document.getElementById("todoInput");
  const task = input.value.trim();

  if (!task) {
    alert("Please enter a task!");
    return;
  }

  // TODO: Add the task to the todos array using push()
  todos.push(task);

  // Display todos
  displayTodos();

  // Clear input
  input.value = "";
}

// TODO: Remove a todo from the array
function removeTodo(index) {
  // TODO: Remove item at index using splice()


  displayTodos();
}

// TODO: Display all todos using a loop
function displayTodos() {
  const output = document.getElementById("todoList");
  const stats = document.getElementById("stats");

  if (todos.length === 0) {
    output.innerHTML = "<p>No tasks yet. Add one above!</p>";
    stats.innerHTML = "";
    return;
  }

  // TODO: Loop through todos and create HTML
  let html = "";

  for (const task of todos) {
    console.log(task);

    html += `
      <div class="Todo List">
        <h4>${task}</h4>
      </div>
    `;
  }

  output.innerHTML = html;

  // Display stats
  stats.innerHTML = `<p><strong>Total Tasks:</strong> ${todos.length}</p>`;
}

// Array to store numbers
const numbers = [];

// TODO: Add number to array
function addNumber() {
  const input = document.getElementById("numberInput");
  const num = parseFloat(input.value);

  if (isNaN(num)) {
    alert("Please enter a valid number!");
    return;
  }

  // TODO: Add number to array
  numbers.push(num);

  displayNumbers();
  calculateStats();

  input.value = "";
}

// TODO: Display all numbers
function displayNumbers() {
  const output = document.getElementById("numberList");

  if (numbers.length === 0) {
    output.innerHTML = "<p>No numbers yet. Add one above!</p>";
    return;
  }

  // TODO: Loop through numbers and display them
  let html = "";
  for (const num of numbers) {
    console.log(num);

    html += `
      <div class="Numbers">
        <h4>${num}</h4>
      </div>
    `;
  }

  output.innerHTML = html;
}

// TODO: Calculate statistics using loops
function calculateStats() {
  const calcs = document.getElementById("calculations");

  if (numbers.length === 0) {
    calcs.innerHTML = "";
    return;
  }

  // TODO: Calculate sum, average, min, max using loops
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) { 
    sum += numbers[i]; 
  }

  let min = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    } 
  }

  let max = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  // Use a loop to calculate these values

  const average = sum / numbers.length;

  calcs.innerHTML = `
        <p><strong>Count:</strong> ${numbers.length}</p>
        <p><strong>Sum:</strong> ${sum}</p>
        <p><strong>Average:</strong> ${average.toFixed(2)}</p>
        <p><strong>Min:</strong> ${min}</p>
        <p><strong>Max:</strong> ${max}</p>
    `;
}

// Console examples
console.log("=== Array & Loop Examples ===");

// TODO: Try these examples:
// 1. Create an array
const fruits = ["apple", "banana", "orange"];
console.log("Fruits:", fruits);

// 2. Access array elements
console.log("First fruit:", fruits[0]);

// 3. Add to array
fruits.push("grape");
console.log("After push:", fruits);

// 4. For loop
console.log("Using for loop:");
// Write a for loop here

// 5. For...of loop
console.log("Using for...of loop:");
// Write a for...of loop here

// 6. While loop
console.log("Using while loop:");
// Write a while loop here
