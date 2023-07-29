let counterValue = 0;
const span = document.querySelector('#value')
const butMinus = document.querySelector('[data-action="decrement"]');
const butPlus = document.querySelector('[data-action="increment"]');

butMinus.addEventListener('click', minusClick)
butPlus.addEventListener('click', plusClick)


function minusClick() {
  counterValue -= 1;
  span.textContent = counterValue
};

function plusClick() {
  counterValue += 1;
  span.textContent = counterValue
};










