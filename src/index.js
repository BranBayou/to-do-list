import './style.css';

const todoList = document.getElementById('todo-lists');

const listArray = [
  {
    description: 'wash the dishes',
    completed: true,
    index: 1,
  }, {
    description: 'complete To Do list project',
    completed: true,
    index: 2,
  },
  {
    description: 'wash my car',
    completed: true,
    index: 3,
  },
];
const showTasks = (task) => {
  listArray.sort((a, b) => a.index - b.index);
  todoList.innerHTML += `<div class="todo" id="todo-con">
                          <div class="left-side">
                            <input type="checkbox" id="todo" name="todo" value="">
                            <p>${listArray[task].description}</p>
                          </div>
                          <div class="right-side">
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                            <i class="fa-regular fa-trash-can trash-can"></i>
                          </div>
                        </div>`;
};
for (let i = 0; i < listArray.length; i += 1) {
  showTasks(i);
}