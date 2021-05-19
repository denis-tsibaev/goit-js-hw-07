const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const list = document.querySelector('#ingredients');
const makeList = ingredients.map(element => {
	const li = document.createElement('li');
	li.textContent = element;
	return li;
  });

  list.append(...makeList);

