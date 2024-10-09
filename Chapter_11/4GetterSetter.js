console.log('Getter Setter and InstanceOf')

class Car {
    constructor(name) {
        this._name = name
    }
    drive() {
        console.log(this.name + ' is driving')
    }
    get name() {
        return this._name
    }
    set name(newName) {
        this._name = newName
    }
}

let c = new Car('Ferrari')
c.drive()
console.log('Previous: ' + c.name)
c.name = 'Lamborgini'
console.log('Changed: '+ c.name) // Directly calling name and changing name outside class is possible due to getter, setter

// instanceOf
console.log(c instanceof Car) // Returns Boolean 

class SUV extends Car {
    mountains() {
        console.log(this.name + ' has mountains')
    } 
}

let suv = new SUV('Mahindra')
suv.mountains()
console.log("SUV to Car: " + (suv instanceof Car))
console.log("SUV to SUV: " + (suv instanceof SUV)) // Works for child to parent, inheritance
console.log(c instanceof SUV) // Doesn't work from parent to child