// TODO: Create a user object with properties
function createProfile() {
  const name = document.getElementById("userName").value;
  const age = document.getElementById("userAge").value;
  const email = document.getElementById("userEmail").value;

  // TODO: Create an object with name, age, and email properties
  const user = {
    // Add properties here
  };

  // TODO: Access object properties and display them
  const output = document.getElementById("profileOutput");
  output.innerHTML = `
        <div class="profile-card">
            <h3>User Profile</h3>
            <p><strong>Name:</strong> <!-- Display user.name --></p>
            <p><strong>Age:</strong> <!-- Display user.age --></p>
            <p><strong>Email:</strong> <!-- Display user.email --></p>
        </div>
    `;

  // TODO: Log the object to console
  console.log("User object:" /* log user object */);
}

// Array to store products
const products = [];

// TODO: Create a product object and add it to the array
function addProduct() {
  const name = document.getElementById("productName").value;
  const price = document.getElementById("productPrice").value;
  const stock = document.getElementById("productStock").value;

  // TODO: Create a product object with a method
  const product = {
    name: name,
    price: parseFloat(price),
    stock: parseInt(stock),
    // TODO: Add a method to calculate total value
    getTotalValue: function () {
      // Return price * stock
    },
  };

  // TODO: Add product to products array

  // Display all products
  displayProducts();

  // Clear inputs
  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productStock").value = "";
}

// TODO: Display all products from the array
function displayProducts() {
  const output = document.getElementById("catalogOutput");

  if (products.length === 0) {
    output.innerHTML = "<p>No products yet. Add one above!</p>";
    return;
  }

  // TODO: Loop through products array and display each one
  let html = "";
  // Use a loop here

  output.innerHTML = html;
}

// Console examples
console.log("=== Object Examples ===");

// TODO: Try these examples:
// 1. Create a simple object
const person = {
  name: "John",
  age: 30,
};
console.log("Person:", person);

// 2. Access properties with dot notation
console.log("Name:", person.name);

// 3. Access properties with bracket notation
console.log("Age:", person["age"]);

// 4. Object destructuring
// const { name, age } = person;
// console.log("Destructured:", name, age);
