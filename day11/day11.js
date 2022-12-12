import { input, testInput } from "./input.js";

const part1 = (dataSource) => {
  console.log("Welcome To Day 11");
  const monkeys = dataSource.split("\n\n").map((a) =>
    a.split("\n").map((b) =>
      b
        .trim()
        .split(":")
        .map((c) => c.trim())
    )
  );

  const getTotal = (opperationArray) => {
    const firstNumber = opperationArray[0];
    const secondNumber = opperationArray[2];
    const operation = opperationArray[1];

    if (operation == "*") {
      return firstNumber * secondNumber;
    } else {
      return firstNumber + secondNumber;
    }
  };

  let monkeysInfo = [];

  monkeys.forEach((monkey, i) => {
    let operations = monkey[2][1];
    const startingItems = monkey[1][1].split(",").map(Number);

    let divisibleBy = monkey[3][1].split(" ");
    divisibleBy = Number(divisibleBy[2]);

    let throwIfTrue = monkey[4][1].split(" ");
    throwIfTrue = Number(throwIfTrue[3]);

    let throwIfFalse = monkey[5][1].split(" ");
    throwIfFalse = Number(throwIfFalse[3]);

    let inspectionCount = 0;

    monkeysInfo.push([
      operations,
      startingItems,
      divisibleBy,
      throwIfTrue,
      throwIfFalse,
      inspectionCount,
    ]);
  });

  const runGame = () => {
    for (let q = 0; q < monkeysInfo.length; q++) {
      while (monkeysInfo[q][1].length > 0) {
        let operation = monkeysInfo[q][0].split(" ").map((d, j) => {
          if (d == "old") {
            return monkeysInfo[q][1][0];
          } else if (j == 4) {
            return Number(d);
          } else {
            return d;
          }
        });
        operation = [operation[2], operation[3], operation[4]];
        const total = Math.floor(getTotal(operation) / 3);
        const divisable = total / monkeysInfo[q][2] == 0;
        monkeysInfo[q][1].shift();
        divisable
          ? monkeysInfo[monkeysInfo[q][3]][1].push(total)
          : monkeysInfo[monkeysInfo[q][4]][1].push(total);
        monkeysInfo[q][5]++;
      }
    }
  };

  runGame();
  runGame();

  console.log(monkeysInfo);
};

part1(testInput);
// part1(input);
