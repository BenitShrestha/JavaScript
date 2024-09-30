console.log("SetTimeout and SetInterval")

// alert('Hello')

// setTimeout - Set time delay in ms
/* let timerID = setTimeout(function() {
    alert("You have waited 3 seconds")
}, 3000) 

clearTimeout(timerID) // Disables execution
console.log(timerID) // Shows 2, timerID is 2

// Function with arguements
const addfun =(a, b) => {
    alert("Thank you for waiting, here is the result: " + (a + b))
}

// If timer not cleared it will run regardless
let timerID2 = setTimeout(addfun, 2000, 3, 5) // Last 2 are arguments for the function

clearTimeout(timerID2)
console.log(timerID2) // Has 3 as timerID */

// setInterval - Time delay infinitely
let timerID3 = setInterval(() => {
    alert('I will show up in 2 second durations')
}, 2000) // Clock starts to run as soon as alert screen loads

clearInterval(timerID3) // Clears setInterval

const mulfun = (a, b, c) => {
    console.log('After waiting for 4 seconds, answer was: ' + (a * b * c))
}

let j = 0
let k = 5
for (let i = 0; i < 2; i++) {
    j++
    k += 5
    var timerID4 = setInterval(mulfun, 4000, i, j, k) 
    // clearInterval(timerID4) // Clear interval immediately
    console.log(i)
} // Shows all 2 results, every 4 seconds
clearInterval(timerID4) // When setInterval is cleared outside loop, it runs once