console.log("Walking the DOM")

// DOM Tree --> HTML --> Head, Body --> Elements
// Text nodes, Element nodes, Comment nodes

/* console.log(document.body) // Detailed view in the console
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

console.log(document.body.childNodes[1].previousSibling) // Previous sibling */

// Element only navigation
/* console.log("\nElement only Navigation")

// Nodes - Text, Comment, Elements, Spaces too
// Elements - Tags

console.log(document.body.childNodes) // Space counted as Text node
console.log(document.body.childElementCount)

let secondChild_body = document.body.childNodes[5]
console.log(secondChild_body)
console.log(secondChild_body.childNodes) // Child of second child element (nav)

document.body.firstElementChild.style.background = 'pink'
document.body.childNodes[5].childNodes[1].childNodes[1].style.background = 'pink' // Makes Home pink, check HTML file\
// CSS manipulation from JS

let li_aboutme = document.body.childNodes[5].childNodes[1].childNodes[3]
console.log(li_aboutme)
li_aboutme.style.background = 'yellow'

// A lot of hierarchy needs to be understood for element only navigation */

// Table Navigation -- Linked to table.html
console.log('\nTable Navigation')

// let table = document.querySelector('table') // Same as below
let table = document.body.firstElementChild.firstElementChild
console.log(table)

console.log('Rows: ')
console.log(table.rows) 

console.log("Columns: ")
console.log(table.columns) // Doesn't work

console.log(table.tHead) // Top row, header
console.log(table.tFoot) // Bottom row, footer

console.log(table.tBodies) // Table body

let tablerow = document.body.firstElementChild.firstElementChild.rows[1] // Second row, below header
console.log(tablerow)

console.log(tablerow.cells) // Individual Cells

console.log('Section Row Index')
console.log(tablerow.sectionRowIndex) // Index of row, excludes the header: 0
console.log(document.getElementById('row3').sectionRowIndex) // Lies below the row above: 1
console.log(document.getElementById('table-header').sectionRowIndex) // Is zero as well

console.log('Row Index')
console.log(tablerow.rowIndex) // Overall row index

console.log('Cell Index')
cells_in_row = tablerow.cells
console.log(cells_in_row) // Individual cells
console.log(cells_in_row[0]) // First cell
console.log(cells_in_row[2].cellIndex) // Gives index of cell at that position

console.log('Type of Document: ' + typeof document + "\nType of Window: " + typeof window) // Both objects