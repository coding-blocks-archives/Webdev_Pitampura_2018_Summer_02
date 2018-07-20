/**
 * Created by rishabhkhanna on 20/07/18.
 */
const express = require("express");
const app = express();
const server = require('http').Server(app);
const io = require("socket.io")(server);

app.use("/", express.static(__dirname + "/public_static"))

io.on("connection", (socket) => {
    console.log("client connected at " + socket.id);

    socket.on("SEND", (data)=>{
        console.log(data);
        io.emit("RECV", data)
    })

})


server.listen(9889, () => {
    console.log("server started");
})
