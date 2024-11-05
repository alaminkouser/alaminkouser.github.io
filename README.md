# Hello World!

[Privacy](./privacy/)

```js
// Simulating an API call with a delay
const fetchTodos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, text: 'Learn JavaScript', completed: false },
        { id: 2, text: 'Build a portfolio', completed: true },
        { id: 3, text: 'Read a book', completed: false }
      ]);
    }, 1000);
  });
};

// Class to handle Todo operations
class TodoApp {
  constructor() {
    this.todos = [];
    this.todoListElement = document.getElementById('todoList');
    this.todoInputElement = document.getElementById('todoInput');
    this.addTodoBtn = document.getElementById('addTodoBtn');
    
    this.addTodoBtn.addEventListener('click', () => this.addTodo());
  }

  // Fetch todos from API and render them
  async loadTodos() {
    this.todos = await fetchTodos();
    this.renderTodos();
  }

  // Render todos on the page
  renderTodos() {
    this.todoListElement.innerHTML = ''; // Clear current list

    this.todos.forEach(todo => {
      const todoItem = document.createElement('div');
      todoItem.classList.add('todo-item');
      if (todo.completed) {
        todoItem.classList.add('completed');
      }

      todoItem.innerHTML = `
        <input type="checkbox" ${todo.completed ? 'checked' : ''} onclick="todoApp.toggleComplete(${todo.id})">
        ${todo.text}
        <button onclick="todoApp.deleteTodo(${todo.id})">Delete</button>
      `;

      this.todoListElement.appendChild(todoItem);
    });
  }

  // Add a new todo
  addTodo() {
    const todoText = this.todoInputElement.value.trim();
    if (todoText) {
      const newTodo = {
        id: Date.now(), // Simple ID generation based on timestamp
        text: todoText,
        completed: false
      };
      this.todos.push(newTodo);
      this.renderTodos();
      this.todoInputElement.value = ''; // Clear input
    }
  }

  // Toggle completion status of a todo
  toggleComplete(id) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.renderTodos();
    }
  }

  // Delete a todo item
  deleteTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.renderTodos();
  }
}

// Initialize the TodoApp
const todoApp = new TodoApp();
todoApp.loadTodos();

```
