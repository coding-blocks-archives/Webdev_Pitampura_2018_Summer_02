/**
 * Created by rishabhkhanna on 28/06/18.
 */

window.onload = function () {
    var input = document.getElementById('input-item');
    var addButton = document.getElementById('add-item');
    var list = document.getElementById('list');
    var deleteChecked = document.getElementById('delete-checked');
    var deleteThese = [];

    deleteChecked.onclick = function () {
        for ( i = 0 ;i < deleteThese.length ;i++){
            deleteThese[i].remove();
        }
        console.log(deleteThese);
        deleteThese = [];
    }

    window.delItem = function (element) {
        console.log(element.parentElement.remove());
    }

    window.strikeThis = function (element) {
        console.log(element.parentElement.children[0]);

        if(element.checked === true){
            element.parentElement.children[0].style.textDecoration = "line-through";
            deleteThese.push(element.parentElement)

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
                <button id="del-this-item" onclick="delItem(this)">X</button>
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