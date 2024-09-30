console.log("Practice Set 8")

// Q1: Different alerts for different button clicks
// Creating div for 3 buttons
/* let div = document.createElement('div')
let btn1 = document.createElement('button')
let btn2 = document.createElement('button')
let btn3 = document.createElement('button')

btn1.innerHTML = 'Click 1'
btn2.innerHTML = 'Click 2'
btn3.innerHTML = 'Click 3'

document.body.appendChild(div)
div.appendChild(btn1)
div.appendChild(btn2)
div.appendChild(btn3)

// Adding event listeners
btn1.addEventListener('click', () => {
    alert('Click 1')
})

btn2.addEventListener('click', () => {
    alert('Click 2')
})

btn3.addEventListener('click', () => {
    alert('Click 3')
}) */

// Q2: Button should redirect to website
document.getElementById('github').addEventListener('click', () => {
    window.location = 'https://www.github.com/'
})

document.getElementById('chatgpt').addEventListener('click', () => {
    window.location = 'https://www.chatgpt.com/'
})

// Q3: Fetch contents of a website every 5 seconds
/* const fetchContent = async (url) => {
    con = await fetch(url);
    let a = await con.json()
    return a;
}

setInterval(async function() {
    let url = 'https://jsonplaceholder.typicode.com/todos/1'
    console.log(await fetchContent(url))
}, 5000) // Works */

// Q4: Use toggle to create a glowing bulb effect
let bookmarks = document.getElementById('bookmarks')
let div1 = document.createElement('div')
let div2 = document.createElement('div')
let div3 = document.createElement('div')
bookmarks.insertAdjacentElement('beforeend', div1)
bookmarks.insertAdjacentElement('beforeend', div2)
bookmarks.insertAdjacentElement('beforeend', div3)
bookmarks.setAttribute('class', 'bms')

div1.setAttribute('class', 'bulb')
div1.setAttribute('id', 'bulb1')

div2.setAttribute('class', 'bulb')
div2.setAttribute('id', 'bulb2')

div3.setAttribute('class', 'bulb')
div3.setAttribute('id', 'bulb3')

// div.innerHTML = 'BULB'
/* (setInterval(() => {
    div1.classList.toggle('bulbcontainerred')
}, 200)

setInterval(() => {
    div2.classList.toggle('bulbcontainerblue')
}, 250)

setInterval(() => {
    div3.classList.toggle('bulbcontainergreen')
}, 300) */
// Uncomment for RGB lighting