/**
 * Created by rishabhkhanna on 25/06/18.
 */


window.onload = function () {
    var  list = document.getElementById('list');
    var btn = document.getElementById('submit');
    var inputBox = document.getElementsByTagName("input")[0];

    btn.onclick = function () {
        console.log("button clicked");
        list.innerHTML +=
            `<li class="list-group-item"> ${inputBox.value}</li>`;
        inputBox.value = "";
        // var listItem =  document.createElement('li');
        // listItem.innerHTML = inputBox.value;
        // list.appendChild(listItem);
    }
}