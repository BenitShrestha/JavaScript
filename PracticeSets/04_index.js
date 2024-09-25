console.log("Practice Set 4");

// Q1: Check length
console.log('help\"'.length);

// Q2: Check out includes, startswith and endswith

let random = 'Authentication';
console.log(random.includes("cat")); // Returns boolean

let list_ = ['cat', 'dog', 'a', 'b'];
console.log(list_.join("")); // Joins elements of a list to convert into a string

console.log('Dingonuts'.includes('Ding')? 'yes': 'no');

console.log("Radpad".startsWith("Rad"));
console.log('hellraiser'.endsWith("ing"));

// Q3: Extract specific string
let statement = 'he ended up paying a grand sum of 5000 in 2 days';
console.log(statement.indexOf('5000'));
console.log(statement.slice(34, 39)); // Extract 5000 from given string

let newstat = 'this costs 400'
console.log(newstat.slice('this costs '.length)); // Starts from length as index
console.log('this costs '.length);
console.log(newstat.slice(11)); 

// Q4: Change binit to benit

// By replacing
console.log('old ' + 'benit');
console.log('new ' + 'benit'.replace('e', 'i'));

// Split and Join 
charlist = 'benit'.split('');
console.log(charlist.indexOf('e'));

charlist[1] = 'i';
console.log(charlist.join(''));