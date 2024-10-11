console.log("Practice Set 11 - OOP")

// Q1: Complex Numbers
class ComplexNumbers {
    constructor(real, imaginary) {
        this._real = real
        this._imaginary = imaginary
        this.string = "("+ real + " + " + imaginary + "i" + ")"
    }

    preview() {
        console.log("The complex number was " + this.string)
    }

    add(num1, num2) {
        this.rans = num1.real + num2.real
        this.ians = num1.imaginary + num2.imaginary
        this.res = "("+ this.rans + " + " + this.ians + "i" + ")"
        return this.res // Need to use this.var for any variable inside class
    }

    sub(num) {
        this.real = this.real - num.real
        this.imaginary = this.imaginary - num.imaginary
        let subans = new ComplexNumbers(this.real, this.imaginary)
        console.log('The result of subtraction:')
        return subans.preview()
    }

    get real() {
        return this._real
    }

    get imaginary() {
        return this._imaginary
    }

    set real(newReal) {
        this._real = newReal
    }

    set imaginary(newImaginary) {
        this._imaginary = newImaginary
    }
}

let cn = new ComplexNumbers(2, 4)
let cn1 = new ComplexNumbers(8, 9)
cn.preview()
cn1.preview()
console.log("The result of addition is " + cn.add(cn, cn1))
cn.sub(cn1)

// Getter Setter
console.log('Getting: ' + cn.real + ', ' + cn.imaginary)
// Setting
cn.real = 12
cn.imaginary = 22
console.log('After setting, Getting: ' + cn.real + ', ' + cn.imaginary)


// Q2: Student inherited from Person, check method overriding
/* class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    eats() {
        console.log(this.name + " eats")
    }

    sleep() {
        console.log(this.name + " of " + this.age + " sleeps")
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age)
        this.grade = grade
    }

    study() {
        console.log(this.name + " studies in " + this.grade)
    }

    sleep() {
        super.sleep()
        console.log("He is in " + this.grade + " grade")
    }
}

let per1 = new Person('ramil', 66)
let stud1 = new Student('jamal', 12, 8)

per1.sleep()

stud1.study()
stud1.sleep() // Overriding

console.log("Stud1 to Student: " +( stud1 instanceof Student))
console.log("Stud1 to Person: " + (stud1 instanceof Person)) */