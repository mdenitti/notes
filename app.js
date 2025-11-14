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

function displayTodos() {
    console.log('displaying todo')
}

// Iterate the todo's in the dom structure
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