/**
 * Created by rishabhkhanna on 12/07/18.
 */
const express = require('express')
const  app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

let todos = [];

app.get('/',(req,res)=>{
    if(todos.length > 0){
        res.send(
            `
        <form method="post" action="/addtodo">
        <input type="text" name="newtodo">
        <input type="submit">
        </form>
        <ul>
            <li>
                ${todos.join("</li><li>")}
                    </li>
        </ul>
        `
        )
    } else {
        res.send(
            `
        <form method="post" action="/addtodo">
        <input type="text" name="newtodo">
        <input type="submit">
        </form>
        `
        )
    }

})



app.get('/addtodo', (req,res)=>{
    todos.push(req.query.newtodo);
    res.redirect("/");
})

app.post('/addtodo', (req,res)=>{
    console.log(req.body);
    console.log("post request");
    res.send("hello post request");
})


app.listen('9999', ()=>{
    console.log("server has started");
})
