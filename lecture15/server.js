/**
 * Created by rishabhkhanna on 13/07/18.
 */
const express = require('express');
const app = express();

function m1(req,res,next) {
    console.log("called function m1");
    next();
}
function m2(req,res,next) {
    console.log("called function m2");
    next();
}
function m3(req,res,next) {
    console.log("called function m3");
    // console.log(req);
    if(req.originalUrl.startsWith('/admin')){
        res.send("Unauthorized user");
    }else{
        next();
    }

}
function m4(req,res,next) {
    console.log("called function m4");
    next();
}

function m5(req, res, next) {
    console.log("called the coding path");

    // next()
    res.send("coding path");
}

app.use(m1);
app.use(m2);
app.use("/coding", m5);
app.use(m3);
app.use(m4);

app.get('/something', (req,res)=>{
    console.log("something");
    res.send("something called");
})


app.use("/name/rishabh", (req,res, next)=>{
   console.log("Rishabh name called");
   next();
})

app.use("/name", (req, res,next)=>{
    console.log("name with app.use called");
    next();
})


app.get('/name', (req,res)=>{
    console.log("name");
    res.send("name called");

})



app.use((req, res, next)=>{
    res.send("404 page not found");
})


app.listen(4343, ()=>{
    console.log("server has started !!");
})