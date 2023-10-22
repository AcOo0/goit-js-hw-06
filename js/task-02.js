const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulElement = document.getElementById('ingredients');
const fragment = document.createDocumentFragment();

ingredients.forEach((ingredient) => {
  const itemLi = document.createElement('li');
  itemLi.classList.add('item');
  itemLi.textContent = ingredient;
  fragment.appendChild(itemLi);
});
ulElement.appendChild(fragment);
