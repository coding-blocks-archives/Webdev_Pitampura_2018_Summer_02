/**
 * Created by rishabhkhanna on 05/07/18.
 */
$(function () {
    var input = $('input');
    var button = $('.button-class');
    var list = $('#list')

   button.click((e)=>{
       console.log("Rishabh");
       var value = input.val();
       input.val("");
       console.log(e.currentTarget);

       list.prepend(
           $("<li>")
               .append(
                   $("span")
                   .click(function () {
                       console.log("span click");
                   }))
               .click((e)=>{
                   $(this).css("color", "red")
                   
                   console.log($(this).css("color"));
                   console.log(e.currentTarget);
               }).append(value)
               .append(

               $("<button>").text("X").click(function () {
                   console.log($(this));
               })

           )
       )
   })

})

console.log("khanna");