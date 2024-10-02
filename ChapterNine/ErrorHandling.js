console.log('Error Handling: Try and Catch')

/* setTimeout(() => {
    console.log('Process 1')
}, 1000)

setTimeout(() => {
    console.log('Process 2')
}, 2000)

try { // Will only handle synchronous code
    console.log(Process2)
}
catch(error) {
    console.log(error)
}

// let Process2 = '22'
try { // Doesn't work with scheduled code like setTimeout
    setTimeout(() => {
        console.log(Process2) // Fails because, function is executed later i.e it has already left the try-catch block
    }, 1000)
}
catch(err) {
    console.log(err)
}

setTimeout(() => {
    console.log('Process 3')
}, 3000)

setTimeout(() => {
    console.log('Process 4')
}, 4000)

// let Process4 = '44'
// Try-catch does work inside setTimeout
setTimeout(() => {
    try {
        console.log(Process4)
    }
    catch(err) {
        // alert(err)
    }
}) */

// Error Object and Custom Errors
console.log('Error Object and Custom Errors')

/* try {
    console.log(Process)
}
catch(error) {
    console.log('\n\nError: ' + error)
    console.log('Error name : ' + error.name)
    console.log('Error message : ' + error.message)

} */

// Custom error
/* try {
    console.log(Process) // Doesn't throw the error message below, just says not defined
    // throw new Error('This is bad')
    throw new ReferenceError('This is also bad')
}
catch(error) {
    console.log(error.name + '\n' + error.message)
    console.log(error.stack) // Location of file
} */ 

/* try {
    let age = Number.parseInt(prompt("Enter your age: "))
    if (age < 18) {
        throw new SyntaxError('Too Young')
        // throw new Error('Too Young')
    }
}
catch(error) {
    alert(error.name)
    alert(error.message)
    console.log(error.stack)
}
// Other error types: RangeError, TypeError etc */

// The Finally Clause
console.log('The Finally Clause')

// let Process = '11'
try {
    console.log(Process)
}
catch(error) {
    console.log(error)
    // console.log(Process1)
}
finally {
    console.log('Finally') // This block will run regardless
}

// If the catch block has error, it will pop up after finally block is run

let func = () => {
    try {
        let a = 10
        console.log(b)
        return a
    }
    catch(err) {
        console.log(err)
    }
    finally {
        console.log('Finally from function') // This block will always run, used for stuff like exit loop, close file.
    }
}

let a = func()
console.log(a)