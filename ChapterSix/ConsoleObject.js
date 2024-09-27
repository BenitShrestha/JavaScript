console.log("Console Objects")

// Console Methods
console.log('List: ', console)

// Console Methods
console.log('Error: ')
console.error("This is a big Error")

console.log('\nWarn: ')
console.warn("This is a big warning")

console.log('\nAssert (Correct): ')
console.log(5 == '5')
console.assert(5 == '5')

console.log('\nAssert (Incorrect): ')
console.log(5 === '5')
console.assert(5 === '5')

obj = {1: 'index', 2: 'middle', 3: 'pinky', 4: 'thumb'}
console.log('\nTable: ')
console.table(obj)

console.log('\nInfo: ')
console.info("This is a important information")

console.log('\nTime & TimeEnd: ')
console.time('Time for For Loop')
for (let i = 0; i < 1000; i++) {
    console.log('*')
}
console.timeEnd('Time for For Loop')

console.time('Time for While Loop')
let j = 0
while (j != 1000) {
    console.log('*')
    j++
}
console.timeEnd('Time for While Loop')

// Check output of console.log(console) for more methods