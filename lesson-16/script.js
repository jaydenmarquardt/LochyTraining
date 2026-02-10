// Sample data
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const products = [
  { name: "Laptop", price: 999, inStock: true },
  { name: "Mouse", price: 25, inStock: true },
  { name: "Keyboard", price: 75, inStock: false },
  { name: "Monitor", price: 300, inStock: true },
  { name: "Webcam", price: 50, inStock: true },
];

// Display products
displayProducts();

function displayProducts() {
  const list = document.getElementById("productList");
  let html = "";

  // TODO: Use forEach to display all products

  list.innerHTML = html;
}

// TODO: Use .map() to double all numbers
function showDoubled() {
  const output = document.getElementById("transformOutput");

  // Use map here
  const doubled = numbers.map((num) => num * 2);

  output.innerHTML = `<strong>Doubled:</strong> [${doubled.join(", ")}]`;
}

// TODO: Use .filter() to show only even numbers
function showEvens() {
  const output = document.getElementById("transformOutput");

  // Use filter here
  const evens = numbers.filter((num) => num % 2 === 0);

  output.innerHTML = `<strong>Even numbers:</strong> [${evens.join(", ")}]`;
}

// TODO: Use .reduce() to sum all numbers
function showSum() {
  const output = document.getElementById("transformOutput");

  // Use reduce here
  const sum = numbers.reduce((total, num) => total + num, 0);

  output.innerHTML = `<strong>Sum of all numbers:</strong> ${sum}`;
}

// TODO: Use .find() to find first number greater than 5
function findNumber() {
  const output = document.getElementById("transformOutput");

  // Use find here
  const found = numbers.find((num) => num > 5);

  output.innerHTML = `<strong>First number > 5:</strong> ${found}`;
}

// TODO: Use .filter() to show expensive products
function showExpensive() {
  const output = document.getElementById("cartOutput");

  // Use filter to get products with price > 20
  const expensive = products.filter((p) => p.price > 20);
  output.innerHTML = "<strong>Expensive items (> $20):</strong><br>";

  expensive.forEach((p) => {
    output.innerHTML += `${p.name} - $${p.price}<br>`;
  });
}

// TODO: Use .reduce() to calculate total price
function calculateTotal() {
  const output = document.getElementById("cartOutput");

  // Use reduce to sum all prices
  const total = products.reduce((sum, item) => sum + item.price, 0);
  output.innerHTML = `<strong>Total cart value:</strong> $${total}`;
}

// TODO: Use .map() to apply discount
function applyDiscount() {
  const output = document.getElementById("cartOutput");

  // Use map to create new array with 10% discount
  const withDiscount = products.map((price) => price.price * 0.9);
  output.innerHTML = "<strong>Prices after 10% discount:</strong><br>";

  products.forEach((p, i) => {
    output.innerHTML += `${p.name} - $${withDiscount[i]}<br>`;
  });
}

// TODO: Use .every() to check if all items are in stock
function checkStock() {
  const output = document.getElementById("cartOutput");

  // Use every or some
  const stock = products.every((inStock) => inStock === "True");
  output.innerHTML = `<strong>All items in stock? ${stock}</strong>`;
}

// Console examples
console.log("=== Array Method Examples ===");

// TODO: Try these examples:
const sampleNumbers = [1, 2, 3, 4, 5];

// 1. map - transform each element
console.log("Original:", sampleNumbers);
// const doubled = sampleNumbers.map(num => num * 2);
// console.log("Doubled:", doubled);

// 2. filter - keep elements that match condition
// const evens = sampleNumbers.filter(num => num % 2 === 0);
// console.log("Evens:", evens);

// 3. reduce - reduce to single value
// const sum = sampleNumbers.reduce((total, num) => total + num, 0);
// console.log("Sum:", sum);

// 4. find - find first matching element
// const found = sampleNumbers.find(num => num > 3);
// console.log("First > 3:", found);

// 5. some - check if any element matches
// const hasEven = sampleNumbers.some(num => num % 2 === 0);
// console.log("Has even:", hasEven);

// 6. every - check if all elements match
// const allPositive = sampleNumbers.every(num => num > 0);
// console.log("All positive:", allPositive);
