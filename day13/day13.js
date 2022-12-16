import { input, testInput } from "./input.js";

const part1 = (dataSource) => {
  console.log("Welcome To Day 13");
  const splitInput = dataSource.split("\n\n").map((a) => a.split("\n"));
  let indexes = [];

  const compareArrays = (firstArray, secondArray) => {
    const maxLength = Math.min(firstArray.length, secondArray.length);
    let rightOrder = true;
    if (maxLength == 0) {
      rightOrder = !(secondArray.length < firstArray.length);
    }
    for (let i = 0; i < maxLength; i++) {
      if (rightOrder != false) {
        if (secondArray[i] < firstArray[i]) {
          rightOrder = false;
        }
      }
    }
    return rightOrder;
  };

  const processValues = (firstValues, secondValues) => {
    const maxLength = Math.min(firstValues.length, secondValues.length);
    let rightOrder = true;
    for (let i = 0; i < maxLength; i++) {
      if (rightOrder != false) {
        const firstValueAsArray = Array.isArray(firstValues[i])
          ? firstValues[i]
          : [firstValues[i]];
        const secondValueAsArray = Array.isArray(secondValues[i])
          ? secondValues[i]
          : [secondValues[i]];

        rightOrder = compareArrays(firstValueAsArray, secondValueAsArray);
      }
      if (
        i == maxLength - 1 &&
        rightOrder &&
        firstValues.length > secondValues.length
      ) {
        rightOrder = false;
      }
    }
    return rightOrder;
  };
  // console.log("splitInput", splitInput);

  splitInput.forEach(([first, second], index) => {
    const valuesOfFirst = eval(first);
    const valuesOfSecond = eval(second);
    const rightOrder = processValues(valuesOfFirst, valuesOfSecond);
    if (rightOrder) {
      indexes.push(index + 1);
    }
  });
  // console.log(indexes);
  console.log(indexes.reduce((a, b) => a + b));
};

// part1(testInput);
part1(input);

// 462 to low
// 1570 to low
