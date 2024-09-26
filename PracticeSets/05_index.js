console.log("Practice Set 5")

// Q1: Add user input to an array
let arr = [1, 3, 5, 64, 93, 12, 63]
/* let user_input = Number.parseInt(prompt("Enter a number: "))
console.log('Before: ' + arr)
let new_arr = arr.map((i) => {
    return (i + user_input)
})
console.log('After: ' + new_arr)

arr.push(user_input)
console.log('After pushing:', arr) */

// Q2: Keep appending till 0 is found 
/* let A = []
let b 
do {
    b = Number.parseInt(prompt("Enter a number: "));
    A.push(b);
    console.log(A);
} while(b != 0); */

// Q3: Filter numbers divisible by 10
let A = [10, 22, 33, 20, 54, 90, 80, 78, 65, 110]

let A10 = A.filter(x => x % 10 == 0)
console.log(A10)

// Q4: Square numbers in a list 
let B = [1, 3, 5, 7, 34, 56]
let sqB = B.map(x => x**2)
console.log(sqB)

// Q5: Find factorial from a list of n natural numbers
let C = [1, 2, 3, 4, 5]
let factC = C.reduce((a, b) => a * b)
console.log(factC)