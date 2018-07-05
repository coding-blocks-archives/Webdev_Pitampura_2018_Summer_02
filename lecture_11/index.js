/**
 * Created by rishabhkhanna on 05/07/18.
 */
$(function () {
    var input = $('input');
    var button = $('.button-class');
    var list = $('#list')

   button.click(function () {
       console.log("Rishabh");
       var value = input.val();
       input.val("");
       list.append(
           `<li>${value}</li>`
       )
   })

})

console.log("khanna");