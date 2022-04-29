const boxes = document.querySelectorAll(".div-in");

let isPlayerOne = true,
  round = 0,
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
  round++;

  let box = event.currentTarget;
  validationsPlayer(box);

  if (round > 3) {
    validationsWinner();
  }
}

function validationsPlayer(box) {
  if (box.innerHTML === "") {
    box.innerHTML = `${isPlayerOne ? "X" : "O"}`;
    isPlayerOne = !isPlayerOne;
  }
}

function validationsWinner() {
  combinacoes.forEach((combinacao) => {
    console.log(combinacao);
    if (
      boxes[combinacao[0]].innerHTML !== "" &&
      boxes[combinacao[0]].innerHTML === boxes[combinacao[1]].innerHTML &&
      boxes[combinacao[0]].innerHTML === boxes[combinacao[2]].innerHTML
    ) {
      console.log(`Combinação valida: ${combinacao}`);
      addWinner(combinacao);
      stopGame();
    }
  });
}

function addWinner(args) {
  args.forEach((arg) => {
    boxes[arg].classList.add("winner");
  });
}

function stopGame() {}

function reset() {
  boxes.forEach((box) => {
    box.innerHTML = "";
    box.classList.remove("winner");
  });
  round = 0;
}

boxes.forEach((box) => {
  box.addEventListener("click", game, false);
});
