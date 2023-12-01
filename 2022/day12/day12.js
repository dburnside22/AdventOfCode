import { input, testInput } from "./input.js";

const part1 = (dataSource) => {
  console.log("Welcome To Day 12");
  const elevationOrder = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const splitInput = dataSource.split("\n").map((row) => row.split(""));
  let currentX = 0;
  let currentY = 0;

  let startLocation;
  let endLocation;

  // Find the start and end locations
  splitInput.forEach((row, y) => {
    row.forEach((col, x) => {
      if (col === "S") {
        startLocation = { x, y };
      }
      if (col === "E") {
        endLocation = { x, y };
      }
    });
  });

  const canAdvance = (letter, potentialLetter) => {
    const letterIndex = elevationOrder.indexOf(letter);
    const potentialLetterIndex = elevationOrder.indexOf(potentialLetter);

    return (
      letterIndex + 1 == potentialLetterIndex ||
      letterIndex >= potentialLetterIndex
    );
  };

  // Find the shortest path from start to end using A*
  const openList = [startLocation];
  const closedList = [];
};

part1(testInput);
// part1(input);
