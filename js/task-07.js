const sizeControl = document.getElementById("font-size-control");
const abraText = document.getElementById("text");

abraText.style.fontSize = sizeControl.value + "px";

sizeControl.addEventListener('input', handleScroll);

function handleScroll(event) { 
    const fontSize = event.currentTarget.value + "px";
    abraText.style.fontSize = fontSize;
};