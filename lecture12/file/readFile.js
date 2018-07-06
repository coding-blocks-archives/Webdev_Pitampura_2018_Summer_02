/**
 * Created by rishabhkhanna on 06/07/18.
 */
const fs = require('fs');

var data = fs.readFileSync("read.txt")

fs.writeFileSync("writeSyn.txt", data);

console.log("written");

console.log(data.toString());
