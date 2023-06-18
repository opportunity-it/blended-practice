// МОДУЛЬ 7 - ДЕЛЕГУВАННЯ
// Завдання 16
//  При натисканні на будь-який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.
//  "Ви вибрали <product> за <price>".

const tableEl = document.querySelector('#productTable');
const divEl = document.querySelector('#productDetails');

tableEl.addEventListener('click', tableClick);

function tableClick(event) {
    if (event.target.nodeName !== 'TD') return;

    const parent = event.target.parentNode;
    const product = parent.firstElementChild.textContent;
    const price = parent.lastElementChild.textContent;
  
    divEl.innerHTML = `Ви вибрали ${product} за ${price}`;
    }