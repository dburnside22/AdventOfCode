const getFile = require("./getFile.js");
data = getFile.func("02");

let horizontal = 0;
let depth = 0;
let aim = 0;

data.forEach((element) => {
  const elementBrokenApart = element.split(" ");
  const instruction = elementBrokenApart[0];
  const value = Number(elementBrokenApart[1]);
  if (instruction === "forward") {
    horizontal += value;
    depth += value * aim;
  } else if (instruction === "down") {
    aim += value;
  } else {
    aim -= value;
  }
});
console.log(horizontal * depth);
