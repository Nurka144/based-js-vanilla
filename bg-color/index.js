document.addEventListener('DOMContentLoaded', () => {
    alert('Click on window to change body color!')
})
const body = document.querySelector('body');

const hexArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

this.addEventListener('click', () => {
    let color = ['#'];
    for(let i = 0; i < 6; i++) {
        color.push(hexArray[Math.floor(Math.random() * hexArray.length)]);
    }
    body.style.backgroundColor = color.join("");
})
