/**
 * Created by rishabhkhanna on 25/06/18.
 */
//Higher order function
function outer() {
    return "name";
}

function inner(arg) {
    // console.log("Hello " + arg());
    function insideInner() {
        console.log("hello user");
    }
    return insideInner;
}

var a = inner(outer);
a();