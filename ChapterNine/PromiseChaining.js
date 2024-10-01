let print = (x) => console.log(x)

print("Promise Chaining")

let alertfunc = (value) => {
    alert("Fulfillment with a value of " + value)
}

// Attaching .then() calls
/* let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P1 resolution')
    }, 2000)
})

p1.then((value) => { // 
    console.log(value)
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('P2 resolution')
        }, 2000)
    })
    return p2 // Linked next .then() to P2
}).then((value) => {
    console.log(value)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('P3 resolution')
        }, 2000)
    })
}).then((value) => {
    console.log(value)
    let p4 = new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve('P4 resolution')
            reject(new Error('P4 error'))
        }, 2000)
    })
    return p4 // Can return anything, assumes value of promise so works with .then(), but doesn't work with .catch()
}).then(alertfunc,
    (error) => {
        console.log(error)
    } // To catch the error using .then(), make sure to use external function (alertfunc here) in place of resolution function
) */

// Loadscript function using promises
let loadscript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script')
        script.src = src
        document.body.appendChild(script)

        script.onload = () => {
            resolve('Script Loaded: ' + src)
        }
        script.onerror = () => {
            reject(new Error('Script Failed: ' + src))
        }
    })
}

let p1 = loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js')

p1.then((value) => {
    console.log(value)
    return loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js') 
}).then((value) => {
    print('Second script')
    return loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js')
}).catch((error) => {
    print(error)
}).then((value) => {
    print('Third script') // If error occurs here, since no .catch() is following this .then(), error uncaught
    return loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js') 
}) // If any .then() fails, it finds nearest .catch()