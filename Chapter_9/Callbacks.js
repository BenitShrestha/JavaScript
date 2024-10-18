console.log("Callbacks")

// Synchronous Programming vs Asynchronous Programming
// Synchronous
// let prompt = require('prompt-sync')() // Uncomment to run using Node.js

/* let prmpt = prompt("Enter anything you like: ")
let a = 6
console.log(prmpt)
console.log(a) 

// Asynchronous
console.log("Start")
setTimeout(() => {
    console.log('This is asynchronous')
}, 4000) // Will run only after 4 seconds, won't follow synchronous execution
console.log("End") // The 2 console.logs will run one after another but setTimeout will run after 4 seconds at last */

// Callbacks
/* let loadscript = (src, callback) => {
    let script = document.createElement('script')
    script.src = src
    document.body.appendChild(script)
    script.onload = () => {
        console.log("Script loaded: " + src) // Using () => callback() method is also assignment
        callback() // This callback function can be defined during runtime, it can have arguments too
    } 
}

let loadscripts = (src, callback) => {
    let script = document.createElement('script')
    script.src = src
    document.body.appendChild(script)
    // script.onload = callback // This is assignment, callback() is invoking
    script.onload = () => callback() // Formal way of assignment, when same callbacks used only one runs
}   // Invoking the function causes it to be executed as soon as interpreter reaches that line

let hello = () => {
    console.log('Hello')
}

let goodbye = () => {
    console.log('Goodbye')
}

loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js', hello)
loadscripts('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js', goodbye) */

// Callback with Arguments
let loadstyle = (src, callback) => {
    let link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = src
    document.head.appendChild(link)
    link.onload = () => {
        console.log('Properly Loaded')
        callback(src)
    }
}

let goodmorning = (src) => {
    console.log('Good Morning: ' + src)
}

loadstyle('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css', goodmorning) // Just call the function, no need to put arguments

// Error Handling
/* let loadstyles = (src, callback) => {
    let link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = src
    document.head.appendChild(link)
    link.onload = () => {
        console.log('\nEVENT OF NO ERROR')
        callback(null, src) // Null in case of error argument
    }

    link.onerror = () => {
        console.log("\nEVENT OF ERROR")
        callback(new Error('Something went wrong'), src) // If an argument is missing, shows undefined
    }
}

let goodmornings = (error, src) => {
    if (error) {
        console.log(error)
    }
    console.log('Good Morning: ' + src)
}

loadstyles('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css', goodmornings) // Just call the function, no need to put arguments
// Since, goodmorning is assigned not invoked, execution will take time, non-synchronous
loadstyles('https://cdn.jsdlivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css', goodmornings) */

/* Asynchronous operations like the ones above can't be used synchronously with other operations
   Check asynchronous programming at top of code to view 
   Assign functions not invoke them */