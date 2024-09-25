console.log("Practice Set 3")

// Q1: Print student marks 
let listof = {
    ramesh: 88,
    suresh: 78,
    benben: 33, 
    jignesh: 11,
    rahul: 23
}

for (let i in listof) {
    console.log("Student named " + i + " got " + listof[i] + ' marks')
}

// Without using For in Loop
console.log(Object.keys(listof)) // Names
console.log(Object.values(listof)) // Marks

for (let i = 0; i < Object.keys(listof).length; i++) {
    console.log(Object.keys(listof)[i], Object.values(listof)[i])
}

console.log("Without using Object values: ")
for (let i = 0; i < Object.keys(listof).length; i++) {
    console.log(Object.keys(listof)[i], listof[Object.keys(listof)[i]])
}

// Q2: Display 'try again' after 5 times
/* let n = 5
let i
let count = 0
do {
    i = Number.parseInt(prompt("Enter a number"))
    count++
    if (i != n){
        console.log("Try again", count)
    } 
    else {
        alert("Correct")
    }
} while(i != n) */

// Q3: Use arrow function
const fact = (n) => {
    if (n == 0 || n ==1) {
        return 1
    }
    return n * fact(n-1)
}

console.log(fact(5))

const fibo = (x) => {
    if (x == 1) {
        return 0
    }
    else if (x == 2) {
        return 1
    }
    else {
        return fibo(x-1) + fibo(x-2)
    }
}

console.log(fibo(3))