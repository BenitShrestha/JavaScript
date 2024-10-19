console.log('Destructuring')
// Unpack elements of an array to variables
// Simple
let [a, b, c] = [1, 2, 3]
console.log(a, b, c)

// Using ...rest - Spread operator (...)
let [x, y, ...rest] = [1, 2, 3, 4, 5, 6]
console.log(x, y, rest)

// Using empty space
let [p, , , q] = [1, 2, 3, 4]
console.log(p, q) // Maps to respective position

// Destructuring objects
let {a1, b1, c1} = {a1: 1, b1: 2, c1: 3} // Names of keys must match with variables on the left
console.log(a1, b1, c1)

// Spread operator also converts arrays to objects
let arr = [1, 2, 3, 4, 5, 6]
let obj = {...arr}
console.log(obj) // Keys are numbered from zero 

let sum = (a, b) => {
    return a + b
}

let arr1 = [1, 2]
console.log(sum(...arr1)) // Can't use an object, must be passed using spread operator

// Modifications 
let info = {
    names: 'Ben',
    age: '21',
    home: 'Sankhu'
}

console.log({...info}) // Print objects directly using this
console.log({...info, names: 'benit'}) // {object, Override}
console.log({names: 'hobo', ...info}) // Alternate way, no changes

// Scopes: Block, Function, Global
// Local: Block, Function 

let glob = 'global'
{
    let loca = 'local'
    console.log(`Inside curlies: ${glob}, ${loca}`)
}

console.log(`Outside curlies: ${glob}`)
// loca doesn't work outside curly braces (block)