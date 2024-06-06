const GRID_CONTAINER_SIZE = 768;

let gridWidth = 16;

const gridContainer = document.querySelector(".gridContainer");

for (let i = 0; i < Math.pow(gridWidth, 2); i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("gridSquare");
    gridSquare.style.width = `${GRID_CONTAINER_SIZE / 16}px`;
    gridSquare.style.height = `${GRID_CONTAINER_SIZE / 16}px`;

    gridContainer.appendChild(gridSquare);
    addHoverEffect();
}

function addHoverEffect() {
    document.querySelectorAll(".gridSquare").forEach((el) => {
        el.addEventListener("mouseover", (event) => {
            let element = event.target;

            element.style.backgroundColor = "black";
        })
    });
}