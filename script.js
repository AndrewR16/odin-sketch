const GRID_CONTAINER_SIZE = 768;
let gridWidth = 16;

const gridContainer = document.querySelector(".gridContainer");
const newGridBtn = document.querySelector("#newGridBtn");

// Generate default 16 by 16 grid of squares
generateGrid();

// Generate new grid based on user promt
newGridBtn.addEventListener("click", () => {
    do {
        gridWidth = Number.parseInt(window.prompt("New grid width:"));

    } while(gridWidth < 0 || gridWidth > 100 || Number.isInteger(gridWidth) == false);

    // Delete current grid
    gridContainer.innerHTML = "";
    
    generateGrid();
});

function generateGrid() {
    for (let i = 0; i < Math.pow(gridWidth, 2); i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("gridSquare");
        gridSquare.style.width = `${GRID_CONTAINER_SIZE / gridWidth}px`;
        gridSquare.style.height = `${GRID_CONTAINER_SIZE / gridWidth}px`;

        gridContainer.appendChild(gridSquare);
    }

    addHoverEffect();
}

// Darken a square when its hovered over
function addHoverEffect() {
    document.querySelectorAll(".gridSquare").forEach((el) => {
        el.addEventListener("mouseenter", (event) => {
            let element = event.target;
            let currentOpacity = window.getComputedStyle(element).getPropertyValue("opacity");
            
            element.style.opacity = `${Number.parseFloat(currentOpacity) + 0.1}`;
        })
    });
}