import { input, testInput } from "./input.js";

const part1 = () => {
  console.log("Welcome To Day 6");
  // let howLongItTook = 0;
  const splitInput = input.split("");

  let runningArray = [];
  let answer;

  for (let i = 0; i < splitInput.length - 3; i++) {
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

part1();
