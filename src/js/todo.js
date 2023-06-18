import { Notify } from 'notiflix/build/notiflix-notify-aio';
import throttle from 'lodash.throttle';
import { v4 as uuidv4 } from 'uuid';

const todoEl = document.querySelector('.todo');
const listEl = document.querySelector('.todo__items');

let todoData = {};
const KEY = 'todo';
todoEl.addEventListener('input', throttle(todoFunction, 1500));
function todoFunction(event) {
  const { name, value } = event.target;
  todoData[name] = value;

  localStorage.setItem(KEY, JSON.stringify(todoData));
}

loadData();

function loadData() {
  const todoFromStore = JSON.parse(localStorage.getItem(KEY));
  if (todoFromStore) {
    for (let key in todoFromStore) {
      todoData[key] = todoFromStore[key];
      todoEl[key].value = todoFromStore[key];
    }
  }
}

todoEl.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();

  const { text, priority } = todoData;
  if (!text || !priority) {
    Notify.failure('Error, fill in all the fields');
    return;
  }

  let markup = `<li>To do: ${text}, priority: ${priority}<button type="button" class="todo__delete" id=${uuidv4()}></button>
  </li>`;

  listEl.insertAdjacentHTML('beforeend', markup);

  todoEl.reset();
  localStorage.removeItem(KEY);
  todoData = {};
}

// Add remove btn (homework)
