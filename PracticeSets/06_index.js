console.log("Practice Set 6")

// Q1: Prompt to alert user if they can drive or not

/* let age  = Number.parseInt(prompt("Enter your age: ")) // Try using a function
if (age > 18) {
    alert('You can drive!')
}
else {
    alert(`You can't drive!`)
} */

/* const canDrive = (age) => { return age > 18?true: false }
if (canDrive(age)) {
    alert('You can drive!')
}
else {
    alert(`You can't drive!`)
} */

// Q2: Confirm with user to see prompt again
/* let runAgain = true
do {
    runAgain = confirm("Do you want to see prompt again?")
    if (runAgain == true) {
        age = Number.parseInt(prompt("Enter your age: "))
    }
    else {
        break;
    }
} while (runAgain == true) */

// Q3: Age Negative Case
/* let age = Number.parseInt(prompt("Enter your age: "))
if (age < 0) {
    console.error("Age can't be negative.")
}
else if (age < 18) {
    alert(`You can't drive!`)
}
else {
    alert('You can drive!')
} */

// Q4: Change URL if number is greater than 4
/* let num = Number.parseInt(prompt("Enter a number: "))
if (num > 4) {
    location.href = 'https://www.google.com/'
}
else {
    console.log("Number is less than 4")
} */

// Q5: Change background color based on user input
let color = prompt('Enter a color (Lowercase): ')
document.body.style.background = color
