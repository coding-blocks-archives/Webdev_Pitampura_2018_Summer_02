/**
 * Created by rishabhkhanna on 20/07/18.
 */
$(()=>{
    $("#btn").click((e)=>{
        e.preventDefault();

        $.post("/api",
            {task: $("#data").val()},
            (data)=>{
                data.forEach((task)=>{
                    $("#list").append(
                        $("<li>").text(task.task)
                    )
                })

            }

        )
    })
})