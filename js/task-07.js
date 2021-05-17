const input = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

input.addEventListener('input', onInputRange);

function onInputRange(event) {
    spanText.style.fontSize = event.currentTarget.value + 'px';
	console.log(event.currentTarget.value);
}
