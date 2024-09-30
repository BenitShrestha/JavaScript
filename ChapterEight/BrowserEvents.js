console.log("Browser Events");

// Access the second button
let btn2 = document.getElementsByTagName('button')[1]

/* btn2.onclick = () => {
    console.log('Second Button Clicked')
} 

btn2.onmouseenter = () => {
    console.log('Second Button Mouse Enter') // When mouse is hovered over the button
} */

// Add and remove event listeners
btn2.addEventListener('click', () => {
    console.log('Direct implementation')
}) // addEventListener('event', handler-function)

// Using function object
let x = function(event) { // Event is event object
    /* console.log('Event started')
    console.log('Event Target:' + event.target)
    console.log('Event Type: ' + event.type) 
    console.log(event.clientX, event.clientY) // Coordinates of where the event was triggered
    console.log(event) // All properties */
    console.log('Second Button clicked')
}
btn2.addEventListener('click', x) // All related events work
btn2.removeEventListener('click', x) // Remove event listener, but the direct implementation above runs fine
let btn3 = document.createElement('button')
btn3.innerHTML = 'Click 3'

let btndiv = document.getElementById('btndiv')
btndiv.appendChild(btn3)

let y = function(event) {
    console.log('Third Button clicked')
}

btn3.addEventListener('click', y)

let newdiv = document.createElement('div')
newdiv.innerHTML = '<button id = "btn4">Click 4</button>'

btndiv.insertAdjacentElement('afterend', newdiv)

let btn4 = document.getElementById("btn4")
let z = function(e) {
    console.log('Fourth Button clicked')
}

let a = (e) => {
    alert('YOU CLICKED THE FOUTH BUTTON!')
}

let conf = confirm("Do you want to click fourth button?")

if (conf) { // If confirmation was yes, events assigned to Click 4 button
    btn4.addEventListener('click', z)
    btn4.addEventListener('click', a)
}

else {
    btn4.removeEventListener('click', z)
}