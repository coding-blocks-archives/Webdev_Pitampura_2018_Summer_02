/**
 * Created by rishabhkhanna on 26/07/18.
 */
const route = require('express').Router();
const studentController = require("../../controller/student");

route.get("/", async (req,res)=>{
    res.send(await studentController.getAllStudents());
})

route.post("/insert", async (req,res)=>{

    res.send( await studentController.insertStudent(req.body.name))
})
module.exports = route;
