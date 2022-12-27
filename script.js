const body = document.getElementById("container");
console.log(body);
for (let i = 0; i <= 16*16; i++) {
    const divBlock = document.createElement("div");
    divBlock.innerHTML = "generated from JS";
    divBlock.className = "inner";
    body.appendChild(divBlock);
}
    