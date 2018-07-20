/**
 * Created by rishabhkhanna on 20/07/18.
 */
const express = require('express');
const app = express();

app.set("view engine", "hbs");
// app.set("views", "pathToFolder");

app.get('/', (req,res)=>{
        res.render("index", {body: "Hello coding blocks"})
    // res.send("hello world")
})

app.listen(9090, ()=>{
    console.log("magic happens at port 9090");
})
