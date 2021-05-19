const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', updateValue);

function updateValue(e) {
    if (e.target.value.trim() === '') {
        nameOutput.textContent = 'Незнакомец';
    } else {
        nameOutput.textContent = e.target.value;
    }
}
