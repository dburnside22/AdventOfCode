import { input, testInput } from "./input.js";

const part1 = (dataSource) => {
  console.log("Welcome To Day 13");
  const splitInput = dataSource.split("\n\n").map((a) => a.split("\n"));
  let indexes = [];

  let rightOrder = "unknown";
  const processValues = (left, right) => {
    if (Number.isInteger(left) && Number.isInteger(right)) {
      if (left > right) {
        rightOrder = "no";
        return rightOrder;
      }
      if (right > left) {
        rightOrder = "yes";
        return rightOrder;
      }
    } else if (Array.isArray(left) && !Array.isArray(right)) {
      return processValues(left, [right]);
    } else if (!Array.isArray(left) && Array.isArray(right)) {
      return processValues([left], right);
    } else {
      if (left == undefined && right !== undefined) {
        rightOrder = "yes";
        return rightOrder;
      } else if (right == undefined && left !== undefined) {
        rightOrder = "no";
        return rightOrder;
      }
      const max = Math.max(left.length, right.length);
      for (let i = 0; i < max; i++) {
        let result = processValues(left[i], right[i]);
        if (result != "unknown") return result;
      }

      if (left.length < right.length) {
        rightOrder = "yes";
        return rightOrder;
      }
      if (left.length > right.length) {
        rightOrder = "no";
        return rightOrder;
      }
    }
  };

  splitInput.forEach(([first, second], index) => {
    const valuesOfFirst = JSON.parse(first);
    const valuesOfSecond = JSON.parse(second);
    const rightOrder = processValues(valuesOfFirst, valuesOfSecond);
    if (rightOrder == "yes") {
      indexes.push(index + 1);
    }
  });
  console.log(indexes);
  console.log(indexes.reduce((a, b) => a + b));
};

part1(testInput);
// part1(input);

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
