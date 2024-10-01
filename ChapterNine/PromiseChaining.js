let print = (x) => console.log(x)

print("1. Promise Chaining")

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
/* let loadscript = (src) => {
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
}) // If any .then() fails, it finds nearest .catch() */

// Attaching multiple handlers to a promise
print("2. Attaching multiple handlers to a Promise")

// Different from Promise Chaining, as it doesn't depend on previous .then()/.catch() handlers. Attaching multiple handlers is done independently
/*let p1 = new Promise((resolve, reject) => {
    console.log('P1 not resolved yet')
    setTimeout(() => {
        // resolve('P1 resolution')
        reject(new Error("P1 error"))
    }, 2000)
})

p1.then((value) => {
    console.log(value) // P1 resolved now
})

p1.then((value) => {
    alert('Resolution Success')
})

p1.catch((error) => {
    print('Error')
    alert("Error caught")
}) // Multiple handlers to a single Promise, they run independently, but synchronously. 
   // When promise is resolved, .then() handlers are executed, else .catch() handlers. */

// Promise API 
print('3. Promise API - 6 static methods')

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('P1 resolution')
        reject('P1 error')
    }, 1000)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P2 resolution')
        // reject('P2 error')
    }, 2000)
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P3 resolution')
        // reject('P3 error')
    }, 3000)
})

// Promise.all()
/* promise_all = Promise.all([p1, p2, p3])
promise_all.then((value) => {
    console.log(value) // Results of all Promises if they are resolved, doesn't show up if any Promises are rejected
})

promise_all.catch((error) => {
    console.log(error) // Will show only the first promise that was rejected
})*/

// Promise.allSettled()
/* promise_all_settled = Promise.allSettled([p1, p2, p3])
promise_all_settled.then((value) => {
    console.log(value) // Shows status and values/reasons for all Promises. Doesn't support .catch()
}) */

// Promise.race()
/* promise_race = Promise.race([p1, p2, p3]) // Order in list is irrelevant
promise_race.then(alertfunc,
    (error) => console.log(error)// Returns the first Promise to be resolved or rejected, i.e Fastest Promise (Least time in setTimeout)
) */

// Promise.any()
/* promise_any = Promise.any([p1, p2, p3])
promise_any.then(alertfunc,
    (error) => console.log(error) // Only shows the first Promise to be resolved, any promise. Doesn't show rejections
) */

// Promise.resolve() & Promise.reject()
promise_resolve = Promise.resolve(24)
promise_resolve.then((value) => print(value))

promise_reject = Promise.reject(33)
promise_reject.catch((error) => print(error)) // Directly assign values/reasons 