console.log("Fetch API") // Network Request and Storing Data
    
// Like a promise, AJAX - Asynchronous JavaScript and XML
let p = fetch("https://randomuser.me/api/") // fetch(url, [options]), w/o options is a GET request

// Fetch request is a 2 stage process, 2 layered promise so 2 .then() used.
// 1st is object of response class w/ status and ok properties.
// 2nd is accessing the body in different formats: text, json, blob, arrayBuffer. Only one format can be used at a time.
// Response and Request headers for additional information.

/* p.then((response) => {
    console.log(response.status, response.ok) // Status code from 200-299, otherwise some error
    console.log(response.headers)
    return response.json() // JSON format
}).then((response) => console.log(response)) */

// POST Request
/* let options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "beans",
        body: "boom",
        username: "bombclat"
    })
}
fetch("https://jsonplaceholder.typicode.com/posts", options).then((response) => response.json()).then((json) => console.log(json)) */

 // Using async/await
/* const createtodo = async () => {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ // Changes JS object to string, vice-versa is JSON.parse
                title: 'benben',
                body: 'blast',
                userId: '2' // Customizable
        }) 
    }
    
    let p = await fetch("https://jsonplaceholder.typicode.com/posts", options) // Phase 1
    let response = await p.json() // Phase 2
    return response
}

const mainfunc = async () => {
    let a = await createtodo() 
    console.log(a)
}

mainfunc() */

// Passing arguments
const createtodo1 = async (todo) => {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(todo) 
    }
    
    // Basically sending a POST Request
    let p = await fetch("https://jsonplaceholder.typicode.com/posts", options) // POST: Phase 1
    let response = await p.json() // Phase 2
    return response
}

// GET Request
const getTodo = async (id) => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id) // GET
    let r = await response.json()
    return r
}

// Execution function, uses awaits since above functions are async
const mainfunc1 = async () => {
        let todo = {
            title: 'pika',
            body: 'blast',
            userId: '2'
        } // Customizable
    let a = await createtodo1(todo) 
    console.log(a)
    console.log(await getTodo(100)) // 100 - Exists, 101 (Our) - Doesn't exist
}

mainfunc1()