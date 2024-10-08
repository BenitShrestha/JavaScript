/* console.log('Object Oriented Programming')

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

// Old way of doing OOP, now Classes and Objects are preferred */

/* console.log('Classes and Objects')

class MovieTicket {
    // Method 1
    submit() {
        alert(`${this.name} with ID: ${this.id} has submitted for the ticket`)
    }

    // Method 2
    cancel() {
        alert('You have cancelled the ticket ' + this.name)
    }

    // Method 3
    namez(aname, regnum) {
        this.name = aname
        this.id = regnum
    }
}

let guy1 = new MovieTicket() // Creates an object
let guy2 = new MovieTicket()

guy1.namez('Guy1', 2222)
guy2.namez('Guy2', 3333)

guy1.submit()
guy2.submit()

guy2.cancel() */

console.log('Constructors')

class netflix {
    /* constructor() { // Without argument
        console.log('Constructor is called') // Runs everything an object is created
    } */ 

    constructor(name, id, time) { // With arguments
        console.log(`Constructor called for ID: ${id} with user having Name: ${name}`)
        if (time .length > 2) {
            console.log('Choose upto 2 time slots only') // Time slot is undefined in this case
        }
        else {
            this.time = [time]
        }
        this.name = name
        this.id = id
    }

    preview() {
        console.log(`\n\nPreviewing...\nName: ${this.name}\nID: ${this.id}\nTime Slot: ${this.time}`)
    }
    cancel() {
        this.time = 0
        console.log(`\n\nCancelling...\nName: ${this.name}\nID: ${this.id}\nTime Slot: ${this.time}`)
    }
}

let net1 = new netflix('Test1', 1234, ['10:00', ' 11:00', ' 12:00'])
let net2 = new netflix('Guy3', 4444, ['10:00', ' 11:00'])

net1.preview()
net2.preview()

net1.cancel() // Reset timeslot to 0 when cancelling
net2.cancel()