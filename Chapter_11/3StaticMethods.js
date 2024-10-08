console.log("Static Methods")

// Static methods aren't bound to any objects, only the class itself can access it, use for interclass communication
class Person {
    constructor(name) {
        this.name = name 
        console.log("Constructor called for " + name)
    }
    print() {
        console.log('The name is ' + Person.toupper(this.name)) // Can only be accessed by the class
    }
    upper(){
        return this.name.charAt(0).toUpperCase() + this.name.slice(1)
    }
    static toupper(name) {
        return name.charAt(0).toUpperCase() + name.slice(1)
    }
}

let p1 = new Person('benben') // 2 Step
console.log(p1.upper())

p1.print() // Single process