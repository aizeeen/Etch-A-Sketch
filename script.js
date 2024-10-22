const container = document.getElementById('container');
const resetButton = document.getElementById('reset');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


function createGrid(size) {
  container.innerHTML = '';
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  const squareSize = 960 / size; 

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

   
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'lightblue';
    });

    container.appendChild(square);
  }
}

createGrid(16);

resetButton.addEventListener('click', () => {
  let newSize = prompt('Enter new grid size (max 100):', 16);
  if (newSize > 100) {
    newSize = 100; 
  } else if (newSize < 1 || isNaN(newSize)) {
    newSize = 16; 
  }
  createGrid(newSize);
});
