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
    const upToRight =
      positionOfHead[1] - positionOfTail[1] > 0 &&
      (positionOfHead[0] - positionOfTail[0] == 1 ||
        positionOfHead[1] - positionOfTail[1] == 1);

    const downToRight =
      positionOfHead[1] - positionOfTail[1] > 0 &&
      (positionOfHead[1] - positionOfTail[1] == -1 ||
        positionOfHead[0] - positionOfTail[0] == 1);

    const upToLeft =
      positionOfHead[1] - positionOfTail[1] < 0 &&
      (positionOfHead[0] - positionOfTail[0] == -1 ||
        positionOfHead[1] - positionOfTail[1] == 1);

    const downToLeft =
      positionOfHead[1] - positionOfTail[1] < 0 &&
      (positionOfHead[1] - positionOfTail[1] == -1 ||
        positionOfHead[0] - positionOfTail[0] == -1);

    const movedDiagonal = upToRight || downToLeft || upToLeft || downToRight;
    if (!movedDiagonal) {
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
    }
    if (upToRight) {
      positionOfTail[0]++;
      positionOfTail[1]++;
    }
    if (downToRight) {
      positionOfTail[0]++;
      positionOfTail[1]--;
    }
    if (upToLeft) {
      positionOfTail[0]--;
      positionOfTail[1]++;
    }
    if (downToLeft) {
      positionOfTail[0]--;
      positionOfTail[1]--;
    }

    console.log("position of head", positionOfHead);
    console.log("position of tail", positionOfTail);
  };

  const checkOnTail = () => {
    const headAndTailOverLap =
      positionOfHead[0] == positionOfTail[0] &&
      positionOfHead[1] == positionOfTail[1];

    const movedUpDownLeftOrRight =
      positionOfHead[0] - positionOfTail[0] > 1 ||
      positionOfHead[0] - positionOfTail[0] < -1 ||
      positionOfHead[1] - positionOfTail[1] > 1 ||
      positionOfHead[1] - positionOfTail[1] < -1;

    const upToRight =
      positionOfHead[1] - positionOfTail[1] > 0 &&
      (positionOfHead[0] - positionOfTail[0] == 1 ||
        positionOfHead[1] - positionOfTail[1] == 1);

    const downToRight =
      positionOfHead[1] - positionOfTail[1] > 0 &&
      (positionOfHead[1] - positionOfTail[1] == -1 ||
        positionOfHead[0] - positionOfTail[0] == 1);

    const upToLeft =
      positionOfHead[1] - positionOfTail[1] < 0 &&
      (positionOfHead[0] - positionOfTail[0] == -1 ||
        positionOfHead[1] - positionOfTail[1] == 1);

    const downToLeft =
      positionOfHead[1] - positionOfTail[1] < 0 &&
      (positionOfHead[1] - positionOfTail[1] == -1 ||
        positionOfHead[0] - positionOfTail[0] == -1);

    const movedDiagonal = upToRight || downToLeft || upToLeft || downToRight;

    if (!headAndTailOverLap && (movedUpDownLeftOrRight || movedDiagonal)) {
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
