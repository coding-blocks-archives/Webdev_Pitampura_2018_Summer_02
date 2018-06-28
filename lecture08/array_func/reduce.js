/**
 * Created by rishabhkhanna on 28/06/18.
 */
a = [1,2,3,4,5,6];

var ans = a.reduce(function (accum, value, index, arr) {
    console.log(`accum: ${accum} , value: ${value}`);
    return accum * value;
}, -1)

