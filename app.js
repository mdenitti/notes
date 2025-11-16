// setup listener & get all existing todo from localStorage
function init() {
  // get the elements of my DOM
  const addBtn = document.getElementById("addBtn");
  const todoInput = document.getElementById("todoInput");

  const todosJsonString = '[{"id":1731597966001,"text":"Vacuum the living room"},{"id":1731597966002,"text":"Wash the dishes"},{"id":1731597966003,"text":"Fold the laundry"},{"id":1731597966004,"text":"Dust the shelves"},{"id":1731597966005,"text":"Mop the kitchen floor"},{"id":1731597966006,"text":"Clean the bathroom mirror"},{"id":1731597966007,"text":"Water the plants"},{"id":1731597966008,"text":"Wipe the kitchen counters"},{"id":1731597966009,"text":"Change the bed sheets"},{"id":1731597966010,"text":"Empty the trash bins"},{"id":1731597966011,"text":"Clean the fridge"},{"id":1731597966012,"text":"Scrub the stove top"},{"id":1731597966013,"text":"Organize the pantry"},{"id":1731597966014,"text":"Wipe window sills"},{"id":1731597966015,"text":"Sweep the hallway"},{"id":1731597966016,"text":"Clean the microwave"},{"id":1731597966017,"text":"Rinse recycling and sort"},{"id":1731597966018,"text":"Tidy up the playroom"},{"id":1731597966019,"text":"Disinfect door handles"},{"id":1731597966020,"text":"Wipe the dining table"}]';

  // Save to localStorage
  localStorage.setItem('todos', todosJsonString);

  // setup my event listeners
  addBtn.addEventListener("click", addTodo);

  todoInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTodo();
    }
  });
  displayTodos();
}

function addTodo() {
  console.log("yay");
}

// Iterate the todo's in the dom structure
function displayTodos() {
  console.log("displaying todo");
  // identify the placeholder as an element
  const todoList = document.getElementById("todoList");

  // get todo's from the localstorage
  const todos = getTodosFromStorage();
  console.log(todos);
  // clear the current list
  todoList.innerHTML = "";

  if (todos.length === 0) {
    // show empty message
    todoList.innerHTML =
      '<li class="list-group-item">No notes yet... write some</li>';
  }
}

function getTodosFromStorage() {
  // get the strings from localstorage
  const todosString = localStorage.getItem("todos");

  // if nothing is stores yet, return an empty array
  if (todosString === null) {
    return [];
  }

  // Parse  JSON string back into an array
  return JSON.parse(todosString);
}

// Function to add todo's
// - get localstorage getten
// - parse
// - {new} -> add -> {existing}
// - string
// - set localstorage
// - refresh the data

/**
 * Add a new todo item
 * returns {void}
 * Validates input, saves to localStorage, and updates display
 */
function addTodo() {
    // Get the input element
    const todoInput = document.getElementById('todoInput');
    
    // Get the todo text and remove extra whitespace
    const todoText = todoInput.value.trim();
    
    // Validate: check if input is not empty
    if (todoText === '') {
        alert('Please enter a todo item!');
        return;
    }
    
    // Get existing todos from localStorage
    const todos = getTodosFromStorage();
    
    // Create a new todo object with unique ID and text
    const newTodo = {
        id: Date.now(), // Use timestamp as unique ID
        text: todoText
    };
    
    // Add the new todo to the array
    todos.push(newTodo);
    
    // Save updated todos array back to localStorage
    saveTodosToStorage(todos);
    
    // Clear the input field
    todoInput.value = '';
    
    // Refresh the display to show the new todo
    displayTodos();
}


// Function to delete todo's
// - get localstorage
// - filter all items except {deleted} in new {obj}
// - set localstorage
// - refresh the data
// Chilax and enjoy the weekend 😇

/**
 * Delete a todo item by its ID
 * @param {number} id - The unique ID of the todo to delete
 * @return {void}
 */
function deleteTodo(id) {
    // Get existing todos from localStorage
    const todos = getTodosFromStorage();
    
    // Filter out the todo with the matching ID
    // This creates a new array without the deleted todo
    const updatedTodos = todos.filter(function(todo) {
        return todo.id !== id;
    });
    
    // Save the updated array back to localStorage
    saveTodosToStorage(updatedTodos);
    
    // Refresh the display to show remaining todos
    displayTodos();
}


/**
 * Display all todos on the page
 * @return {void}
 * Reads from localStorage and renders each todo item
 */
function displayTodos() {
    // Get the list element where todos will be displayed
    const todoList = document.getElementById('todoList');
    
    // Get todos from localStorage
    const todos = getTodosFromStorage();
    
    // Clear the current list
    todoList.innerHTML = '';
    
    // Check if there are no todos
    if (todos.length === 0) {
        // Show a message when list is empty
        todoList.innerHTML = '<li class="list-group-item empty-message">No todos yet. Add one above!</li>';
        return;
    }
    
    // Loop through each todo and create list items
    todos.forEach(function(todo) {
        // Create a new list item element
        const li = document.createElement('li');
        li.className = 'list-group-item todo-item';
        
        // Create the todo text span
        const span = document.createElement('span');
        span.className = 'todo-text';
        span.textContent = todo.text;
        
        // Create the delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        
        // Add click event to delete button
        deleteBtn.addEventListener('click', function() {
            deleteTodo(todo.id);
        });
        
        // Add the text and button to the list item
        li.appendChild(span);
        li.appendChild(deleteBtn);
        
        // Add the list item to the todo list
        todoList.appendChild(li);
    });
}

init();
