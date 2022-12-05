import { input, instructions, testInput, testInstructions } from "./input.js";

const part1 = () => {
  console.log("Welcome To Day 5");
  let arrays = [];

  const breakTheCrate = (crateToBreak) => {
    const brokenCrate = crateToBreak.split("");
    return brokenCrate[1];
  };

  const addToRightArrays = (indexOfArray, crate) => {
    arrays[indexOfArray].push(breakTheCrate(crate));
  };

  input
    .split("\n")
    .reverse()
    .map((line, i) => {
      let index = 0;
      if (i == 0) {
        line.split(" ").forEach(() => arrays.push([]));
      } else {
        line.split(" ").map((crate) => {
          if (crate != "") {
            index++;
            addToRightArrays(index - 1, crate);
          } else {
            index += 0.25;
          }
        });
      }
    });

  instructions.split("\n").map((instruction) => {
    let ins = instruction
      .replace("move", "")
      .replace("from", "")
      .replace("to", "")
      .split("  ")
      .map((t) => Number(t));

    for (let i = 0; i < ins[0]; i++) {
      const from = ins[1] - 1;
      const to = ins[2] - 1;

      const removedCrate = arrays[from].pop();
      arrays[to].push(removedCrate);
    }
  });

  let finalString = "";

  arrays.forEach((array) => {
    const addLetter = array[array.length - 1];
    if (addLetter != undefined) {
      finalString += array[array.length - 1];
    }
  });

  console.log("finalString", finalString);
};

// part1();

//GJSBZDNW
const part2 = () => {
  console.log("Welcome To Day 5");
  let arrays = [];

  const breakTheCrate = (crateToBreak) => {
    const brokenCrate = crateToBreak.split("");
    return brokenCrate[1];
  };

  const addToRightArrays = (indexOfArray, crate) => {
    arrays[indexOfArray].push(breakTheCrate(crate));
  };

  input
    .split("\n")
    .reverse()
    .map((line, i) => {
      let index = 0;
      if (i == 0) {
        line.split(" ").forEach(() => arrays.push([]));
      } else {
        line.split(" ").map((crate) => {
          if (crate != "") {
            index++;
            addToRightArrays(index - 1, crate);
          } else {
            index += 0.25;
          }
        });
      }
    });

  instructions.split("\n").map((instruction) => {
    let ins = instruction
      .replace("move", "")
      .replace("from", "")
      .replace("to", "")
      .split("  ")
      .map((t) => Number(t));

    for (let i = 0; i < ins[0]; i++) {
      const from = ins[1] - 1;
      const to = ins[2] - 1;

      const removedCrate = arrays[from].pop();
      arrays[to].push(removedCrate);
    }
  });

  let finalString = "";

  arrays.forEach((array) => {
    const addLetter = array[array.length - 1];
    if (addLetter != undefined) {
      finalString += array[array.length - 1];
    }
  });

  console.log("finalString", finalString);
};

part2();
