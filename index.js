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

function changeColor(cell){
    const colours = [
        "#B7E1D9", "#E1B7E1", "#FAD6C1", "#F6B4A6", "#FDF2C0", "#B7D5E8", "#EADBC8", "#D3C0E8", "#FFF9E6", "#A9D8D3", "#FFB3BA", "#FF677D", "#D3E6F2", "#B2F2BB", "#FFE156", "#FFABAB", "#FF677D", "#FFC3A0", "#B9FBC0", "#F9C5D1", "#FFFFFF", "#000000",
        "#FF0000","#00FF00","#0000FF","#FFFF00","#00FFFF","#00FFFF","#FF00FF","#808080", "#D3D3D3","#A9A9A9","#FFA500","#800080","#A52A2A","#ADD8E6","#ADD8E6","#FFC0CB","#FFC0CB","#FFD700","#808000"
    ];

    let colour = colours[Math.floor(Math.random()*colours.length)]
    cell.style.backgroundColor = colour;
}

let cells = document.querySelectorAll(".cell");
let drawingActive = false;

document.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains('cell') && drawingActive) {
        changeColor(event.target);
    }
});

document.addEventListener("keydown", (e)=>{
    if(e.metaKey){
        drawingActive = true;
    }
});

document.addEventListener("keyup", () => {
    drawingActive = false; 
    }
);

