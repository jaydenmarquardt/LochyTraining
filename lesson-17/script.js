// TODO: Convert object to JSON string
function convertToJSON() {
  const name = document.getElementById("personName").value;
  const age = document.getElementById("personAge").value;
  const email = document.getElementById("personEmail").value;

  // TODO: Create an object
  const person = {
    name,
    age,
    email
  };

  // TODO: Use JSON.stringify() to convert object to JSON string
  const jsonString = JSON.stringify(person);
  console.log(jsonString);

  const prettyJSON = JSON.stringify(person, null, 2);

  // Display the JSON string
  const output = document.getElementById("jsonOutput");
  output.textContent = jsonString;

  console.log("Object:", person);
  console.log("JSON String:", jsonString);
}

// TODO: Parse JSON string to object
function parseJSON() {
  const jsonInput = document.getElementById("jsonInput").value;
  const output = document.getElementById("objectOutput");

  try {
    // TODO: Use JSON.parse() to convert JSON string to object
    const jsonString = jsonInput;
    const obj = JSON.parse(jsonString);

    // Display the object properties
    output.textContent = `Name: ${obj.name}\nAge: ${obj.age}`;

    console.log("JSON String:", jsonInput);
    console.log("Parsed Object:", obj);
  } catch (error) {
    output.textContent = "Error: Invalid JSON format!";
    console.error("Parse error:", error);
  }
}

// TODO: Save settings to localStorage
function saveSettings() {
  const theme = document.getElementById("theme").value;
  const fontSize = document.getElementById("fontSize").value;
  const notifications = document.getElementById("notifications").checked;

  // TODO: Create settings object
  const settings = {
   theme,
   fontSize,
   notifications
  };

  localStorage.setItem("theme", JSON.stringify(theme));
  localStorage.setItem("fontSize", JSON.stringify(fontSize));
  localStorage.setItem("notifications", JSON.stringify(notifications));
  // TODO: Convert to JSON and save to localStorage
  // Use: localStorage.setItem('key', value)

  const output = document.getElementById("settingsOutput");
  output.textContent = "Settings saved successfully!";

  console.log("Saved settings:", settings);
}

// TODO: Load settings from localStorage
function loadSettings() {
  const output = document.getElementById("settingsOutput");

  const themeJSON = localStorage.getItem("theme");
  const fontSizeJSON = localStorage.getItem("fontSize");
  const notificationsJSON = localStorage.getItem("notifications");
  // TODO: Get from localStorage and parse JSON
  // Use: localStorage.getItem('key')

  const settingsJSON = {
    themeJSON,
    fontSizeJSON,
    notificationsJSON
  }

  if (!settingsJSON) {
    output.textContent = "No saved settings found.";
    return;
  }

  // TODO: Parse JSON string to object
  const theme = JSON.parse(themeJSON);
  const fontSize = JSON.parse(fontSizeJSON);
  const notifications = JSON.parse(notificationsJSON);

  const settings = {
    theme,
    fontSize,
    notifications
  }

  // Update UI with loaded settings
  document.getElementById("theme").value = settings.theme;
  document.getElementById("fontSize").value = settings.fontSize;
  document.getElementById("notifications").checked = settings.notifications;

  output.textContent = "Settings loaded successfully!";
  console.log("Loaded settings:", settings);
}

// TODO: Clear settings from localStorage
function clearSettings() {
  // TODO: Remove from localStorage
  // Use: localStorage.removeItem('key')
  localStorage.removeItem("theme");
  localStorage.removeItem("fontSize");
  localStorage.removeItem("notifications");
  localStorage.clear();

  // Reset UI to defaults
  document.getElementById("theme").value = "light";
  document.getElementById("fontSize").value = "medium";
  document.getElementById("notifications").checked = false;

  const output = document.getElementById("settingsOutput");
  output.textContent = "Settings cleared!";

  console.log("Settings cleared");
}

// Load settings on page load
window.addEventListener("load", loadSettings);

// Console examples
console.log("=== JSON Examples ===");

// TODO: Try these examples:
// 1. Object to JSON
const user = { name: "Alice", age: 25, active: true };
console.log("Object:", user);
// const userJSON = JSON.stringify(user);
// console.log("JSON:", userJSON);

// 2. JSON to Object
const jsonString = '{"name":"Bob","age":30}';
console.log("JSON String:", jsonString);
// const userObj = JSON.parse(jsonString);
// console.log("Parsed Object:", userObj);

// 3. Pretty print JSON
// const prettyJSON = JSON.stringify(user, null, 2);
// console.log("Pretty JSON:\n" + prettyJSON);

// 4. localStorage examples
// localStorage.setItem('username', 'JohnDoe');
// const username = localStorage.getItem('username');
// console.log("Retrieved username:", username);
