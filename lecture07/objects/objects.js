/**
 * Created by rishabhkhanna on 25/06/18.
 */
var a = {
    android: "Arnav Gupta",
    web: "Rishabh Khanna",
    algo: "Prateek Narang",
}

var b = {
    p: "some value",
    q: "some other value",
    r: {
        a: "some value",
        b: "value 2",
        c: {
            var: "value1"
        }
    },
    s: function () {
        console.log("Inside s which is inside b");
    },
    t: true
}


console.log(b.s());