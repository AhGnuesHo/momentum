const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

let toDos = [];

const TO_DO_KEY= "todos";
const savedTodos = localStorage.getItem(TO_DO_KEY);

todoForm.addEventListener("submit", handleToDoSubmit);

function saveTodos(){
    localStorage.setItem(TO_DO_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const targetDelete = event.target.parentElement;
    toDos = toDos.filter((target) => target.id !== parseInt(targetDelete.id));
    targetDelete.remove();
    saveTodos();
}


function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button")
    button.innerText = "x";
    button.addEventListener("click", deleteToDo);         
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);

    
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value="";
    const newTodoObj = {
        text : newTodo,
        id: Date.now(),
    }   
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

if (savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo)

}