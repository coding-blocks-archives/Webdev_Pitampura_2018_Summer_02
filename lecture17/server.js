/**
 * Created by rishabhkhanna on 20/07/18.
 */
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("view engine", "hbs");
// app.set("views", "pathToFolder");
var todos = [
    {task: "first task"}
];
app.get('/', (req,res)=>{
        res.render("index", {
            todos:todos
        })
})

app.post('/', (req,res)=>{
    todos.push({task: req.body.task});
    res.redirect("/");
})

app.post("/api", (req,res)=>{
    todos.push({task: req.body.task})
    res.send(todos);
})

app.use("/static", express.static(__dirname + "/public_static"));

app.listen(9090, ()=>{
    console.log("magic happens at port 9090");
})
