// App State
let gridSize = 16;
let currentColor = '#39ff14';
let isDrawing = false;
let isEraser = false;

// Neon color palette
const neonColors = [
    {name: 'Green', value: '#39ff14'},
    {name: 'Magenta', value: '#ff00ff'},
    {name: 'Yellow', value: '#ffff00'},
    {name: 'Purple', value: '#9d00ff'},
]

// DOM Elements
const colorGrid = document.getElementById('colorGrid');
const drawingGrid = document.getElementById('drawingGrid');
const drawBtn = document.getElementById('drawBtn');
const eraseBtn = document.getElementById('eraseBtn');
const resizeBtn = document.getElementById('resizeBtn');
const clearBtn = document.getElementById('clearBtn');

// FUNCTIONS
// Initialize color palette: create color buttons and set up event listener
function initColorPalette() {
    neonColors.forEach((color, index) => {
        const btn = document.createElement('button');
        btn.className = 'color-btn' + (index === 0 ? ' active' : '');
        btn.style.backgroundColor = color.value;
        btn.title = color.name;

        btn.addEventListener('click', () => selectColor(color.value, btn));

        colorGrid.appendChild(btn);
    })
}

// Select color: update current color and button states
function selectColor(color, btn) {
    currentColor = color;
    isEraser = false;

    drawBtn.classList.add('active');
    eraseBtn.classList.remove('active');

    document.querySelectorAll('.color-btn').forEach(b => {
        b.classList.remove('active');
    })
    btn.classList.add('active');
}

// Initialize grid: create grid cells and set up event listeners
function initGrid() {
    drawingGrid.innerHTML = '';

    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');
        drawingGrid.appendChild(row);
        for (let k = 0; k < gridSize; k++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            cell.style.backgroundColor = 'transparent';
            
            cell.addEventListener('mousedown', paintCell);
            cell.addEventListener('mouseover', (e) => {
                if (isDrawing) paintCell(e);
            });

            row.appendChild(cell);
        }
    }
}

// Paint cell: apply current color or erase
function paintCell(e) {
    const color = isEraser ? 'transparent' : currentColor;
    e.target.style.backgroundColor = color;
    e.target.style.boxShadow = color !== 'transparent' ? `0 0 8px ${color}` : 'none';
}

// EVENT LISTENERS
// Drawing state: track mouse state for drawing
drawingGrid.addEventListener('mousedown', () => isDrawing = true);
document.addEventListener('mouseup', () => isDrawing = false );
drawingGrid.addEventListener('mouseleave', () => isDrawing = false );

// Mode buttons: Draw and Erase



// Clear button: reset grid
// Resize button: prompt for new size and reinitialize grid
// Initialize app
initColorPalette();
initGrid();