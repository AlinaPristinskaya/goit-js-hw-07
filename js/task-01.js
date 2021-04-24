const categotiesLenghtEl = categories.children.length;

console.log(`У списку ${categotiesLenghtEl} категорії`);
const categoriesEl = document.querySelectorAll("#categories .item");

categoriesEl.forEach((categorie) => {
  const itemsEl = categorie.querySelector("h2");
  const callUlEl = categorie.querySelectorAll("li");

  console.log(`Категория: ${itemsEl.textContent}`);
  console.log(`Колличество елементов: ${callUlEl.length}`);
});
