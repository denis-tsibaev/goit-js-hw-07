const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

function updateValue(e) {
    nameOutput.textContent = e.target.value;
}

nameInput.addEventListener('input', updateValue);
