const container = document.getElementById('container');
let gridNum;

function createGrid(gridNum) {
    container.innerHTML = '';
    const cellSize = 700 / gridNum; 
    for (let i = 0; i < gridNum * gridNum; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('cell');

        gridCell.style.width = `${cellSize}px`;
        gridCell.style.height = `${cellSize}px`;

        gridCell.dataset.opacity = 0;

        gridCell.addEventListener('mouseover', () => {

            const randomColor = `rgb(${randomIntFromInterval(0, 255)}, ${randomIntFromInterval(0, 255)}, ${randomIntFromInterval(0, 255)})`;

            let currentOpacity = parseFloat(gridCell.dataset.opacity);
            if (currentOpacity < 1) {
                currentOpacity += 0.1;
                gridCell.dataset.opacity = currentOpacity.toFixed(1); 
            }

            gridCell.style.backgroundColor = `${randomColor}`;
            gridCell.style.opacity = currentOpacity; 
        });

        container.appendChild(gridCell);
    }
}


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const btn = document.getElementById('button');
btn.addEventListener('click', () => {
    const gridNum = prompt('How many grids do you want?');
    if (!isNaN(gridNum) && gridNum <= 100 && gridNum > 0) {
        alert(`You selected ${gridNum} grids!`);
        createGrid(gridNum);
    } else {
        alert('Please enter a valid number greater than 0, and below 100');
    }
});


