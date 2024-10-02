console.log("Practice Set 9")

// Q1: Load a JS script using Promises and alert when its done, use async & await
/* let loadscript = async (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script')
        script.src = src
        document.body.appendChild(script)

        script.onload = () => resolve('Script Loaded: ' + src)
        script.onerror = () => reject(new Error('Script Failed: ' +  src))
    })
}

let mainz = async () => {
    console.log(new Date().getMilliseconds())
    let a = await loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js') // Without using .then()
    console.log(a)  
    console.log(new Date().getMilliseconds())
}
mainz() */

// Q2: Use .then()
/* let loadscript2 = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script')
        script.src = src
        document.body.appendChild(script)

        script.onload = () => resolve('Script2 Loaded: ' + src)
        script.onerror = () => reject(new Error('Script2 Failed: ' +  src))
    })
}

let mainz2 = () => {
    let a = loadscript2('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js')
    a.then((value) => console.log(value), (error) => console.log(error))
}
mainz2() */

// Q3: Promise that rejects after 3 seconds with async/await, use try-catch block
/* let afunc = async () => {
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('P1 resolution') // For try block
            // reject(new Error('P1 error')) // For catch block
        }, 3000)
    })
    return p1
}

let mainz = async () => {
    try {
        let a = afunc()
        console.log('Start: ' + new Date())
        let a_async = await a
        console.log(a_async)
        console.log('End: ' + new Date())
    }
    catch(err) {
        console.log('Start: ' + new Date())
        console.log('Name: ' + err.name)
        console.log('Message: ' + err.message)
        console.log('End: ' + new Date())
    }
    finally {
        console.log('At End')
    }
}

mainz() */

// Q4: Use promise.all() to await for 3 promises using async/await, compare
// Use 3 async functions, each returning a promise
let p1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10)
        }, 3000)
    })
}

let p2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20)
        }, 1000)
    })
}

let p3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(30)
        }, 2000)
    })
}

let run1 = async () => {
    console.time('Runtime1')
    let a1 = await p1()
    let a2 = await p2()
    let a3 = await p3()
    console.log(a1, a2, a3)
    console.timeEnd('Runtime1') // Runtime is sum of all promise times i.e 3000 + 1000 + 2000, meaning the promises aren't executed in parallel
}
run1()

// Promise.all([])
let  run2 = async () => {
    console.time('Runtime2')
    let a1 = p1()
    let a2 = p2()
    let a3 = p3()

    let a = await Promise.all([a1, a2, a3]) // Makes sure all the promises run simultaneouly
    console.log(a)
    console.timeEnd('Runtime2') // Runtime is the highest time of all promises, 3000, meaning operations are run in parallel
}
run2()