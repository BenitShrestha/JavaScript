console.log("Practice Set 10 - Fetch API, Local Storage, Session Storage")

// Q1: Use a free API to get live data
// fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json()).then((response) => console.log(response))

/* let url = 'https://dog.ceo/api/breed/mastiff/images';
fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        console.log(response)
        let images = response.message
        for ( let i = 0; i < images.length; i++) {
            setTimeout(() => {
                document.body.style.backgroundImage = `url(${images[i]})`
                document.body.style.backgroundSize = 'cover'
                document.body.style.backgroundPosition = 'center'
                document.body.style.backgroundRepeat = 'no-repeat'
                console.log(images[i])
            }, i * 2000)
        }
    }) */
// Try mastiff, hound etc
// Try bootstrap

// Q2:  Note taking to local storage
/*let count = 0
do {
    count += 1
    alert('Type stop to stop')
    var note = prompt(count + ". Enter a note: ")
    if (note != 'stop') {
        localStorage.setItem(count, note)
    }
} while(note != 'stop') */

// Q3: Note save but shows only 1 note, shows up before asking and can be deleted
let note = ''
alert('Current Note: ' + localStorage.getItem('note'))
note = prompt('Enter a note: ')
localStorage.setItem('note', note)

let del = prompt('Do you want to delete the note?(y/n)')
if (del == 'y') {
    localStorage.removeItem('note')
}
else if (del == 'n') {
    alert('Okay')
}
else {
    alert('Error')
}
