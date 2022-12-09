import { input, testInput } from "./input.js";

const part1 = (dataSource) => {
  console.log("Welcome To Day 9");
  const splitInput = dataSource.split("\n").map((line) =>
    line.split(" ").map((l, i) => {
      if (i == 1) {
        return Number(l);
      } else {
        return l;
      }
    })
  );
  let placesTailHit = [];
  let positionOfTail = [0, 0];
  let positionOfHead = [0, 0];
  placesTailHit.push(`${positionOfTail[0]}${positionOfTail[1]}`);

  const moveTail = () => {
    if (positionOfHead[0] - positionOfTail[0] > 1) {
      positionOfTail[0]++;
    }
    if (positionOfHead[0] - positionOfTail[0] < -1) {
      positionOfTail[0]--;
    }
    if (positionOfHead[1] - positionOfTail[1] > 1) {
      positionOfTail[1]++;
    }
    if (positionOfHead[1] - positionOfTail[1] < -1) {
      positionOfTail[1]--;
    }
    if (positionOfHead[0] - positionOfTail[1] > 1) {
      positionOfTail[1]++;
      positionOfTail[0]++;
    }
    if (positionOfHead[0] - positionOfTail[1] < -1) {
      positionOfTail[1]--;
      positionOfTail[0]--;
    }
    if (positionOfHead[1] - positionOfTail[0] > 1) {
      positionOfTail[0]++;
      positionOfTail[1]++;
    }
    if (positionOfHead[1] - positionOfTail[0] < -1) {
      positionOfTail[0]--;
      positionOfTail[1]--;
    }
    console.log("position of tail", positionOfTail);
  };

  const checkOnTail = () => {
    const headAndTailOverLap =
      positionOfHead[0] == positionOfTail[0] &&
      positionOfHead[1] == positionOfTail[1];

    const headIsToFar =
      positionOfHead[0] - positionOfTail[0] > 1 ||
      positionOfHead[0] - positionOfTail[0] < -1 ||
      positionOfHead[1] - positionOfTail[1] > 1 ||
      positionOfHead[1] - positionOfTail[1] < -1 ||
      positionOfHead[0] - positionOfTail[1] > 1 ||
      positionOfHead[0] - positionOfTail[1] < -1 ||
      positionOfHead[1] - positionOfTail[0] > 1 ||
      positionOfHead[1] - positionOfTail[0] < -1;

    if (!headAndTailOverLap && headIsToFar) {
      moveTail();
    }
  };

  const moveHead = (instruction) => {
    for (let i = 0; i < instruction[1]; i++) {
      if (instruction[0] == "R") {
        positionOfHead[1]++;
      }
      if (instruction[0] == "L") {
        positionOfHead[1]--;
      }
      if (instruction[0] == "U") {
        positionOfHead[0]++;
      }
      if (instruction[0] == "D") {
        positionOfHead[0]--;
      }
      checkOnTail();
    }
  };

  splitInput.forEach((instruction) => {
    moveHead(instruction);
  });
  console.log("totalOfPlacesTailHit", placesTailHit.length);
};

part1(testInput);
// part1(input);
