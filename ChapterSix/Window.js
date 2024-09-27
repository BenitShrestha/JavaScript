console.log("Window - DOM, BOM, JS Core")
console.log('DOM - Document Object Model\nBOM - Browser Object Model\nJS Core - JavaScript Core')

// DOM treats whole HTML page as a JS object
console.log(window) // Window is a global variable
window.console.log(window) // Does the same thing

console.log(document) // Document - Controls the HTML page
// Show the properties of the webpage, can be used to update

document.write('GO')
document.body.style.background = 'pink' // Done in JS, so user can control it

// BOM - Alert, Prompt, Confirm
location.href = 'https://github.com/BenitShrestha?tab=overview&from=2024-09-01&to=2024-09-26' // Changes website to link given