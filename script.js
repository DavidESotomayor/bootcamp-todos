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
        // add data-index attribute
        li.setAttribute('data-index', i)
        // create button
        var button = document.createElement('button')
        button.innerText = "Complete"
        // append li to todo-list
        todoList.appendChild(li);
        // append button to todo-list
        li.appendChild(button)
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
    // clearing input with each input
    todoInput.value = null
}

function removeTodo(event) {
    var target = event.target
    if (target.matches('button')) {
        // find index from li
        var index = parseInt(target.parentNode.getAttribute('data-index'))
        // remove the todo from todos array
        todos.splice(index, 1)
        // re-render todos
        renderTodos()
    }
}

todoForm.addEventListener('submit', addTodo)
todoList.addEventListener('click' , removeTodo)

renderTodos()