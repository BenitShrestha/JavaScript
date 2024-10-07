console.log('Object Oriented Programming')

// Abstraction, Encapsulation, Inheritance and Polymorphism

// Prototype and __proto__ in JS
let a = {
    name: 'benit',
    address: 'sankhu',
    cellno: 999999999,
    run: () => alert('This is self run') // If method is available in object itself, that will run
}
console.log(a) // Has prototype methods: toString, valueof
console.log(a.toString())
console.log(a.valueOf())

// Set Prototype
let p = {
    run: () => alert('This is run')
}

a.__proto__ = p // Set the prototype of a to p (run)
// a.run()

// Setting new prototype to p
p.__proto__ = {
    namez: 'hellz'
}

a.__proto__ = p

console.log(a.name)
console.log(a.namez) // Same effect
// Prototypes follow a chain, in case of a.run(), checks itself first, then other prototypes 'a' is linked to

// Old way of doing OOP, now Classes and Objects are preferred