/**
 * Created by rishabhkhanna on 16/07/18.
 */
const Sequelize = require('sequelize');
const Datatypes = Sequelize.DataTypes;
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: __dirname + "/test.sqlite"
})

var todos = sequelize.define('todos',{
    task : Datatypes.STRING,
    done: Datatypes.BOOLEAN
})

sequelize.sync().then(()=>{
    todos.create({
        task : 'do this task',
        done: false
    })
}).catch((err)=>{
    console.log(err);
});


todos.findAll().then((todos)=>{
    // console.log(todos);
    todos.forEach((todo)=>{
        console.log(todo.task);
        console.log(todo.done);

    })
    todos[0].done = !todos[0].done
    todos[0].save();

}).catch((err)=>{
    console.log(err);
})




// sequelize.authenticate().then(()=>{
//     console.log("database created");
// }).catch((err)=>{
//     console.log(err);
// })
