console.log("Inner and Outer HTML")

console.log(document.body.firstElementChild) // Returns document tree
console.dir(document.body.firstElementChild) // Returns objects

console.dir(document.getElementsByTagName('span')[0]) // Same as above

// Element Node and other nodes (Text, Comment)
console.log(document.body.firstChild.nodeName) // First node, can be anything
console.log(document.body.firstElementChild.nodeName) // First element node

// Inner HTML and outer HTML
console.log(spanID2.innerHTML) // Returns HTML inside the element, accessed using ID

console.log(spanID2.outerHTML) // Entire HTML of the tag

// Text Content
console.log(document.body.textContent) // Extracts all text inside given tag location

console.log(document.body.firstElementChild.textContent) // Same as above

console.log(spanID.textContent) // ID access

console.log(spanID.hidden) // Show tag is hidden, doesn't show up in webpage
// Hidden Status can be changed
// spanID.hidden = false // Uncomment to show

// Changing HTML using Inner HTML and Outer HTML
console.log(document.getElementById('spanID2')) // Visible span

spanID2.innerHTML = "Holes of my sweater" // Replaces innerHTML of tag with that ID
spanID2.outerHTML = `<div id = "divID2"><nav>HOLA</nav></div>` // Changes the entire HTML itself

divID2.style.color = 'pink' // Changes color of div text