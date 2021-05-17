const minusBtn = document.querySelector('[data-action="decrement"]');
const plusBtn = document.querySelector('[data-action="increment"]');
const spanValue = document.querySelector('#value');
let counterValue = 0;

function decrement() {
    counterValue -= 1;
    spanValue.textContent = counterValue;
	// console.log(counterValue);
}

minusBtn.addEventListener('click', decrement);

function increment() {
    counterValue += 1;
    spanValue.textContent = counterValue;
	// console.log(counterValue);
}

plusBtn.addEventListener('click', increment);


