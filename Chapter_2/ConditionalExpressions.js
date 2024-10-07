console.log("Conditional Expressions");

// Prompt and Alert

/* let name = prompt("What is your name?") // Take input
console.log(name) // Prompt always has string type

alert(name) // Show output on webpage */

// Typecasting
/* let age = Number.parseInt(prompt("How old are you?"))

if (age >= 18) {
    console.log("Get married")
    alert("Get married")
}
else {
    console.log("Grow up")
    alert("Grow up")
} */

/* let isHappy = prompt("Are you happy?")
let isMarried = prompt("Are you married?")

if (isHappy == 'true' && isMarried == 'true') {
    alert("You are happily married!")
}

else if (isHappy == 'true' || isMarried == 'true') {
    alert('You are delusional!')
}

else if (isHappy == 'false' && isMarried == 'true') {
    alert('Divorce ASAP!')
}

else {
    alert('Figure it out yourself!')
} */

// Switch Statements
/* const obj = prompt("Enter an object")

switch (obj) {
    case 'car':
        alert('You are a driver!')
        break;

    case 'gun':
        alert('You are a shooter!')
        break;

    case 'book':
        alert("You are a nerd!") // If no break, runs successive code

    default:
        alert("Who knows?") 
} */

// Ternary Operator
/* const marks = Number.parseInt(prompt("Enter your marks: "))
console.log("You can go to college: ", (marks >= 50 ? "Yes" : "No")) // (True, False) */