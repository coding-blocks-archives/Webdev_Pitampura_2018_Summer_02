/**
 * Created by rishabhkhanna on 25/06/18.
 */
var a = {
    b: "value",
    c: "value",
    d: {
        p: function () {
            console.log(this);
        },
        d: function () {

        }
    },
    h: console.log(this)
    ,
    e: function () {
        console.log(this.b);
    },
    f: function () {
        console.log(this);
    }
}


// function hence(){
//   console.log(a.d.e());
// }
//
// var b =  {
//     run: function (){
//         console.log(a.d.a);
//     }
// }

console.log(this);