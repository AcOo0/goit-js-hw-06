function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyBackground = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');

changeColorBtn.addEventListener('click', handleClick);

function handleClick() { 
  const randomColor = getRandomHexColor();
  bodyBackground.style.backgroundColor = randomColor;
  colorValue.textContent = randomColor;
};