console.log("Promises")
let print = (x) => console.log(x)

// Promise of code execution, has states: pending, resolved, rejected. Can be assigned a result. Done so operations are asynchronous.
// Ensures any operation inside the Promise block is executed in the background asynchronously

let promise = new Promise(function(resolve, reject){
    // alert('Alert from promise')
    resolve(99) // Whichever state comes first is saved, 99 is value of fulfil state
    // reject('Error') // Ignored unless resolve is removed
    // In case of rejection, we require error handling or else it shows up as uncaught error
})

console.log('Hello 1')
setTimeout(() => {
    console.log('Hello 2')
}, 1000)
console.log('Hello 3') // Order of operation 1, 3, 2. Because setTimeout is asynchronous
console.log(promise) // Like synchronous, Hello 2 appears after

// .then() & .catch() Methods
// Additional info: resolve:value, reject:error. We can run multiple promises in parallel.
// Fulfilled can mean either resolved or rejected.

// Pending and fulfilled
let p1 = new Promise((resolve, reject) => {
    // console.log('Promise 1 is pending')
    setTimeout(() => {
        // console.log("Promise 1 is fulfilled now")
        resolve('P1 result')
    }, 5000)
})

print('P1: ')
print(p1) // Shows pending
setTimeout(() => {
    print('P1: ')
    print(p1)
}, 5000) // Time matches with promise fulfillment, so shows fulfilled

let p2 = new Promise((resolve, reject) => {
    // console.log('Promise 2 is pending')
    setTimeout(() => {
        // console.log("Promise 2 is rejected now")
        resolve('P2 result')
        // reject(new Error('P2 error'))
    }, 5000)
})

print('P2: ')
print(p2) // Shows pending
setTimeout(() => {
    print('P2: ')
    print(p2)
}, 5000) // Time matches with promise fulfillment, so shows fulfilled

// All promises above run in parallel

p1.then((value) => { // For putting operations after P1 is done
    console.log(value)
}) // Shows up after P1 has pending status, appears before P1 fulfilled

/* p2.catch((error) => {
    console.log(error)
}) // Appear before P2 rejected, catch the error */

// External function for then()
let alertfunc = (value) => {
    alert("Fulfillment with a value of " + value)
}

p2.then(alertfunc, (error) => { // Shows both value and error
    print(error)
}) // Does 2 in 1 work, value if promise is fulfilled, error if rejected

// In above then(), alertfunc is used, however it only activated when the promise is fulfilled