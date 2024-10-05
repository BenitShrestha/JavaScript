console.log("Local Storage" )

// Can be found by navigating to dev tools > application > local storage, or search for storage tab
// Unique to cookies as it doesn't send data to server for every request
// Doesn't get deleted when the browser is closed or refreshed 

localStorage.setItem('key1', 'value1')

let key = prompt("Enter a key: ")
let value = prompt("Enter a value: ")

localStorage.setItem(key, value)
console.log(localStorage.getItem(key)) // Returns value

// localStorage.removeItem('key1') // (key), removes the key-value pair

console.log(`Get Item: ${localStorage.getItem('k3')}`) // Returns value

console.log(`Index 2: ${localStorage.key(2)}`) // key(index), order of key-value pair

// console.log('Key at index 1 removed: ' + localStorage.getItem(localStorage.key(1))) // Remove key-value pair at a specific index
// localStorage.remove(localStorage.key(1))

// localStorage.clear() // Clears the storage

console.log(localStorage.length)

// Other methods - Additional Info: The key-value pair must be a string, JSON methods (stringify & parse) can be used
localStorage.one = 1 // Directly assign key-value pair
alert(localStorage.one)
delete localStorage.one

// Session Storage
