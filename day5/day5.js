import { input, instructions, testInput, testInstructions } from "./input.js";

const part1 = () => {
  console.log("Welcome To Day 5");
  let arrays = [];

  const breakTheCrate = (crateToBreak) => {
    const brokenCrate = crateToBreak.split("");
    return brokenCrate[1];
  };

  const addToRightArrays = (firstArrayIndex, stringToParse) => {
    const splitString = stringToParse.split(" ");
    let arrayItBelongs = firstArrayIndex;
    // console.log("splitString", splitString);
    splitString.forEach((crate, j) => {
      const indexOfArrayToPushTo = arrayItBelongs + j;
      if (crate != "") {
        const crateToAdd = breakTheCrate(crate);
        arrays[indexOfArrayToPushTo].push(crateToAdd);
      } else {
        arrayItBelongs--;
      }
    });
  };

  testInput
    .split("\n")
    .reverse()
    .map((line, i) => {
      const splitLine = line.split("  ");
      console.log("splitLine", splitLine);
      if (i == 0) {
        splitLine.forEach(() => arrays.push([]));
      } else {
        splitLine.forEach((group, i) => {
          if (group != "") {
            console.log("group", group);
            console.log("i", i);
          }
          // addToRightArrays(i, group);
        });
      }
      // console.log("line", line);
      // console.log("arrays", arrays);
    });

  // instructions.split("\n").map((instruction) => {
  //   let ins = instruction
  //     .replace("move", "")
  //     .replace("from", "")
  //     .replace("to", "")
  //     .split("  ")
  //     .map((t) => Number(t));

  //   for (let i = 0; i < ins[0]; i++) {
  //     const from = ins[1] - 1;
  //     const to = ins[2] - 1;

  //     const removedCrate = arrays[from].pop();
  //     arrays[to].push(removedCrate);
  //   }
  // });

  // let finalString = "";

  // arrays.forEach((array) => {
  //   const addLetter = array[array.length - 1];
  //   if (addLetter != undefined) {
  //     finalString += array[array.length - 1];
  //   }
  // });

  console.log("arrays", arrays);
};

part1();

//GJSBZDNW
