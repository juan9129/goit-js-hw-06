const input = document.querySelector('#validation-input');

input.addEventListener('blur', validateInput);

function validateInput() {
  const inputLength = this.getAttribute('data-length');
  const inputValue = this.value.trim();
  
  if (inputValue.length === parseInt(inputLength)) {
    this.classList.remove('invalid');
    this.classList.add('valid');
  } else {
    this.classList.remove('valid');
    this.classList.add('invalid');
  }
}