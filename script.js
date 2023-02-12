let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);

    document.querySelector("body").addEventListener("click", function(e){
        if(e.target.tagName != "BUTTON"){
            click = !click;
            let draw = document.querySelector("#draw");
            if(click){
                draw.innerHTML = "Drawing is on.";
            }
            else{
                draw.innerHTML = "Drawing is off. Click inside the board to turn on.";
            }
        }
    })

    let btn_popup = document.querySelector("#popup")
    btn_popup.addEventListener("click", function(){
        let size = getSize();
        createBoard(size);
    })
})

function createBoard(size){
    resetBoard();
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        board.insertAdjacentElement("beforeend", div);
    }
}

function getSize(){
    let input = prompt("Select a grid size");
    let message = document.querySelector("#message");
    if(input == ""){
        message.innerHTML = "Please provide a number";
    }
    else if(input < 2 || input > 100){
        message.innerHTML = "Provide a number between 2 and 100";
    }
    else{
        message.innerHTML = "Drag mouse over the board to play. Have Fun!";
        return input;
    }
}

function colorDiv(){
    if(click){
        if(color == "rainbow"){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        }
        else if(color == "blue"){
            this.style.backgroundColor = 'blue';
        }
        else if(color == "red"){
            this.style.backgroundColor = 'red'
        }
        else{
            this.style.backgroundColor = 'black'
        }
    }
}

function setColor(colorChoice){
    color = colorChoice;
}

function resetBoard(){
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "white")
}