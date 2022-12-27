import { input, testInput } from "./input.js";

const part1 = (dataSource) => {
  console.log("Welcome To Day 13");
  const splitInput = dataSource.split("\n\n").map((a) => a.split("\n"));
  let indexes = [];

  const processValues = (left, right, result) => {
    const leftIsNumber = typeof left === "number";
    const rightIsNumber = typeof right === "number";
    if (leftIsNumber && rightIsNumber) {
      if (left < right) {
        result.rightOrder = true;
        return;
      }
      if (left > right) {
        result.rightOrder = false;
        return;
      }
    } else if (!leftIsNumber && !rightIsNumber) {
      let i = 0;
      while (true) {
        if (i > left.length - 1 && i <= right.length - 1) {
          // left runs out first
          result.rightOrder = true;
          return;
        } else if (i <= left.length - 1 && i > right.length - 1) {
          // right runs out first
          result.rightOrder = false;
          return;
        } else if (i > left.length - 1 && i > right.length - 1) {
          // both runs out
          return;
        }
        processValues(left[i], right[i], result);
        if (typeof result.rightOrder !== "undefined") {
          return;
        }

        i++;
      }
    } else {
      if (leftIsNumber) {
        processValues([left], right, result);
      } else {
        processValues(left, [right], result);
      }
    }
  };

  splitInput.forEach(([first, second], index) => {
    let result = {};
    const valuesOfFirst = JSON.parse(first);
    const valuesOfSecond = JSON.parse(second);
    processValues(valuesOfFirst, valuesOfSecond, result);
    if (result.rightOrder) {
      indexes.push(index + 1);
    }
  });
  console.log(indexes.reduce((a, b) => a + b));
};

// part1(testInput);
part1(input);

// 462 to low
// 1570 to low
// 1384 to low
// 6926
// 6657
// 6682
// 6120
// 5421
// 5331
// 5319
// The right answer 6623!!!!!!!!!!!!
