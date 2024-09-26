console.log("Number Guesser")

let list_of_numbers = []
let correct
let guess
let chances = 3
let i = 0

function randomNumber(count, min, max) { // Math.random() generates numbers between range 0 and 1
    for (let i = 0; i < count; i++) { // max - min + 1 done to ensure all numbers lie within range
        list_of_numbers.push(Math.floor(Math.random() * (max - min + 1)) + min) // + min done so that number starts from min value
    } // Math.floor makes sure number doesn't exceed max value of range

    correct = list_of_numbers[Math.floor(Math.random() * list_of_numbers.length)]
    return list_of_numbers, correct
}

list_of_numbers, correct = randomNumber(10, 1, 100)
console.log(list_of_numbers, '\n', correct)

do{
    guess = Number.parseInt(prompt("Guess a number: "))
    i++
    if (guess == correct) {
        alert("Right Answer!", guess)
    }
    else if (i >= chances) {
        alert('Chances have run out!')
    }
    else if ( guess != correct) {
        alert("Wrong Answer!", guess)
    }
}while(guess != correct && i < chances)
