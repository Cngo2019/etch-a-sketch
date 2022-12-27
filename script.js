function changeGrid(numCells) {
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
changeGrid(16);
