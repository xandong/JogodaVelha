const boxes = document.querySelectorAll(".div-in");
const getPlayer = document.getElementById("player");
const getPlacar = document.getElementById("placar");

let isPlayerOne = true,
  haveWinner = false,
  round = 0,
  player = "X",
  placar = [0, 0],
  combinacoes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

function game() {
  if (!haveWinner) {
    round++;

    let box = event.currentTarget;
    validationsPlayer(box);
    setPlayer();

    if (round > 3) {
      validationsWinner();
    }
  }
}

function validationsPlayer(box) {
  if (box.innerHTML === "") {
    box.innerHTML = player;
    isPlayerOne = !isPlayerOne;
  }
}

function setPlayer() {
  if (isPlayerOne) {
    player = "X";
  } else {
    player = "O";
  }
  getPlayer.innerHTML = `Quem joga: ${player}`;
}

function validationsWinner() {
  combinacoes.forEach((combinacao) => {
    console.log(combinacao);
    if (
      boxes[combinacao[0]].innerHTML !== "" &&
      boxes[combinacao[0]].innerHTML === boxes[combinacao[1]].innerHTML &&
      boxes[combinacao[0]].innerHTML === boxes[combinacao[2]].innerHTML
    ) {
      addWinner(combinacao);
      setPlacar();
      haveWinner = true;
    }
  });
}

function setPlacar() {
  player !== "X" ? placar[0]++ : placar[1]++;
  getPlacar.innerHTML = `Placar: X -> ${placar[0]}   |  O -> ${placar[1]}`;
}

function addWinner(args) {
  args.forEach((arg) => {
    boxes[arg].classList.add("winner");
  });
}

function reset() {
  boxes.forEach((box) => {
    box.innerHTML = "";
    box.classList.remove("winner");
  });
  round = 0;
  haveWinner = false;
}

boxes.forEach((box) => {
  box.addEventListener("click", game, false);
});
