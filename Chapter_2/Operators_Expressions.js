console.log("Operators and Expressions");

11;
'benben'; // Considered code, no errors

console.log('Operators');
let a = 65;
let b = 55;

// Arithmetic Operators

console.log("a + b = ", a + b);
console.log("a - b = ", a - b);

console.log("a * b = ", a * b);
console.log("a / b = ", a / b); // Shows in float

console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b);

console.log("a = ", a);
console.log("a++ = ", a++); // Post
console.log("a = ", a); // Result of increment shown here

console.log("++a = ", ++a); // Pre, Result shown here
console.log("a = ", a);

console.log("a-- = ", a--);
console.log("a == b = ", a == b); // Returns boolean

// Assignment Operators

let x = 10;
let y = 8;

console.log("x += 6 ", x += 6);
console.log("y -= 7", y -=7);
console.log("x *= 5", x *= 5);
console.log("y /= 4", y /= 4); //  And all other arithmetic operators

/* 
Comparison Operators
*/

let num1 = 10;
let num2 = 20;
let str1 = '10';

console.log('num1 == num2', num1 == num2)
console.log('num1 >= num2', num1 >= num2)
console.log('num1 <= num2', num1 <= num2)

console.log('num1 == str1', num1 == str1) // Shows true
console.log('num1 === str1', num1 === str1) //  Shows false, checks type as well

console.log('num1 != num2', num1 != num2)
console.log('num1 != str1', num1 != str1) // Shows false
console.log('num1 !== str1', num1 !== str1) // Shows true

console.log('num1 < str1', num1 < str1) // Shows false
console.log('num1 <= str1', num1 <= str1) // Shows true
// console.log('num1 <== str1', num1 <== str1), Wrong

// Logical Operators

let A = 12;
let B = 10;
let isHappy = true;

console.log('A > B && A == B', A > B && A == B)
console.log('A < B || A >= B', A < B || A >= B)

console.log('!A != B', !A != B) // True
console.log('!A == B', !A == B) // False

console.log(!A) // False
console.log(!B) // False

console.log("!isHappy ", !isHappy)

// End