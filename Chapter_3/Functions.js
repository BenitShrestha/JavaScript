console.log("Functions")

function myfunc(a, b) {
    console.log(a + b)
}

myfunc('string ', 6)

function newfunc(x) {
    return x**x
}

let ans = newfunc(7)
console.log(ans)

// Arrow Function 

const arrowfunc = (a, b) => {
    console.log(a, b)
}

arrowfunc('peepee', 99)

let otherfunc = (y, z) => {
    return y - z
}

const a = otherfunc(12, 34)
console.log(a)