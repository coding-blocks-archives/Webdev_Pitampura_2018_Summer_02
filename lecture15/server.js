/**
 * Created by rishabhkhanna on 13/07/18.
 */
const express = require('express');
const app = express();
const taskRoute = require("./tasks.js");
const notesRoute = require("./notes.js");



app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/tasks", taskRoute);
app.use("/notes", notesRoute);
app.use("/", express.static(__dirname + "/public_static"));





app.listen(9090, ()=>{
    console.log("Server started at port 9090");
})