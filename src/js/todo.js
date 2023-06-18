const todoEl = document.querySelector('.todo');
const listEl = document.querySelector('.todo__items');

const todoData = {};
const KEY = 'todo'
todoEl.addEventListener('input', todoFunction);
function todoFunction(event) {
    const { name, value } = event.target;
    todoData[name] = value;
     
    localStorage.setItem(KEY, JSON.stringify(todoData));
    

}