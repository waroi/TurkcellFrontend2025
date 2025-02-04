var headers = document.getElementsByTagName("h1");
var buttons = document.getElementsByTagName("button");
var move = document.getElementById("move");
var winnerExistance = false;
var clickCount = 0;
var winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
var XorO = "X";

function checkThreeElements(eOne, eTwo, eThree) {
  return (
    eOne.textContent === eTwo.textContent &&
    eOne.textContent === eThree.textContent &&
    eOne.textContent != "" &&
    eTwo.textContent != "" &&
    eThree.textContent != ""
  );
}

function isThereWinner() {
  for (let i = 0; i < winConditions.length; i++) {
    if (
      checkThreeElements(
        headers[winConditions[i][0]],
        headers[winConditions[i][1]],
        headers[winConditions[i][2]]
      )
    ) {
      winnerExistance = true;
    }
  }
  return winnerExistance;
}

function disableAllButtons() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
}

function clearMoveBg() {
  move.classList.remove("bg-danger");
  move.classList.remove("bg-success");
}

for (let i = 0; i < 9; i++) {
  headers[i].addEventListener("click", () => {
    clickCount++;
    buttons[i].classList.remove("btn-outline-dark");
    if (XorO === "O") {
      XorO = "X";
      move.textContent = "Next move: O";
      clearMoveBg();
      move.classList.add("bg-success");
      buttons[i].classList.add("btn-outline-danger");
    } else if (XorO === "X") {
      XorO = "O";
      buttons[i].classList.add("btn-outline-success");
      move.textContent = "Next move: X";
      clearMoveBg();
      move.classList.add("bg-danger");
    }
    headers[i].textContent = XorO;
    buttons[i].disabled = true;

    if (isThereWinner() == true) {
      console.log("isthere", isThereWinner());
      move.textContent = XorO + " WON";
      move.style.transform = "scale(1.5)";
      clearMoveBg();

      XorO == "X"
        ? move.classList.add("bg-danger")
        : move.classList.add("bg-success");

      disableAllButtons();
    } else if (isThereWinner() == false && clickCount == 9) {
      clearMoveBg();
      move.classList.add("bg-warning");
      move.textContent = "TIE";
      move.style.transform = "scale(1.5)";
    }
  });
}
