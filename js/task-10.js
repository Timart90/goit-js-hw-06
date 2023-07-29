function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const elements = {
  butCreate: document.querySelector('[data-create]'),
  butDestroy: document.querySelector('[data-destroy]'),
  divBox: document.querySelector('#boxes'),
  input: document.querySelector('input')
};

elements.butCreate.addEventListener('click', createBoxes);

let step = 30;

function createBoxes(amount) {
  step += 10;
  amount.value = elements.input.value
  
let test= document.createElement('div');
  elements.divBox.appendChild(test);
  test.style.width = `${step}px`;
  test.style.height = `${step}px`;
  test.style.backgroundColor = getRandomHexColor();
}

