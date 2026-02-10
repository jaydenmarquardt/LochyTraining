// Lesson 6: DOM Manipulation
// TODO: Select the element with id "text" and change its content
// TODO: Select the element with id "content" and add new HTML elements
// TODO: Experiment with changing styles

console.log("Lesson 6 loaded!");

const textElement = document.getElementById("text");

textElement.textContent = "The text has been changed with javascript!";

textElement.style.color = "#e74c3c";
textElement.style.fontSize = "2em";

const contentDiv = document.getElementById("content");

contentDiv.innerHTML = `
    <h2>Content Added by JavaScript</h2>
    <p>This paragraph was created dynamically!</p>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
`;
