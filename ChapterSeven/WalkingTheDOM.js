console.log("Walking the DOM")

// DOM Tree --> HTML --> Head, Body --> Elements
// Text nodes, Element nodes, Comment nodes

console.log(document.body) // Detailed view in the console
console.log(document.head)
console.log(document.documentElement)

// Accessing children in DOM
console.log(document.body.firstChild) // Gives first child
console.log(document.body.childNodes) // Gives all children
// Assumes text in tags as children too

console.log(document.body.firstElementChild) // Gives Element
console.log(document.head.lastElementChild) // Gives Element

console.log(document.body.childNodes[0]) // Alternate way to access first child
console.log(document.body.childNodes[document.body.childNodes.length - 1]) // Alternate way to access last child

// Parents and Siblings
console.log('\n\nParents and Siblings')

console.log(document.documentElement.parentNode)
console.log(document.body.firstChild.nextSibling) // Next sibling of first child of body
console.log(document.body.firstElementChild.nextElementSibling) // Next element sibling of first child element of body

console.log(document.body.childNodes[1].previousSibling) // Previous sibling