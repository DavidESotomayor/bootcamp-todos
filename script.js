var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

function renderTodos() {
    // clear existing todos
    todoList.innerHTML = ''

    // re-render todos
    for (var i = 0; i < todos.length; i++) {
        // create li element
        var li = document.createElement('li')
        // set the text content to an li
        li.innerText = todos[i]
        // append li to todo-list
        todoList.appendChild(li);
    }
}

function addTodo(event) {
    event.preventDefault()
    // get todoInput value
    var newTodo = todoInput.value

    if (newTodo === '') {
        return
    }
    // push text into todos array
    todos.push(newTodo)
    // call renderTodos()
    renderTodos()
    todoInput.value = null
}

todoForm.addEventListener('submit', addTodo)

renderTodos()