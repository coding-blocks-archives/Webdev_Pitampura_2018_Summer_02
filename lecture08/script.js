/**
 * Created by rishabhkhanna on 28/06/18.
 */

window.onload = function () {
    var input = document.getElementById('input-item');
    var addButton = document.getElementById('add-item');
    var list = document.getElementById('list');

    window.strikeThis = function (element) {
        console.log(element.parentElement.children[0]);

        if(element.checked === true){
            element.parentElement.children[0].style.textDecoration = "line-through";

        }else{
            element.parentElement.children[0].style.textDecoration = "";
        }


        // if(element.parentElement.children[0].style.textDecoration === "line-through"){
        //     element.parentElement.children[0].style.textDecoration = ""
        // }else{
        //     element.parentElement.children[0].style.textDecoration = "line-through";
        // }


    }



    function addListItem() {
        var val = input.value;
        var listElement = document.createElement('li');
        listElement.innerHTML =
            `
                <span>${val}</span>
                <input onclick="strikeThis(this)" type="checkbox" id="is-checked">
                <button id="del-this-item">X</button>
            `
        list.appendChild(listElement);
        input.value = "";
    }

    addButton.onclick = function () {
        addListItem();
    }

    input.addEventListener('keyup', function (event) {
        // console.log(event.keyCode);
        if(event.keyCode === 13){
            addListItem();
        }
    })




}