console.log("Arrays");

/* let arr = [1, 2, 3, 'help', true, null, undefined, 'hello'];
console.log(arr)

for (let i = 0; i < arr.length; i++) {
    if ( i % 2 == 0) {
        console.log(arr[i]); // Iterable
    }
}

for ( let k in arr) {
    console.log(k, arr[k]);
}

for (let m in arr) {
    console.log(m); // Displays index only
}

for (let j = 0; j < arr.length; j++) { // Replacing array elements
    arr[j] = j + arr.length; 
}

console.log(arr);
console.log(typeof arr); // Is object */

// Array Methods

let newarr = [23, 44, true, 33, 'bling bling', null]

console.log(newarr.toString(), typeof newarr.toString()); 
console.log(newarr.join(', '));

console.log(newarr.pop()); 
console.log(newarr);

console.log(newarr.push('yapyap'));
console.log(newarr);

console.log(newarr.shift()); // Removes the first element
console.log(newarr);

console.log(newarr.unshift('HOHO')); // Replaces the first element
console.log(newarr);

console.log(newarr.reverse());
console.log(newarr.length); // 6
console.log(delete newarr[1]); // Empty Slot

console.log(newarr.length); // 6
console.log(newarr);

console.log(newarr.concat('hello', 'world'));
let newarray = newarr.concat(['help', 1 ,3, true], newarr, newarr.reverse());
console.log(newarray);

// More array methods

let arr1 = [1, 3 , true, 'blast', 2, null, 'fyoth']
let numarr = [33, 1, 56 ,34, 2, 45, 0]
let numarr1 = [34, 54, 9, 65, 6, 1, 20, -1, 32]
console.log(arr1);

sorted_arr1 = arr1.sort()
console.log(sorted_arr1);

console.log(numarr.sort())
console.log(numarr1);

let compare1 = (a, b) => {
    return a - b // Takes 2 elements, subtracts them, if positive a will be sorted after b
}

let compare2 = (a, b) => {
    return b - a // Takes 2 elements, subtracts them, if negative b is sorted after a
}

let abscompare = (a, b) => {
    return Math.abs(a - b)
}

let evenoddcompare = (a, b) => {
    if ((a % 2 == 0) && (b % 2 != 0)) return 1; // Positive, b is sorted first (Odd)
    if ((a % 2 != 0) && (b % 2 == 0)) return -1; // Negative, a is sorted first (Even)
}

console.log(numarr1.sort(compare1)); // Ascending
console.log(numarr1.sort(compare2)); // Descending
console.log(numarr1.sort(abscompare)); // Absolute sort
console.log(numarr1.sort(evenoddcompare)); // Even Odd 


console.log("Test-Splice: ", numarr1);
spliced_arr = numarr1.splice(2, 4); // Index to start from and No. of elements to remove
console.log("Spliced: ", spliced_arr);
console.log("After: ", numarr1); // Main array is changed

numarr1 = numarr1.concat([1, 6, 89, 45, 999])
console.log("\nTest-Slice: ", numarr1);
console.log("Sliced: ", numarr1.slice(0, 2)); // Index range, Stops at 2nd last element
console.log("After: ", numarr1); // Doesn't actually affect the main array

console.log("\nTest-Rev: ", numarr1);
console.log("Reversed: ", numarr1.reverse());
console.log("After: ", numarr1); // Main array is changed

// Using Loops with Array
console.log("\n");
console.log("Using Loops with Array");

let A = [12, 45, 54, 23, 72, 65, 27, 712]
console.log(A);

// For Each
A.forEach(element => {
    console.log(element**2)
}) // For each element perform the give operation 

let B = A.forEach(id => {
    return id * 9
})
console.log("\n", B) // Undefined

// Array From 
let C  = 'dingleberry'
console.log(Array.from(C)) // Changes string to array

// For of loop
console.log('\nFor of Loop:')
for (let element of A) {
    console.log(element)
}

// For in loop
console.log('\nFor in Loop:')
for (let id in A) {
    console.log(id, ":", A[id])
}

console.log('\nFor in Loop:')
for (let id in C) {
    console.log(id, ":", C[id])
}

// Map, Filter, Reduce

console.log('\nMap:') // Applying specific function to the entire list
let D = A.map((i) => {
    return i * 9
})
console.log(D)

let names = ['bling', 'grew', 'post', 'get', 'plaster']
names.map((name) => {
    console.log(name[0].toUpperCase() + name.slice(1)) // Uppercase first letter and append from second letter
})

console.log('\nFilter: ') // Advanced Sorting
let numbers = [12, 45, 84, 90, 34, 78, 89, 342, 11]
let odd = numbers.filter((number) => {
    return (number % 2 != 0)
})
console.log(odd)

let l_names = names.filter((name) => {
    if (name.includes('l')) {
        return name
    }
})
console.log(l_names)

console.log('\nReduce: ') // Operate on elements of the list
let addNumbers = numbers.reduce((number1, number2) => { // Accumulator, Current
    return number1 + number2
})

console.log(addNumbers, '\n')

let numbers1 = [1, 2, 3] 
let singleAdd = numbers1.reduce((number) => { // Squaring
    return number + number 
})
console.log(singleAdd) // Use reduce with 2 parameters