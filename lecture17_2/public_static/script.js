/**
 * Created by rishabhkhanna on 20/07/18.
 */
var socket = io();

console.log(socket);





$(()=>{
    $("#btn").click(()=>{
        socket.emit("SEND", {task : $("#task").val(), username: $("#username").val()} );
    })

    socket.on("RECV", (data)=>{
        console.log(data);
        $("#list").append(
            $("<li>").text(`${data.username}: ${data.task}`)
        )
    })

})
