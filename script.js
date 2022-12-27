function initializeGrid(numCells) {
    const body = document.getElementById("container");
    body.style.setProperty('grid-template-columns', `repeat(${numCells}, 1fr)`);
    body.style.setProperty('grid-template-rows', `repeat(${numCells}, 1fr)`);
    console.log(body);
    for (let i = 0; i <= numCells * numCells; i++) {
        const divBlock = createCell();
        divBlock.addEventListener('mouseover', (e) => {colorCell(e)});
        body.appendChild(divBlock);
    }

}

function createCell() {
    const divBlock = document.createElement("div");
    divBlock.className = "inner";
    divBlock.innerHTML = "";
    return divBlock;
}

// This function simply removes the container's divs
function removeCells(bodyNode) {
    while (bodyNode.hasChildNodes()) {
        bodyNode.removeChild(bodyNode.lastChild);
    }
}

function colorCell(e) {
    e.target.style.backgroundColor = 'red';
}


// Initiailize a 16 x 16 grid
initializeGrid(16);

// Add a click event listener when user wants to change size of grid
const changeSizeButton = document.getElementById("changeSize");
changeSizeButton.addEventListener('click', () => {
    let numCells = prompt("Enter in the size you want the grid between 0 and 100: ");
    while (numCells == "" || numCells > 100) {
        numCells = prompt("You entered an invalid entry. Please enter a number between 0 and 100: ");
    }

    // Need to remove the individual cells 
    const body = document.getElementById("container");
    removeCells(body);

    // Then initialize grid
    initializeGrid(numCells);
});
