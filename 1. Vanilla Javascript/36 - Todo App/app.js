function render(todos) {
  const todoListContainer = document.getElementById("todo-list");
  todoListContainer.innerHTML = "";
  todos.forEach((todo) => renderTodoItem(todo));
}

function renderTodoItem(todo) {
  const todoListContainer = document.getElementById("todo-list");
  // create container for the todo item
  const todoItem = document.createElement("div");
  // set id on the todo item
  todoItem.id = `todo-${todo.id}`;
  todoItem.classList.add("todo-item");
  // put the rest of necessary html in the container
  todoItem.innerText = `
      <div class="todo-item__status">${todo.status === "TO DO" ? "❌" : "✅"}</div>
      <div class="todo-item__title">${todo.todo}</div>
      <div class="todo-item__actions">
        <button class="btn btn--primary btn--small" onclick="editTodo(${todo.id})">Complete</button>
        <button class="btn btn--danger btn--small" onclick="deleteTodo(${todo.id})">Delete</button>
      </div>
    `;
  todoListContainer.appendChild(todoItem);
}

function addTodo(e) {
  e.preventDefault();
  const todoInput = document.getElementById("addTodoInput");
  const todo = new Todo(todoInput.value).get();
  todoService
    .add(todo)
    .then(() => renderTodoItem(todo))
    .catch((err) => alert(err))
    // clear input after save is succesfull
    .finally(() => (todoInput.value = ""));
}

function deleteTodo(id) {
  todoService
    .delete(id)
    .then(() => {
      const todoItem = document.getElementById(`todo-${id}`);
      todoItem.remove();
    })
    .catch((err) => alert(err));
}

function editTodo(id, status) {
  const todoItem = document.getElementById(`todo-${id}`);
  const status = todoItem.querySelector(".todo-item__status");
  const newStatus = status.innerText === "✅" ? "TO DO" : "DONE";

  todoService.update(id, { status: newStatus }).then(() => {
    if (status.innerText === "✅") {
      status.innerText = "❌";
    } else {
      status.innerText = "✅";
    }
  });
}

function main() {
  const addTodoForm = document.getElementById("addTodo");
  addTodoForm.addEventListener("submit", addTodo);
  todoService.getAll().then((todos) => render(todos));
}

main();
