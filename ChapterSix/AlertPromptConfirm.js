console.log("Alert - Prompt - Confirm")
let i = 0
alert('Hello, this is an alert window. (Plus) ' + i)
alert('Hello, this is an alert window. (Comma)', i) // 0 doesn't appear in alert window

let prmpt = prompt("Enter anything you like: ")
alert(prmpt)
document.write(prmpt) // Writes prompt to webpage

let conf = confirm(`Are you sure you want to write ${prmpt}?`)

if (conf) {
    document.write('\nYou entered: ' + prmpt)
}
else {
    document.write("\nYou didn't write " + prmpt)
}

// Prompt with default value
let defa = prompt("Enter a prompt, previous was: Using Plus " + prmpt)
let defb = prompt("Enter a prompt, previous was: Using Comma ", prmpt)