let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newButton = document.querySelector(".new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
let turn1 = false;

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () => {
  turn0 = true;
  enabledBoxes();
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("clicked");
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
      box.classList.add("player1");
    } else {
      box.innerText = "X";
      turn0 = true;
      box.classList.add("player2");
    }
    box.disabled = true;
    checkWin();
  });
});

const disabledBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const enabledBoxes = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  msgContainer.classList.add("hide");
};

const showWinner = (winner) => {
  msg.innerText = `Player ${winner} wins!`;
  msgContainer.classList.remove("hide");
  disabledBoxes();
};

const checkWin = () => {
  for (let pattern of winCombos) {
    let post1 = boxes[pattern[0]].innerText;
    let post2 = boxes[pattern[1]].innerText;
    let post3 = boxes[pattern[2]].innerText;
    if (post1 != "" && post2 != "" && post3 != "") {
      if (post1 === post2 && post2 === post3) {
        console.log(`Player ${post1} wins!`);
        boxes.forEach((box) => {
          box.disabled = true;
        });
        showWinner(post1);
        return;
      }
    }
  }
};

newButton.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
