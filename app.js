// setup listener & get all existing todo from localStorage
function init() {
    // get the elements of my DOM
    const addBtn = document.getElementById('addBtn');
    const todoInput = document.getElementById('todoInput');

    // setup my event listeners
    addBtn.addEventListener('click', addTodo);

    todoInput.addEventListener('keypress', function(event){
        if (event.key === 'Enter') {
            addTodo();
        }
    });
    displayTodos();
}

function addTodo() {
    console.log('yay');
}

// Iterate the todo's in the dom structure
function displayTodos() {
    console.log('displaying todo')
    // identify the placeholder as an element
    const todoList = document.getElementById('todoList');

    // get todo's from the localstorage
    const todos = getTodosFromStorage();
    console.log(todos);
    // clear the current list
    todoList.innerHTML ='';

    if (todos.length === 0 ) {
        // show empty message
        todoList.innerHTML = '<li class="list-group-item">No notes yet... write some</li>';
    }


}

function getTodosFromStorage(){
    // get the strings from localstorage
    const todosString = localStorage.getItem('todos');

    // if nothing is stores yet, return an empty array
    if (todosString === null) {
        return [];
    }
}

// Function to add todo's
    // - get localstorage getten
    // - parse
    // - {new} -> add -> {existing}
    // - string
    // - set localstorage
    // - refresh the data
// Function to delete todo's
    // - get localstorage
    // - filter all items except {deleted} in new {obj}
    // - set localstorage
    // - refresh the data
// Chilax and enjoy the weekend 😇

init();