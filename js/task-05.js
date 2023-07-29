const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', inputText)

function inputText(e) {
  span.textContent = e.currentTarget.value.trim();
  if (e.currentTarget.value.trim() === "") {
    span.textContent = 'Anonymous';
}
};