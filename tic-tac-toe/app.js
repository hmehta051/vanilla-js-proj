let btnRef = document.querySelectorAll(".button-option");
let popRef = document.querySelector(".popup");
let newGameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let messageRef = document.getElementById("message");

let winningTeam = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//player x play first

let xTurn = true;
let count = 0;
const disabledButton = () => {
  btnRef.forEach((element) => (element.disabled = true));
  popRef.classList.remove("hide");
};

const winFunction = (letter) => {
  disabledButton();
  if (letter === "x") {
    messageRef.innerHTML = "<b>X WINS</b>";
  } else {
    messageRef.innerHTML = "<b>O WINS</b>";
  }
};

const drawFunction = () => {
  disabledButton();
  messageRef.innerHTML = "<b>Draw</b>";
};

const enabledButton = () => {
  btnRef.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });
  popRef.classList.add("hide");
};

newGameBtn.addEventListener("click", () => {
  count = 0;
  enabledButton();
});
restartBtn.addEventListener("click", () => {
  count = 0;
  enabledButton();
});

const winChecker = () => {
  for (let i of winningTeam) {
    let [e1, e2, e3] = [
      btnRef[i[0]].innerText,
      btnRef[i[1]].innerText,
      btnRef[i[2]].innerText,
    ];
    if (e1 !== "" && e2 !== "" && e3 !== "") {
      if (e1 == e2 && e2 == e3) {
        winFunction(e1);
      }
    }
  }
};

btnRef.forEach((elem) => {
  elem.addEventListener("click", () => {
    if (xTurn) {
      xTurn = false;
      elem.innerText = "x";
      elem.disabled = true;
    } else {
      xTurn = true;
      elem.innerText = "o";
      elem.disabled = true;
    }
    count++;
    if (count === 9) {
      drawFunction();
    }
    winChecker();
  });
});

window.onload = enabledButton;
