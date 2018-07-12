/**
 * Created by rishabhkhanna on 12/07/18.
 */
const express = require('express');
const app = express();

// app here is our server

app.get('/', (req, res)=>{
    console.log(req.query);
    if(typeof req.query.p == 'undefined'){
        req.query.p = "nothing"
    }

    if(typeof  req.query.q == 'undefined'){
        req.query.q = "knowhere"
    }
    res.send(`Are you looking for ${req.query.p} in ${req.query.q} `);
})

app.get('/something', (req,res)=>{
    res.send("<h1>Something</h1>");
})

app.listen(9090, ()=>{
    console.log("Server has started");
})
