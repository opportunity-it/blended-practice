// МОДУЛЬ 7 - ДЕЛЕГУВАННЯ
// Завдання 16
//  При натисканні на будь-який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.
//  "Ви вибрали <product> за <price>".

// const tableEl = document.querySelector('#productTable');
// const divEl = document.querySelector('#productDetails');

// tableEl.addEventListener('click', tableClick);

// function tableClick(event) {
//     if (event.target.nodeName !== 'TD') return;

//     const parent = event.target.parentNode;
//     const product = parent.firstElementChild.textContent;
//     const price = parent.lastElementChild.textContent;

//     divEl.innerHTML = `Ви вибрали ${product} за ${price}`;
//     }

// =========================================================

/*
Завдання 8 

При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
інформацією про те, яка кнопка була натиснута скільки разів.
*/

const statListEl = document.querySelector('.statList');
const buttonResult = document.querySelector('#resultButton');
const result = document.querySelector('#resultSection');

statListEl.addEventListener('click', handleButtons);
buttonResult.addEventListener('click', handleResults);

let total = 0;
let clicks = {};

function handleButtons(evt) {
  if (evt.target.nodeName !== 'BUTTON') return;
  const data = evt.target.dataset.number;
  total += Number(data);

  const buttonText = evt.target.textContent;

  if (clicks[buttonText]) {
    clicks[buttonText] += 1;
  } else {
    clicks[buttonText] = 1;
  }
}

function handleResults() {
  let keys = Object.keys(clicks);
  let markup = '';

  keys.forEach(
    element => (markup += `${element} pressed ${clicks[element]} times. `)
  );

  console.log(markup);

  result.innerHTML = `Result: ${total}. ${markup}`;
  total = 0;
  clicks = {};
}
