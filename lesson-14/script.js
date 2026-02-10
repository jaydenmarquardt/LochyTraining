// TODO: Create a user object with properties
function createProfile() {
  const name = document.getElementById("userName").value;
  const age = Number(document.getElementById("userAge").value);
  const email = document.getElementById("userEmail").value;

  // TODO: Create an object with name, age, and email properties
  const user = {
    name: name,
    age: age,
    email: email,
  };

  // TODO: Access object properties and display them
  const output = document.getElementById("profileOutput");
  output.innerHTML = `
        <div class="profile-card">
            <h3>User Profile</h3>
            <p><strong>Name:</strong> ${user.name}</p>
            <p><strong>Age:</strong> ${user.age}</p>
            <p><strong>Email:</strong> ${user.email}</p>
        </div>
    `;

  // TODO: Log the object to console
  console.log(user.name);
  console.log(user.age);
  console.log(user.email);
}

// Array to store products
const products = [];

// TODO: Create a product object and add it to the array
function addProduct() {
  const name = document.getElementById("productName").value;
  const price = Number(document.getElementById("productPrice").value);
  const stock = Number(document.getElementById("productStock").value);

  // TODO: Create a product object with a method
  const product = {
    name: name,
    price: parseFloat(price),
    stock: parseInt(stock),
    // TODO: Add a method to calculate total value
    getTotalValue: function () {
      return this.price * this.stock; 
    },
  };

  // TODO: Add product to products array
  products.push(product);

  console.log(products);

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
  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    html += `
      <div class="product-card">
        <h4>${product.name}</h4>
        <p>Price: $${product.price}</p>
        <p>Stock: ${product.stock}</p>
        <p>Total value: $${product.getTotalValue()}</p>
      </div>
    `;
  }

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
