const input = document.getElementById('validation-input');
const dataLength = parseInt(input.getAttribute('data-length'));

input.addEventListener('blur', handleInput);
input.classList.add('validation-input');

function handleInput(event) {
    const inputText = event.currentTarget.value.trim();
    if (inputText.length === dataLength) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else { 
        input.classList.add('invalid');
        input.classList.remove('valid');
    };
};