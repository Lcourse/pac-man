let restartButton = document.createElement("button");
let score = 0;
let toWin = 0;

document.getElementById("play").addEventListener("click", function game() {
  const scoreDisplay = document.getElementById("score");
  const width = 28; //28*28 = 784 squares
  const grid = document.querySelector(".grid");
  const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 4, 4, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 4, 4, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1,
    4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
    1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 4, 4, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 4, 4, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 4, 4, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 4,
    4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1,
    1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    4, 4, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 4, 4, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 4, 4, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 4, 4,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1,
    1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4,
    4, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 4, 4, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 4, 4, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];
  const squares = [];

  /* Posição inicial do PAC MAN */
  function createBoard() {
    for (let i = 0; i < layout.length; i++) {
      const square = document.createElement("div");
      grid.appendChild(square);
      squares.push(square);

      if (layout[i] === 0) {
        squares[i].classList.add("pac-dot");
      } else if (layout[i] === 1) {
        squares[i].classList.add("wall");
      } else if (layout[i] === 2) {
        squares[i].classList.add("ghost-lair");
      } else if (layout[i] === 3) {
        squares[i].classList.add("power-pellet");
      } else if (layout[i] === 4) {
        squares[i].classList.add("empty");
      }
    }
  }
  createBoard();

  /*Função de mostrar Pontuação ao usuário */
  function bestScoreCount() {
    let higher;
    let bestScore = window.localStorage.getItem(higher);
    window.localStorage.setItem(bestScore, higher);
    const bestScoreDisplay = document.getElementById("bestScore");
    if (bestScore == nul) {
      bestScore = score;
      window.localStorage.setItem(higher, bestScore);
    } else if (score < Number(window.localStorage.getItem(higher))) {
      bestScore = score;
    } else if (score > Number(window.localStorage.getItem(higher))) {
      window.localStorage.clear();
      bestScore = score;
      window.localStorage.setItem(higher, bestScore);
    }
    bestScoreDisplay.innerHTML = window.localStorage.getItem(higher);
  }
  bestScoreCount();

let pacmanCurrentIndex = 518;
squares[pacmanCurrentIndex].classList.add("pac-man");

/* Função de mover o PAC MAN */
function movePacman(e) {
    squares[pacmanCurrentIndex].classList.remove("pac-man");
    switch (e.keycode) {
        case 37:
            if (pacmanCurrentIndex % width !== 0 && !squares[pacmanCurrentIndex -1].classList.contains("wall") && !squares[pacmanCurrentIndex -1].classList.contains("ghost-lair")) {
                pacmanCurrentIndex -= 1;
                squares[pacmanCurrentIndex].style.transform = "scaleX(-1) rotate(95deg)";

                if (pacmanCurrentIndex -1 === 363) {
                    pacmanCurrentIndex = 391
                }
            }
            break;
        case 38: 
        if (pacmanCurrentIndex - width >= 0 && !squares[pacmanCurrentIndex - width].classList.contains("wall") && !squares[pacmanCurrentIndex - width].classList.contains("ghost-lair")) {
            pacmanCurrentIndex -= width;
            squares[pacmanCurrentIndex].style.transform = "scaleY(1)"
        }
            break;
        case 39:
        if (pacmanCurrentIndex % width < width -1 && !squares[pacmanCurrentIndex + 1].classList.contains("wall") && !squares[pacmanCurrentIndex + 1].classList.contains("ghost-lair"))    
        {
            pacmanCurrentIndex += 1;
            squares[pacmanCurrentIndex].style.transform = "scaleY(1) rotate(95deg)";

            if (pacmanCurrentIndex + 1 === 392) {
                pacmanCurrentIndex = 364;
            }
        }
            break;
        case 40:
            if (pacmanCurrentIndex + width < width * width && !squares[pacmanCurrentIndex + width].classList.contains("wall") && !squares[pacmanCurrentIndex + width].classList.contains("ghost-lair")) {
              pacmanCurrentIndex += width;
              squares[pacmanCurrentIndex].style.transform = "rotate(190deg)";
            }
            break;
    }

squares[pacmanCurrentIndex].classList.add("pac-man") 

pacDotEaten();
powerPelletEaten();
checkForGameOver();
checkForWin();

}

document.addEventListener("keydown", movePacman);

var initialX = null;
var initialY = null;

function startTouch(e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
}

function moveTouch(e) {
  if (initialX === null) {
    return;
  }
  if (initialY === null) {
    return;
  }

  var currentX = e.touches[0].clientX;
  var currentY = e.touches[0].clientY;
  var diffX = initialX - currentX;
  var diffY = initialY - currentY;

  squares[pacmanCurrentIndex].classList.remove("pac-man");

  if (Math.abs(diffX) > Math.abs(diffY)) {
    if (diffX > 0) {

        if(pacmanCurrentIndex % width !== 0 && !squares[pacmanCurrentIndex - 1].classList.contains("wall") && !squares[pacmanCurrentIndex -1].classList.contains("ghost-lair")) {
          pacmanCurrentIndex -= 1;
          squares[pacmanCurrentIndex].style.transform = "scaleX(-1) rotate(95deg)";
          if (pacmanCurrentIndex - 1 === 363) {
              pacmanCurrentIndex = 391;
          }
        } else  {
          if (pacmanCurrentIndex % width < width -1 && !squares[pacmanCurrentIndex +1].classList.contains("wall") && !squares[pacmanCurrentIndex + 1].classList.contains("ghost-lair")) {
            pacmanCurrentIndex += 1;
            squares[pacmanCurrentIndex].style.transform = "scaleY(1) rotate(95deg)";
            if (pacmanCurrentIndex + 1 === 392) {
                pacmanCurrentIndex = 364;
            }
          }
        }
    } else {
      if (diffY > 0) {
        if (pacmanCurrentIndex - width >= 0 && !squares[pacmanCurrentIndex - width].classList.contains("wall") && !squares[pacmanCurrentIndex - width].classList.contains("ghost-lair")) {
          pacmanCurrentIndex -= width;
          squares[pacmanCurrentIndex].style.transform = "scaleY(1)";
        }
      } else {
        if (pacmanCurrentIndex + width < width * width && !squares[pacmanCurrentIndex + width].classList.contains("wall") && !squares[pacmanCurrentIndex + width].classList.contains("ghost-lair")) {
          pacmanCurrentIndex += width;
          squares[pacmanCurrentIndex].style.transform = "rotate(190deg)";
        }
      }
    }
    /* Função que permite o PACMAN comer fantasmas, depois de comer a fruta */
    squares[pacmanCurrentIndex].classList.add("pac-man");
    initialX = null;
    initialY = null;

    e.preventDefault();

    pacDotEaten();
    powerPelletEaten();
    checkForGameOver();
    checkForWin();

  }

  document.querySelector(".grid").addEventListener("touchstart", startTouch, false);
  document.querySelector(".grid").addEventListener("touchmove", moveTouch, false);

function pacDotEaten() {
  if (squares[pacmanCurrentIndex].classList.contains("pac-dot")) {
    score++;
    toWin++;
    squares[pacmanCurrentIndex].classList.remove("pac-dot");
  }
  scoreDisplay.innerHTML = score
}

function powerPelletEaten() {
  if (squares[pacmanCurrentIndex].classList("power-pellet")) {
    score += 10;
    toWin += 10;
    ghosts.forEach(ghost.isScared = true);
    setTimeout(unScareGhosts, 7000);
    squares[pacmanCurrentIndex].classList.remove("power-pellet");
  }
  scoreDisplay.innerHTML = score;
}

class Ghost {
  constructor(className, startIndex, speed) {
    this.className = className;
    this.startIndex = startIndex;
    this.speed = speed;
    this.currentIndex = startIndex;
    this.timerId = NaN;
    this.isScared = false;
  }
}

/* Configuração, cor dos fantasmas */
const ghosts = {
  new Ghost("blinky", 348 290),
  new Ghost("pinky", 376 380),
  new Ghost("inky", 351 200),
  new Ghost("clyde", 379 250)
}

function unScareGhosts() {ghosts.forEach(ghost => ghost.isScared = false)}

ghosts.forEach(ghost => {
  squares[ghost.currentIndex].classList.add(ghost.className);
  squares[ghost.currentIndex].classList.add("ghost");
})

/* Movimentação dos Fantasmas*/
ghosts.forEach(ghost => moveGhost(ghost));

function moveGhost(ghost) {
  const directions = [-1, +1, width, -width]
  let direction = directions[Math.floor(Math.random() * directions.length)];
  ghost.timerId = setInterval(function() {
    if (!squares[ghost.currentIndex + direction].classList.contains("ghost") && !squares[ghost.currentIndex + direction].classList.contains("wall")) {
      squares[ghost.currentIndex].classList.remove(ghost.className);
      squares[ghost.currentIndex].classList.remove("ghost", "scared-ghost");
      ghost.currentIndex += direction;
      squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
    } else if (ghost.currentIndex -1 === 363) {
      squares[ghost.currentIndex].classList.remove(ghost.className, "ghost");
      ghost.currentIndex = 391;
      squares[ghost.currentIndex].classList.add("ghost");
    } else fi (ghost.currentIndex +1 === 392) {
      squares[ghost.currentIndex].classList.remove(ghost.className, "ghost");
      ghost.currentIndex = 364;
      squares[ghost.currentIndex].classList.add("ghost");
    } else {
      direction = directions[Math.floor(Math.random()* directions.length)]
    }

    if (ghost.isScared) {
      squares[ghost.currentIndex].classList.add("scared-ghost");
    }
    if (squares[pacmanCurrentIndex].classList.contains("scared-ghost")) {
      squares[ghost.currentIndex].classList.remove(ghost.className, "ghost", "scared-ghost");
      ghost.currentIndex = ghost.startIndex;
      score += 100;
      scoreDisplay.innerHTML = score;
      squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
    }

    checkForGameOver();

  }, ghost.speed)

}

/*Função que verfica quando dá Game Over */
function checkForGameOver() {
  if (squares[pacmanCurrentIndex].classList.contains("ghost") && !squares[pacmanCurrentIndex].classList.contains("scared-ghost")) {
    ghosts.forEach(ghost => clearInterval(ghost.timerId));
    document.removeEventListener("keydown", movePacman);
    bestScoreCount();
    scoreDisplay.innerHTML = score;
    let gameOver = document.createElement("div");
    gameOver.classList.add("gameOver");
    document.body.append(gameOver);
    restartButton.classList.add("restart");
    document.body.append(restartButton);
    document.getElementById("play").removeEventListener("click", game);
    restartButton.addEventListener("click", () => (window.location.reload(false)))
  }  
}

function checkForWin() {
  
}


}

}
);
