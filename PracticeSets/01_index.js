console.log('Hello World');

// Q1: Add a string and number
let str = 'benben';
let num =22;
console.log(str + num); // Concatenates

// Q2: Find type of
console.log(typeof (str+num)); // String

// Q3: Updating a const
const a = {
    title : 'president',
    age : 55,
    isLegal : false
}

console.log(a);

a['title'] = 'actor'; // Objects can be updated
console.log(a);

a['isMarried'] = true; // New objects can be added
console.log(a);

// Q4: Word meaning dictionary
const dictionary = {
    hello: 'greetings',
    'world': 'planet', // 
    grief: 'sadness',
    joy: 'happy',
    clan: 'family'
}

console.log(dictionary);
console.log(dictionary.world); // Works the same
console.log(dictionary.clan);