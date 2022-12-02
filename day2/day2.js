import { input, testInput } from "./input.js";

const part1 = () => {
  console.log("Welcome To Day 2");
  const calulateWin = (n1, n2) => {
    let returnedTotal = 0;
    if (n2 === "X") {
      returnedTotal += 1;
    }
    if (n2 === "Z") {
      returnedTotal += 3;
    }
    if (n2 === "Y") {
      returnedTotal += 2;
    }

    // A || X = Rock and + 1
    // C || Z = Scisors and + 3
    // B || Y = Paper and + 2

    // Win = 6
    // Draw = 3
    // Loss = 0
    if (
      (n1 === "A" && n2 === "X") ||
      (n1 === "C" && n2 === "Z") ||
      (n1 === "B" && n2 === "Y")
    ) {
      returnedTotal += 3;
    }
    if (
      (n1 === "A" && n2 === "Y") ||
      (n1 === "C" && n2 === "X") ||
      (n1 === "B" && n2 === "Z")
    ) {
      returnedTotal += 6;
    }
    // console.log("returnedTotal", returnedTotal);
    return returnedTotal;
  };

  const splitInput = input.split("\n");

  let total = 0;
  splitInput.forEach((set) => {
    const splitSet = set.split(" ");
    total += calulateWin(splitSet[0], splitSet[1]);
  });

  console.log(total);
};

// part1();
}

part1();





