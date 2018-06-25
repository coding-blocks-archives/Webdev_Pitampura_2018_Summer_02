/**
 * Created by rishabhkhanna on 25/06/18.
 */

function fun1() {
    console.log("fun1");
    console.log(a);
    console.log(func1);
    console.log(fun2);
}
fun1();

var a = 10;
// proper functions
function fun2() {
    var b;
    console.log("fun2");
    console.log(a);
    console.log(b)
    b = 10;
}
fun2();


// variable functions
var func1 = function () {
    console.log("func1");
}

var func2 = function () {
    console.log("func2");
}

