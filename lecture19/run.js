/**
 * Created by rishabhkhanna on 26/07/18.
 */
const express = require('express');
const app = express();
const model = require('./db/models');
const routes = require("./routes/api");

model.db.sync().then(()=>{
    app.listen(9090, ()=>{
        console.log("magic happens at 9090");
    })
}).catch((e)=>{
    console.log(e);
});