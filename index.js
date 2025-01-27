 const container = document.getElementById('container')
 const gridCell = document.createElement('div')

 let gridNum;

function createGrid(gridNum) {
    container.innerHTML = ''
    const cellSize = 700 / gridNum
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
    for (let i = 0; i < gridNum * gridNum; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('cell')

        gridCell.style.width = `${cellSize}px`
        gridCell.style.height = `${cellSize}px`
        gridCell.addEventListener('mouseover', () => {
            const randomColor = `rgb(${randomIntFromInterval(0, 255)}, ${randomIntFromInterval(0, 255)},
             ${randomIntFromInterval(0, 255)}) `;
            gridCell.style.backgroundColor = randomColor
        });
        gridCell.addEventListener('mouseout', () => {
            gridCell.style.backgroundColor = '';
        });

        container.appendChild(gridCell);
    }
}


const btn = document.getElementById('button')
btn.addEventListener('click', () => {
    const gridNum =  prompt('How many grids do you want?')
    if(!isNaN(gridNum) && gridNum <= 100 && gridNum > 0) {
        alert(`You selected ${gridNum} grids!`)
        createGrid(gridNum)
    } else {
        alert('Please enter a valid number greater than 0, and below 100')
    }
})

