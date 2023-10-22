const sizeControl = document.getElementById("font-size-control");
const abraText = document.getElementById("text");

sizeControl.addEventListener('change', handleScroll);

function handleScroll(event) { 
    const fontSize = event.currentTarget.value + "px";
    abraText.style.fontSize = fontSize;
};