function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divBox = document.getElementById('boxes');
const inputNumber = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroytBtn = document.querySelector('button[data-destroy]');

createBtn.addEventListener('click', createBoxes);
destroytBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) { 
  amount = inputNumber.value;
  for (let i = 0; i < amount; i++) {
    const randomColor = getRandomHexColor();
    const itemBox = document.createElement('div');
    itemBox.style.backgroundColor = randomColor;
    itemBox.style.width = `${30 + i * 10}px`;
    itemBox.style.height = `${30 + i * 10}px`;
    divBox.appendChild(itemBox);
  }
};

function destroyBoxes() {
  divBox.innerHTML = '';
  inputNumber.value = '';
}