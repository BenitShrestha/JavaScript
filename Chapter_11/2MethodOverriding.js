/* console.log("Method Overriding")

class Animal {
    eat(food){
        console.log('\n\nIt is eating ' + food)
    }
    sleep(hrs) {
        console.log('\n\nIt slept for ' + hrs + ' hours')
    }
}

class Dog extends Animal {
    eat(food) {
        console.log('\n\nThe dog is eating ' + food)
    }
    sleep(hrs) {
        super.sleep(hrs)
        console.log('It is a dog')
    }
}

let cat = new Animal()
let piku = new Dog()

cat.eat('fish')
cat.sleep(16)

piku.eat('meat') // Direct override as Dog class had eat method too
piku.sleep(5) // Use of super keyword, parent method is used but with modifications */

// Constructor Overriding
console.log('Constructor Overriding')

class Bottle {
    constructor(volume) {
        this.volume = volume
        // console.log('Bottle constructor, has a volume of ' + volume)
    }
    drink() {
        console.log('I am drinking from the bottle, has a volume of ' + this.volume)
    }
}

class GlassBottle extends Bottle {
    constructor(volume) { // Will override the parent's constructor
        super(volume-10) // To use this.volume, this calls parents constructor
        // This volume change applies to parent only
        this.volumechild = volume
        console.log('Glass Bottle constructor, has a volume of ' + this.volumechild)
    }
    drink() {
        super.drink() // Shows volume set for parent i.e 10 less
        console.log('It is a glass bottle, it is fragile still has a volume of ' + this.volumechild)
    }
}

let gb1 = new GlassBottle(200) // When child has no constructor of its own, parent's is called
gb1.drink() // Method overriding