/**
 * Created by rishabhkhanna on 06/07/18.
 */

$(function () {
    let btn = $('#add');

    btn.click(
        () => {
            $('#list').append(
                $('<li>')
                    .append(
                        $('<span>')
                            .text($('#input').val())
                            .click(
                                (e)=>{
                                  $(e.currentTarget).parent().toggleClass("base");
                                }
                            )
                    )
                    .append(
                        $('<button>').text("X")
                            .click(
                                (e) => {
                                    $(e.currentTarget).parent().remove();
                                }
                            )
                    )
                    .append(
                        $('<button>').text("⬇")
                            .click(
                                (e)=>{
                                    $(e.currentTarget).parent()
                                        .insertAfter(
                                            $(e.currentTarget).parent().next()
                                        )
                                }
                            )
                    )
                    .append(
                        $('<button>').text("⬆")
                            .click(
                                (e)=>{
                                    $(e.currentTarget).parent()
                                        .insertBefore(
                                            $(e.currentTarget).parent().prev()
                                        )
                                }
                            )
                    )
                )




            $('#input').val("");
            btn.next().click(
                (e)=>{
                    $('.base').remove();
                }
            )
        }
    )

    $("#input").keypress(function (e) {
        // console.log(e.which)
        if(e.which === 13){
            console.log("Hello");
        }
    })



})
