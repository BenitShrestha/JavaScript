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