container = document.querySelector(".container")

function createDivs(n = 16){
    for(let i = 0; i<n ; i++){
        let colDiv = document.createElement("div");
        colDiv.style.flex = "auto";
        const cellSize = `calc(100% / ${n})`;

        for(let j = 0; j<n ; j++){
            cellDiv = document.createElement("div");
            cellDiv.classList.add("cell");
            cellDiv.style.height = cellSize;
            colDiv.append(cellDiv);
        }
        container.appendChild(colDiv);
    }
}

createDivs();