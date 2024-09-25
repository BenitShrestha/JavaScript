console.log("Strings")

// Backtics
let name = 'Benit';
let surname = 'Shrestha';

console.log(`Hello, my name is ${name} ${surname}`)

// Escape Sequences

console.log("Hello World");
console.log("Hello\nWorld");
console.log("Hello\tWorld");
console.log("Hello\rWorld"); // Carriage Return, Overwrites anything ahead of \r
console.log("Hello \"World\"");
console.log("Hello \'World\'");
console.log("Hello \`World\`");

// String Methods
let str = "Serialization";

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.slice(2,4)); // Starts from 2 ends at 3, just less than 4
console.log(str.slice(5)); // Starts from 5 and goes till end
console.log(str.replace('Ser', 'Per')); // Case sensitive

let strAdd = 'gogo'
console.log(str.concat('-', strAdd));
let whitespace = '  hahah   ';
console.log(whitespace);
console.log(whitespace.trim()); // Removes whitespace

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

// String immutable
console.log(str.charAt(0)); // Shows character a given index
console.log(str.split('')); // Splits the string into an array

// List is mutable
strlist = str.split('')
console.log(strlist[3])
strlist[3] = 'p'
console.log(strlist[3])