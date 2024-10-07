console.log("Changing HTML Classes")

let span3 = document.getElementsByTagName("span")[2]
let test = document.getElementById('test')

span3.className = 'red' // Applies class to specified element
test.className = 'green-text pink' // Mutiples classes

console.log(span3.classList) // All associated classes

test.classList.add('movement') // Adds class 
test.classList.remove('pink') // Removes class

span3.classList.toggle('red') // Adds class if it is absent, removes if it is present

console.log(test.classList.contains('movement')) // Returns true or false
// Alert to toggle using setTimeout
alert('Will be pink now')
span3.classList.toggle('pink')

setTimeout(function() {
    alert(`Won't be pink now`)
    span3.classList.toggle('pink')
}, 3000)