let x = 'greet'
function greeter(greeting) {
    
    function greet(name) {
        console.log(eval(x + 'ing') + ' ' + name)
    }

    return greet
}
// Eval is Evil

const gmGreeter = greeter('Good Morning')
gmGreeter('Harry')