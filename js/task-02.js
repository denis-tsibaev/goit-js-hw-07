const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const addInList = (arr, listRef) => {
    arr.forEach(element => {
        const liElem = document.createElement('li');
        liElem.textContent = element;
        listRef.appendChild(liElem);
    });
};

const ulEl = document.querySelector('#ingredients');
addInList(ingredients, ulEl);
