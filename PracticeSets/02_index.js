console.log("Practice Set 2")

// Q1: Age between 10 and 20

/* let age = Number.parseInt(prompt("Enter age"))

if (age >= 10 && age <= 20) {
    alert("Age is correct")
}

else {
    alert("Incorrect age")
} */

// Q2: Divisible by 2 and 3

/* let number = Number.parseInt(prompt("Enter a number for checking"))

if (number % 2 == 0 && number % 3 == 0) {
    alert("Divisible by 2 and 3")
}

else {
    alert("Not divisible by 2 and 3")
} */

// Q3: Driving criteria based on age using Ternary operator

let age = Number.parseInt(prompt("Enter age"))

alert(age >= 18? "You can drive" : "You can't drive")
console.log(age >= 18? "Driving certified": "Not driving certified")