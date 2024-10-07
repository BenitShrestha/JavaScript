console.log('Async and Await')

// Async - Special function that returns a promise, used with keyword: await, it waits for the promise to be fulfilled
// Await works inside an async function, depending on the type of function, async and await lets us control the flow of code

/* const afun = async () => {
    return [1,2]
} // Async function, it returns a promise

// .then() method can be used, as the returned value is a promise
afun().then((value) => console.log(value))

async function afun2() {
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('P1 resolution')
        }, 3000)
    })

    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('P2 error'))
        }, 5000)
    })
    return [p1, p2]
}

afun2().then((value) => console.log(value)) // For resolutions
afun2().catch((error) => console.log(error)) // To catch rejections */

// Now using Await
const afun3 = async () => {
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('P1 resolution')
            // reject('P1 rejection')
        }, 5000)
    })

    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('P2 resolution')
            // reject('P2 Rejection') // In case of reject, await doesn't work the same as resolve
        }, 10000)
    })

    console.log('Awaiting for P1')
    let p1a = await p1
    console.log('P1 awaiting complete: ' +  p1a)

    console.log('Awaiting for P2')
    let p2a = await p2
    console.log('P2 awaiting complete: ' +  p2a)

    return [p1a, p2a]
}

const func = (x) => console.log(x)
const err = (error) => console.log(error)

let a = afun3() // Always use a reference, direct function invokation will be buggy

let b = () => {
    console.log('This is function B')
}

/* a.then(func, (error) => console.log(error)) // Works the same a .catch()
b() // Here b() is not an async function, the async function will run in the background and won't hinder any other code */

let c = async () => { 
    let p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('P3 resolution')
            // reject('P3 rejection')
        }, 5000)
    })
    let p3a = await p3
    return p3a
} // c() is an async function, so it follows await method

let mainz = async () => {
    let a_async = await a
    b() // Since, b() is inside an async function, it follows the waiting principle
    let c_async = await c()
}

// mainz()

a.then(func, err) // Works the same a .catch()
b() // Here b() is not an async function, the async function will run in the background and won't hinder any other code
c().then(func, err) // b() and c() are immediately invoked, when await isn't used in c()

// If await is used in c(), only b() will be invoked immediately, others will follow waiting principle