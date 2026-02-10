// Lesson 11: Variables & Data Types

console.log("=== Lesson 11: Variables & Data Types ===\n");

// TODO: Declare variables using var, let, and const
// TODO: Create examples of each primitive type
// TODO: Demonstrate the difference between primitive and reference types
// TODO: Use typeof to check variable types

// Example to get you started:
const message = "Hello, JavaScript!";

// variables
var id = "{B}{U}{G}";
let CMC = 3;
const manacost = "BUGX";

// primitive
let x = 32;
let y = x;

// reference
const colours = ["White", "Black", "Blue", "Red"];
const WUBRG = colours;
WUBRG.push("Green");

//typeof
const runTests = document.getElementById('runTests');

runTests.addEventListener('click', () => {
console.clear();
    setTimeout(() => {
        console.log("Message:", message);
    }, 250);

    setTimeout(() => {
        console.log("Type:", typeof message);
    }, 500);

setTimeout(() => {
console.log(x);
}, 700);

setTimeout(() => {
console.log(colours);
}, 900);

setTimeout(() => {
console.log(typeof "hello"); // "string"
}, 1050);
setTimeout(() => {
console.log(typeof 42); // "number"
}, 1200);
setTimeout(() => {
console.log(typeof true); // "boolean"
}, 1300);
setTimeout(() => {
console.log(typeof undefined); // "undefined"
}, 1400);
setTimeout(() => {
console.log(typeof null); // "object" (quirk!)
}, 1500);
setTimeout(() => {
console.log(typeof {}); // "object"
}, 1600);
setTimeout(() => {
console.log(typeof []); // "object" (arrays are objects)
}, 1650);
setTimeout(() => {
console.log(typeof function () {}); // "function"
}, 1700);
});