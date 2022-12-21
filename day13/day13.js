import { input, testInput } from "./input.js";

const part1 = (dataSource) => {
  console.log("Welcome To Day 13");
  const splitInput = dataSource.split("\n\n").map((a) => a.split("\n"));
  let indexes = [];

  const compareArrays = (one, two) => {};

  const processValues = (firstValues, secondValues) => {
    // console.log("firstValue", firstValues);
    // console.log("secondValues", secondValues);
    const maxLength = Math.min(firstValues.length, secondValues.length);

    let rightOrder = true;

    for (let i = 0; i < firstValues.length; i++) {
      const firstIsArray = Array.isArray(firstValues[i]);
      const secondIsArray = Array.isArray(secondValues[i]);
      if (firstIsArray && !secondIsArray && rightOrder) {
        rightOrder = compareArrays(firstValues[i], [secondValues[i]]);
      }
      if (!firstIsArray && secondIsArray && rightOrder) {
        rightOrder = compareArrays([firstValues[i]], secondValues[i]);
      }
      if (firstIsArray && secondIsArray && rightOrder) {
        rightOrder = compareArrays(firstValues[i], secondValues[i]);
      }

      if (firstValues[i] > secondValues[i]) {
        return false;
      }

      if (
        firstValues[i] == secondValues[i] &&
        firstValues.length > secondValues.length &&
        i == firstValues.length - 1
      ) {
        return false;
      }
    }
    return rightOrder;
  };
  // console.log("splitInput", splitInput);

  splitInput.forEach(([first, second], index) => {
    const valuesOfFirst = JSON.parse(first);
    const valuesOfSecond = JSON.parse(second);
    const rightOrder = processValues(valuesOfFirst, valuesOfSecond);
    if (rightOrder) {
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
