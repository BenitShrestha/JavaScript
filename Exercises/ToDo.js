console.log('ToDo List using Local Storage')

// localStorage.clear()`
// localStorage.setItem('test1', 'test1')
let info 
do {
    info = prompt('1: View  2: Add  3: Delete  4: Exit\nEnter Command: ')
    if (info == 1) {
        console.log(localStorage)
    }
    else if (info == 2) {
        let key = prompt('Enter task number to add: ')
        let value = prompt('Enter task: ')
        localStorage.setItem(`Task ${key}`, value)
    }
    else if (info == 3) {
        let key = prompt('Enter task number to delete: ')
        localStorage.removeItem(key)
    }
    else if (info == 4) {
        console.log('Exiting...')
    }
    else {
        console.log('Invalid Input')
    }
}while(info != 4)