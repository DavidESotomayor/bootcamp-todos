var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

function renderTodos() {
    for (var i = 0; i < todos.length; i++) {
        // create li element
        var li = document.createElement('li')
        // set the text content to an li
        li.innerText = todos[i]
        // append li to todo-list
        todoList.appendChild(li);
        // todoCountSpan should show the total count
    }
}

renderTodos()