console.log("HTML Insertion Methods")

let first = document.getElementsByTagName('div')[1] // Second occurence of div
console.log(first)

first.innerHTML += "<h2>Bling Bling</h2>" // Appends h2 tag to div

let newdiv = document.createElement('div') // Creating new element, div
newdiv.innerHTML = '<p>This is a paragraph</p>' // Adding innerHTML to div

let newdiv1 = document.createElement('div') // Creating new element, div
newdiv1.innerHTML = '<p>This is a paragraph one</p>' // Adding innerHTML to div

// first.appendChild(newdiv1) // Puts new element at end of current element

first.prepend(newdiv1) // Overrides the previous command, puts new element at start of current element, inside

// first.before(newdiv1) // Before the div with ID: first

// first.after(newdiv1) // Can be check in console

let spanID = document.getElementsByTagName('span')[1] // First occurence of span
// spanID.replaceWith(newdiv1) // Replaces second occurence of span with newdiv element

// You can't add same new element in different places

// insertAjaecent (Element, HTML, Text)
console.log('\nInsertAdjacent')

let span3 = document.getElementsByTagName('span')[2]

// Add HTML at desired location with reference to other HTML element, in our case third occurence of Span
span3.insertAdjacentHTML("beforeend", "<p>This is a before end</p>")
span3.insertAdjacentHTML('beforebegin', '<p>This is before begin</p>') // Outside of ID: first, at start
span3.insertAdjacentHTML('afterbegin', '<p>This is after begin</p>') 
span3.insertAdjacentHTML('afterend', '<p>This is after end</p>')

// Insert Element and Text
let newspan = document.createElement('span')
newspan.innerHTML = '<p>This is new span paragraph</p>'

// span3.insertAdjacentElement('beforebegin', newspan)
span3.insertAdjacentElement('beforeend', newspan)
// span3.insertAdjacentElement('afterbegin', newspan)
// span3.insertAdjacentElement('afterend', newspan) 
// New element can only be inserted once -- Works the same as above

span3.insertAdjacentText('afterbegin', 'This is after begin text') // Same principle as above, but for text