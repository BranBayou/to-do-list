export const todos = [];
const toLocalStorage = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};
export default toLocalStorage;