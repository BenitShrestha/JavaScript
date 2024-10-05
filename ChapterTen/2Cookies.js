console.log("Cookies");

console.log("Before: " + document.cookie);

// Set the cookie with SameSite=None and Secure
document.cookie = "helper=usa; SameSite=None; Secure";
document.cookie = "helper=canada; SameSite=None; Secure"; // Keys must have unique values, is updated

// let key = prompt("Enter key: ")
// let value = prompt("Enter value: ")
// document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}; SameSite=None; Secure`

// In case of using symbols and non-alphabetic characters, use encodeURIComponent()
// Keys and values get encoded, to decode use decodeURIComponent()

console.log("Decoded Key: " + decodeURIComponent('%26%26*%3D'))
console.log("Decoded Value: " + decodeURIComponent('*%5E%245'))

// Set Call 
document.cookie = "helper1=usa1; helper2=usa2; helper3=usa3; SameSite=None; Secure"; // Only the first one is recognized
document.cookie = "user=btn; path=\; expires=Thu, 05 Oct 2024 00: 00: 00 GMT; SameSite=None; Secure";
// Path explains where the cookie is accessible across, \ means available across all of the directory, check in 1FetchAPI.js
// Expires is when the cookie is no longer available

console.log("After: " + document.cookie);   