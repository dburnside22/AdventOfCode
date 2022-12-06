import { input, testInput } from "./input.js";

const part1 = () => {
  console.log("Welcome To Day 6");
  const splitInput = input.split("");

  let runningArray = [];
  let answer;

  for (let i = 0; i < splitInput.length - 4; i++) {
    runningArray = [];
    let first = splitInput[i];
    let second = splitInput[i + 1];
    let third = splitInput[i + 2];
    let fourth = splitInput[i + 3];
    if (first != second) {
      runningArray.push(first);
      runningArray.push(second);
      if (!runningArray.includes(third)) {
        runningArray.push(third);
        if (!runningArray.includes(fourth)) {
          answer = i + 4;
          break;
        }
      }
    }
  }
  console.log(answer);
};

// part1();

const part2 = () => {
  console.log("Welcome To Day 6: part 2");
  const splitInput = input.split("");

  let runningArray = [];
  let answer = "";

  for (let i = 0; i < splitInput.length - 14; i++) {
    runningArray = [];
    runningArray.push(splitInput[i]);
    for (let j = 1; j < 14; j++) {
      if (!runningArray.includes(splitInput[i + j])) {
        runningArray.push(splitInput[i + j]);
        if (j == 13 && runningArray.length == 14 && answer.length == 0) {
          answer = i + j + 1;
        }
      }
    }
  }
  console.log(answer);
};

part2();
