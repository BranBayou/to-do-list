import _ from 'lodash';
import './style.css';

const form = document.getElementById('todoform');
const todoInput = document.getElementById('newtodo');
const todosListEl = document.getElementById('todos-list');

let todos = [];
const toLocalStorage = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

form.addEventListener('submit',(event) => {
  event.preventDefault();
  saveTodo();
  renderTodos();
  toLocalStorage();
});

let saveTodo = () => {
  const todoValue = todoInput.value;
  const isEmpty = todoValue === '';
  if (isEmpty) {
    alert('Empty todo');
  }else{
    const todo = {
      description: todoValue,
      completed: false,
      index: todos.length,
    };
    todos.push(todo);
    todoInput.value = '';
  }
};

let renderTodos = () => {

  todosListEl.innerHTML = '';
  if(todos){
    todos.forEach((todo,index) => {
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
  };
  }
  

const editIcon = document.getElementsByClassName('edit');
const deleteIcon = document.getElementsByClassName('delete');
const taskInputField = document.getElementsByClassName('task-input-field');
const taskChiled = document.getElementsByClassName('todo');



