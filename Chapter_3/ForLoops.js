console.log("For Loops")

for (let i = 0; i < 5; i++) {
    console.log(i+1)
}

/* let n = Number.parseInt(prompt("Enter a number"))

let sum = 5
for(let i = n; i >= 0; i--) {
    alert("Countdown: " + i) // Alert continously appears
    console.log(sum += i)
} */

// For in Loop
let dict = {
    name: "Identity", // obj: dict[obj]
    home: "house",
    price: "cost"
}

for (let obj in dict) {
    console.log("Key: " + obj + ", Value: " + dict[obj])
}

let str = 'abcdefghijklmnopqrstuvwxyz' // String

for ( let letter in str) {
    console.log(letter, str[letter]) // Prints index (0, 1, 2) and value (a, b, c)
}

// For of Loop
for (let letter of str) {
    console.log(letter) // Prints each character
}

// Can't use dict in For of Loop, as it isn't an iterable

// Use var of global scope

for (var a = 0; a <= 2; a++) {
    let abc = 56
    console.log("Inside: " + a)
} // Increment occurs but is not printed due to termination point

console.log("Outside: " + a)
// console.log(abc) // Since it is defined inside the loop, can't be accessed outside