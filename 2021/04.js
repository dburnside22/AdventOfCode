const getFile = require("./getFile.js");
data = getFile.func("04", false).split(/\n\s*\n/);

let calledNumbers;
let theBoards = [];

data.forEach((number, i) => {
  if (i === 0) {
    calledNumbers = number.split(",");
  } else {
    theBoards.push(
      number.split("\n").map((x) => x.trim().split(" ").filter(String))
    );
  }
});

let winningBoards = [];

for (let i = 0; i < theBoards.length; i++) {
  let numbersCalled = 0;
  let foundWinningBoard = false;
  for (let n = 0; n < calledNumbers.length; n++) {
    if (foundWinningBoard) {
      break;
    }
    numbersCalled++;
    for (let l = 0; l < theBoards[i].length; l++) {
      if (foundWinningBoard) {
        break;
      }
      for (let c = 0; c < theBoards[i][l].length; c++) {
        if (foundWinningBoard) {
          break;
        }
        if (theBoards[i][l][c] === calledNumbers[n]) {
          theBoards[i][l][c] = "X";
          let horizontalMatches = 0;
          let verticalMatches = 0;
          for (let x = 0; x < 5; x++) {
            if (theBoards[i][l][x] === "X") {
              horizontalMatches++;
            }
            if (theBoards[i][x][c] === "X") {
              verticalMatches++;
            }
            if (horizontalMatches === 5 || verticalMatches === 5) {
              winningBoards.push({
                board: [...theBoards[i]],
                numbersCalled,
                numberJustCalled: calledNumbers[n],
              });
              foundWinningBoard = true;
              break;
            }
          }
        }
      }
    }
  }
}

winningBoards.sort((a, b) => {
  return a.numbersCalled - b.numbersCalled;
});

function getSum(arrOfArrays) {
  let total = 0;
  arrOfArrays.forEach((array) => {
    array.forEach((digit) => {
      if (digit !== "X") {
        total += Number(digit);
      }
    });
  });
  return total;
}

console.log(
  getSum(winningBoards[winningBoards.length - 1].board) *
    winningBoards[winningBoards.length - 1].numberJustCalled
);
