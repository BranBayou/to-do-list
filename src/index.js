import './style.css';

const form = document.getElementById('todoform');
const todoInput = document.getElementById('newtodo');
const todosListEl = document.getElementById('todos-list');
let todos = [];
const toLocalStorage = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const renderTodos = () => {
  todosListEl.innerHTML = '';
  if (todos) {
    todos.forEach((todo, index) => {
      todosListEl.innerHTML += `
      <div class="todo" id="${index}">
        <div class="left-side">
          <input type="checkbox" id="checkbox" class="checkbox">
          <p class="task-input-field">${todo.description}</p>
        </div>
        <div class="right-side">
          <i class="bi bi-three-dots-vertical edit"></i>
          <i class="bi bi-trash delete"></i>
        </div>
      </div>
      `;
    });

    // Function to handle edit action
    const handleEdit = (index) => {
      // Get the task description element
      const taskDescEl = document.getElementsByClassName('task-input-field')[index];
      // Replace the task description element with an input field
      const newInputEl = document.createElement('input');
      newInputEl.setAttribute('type', 'text');
      newInputEl.setAttribute('value', taskDescEl.innerText);
      newInputEl.classList.add('edit-input');
      taskDescEl.replaceWith(newInputEl);
      // Focus on the input field
      newInputEl.focus();
      // Add event listener to the input field to handle the edit action
      newInputEl.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          // Save the edited todo
          todos[index].description = newInputEl.value;
          toLocalStorage();
          renderTodos();
        }
      });
    };

    // Add event listener to each edit icon
    const editIcon = document.getElementsByClassName('edit');
    for (let i = 0; i < editIcon.length; i += 1) {
      editIcon[i].addEventListener('click', () => {
        handleEdit(i);
      });
    }
    // Function to handle delete action
    const handleDelete = (index) => {
      todos.splice(index, 1);
      toLocalStorage();
      renderTodos();
    };
    // Add event listener to each delete icon
    const deleteIcon = document.getElementsByClassName('delete');
    for (let i = 0; i < deleteIcon.length; i += 1) {
      deleteIcon[i].addEventListener('click', () => {
        handleDelete(i);
      });
    }
  }
};

const saveTodo = () => {
  const todoValue = todoInput.value;
  const isEmpty = todoValue === '';
  if (isEmpty) {
    todoInput.innerHTML = 'Empty todo';
  } else {
    const todo = {
      description: todoValue,
      completed: false,
      index: todos.length,
    };
    todos.push(todo);
    todoInput.value = '';
    toLocalStorage();
    renderTodos();
  }
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  saveTodo();
});

window.addEventListener('load', () => {
  if (localStorage.getItem('todos')) {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  renderTodos();
});
