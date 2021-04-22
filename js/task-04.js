
const decrementBtn = document.querySelector('[data-action="decrement"]');
const currentValue = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');


let counterValue = 0;
currentValue.textContent = counterValue;

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    console.log('Увеличили на 1');
    currentValue.textContent = counterValue;
});

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    console.log('Уменьшили на 1');
    currentValue.textContent = counterValue;
});