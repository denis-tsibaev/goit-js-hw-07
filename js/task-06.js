const input = document.querySelector('#validation-input');
input.onblur = function () {
    console.log(input.value.length);
	console.log(Number(input.getAttribute('data-length')));

    if (input.value.length === Number(input.getAttribute('data-length'))) {
		input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
};
