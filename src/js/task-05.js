const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener('input', handleInput);

function handleInput(event) { 
    const inputValue = event.currentTarget.value.trim();

    if (inputValue === '') {
        output.textContent = 'Anonymous';
    } else { 
        output.textContent = inputValue;
    };    
};