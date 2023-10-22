const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const val = document.getElementById('value');

let counterValue = 0;

decrementBtn.addEventListener('click', () => { 
    counterValue -= 1;
    val.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => { 
    counterValue += 1;
    val.textContent = counterValue;
});
