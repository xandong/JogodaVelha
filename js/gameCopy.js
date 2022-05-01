const boxes = document.querySelectorAll(".div-in");
const getPlayer = document.getElementById("player");

let isPlayer = true,
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
  if (haveWinner) return;
  let box = event.currentTarget;
  validationsPlayer(box);
  round++;
}

async function validationsPlayer(box) {
  if (isPlayer) {
    if (box.innerHTML === "") {
      box.innerHTML = "X";
      getPlayer.innerHTML = `<strong>Robô 🤖<strong>`;
      validationsWinner("Você ganhou!");
      if (!haveWinner) {
        setTimeout(() => {
          botsTurn();
          getPlayer.innerHTML = `<strong>Sua vez!<strong>`;
          validationsWinner("O robô ganhou!");
        }, 1500);
      }
    }
  }
}

function conditionCombinationBot() {}

function botsTurn() {
  round++;
  let numberRandom = parseInt(Math.random() * 9);
  if (round > 2) {
    combinacoes.forEach((combinacao) => {
      if (
        boxes[combinacao[0]].innerHTML !== "" &&
        boxes[combinacao[0]].innerHTML === boxes[combinacao[1]].innerHTML
      ) {
        numberRandom = combinacao[2];
        if (combinacao[2] === "") return numberRandom;
      } else if (
        boxes[combinacao[0]].innerHTML !== "" &&
        boxes[combinacao[0]].innerHTML === boxes[combinacao[2]].innerHTML
      ) {
        numberRandom = combinacao[1];
        if (combinacao[1] === "") return numberRandom;
      } else if (
        boxes[combinacao[1]].innerHTML !== "" &&
        boxes[combinacao[1]].innerHTML === boxes[combinacao[2]].innerHTML
      ) {
        numberRandom = combinacao[0];
        if (combinacao[0] === "") return numberRandom;
      }
    });
  }
  if (boxes[numberRandom].innerHTML === "") {
    boxes[numberRandom].innerHTML = "O";
  } else {
    let auxParada = true;
    boxes.forEach((box) => {
      if (box.innerHTML === "" && auxParada) {
        box.innerHTML = "O";
        auxParada = false;
      }
    });
  }
}

function addWinner(args) {
  args.forEach((arg) => {
    boxes[arg].classList.add("winner");
  });
}

function validationsWinner(ganhador) {
  combinacoes.forEach((combinacao) => {
    if (
      boxes[combinacao[0]].innerHTML !== "" &&
      boxes[combinacao[0]].innerHTML === boxes[combinacao[1]].innerHTML &&
      boxes[combinacao[0]].innerHTML === boxes[combinacao[2]].innerHTML
    ) {
      getPlayer.innerHTML = `<strong>${ganhador}<strong>`;
      addWinner(combinacao);
      haveWinner = true;
    }
  });
}

function reset() {
  boxes.forEach((box) => {
    box.innerHTML = "";
    box.classList.remove("winner");
  });
  round = 0;
  haveWinner = false;
  getPlayer.innerHTML = `<strong>Sua vez!<strong>`;
}

boxes.forEach((box) => {
  box.addEventListener("click", game, false);
});
