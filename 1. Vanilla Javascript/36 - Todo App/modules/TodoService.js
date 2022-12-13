class TodoService {
  constructor() {
    this.baseUrl = "http://localhost:3000";
    this.allowedFields = ["todo", "id", "dueDate", "priority", "status", "category"];
  }

  #validateTodo = (todo) => {
    const keys = Object.keys(todo);
    const isValid = keys.every((key) => this.allowedFields.includes(key));
    if (!isValid) {
      throw new Error("Invalid todo");
    }
  };

  async getAll() {
    const res = await fetch(`${this.baseUrl}/todos`);
    const todos = await res.json();
    return todos;
  }

  async add(todo) {
    this.#validateTodo(todo);
    return await fetch(`${this.baseUrl}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
  }

  async delete(id) {
    return await fetch(`${this.baseUrl}/todos/${id}`, {
      method: "DELETE",
    });
  }

  async update(id, todo) {
    this.#validateTodo(todo);
    return await fetch(`${this.baseUrl}/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(todo),
    });
  }
}

class Todo {
  constructor(todo) {
    this.todo = todo;
    this.id = Date.now();
    this.dueDate = "2021-04-12";
    this.priority = "HIGH";
    this.status = "TO DO";
    this.category = "WORK";
  }

  get() {
    return {
      id: this.id,
      todo: this.todo,
      dueDate: this.dueDate,
      priority: this.priority,
      status: this.status,
      category: this.category,
    };
  }
}

window.todoService = new TodoService();
window.todo = Todo;
