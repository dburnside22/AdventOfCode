import { input, testInput } from "./input.js";

const part1 = (dataSource) => {
  console.log("Welcome To Day 14");
  const splitInput = dataSource
    .split("\n")
    .map((l) => l.split("->").map((k) => k.trim()));
  console.log(splitInput);
};

part1(testInput);
// part1(input);
