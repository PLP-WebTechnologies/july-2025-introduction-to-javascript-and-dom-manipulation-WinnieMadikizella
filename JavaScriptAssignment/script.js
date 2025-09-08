// Part 1: Variables and Conditionals
let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
    document.getElementById("output").textContent = "You are an adult.";
} else {
    console.log("You are a minor.");
}

// Part 2: Functions
function greetUser(name) {
    return `Hello, ${name}! Welcome to JS learning.`;
}

function calculateSum(a, b) {
    return a + b;
}

// Using the functions
console.log(greetUser("Winnie"));
console.log("Sum:", calculateSum(5, 7));

// Part 3: Loops

// For loop example
for (let i = 1; i <= 5; i++) {
    console.log("Counting:", i);
}

// While loop example
let count = 5;
while (count > 0) {
    console.log("Countdown:", count);
    count--;
}

// Array loop example
const fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(fruit => console.log(fruit));

// Part 4: DOM Manipulation

// 1. Change text
document.getElementById("output").textContent = "JS is interactive!";

// 2. Respond to button click
const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);

button.addEventListener("click", () => {
    alert("Button was clicked!");
});

// 3. Toggle a class
document.body.addEventListener("dblclick", () => {
    document.body.classList.toggle("highlight");
});

// ================================
// Part 1: Variables and Conditionals
// ================================

// Your code here

// ================================
// Part 2: Functions
// ================================

// Your code here

// ================================
// Part 3: Loops
// ================================

// Your code here

// ================================
// Part 4: DOM Manipulation
// ================================

// Your code here


