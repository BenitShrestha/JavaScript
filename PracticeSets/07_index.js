console.log("Practice Set 7 - DOM Manipulation")

// Q1: Change color of first element of navbar
console.log(document.body.childNodes)
let first = document.body.childNodes[3].firstElementChild.firstElementChild

first.style.color ='red'

// Alternate Way
document.getElementsByTagName('nav')[0].firstElementChild.firstElementChild.style.color = 'blue'

// Q2: Check if table without tbody tag has tbody in view source page
/* In elements of inspect window, tbody is present although HTML code doesn't have it, neither does the source page. 
   This reason behind this is Browser Auto Correction. */

// Q3: Create element with 3 children, change color of first and last child to green 
let div = document.getElementsByTagName('div')[0]
div.firstElementChild.style.color = 'green'
div.lastElementChild.style.color = 'green'

// Q4: All <li> tags to Cyan
console.log(Array.from(document.getElementsByTagName('li'))) // Makes an array of <li> tags

Array.from(document.getElementsByTagName('li')).forEach((element) => {
    console.log(element)
})

Array.from(document.getElementsByTagName('li')).forEach((element) => {
    element.style.color = 'cyan'
    element.style.background = 'black'
}) // To apply same CSS to all elements, Array.from needed with forEach()

// Q5: Which method among: matches, closest, contains is best for searching the farthest ancestor?
// Answer: None of the above.