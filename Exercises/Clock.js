console.log("Clock using JS")

let a = new Date() // Date Object
console.log("New Date: " + a)

let h = a.getHours()
console.log("Hours: " + h)

let m = a.getMinutes()
console.log("Minutes: " + m)

let s = a.getSeconds()
console.log("Seconds: " + s)

let d = a.getDate()
console.log("Date: " + d)

let months = {
    1: 'January', 2: 'February', 8: 'September'
}

const clock = () => {
    let a = new Date()

    let hours = a.getHours()
    let minutes = a.getMinutes()
    let seconds = a.getSeconds()
    let date = a.getDate()
    let month = a.getMonth()
    let meridian = ''

    if (hours > 12) {
        meridian = 'PM'
        hours -= 12
    }
    else {
        meridian = 'AM'
    }

    hours = hours<10?'0'+hours:hours;
    minutes = minutes<10?'0'+minutes:minutes;
    seconds = seconds<10?'0'+seconds:seconds;
    date = date<10?'0'+date:date;
    month = months[month]

    document.getElementById('clock').textContent = `${date} ${month}, ${hours}:${minutes}:${seconds} ${meridian}`
}

setInterval(clock, 1000)