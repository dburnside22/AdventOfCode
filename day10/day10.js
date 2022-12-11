import { input, testInput, testInput1 } from "./input.js";

const part1 = (dataSource) => {
  console.log("Welcome To Day 10");
  const splitInput = dataSource.split("\n").map((i) =>
    i.split(" ").map((l, j) => {
      if (j == 1) {
        return Number(l);
      } else {
        return l;
      }
    })
  );
  const importCycles = [20, 60, 100, 140, 180, 220];
  let cycle = 0;
  let X = 1;
  let grandTotal = 0;

  splitInput.forEach((ins) => {
    cycle++;
    if (importCycles.includes(cycle)) {
      grandTotal += X * cycle;
    }
    if (ins[0] == "noop") {
      // do nothing be nothing
    }
    if (ins[0] == "addx") {
      cycle++;
      if (importCycles.includes(cycle)) {
        grandTotal += X * cycle;
      }
      X += ins[1];
    }
  });

  console.log("grandTotal", grandTotal);
};

// part1(testInput1);
// part1(testInput);
// part1(input);

const part2 = (dataSource) => {
  console.log("Welcome To Day 10: part 2");
  const splitInput = dataSource.split("\n").map((i) =>
    i.split(" ").map((l, j) => {
      if (j == 1) {
        return Number(l);
      } else {
        return l;
      }
    })
  );
  const importCycles = [40, 80, 120, 160, 200, 240];
  let CRTdrawingPosition = 0;
  let X = 1;

  let picture = "";

  splitInput.forEach((ins) => {
    const check = () => {
      if (
        CRTdrawingPosition == X ||
        CRTdrawingPosition == X - 1 ||
        CRTdrawingPosition == X + 1
      ) {
        picture += "|";
      } else {
        picture += " ";
      }
      CRTdrawingPosition++;
      if (importCycles.includes(CRTdrawingPosition)) {
        console.log(picture);
        picture = "";
        X += 40;
      }
    };
    if (ins[0] == "noop") {
      check();
      // do nothing be nothing
    }
    if (ins[0] == "addx") {
      check();
      check();
      X += ins[1];
    }
  });
};

// part2(testInput);
part2(input);
