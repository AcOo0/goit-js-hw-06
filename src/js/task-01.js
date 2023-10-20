const itemLi = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemLi.length}`);
itemLi.forEach((elem, i) => {
    console.log('');
    const title = elem.querySelector('h2');    
    console.log(`Category: ${title.textContent}`);
    const itemLiElement = elem.querySelectorAll('li');
    console.log(`Elements: ${itemLiElement.length}`);    
});