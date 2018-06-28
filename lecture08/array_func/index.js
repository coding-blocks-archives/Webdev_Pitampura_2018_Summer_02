/**
 * Created by rishabhkhanna on 28/06/18.
 */
var a = [1,2,3,4,5];

var b = [2,1,3,4, 21, 11, 19];

b.sort(function (a,b) {
    // console.log(`${a}    ${b}`);
    return a - b;
})

var arr2 = b.map(function (value, index, arr) {
    return value*2;
})