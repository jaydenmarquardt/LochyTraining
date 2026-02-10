// Lesson 10: Todo List App
// TODO: Create array to store todos
// TODO: Add event listener for adding tasks
// TODO: Create function to render todos
// TODO: Add toggle complete functionality
// TODO: Add delete functionality
// TODO: Add filter functionality

console.log("Lesson 10 loaded!");

const todos = [];

const listHTML = todos.map(todos => `<li>${todos}</li>`).join('');
document.getElementById("todoList").innerHTML = listHTML;

const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const allBtn = document.getElementById("allBtn");
const todoList = document.getElementById("todoList");

function renderTodos() {
  todoList.innerHTML = todos
  map(todo => `<li>${todo}</li>`)
  .join('');
}

addBtn.addEventListener("click", function () {
  const taskText = todoInput.value.trim();
  if (taskText === "") {
    return; // don't add empty tasks 
  }

  todos.push(taskText);
  console.log(todos); // for debugging

  todoInput.value = ""; // clear input
});

todoInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

allBtn.addEventListener("click", function () {
renderTodos();
});