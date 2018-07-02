let lib;
if (typeof window === 'undefined') {
    lib = require('./lib')
} else {
    lib = window
}

console.log(lib.isAdult(10))
console.log(lib.isAdult(20))
