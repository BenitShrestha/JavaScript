console.log("Advanced JS")
console.log("Immediately Invoked Function Expression (IIFE)")

// Function that runs as soon as its defined
let a = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(555)
        }, 2000)
    })
}

let z = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(575)
        }, 2000)
    })
}

let f = async () => {
    let b = await a()
    console.log(b)
    let c = await a()
    console.log(c)
    let d = await a()
    console.log(d)
}

// f() // Normal way of function execution 

// Using IIFE
(async () => {
        let b = await z()
        console.log(b)
        let c = await z()
        console.log(c)
        let d = await z()
        console.log(d)
})() // Avoid polluting the global scope, namespace. Frees up memory allocated for variables