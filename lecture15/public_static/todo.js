/**
 * Created by rishabhkhanna on 13/07/18.
 */



$(function () {

    function refreshList(data){
        // $("#list").clear();

        data.forEach((item)=>{
            $('#list').append(`<li>${item}</li>`)
        })


    }

    $("#btn").click(function () {

        $.post("/notes/addNewNotes",
            {
                task: $("#task").val()
            },
            (data)=>{

            refreshList(data);
            }
            );
    })

    $.get("/notes", (data)=>{
        console.log(data);
        refreshList(data);
    });



})
