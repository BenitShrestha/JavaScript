console.log('Hackerman')

let namez = prompt("Enter a name to start the operation: ")

let initiate = async () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(namez + " has been found, ready to initiate hacking!")
        }, 2000)
    })
}

let hacking = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Credentials and login details of ' + namez + ' found!')
        }, 3000)
    })
}

let complete = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(namez + ' hacked! User details returning to main server!')
        }, 5000)
    })
}

let hackerman = document.getElementById('hackerman')
let h2 = document.createElement('h2')
h2.innerText = 'Hello'
let mainz = async () => {
    let initiate_a = await initiate()
    hackerman.innerHTML = initiate_a
    let hacking_a = await hacking()
    hackerman.innerHTML = hacking_a
    let complete_a = await complete()
    hackerman.innerHTML = complete_a
    hackerman.innerHTML = 'Hacking Complete👌'
}

mainz()
hackerman.appendChild(h2)