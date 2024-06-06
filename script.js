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

    deleteCurrentGrid();
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
        el.addEventListener("mouseover", (event) => {
            let element = event.target;

            element.style.backgroundColor = "black";
        })
    });
}

function deleteCurrentGrid() {
    document.querySelectorAll(".gridSquare").forEach((el) => {
        el.parentElement.removeChild(el);
    });
}