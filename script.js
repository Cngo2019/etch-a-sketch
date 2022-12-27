function changeGrid(numCells) {
    const body = document.getElementById("container");
    body.style.setProperty('grid-template-columns', `repeat(${numCells}, 1fr)`);
    body.style.setProperty('grid-template-rows', `repeat(${numCells}, 1fr)`);
    console.log(body);
    for (let i = 0; i <= numCells * numCells; i++) {
        const divBlock = document.createElement("div");
        divBlock.innerHTML = "";
        divBlock.className = "inner";
        body.appendChild(divBlock);
    }
}

// This function simply removes the container's divs
function removeDivs(bodyNode) {
    while (bodyNode.hasChildNodes()) {
        bodyNode.removeChild(bodyNode.lastChild);
    }
}
changeGrid(16);
