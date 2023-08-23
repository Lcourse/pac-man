let restartButton = document.createElement("button");
let score = 0;
let toWin = 0;

document.getElementById("play").addEventListener("click", function game(){
    const scoreDisplay = document.getElementById("score");
    const width = 28; //28*28 = 784 squares
    const grid = document.querySelector(".grid")
    const layout = [
        1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ]
    const squares = [];
})