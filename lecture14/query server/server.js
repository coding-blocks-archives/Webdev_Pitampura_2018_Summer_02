/**
 * Created by rishabhkhanna on 12/07/18.
 */
const express = require('express');
const app = express();

// app here is our server

// http handler functions
app.get('/', (req, res)=>{
    // cannot do this
    // http request are stateless
    // res.send("Hello");
    console.log(req.query);
    if(typeof req.query.p == 'undefined'){
        req.query.p = "nothing"
    }

    if(typeof  req.query.q == 'undefined'){
        req.query.q = "knowhere"
    }
    res.send(`Are you looking for ${req.query.p} in ${req.query.q} `);
})

app.get('/add',(req,res)=>{
    console.log(req.query.a);
    console.log(req.query.b);
    res.send(parseInt(req.query.a )+ parseInt(req.query.b) + "");
})

app.get('/something', (req,res)=>{
    res.send("<h1>Something</h1>");
})

app.listen(9090, ()=>{
    console.log('Server has started at http://localhost:9090/');
})
