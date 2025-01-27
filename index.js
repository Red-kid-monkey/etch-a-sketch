 const container = document.getElementById('container')
 const gridCell = document.createElement('div')

function createGrid(num) {
    for (let i = 0; i < num; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('cell')
        container.appendChild(gridCell)

        gridCell.addEventListener('mouseover', () => {
            gridCell.style.backgroundColor = 'red';
        });
        gridCell.addEventListener('mouseout', () => {
            gridCell.style.backgroundColor = '';
        });

        container.appendChild(gridCell);
    }
}

createGrid(16 * 16)

