/**
 * Created by rishabhkhanna on 13/07/18.
 */
const express = require('express');
const routes = express.Router();

routes.get("/", (req,res)=>{
    console.log("tasks/ called");
    res.send("tasks route");
})

routes.get("/addNewTask" ,(req,res)=>{
    console.log("/addNewTask called");
    res.send("new task route");
})


module.exports = routes;