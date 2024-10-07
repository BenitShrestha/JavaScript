console.log('Searching the DOM')

let cardtitle = document.getElementsByClassName('card-title') // Returns entire object

console.log(cardtitle) // Object, indexed
console.log(typeof cardtitle)
cardtitle[0].style.background = 'pink'
cardtitle[0].style.color = 'white'

let cardname = document.getElementById('card-name') // Returns one element only
console.log(cardname)
cardname.style.color = 'red'

let cardtitles = document.querySelectorAll('.card-title') // CSS Selector, Returns an object
// let cardtitles = document.getElementsByClassName('#card-title') // Id
console.log(cardtitles, typeof cardtitles)
// Components with same class can be manipulated in this way
cardtitles[1].style.color = 'brown'
cardtitles[2].style.background = 'green'

document.querySelector('.secondpara').style.color = 'silver' // More efficient way to select elemnts

// By Tag Name
console.log(document.getElementsByTagName('p'))
console.log(document.querySelectorAll('.card')[1].getElementsByTagName('a')) // Selects all links in card, document.singleElement. [Not objects]

console.log(document.getElementsByName('input'))

// Matches, Closest and Contains
console.log('\n\nMatches, Closest and Contains')

// Matches - Returns boolean
let div_card = document.getElementById('div-card')
console.log(div_card)

console.log(div_card.matches('#div-card')) // True
console.log(cardname.matches('#div-card')) // False

// Closest - Returns HTML code
let divID = document.getElementById('divID')
console.log(divID)

let spanID = document.getElementById('spanID')
console.log(spanID)

let hID = document.getElementById('hID')
console.log(hID)

console.log(divID.matches('.divClass')) // True, checks if element matches CSS Selector

console.log(hID.closest('#divID')) // Returns closest parent that matches CSS Selector
// Brings up the HTML in console if the elements are related (Descendant.closest('Ancestor))

console.log(hID.closest('#div-card')) // Returns null since no relation 

// Contains - Returns boolean
console.log(spanID.contains(spanID)) // Both must be element, this returns true
console.log(spanID.contains(hID)) // True, H1 lies inside Span

console.log(hID.contains(spanID)) // False