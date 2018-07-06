/**
 * Created by rishabhkhanna on 06/07/18.
 */
const fs = require('fs');
const re = require('./process');

var a ;
fs.readFile("./read.txt", (err, data)=>{
    if (err) throw err;

    console.log(data);

    fs.writeFile("./writtenThis.txt", data, ()=>{
        console.log("Data Written");
    })

})

