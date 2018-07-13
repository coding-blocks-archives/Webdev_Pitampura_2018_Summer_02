/**
 * Created by rishabhkhanna on 13/07/18.
 */
const express = require('express');
const routes = express.Router();

var notes = ["one", "two"]


routes.get("/", (req,res)=>{
    res.send(notes);
})

routes.post("/addNewNotes", (req,res)=>{
    notes.push(req.body.task);
    console.log(req);
    res.redirect(req.baseUrl);
})

module.exports = routes;
