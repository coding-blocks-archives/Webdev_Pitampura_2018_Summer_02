/**
 * Created by rishabhkhanna on 06/07/18.
 */
const express = require("express");
const app = express();

app.get('/', (req,res)=>{
    console.log("req generated");
    res.send("<h1>hello from server</h1>");
})

app.listen(9090, ()=>{
    console.log("server has started");
})

