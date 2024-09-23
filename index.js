// Comment
// Node - Runtime environment for running JavaScript code
console.log("Hello Worlds");

// Variables - var, let
// ES6 = let
let name = 'Benit';
console.log(name);

// Multiple Variables
let firstName = 'Benben', lastName = "Shrestha";

let number = '1234';
let home = 'Kathmandu';

// Constants
let rate = 3.3;
console.log("Before: " + rate);
rate = 0.1; // Can be changed, reassigned
console.log("After: " + rate);

const rates = 3.5; // Can't be changed, reassigned
console.log(rates);

// Primitive/Value types and Reference types

// Primitive Types
let nam = 'benit'; // String Literal
let age = 21; // Number Literal
let isElligible = true ; // Boolean Literal

let firstNam = undefined; // Explicit, it is also a primitive type
let lastNam = null; // Explicitly clears the value when not sure, Example: selectedColor

// Dynamically Typed 
let myName = 'benben';
console.log(typeof myName);
myName = 12;
console.log(typeof myName);
myName = 12.6;
console.log(typeof myName); // Numerical values just called numbers (Not integer or float)

// Object 
console.log(typeof lastNam); // Object type

// Reference types - Object, Array, Function
let person = { 
    name: ' Benit',
    age: 21
}; // Object Literal

console.log(person);

// Dot Notation 
console.log(person.name);

person.name = 'jim'; // Not a const
console.log(person.name);

// Bracket Notation 
console.log(person[age]); // Shows undefined
console.log(person['age']); // Shows 21
console.log(person.age); // Shows 21

person[age] = 22;
console.log(person[age]);

// Alternate way to use bracket notation
choice = 'name';
person[choice] = 'jeff';
console.log(person[choice]);
console.log(person['name']); // Same as above

// Array 
let selectedColors = ['red', 'green', 'blue'];
console.log(selectedColors);
console.log(selectedColors[0]); // Indexing from zero

selectedColors[1] = 'pink'; // Dynamic
console.log(selectedColors);

selectedColors[3] = 'wayne'; // Add elements
console.log(selectedColors);

selectedColors[2] = 77; // Any type
console.log(selectedColors); 

console.log(typeof selectedColors); // Shows as object
console.log(selectedColors.length); // Length of the array

// Functions
function greet() {
    console.log("Hello");

} // Simple Function 

greet(); // Function Call

// Performing a task
function greetname(name, lastname){
    console.log("Hello " + name  + ' ' + lastname);
} // Parameterized Function

greetname('kelso'); // Call with Argument, since no lastname: undefined shown
greetname('kelso', 'johnson'); // Correct way

// Calculating a value
function add(num1, num2){
    return num1 + num2;
}

console.log(add(9, 7)); // Shows 16