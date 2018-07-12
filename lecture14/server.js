/**
 * Created by rishabhkhanna on 12/07/18.
 */
const  app = require('express')();

let todos = ["one task", "two task"];

app.get('/',(req,res)=>{
    res.send(
        `
        <form action="/addtodo">
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
})

app.get('/addtodo', (req,res)=>{
    todos.push(req.query.newtodo);

    res.redirect("/");
})



app.listen('9999', ()=>{
    console.log("server has started");
})
