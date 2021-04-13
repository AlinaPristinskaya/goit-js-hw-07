const categotiesLenghtEl = categories.children.length;

console.log(`У списку ${categotiesLenghtEl} категорії`);

const itemsEl = categories.querySelectorAll("h2");
const callUlEl = categories.querySelectorAll("ul");
console.log(`Категория: ${itemsEl[0].textContent}`);
console.log(`Колличество елементов: ${callUlEl[0].children.length}`);
console.log(`Категория: ${itemsEl[1].textContent}`);
console.log(`Колличество елементов: ${callUlEl[1].children.length}`);
console.log(`Категория: ${itemsEl[2].textContent}`);
console.log(`Колличество елементов: ${callUlEl[2].children.length}`);
