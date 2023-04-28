const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterValueElement = document.querySelector('#value');


let counterValue = 0;

decrementButton.addEventListener('click', () => {
  counterValue--;
  counterValueElement.textContent = counterValue;
});

incrementButton.addEventListener('click', () => {
  counterValue++;
  counterValueElement.textContent = counterValue;
});