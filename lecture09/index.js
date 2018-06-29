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
        if(todos == null)
            todos = []
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

            for (i = 0; i < todos.length; i++) {
                list.appendChild(createElement(todos[i].task, i))
            }

    }

    function clearList() {
        while (list.firstChild) {
            list.firstChild.remove();
        }
    }

    function createElement(task, i) {

        var element = document.createElement("li");
        var spanElement = document.createElement("span");
        var delElement = document.createElement("button");
        var upButton = document.createElement("button");
        var downButton = document.createElement("button");


        spanElement.innerText = task
        delElement.innerText = "X";

        upButton.innerText = "^"
        downButton.innerText = "v"

        element.appendChild(spanElement);
        element.appendChild(delElement);

        element.appendChild(upButton);
        element.appendChild(downButton);

        if (todos[i].checked) {
            spanElement.style.textDecoration = "line-through";

        }
        delElement.onclick = function (element) {
            todos[i].checked = !todos[i].checked;
            saveItems();
            refreshList();
        }
        return element;
    }


    refreshList();


    addItem.onclick = function () {
        addTodo(input);
    }

}