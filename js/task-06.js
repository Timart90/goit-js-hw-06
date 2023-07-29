const input = document.querySelector('#validation-input');
input.addEventListener('blur', focusInput);


function focusInput() {

  if (input.value.trim().length === Number(input.dataset.length)) {
    input.classList.remove('invalid');
    input.classList.add('valid');

  } else {
   input.classList.remove('valid');
  input.classList.add('invalid');
}
};