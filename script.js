function changeGrid(numGrids) {
    const body = document.getElementById("container");
    body.style.setProperty('grid-template-columns', `repeat(${numGrids}, 1fr)`);
    body.style.setProperty('grid-template-rows', `repeat(${numGrids}, 1fr)`);
    console.log(body);
    for (let i = 0; i <= 16 * 16; i++) {
        const divBlock = document.createElement("div");
        divBlock.innerHTML = "";
        divBlock.className = "inner";
        body.appendChild(divBlock);
    }
}