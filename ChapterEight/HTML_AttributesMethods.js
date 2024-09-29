console.log("HTML Attributes and their Methods")

// 2nd Span HTML from index
let spanID2 = document.getElementById('spanID2')
console.log(spanID2)
console.log(spanID2.attributes) // Shows all attributes of element with given ID

// ID is unique identifier
console.log(spanID2.getAttribute("class"))

console.log(spanID2.hasAttribute("class")) // Returns true or false

console.log(spanID2.setAttribute("hidden", "true"))
spanID2.hidden = false

let first = document.getElementById('first')
console.log(first)

console.log(first.removeAttribute("class"))
// The HTML file isn't changed, however the elements appearing on the webpage lose class attribute

// Creating Custom Attributes: data-attribute format

console.log(first.getAttribute('data-name')) // Directly access
console.log(first.dataset.name) // Same as above
console.log(first.dataset.loc)

console.log(spanID2.setAttribute('data-no', '1234')) // Loads in webpage
console.log(spanID2.removeAttribute('id'))