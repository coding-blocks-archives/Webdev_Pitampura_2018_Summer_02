/**
 * Created by rishabhkhanna on 29/06/18.
 */
var todos = [];
window.onload = function () {

    var input = document.getElementById("input-todo");
    var addItem = document.getElementById("add-item");
    var list = document.getElementById("list");

    function saveItems() {
        localStorage.setItem("todos", JSON.stringify(todos));
        console.log(JSON.stringify(todos));
    }

    function getItems() {
        todos = JSON.parse(localStorage.getItem("todos"))
        console.log(todos);
    }

    function addTodo(thisTask) {
        console.log(thisTask)
        console.log(thisTask.value);
        todos.push({
            task: thisTask.value,
            checked: false
        })
        saveItems();
        refreshList();
    }

    function refreshList() {
        getItems();
        clearList();
        var appendThis;

        for(i = 0 ; i < todos.length; i++){
            list.appendChild(createElement(todos[i].task))
        }
    }

    function clearList() {
        while(list.firstChild){
            list.firstChild.remove();
        }
    }

    function createElement(task) {
        var element = document.createElement("li");
        var spanElement = document.createElement("span");
        var delElement = document.createElement("button");
        spanElement.innerText = task
        delElement.innerText = "X";
        element.appendChild(spanElement);
        element.appendChild(delElement);
        delElement.onclick = function (element) {
            console.log(element.target.parentNode);
        }
        return element;
    }



    refreshList();


    addItem.onclick = function () {
        addTodo(input);
    }

}