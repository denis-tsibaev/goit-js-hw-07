const ul = Array.from(document.querySelector('#categories').children);
const liItem = document.querySelector('#categories').children.length;

console.log(`Количество категорий: ${liItem}`);

for (let elem of ul) {
    let category = elem.firstElementChild.textContent;
    let quantityElem = elem.lastElementChild.children.length;
    console.log(
        `Категория: ${category} \nКоличество элементов: ${quantityElem}`,
    );
}
