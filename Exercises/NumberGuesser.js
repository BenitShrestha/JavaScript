console.log("Number Guesser")

let list_of_numbers = []
let correct
let guess
let chances = 3
let i = 1

function randomNumber(count, min, max) { // Math.random() generates numbers between range 0 and 1
    for (let i = 0; i < count; i++) { // max - min + 1 done to ensure all numbers lie within range
        list_of_numbers.push(Math.floor(Math.random() * (max - min + 1)) + min) // + min done so that number starts from min value
    } // Math.floor makes sure number doesn't exceed max value of range

    correct = list_of_numbers[Math.floor(Math.random() * list_of_numbers.length)]
    return list_of_numbers, correct
}

let min = 1
let max = 100 
let count = 10
list_of_numbers, correct = randomNumber(count, min, max)
console.log(list_of_numbers, '\nCorrect number: ', correct)

do{
    alert("Chances left: " + chances)
    guess = Number.parseInt(prompt("Guess a number: "))
    chances--
    if (guess == correct) {
        alert("Right Answer!", guess)
    }
    else if (guess > correct) {
        alert('Answer is lesser')
    }
    else if (guess < correct) {
        alert('Answer is higher')
    }
}while(guess != correct && i <= chances)
console.log("3 Chances gone!")