import { input, testInput } from "./input.js";

const part1 = (dataSource) => {
  console.log("Welcome To Day 13");
  const splitInput = dataSource.split("\n\n").map((a) => a.split("\n"));
  let indexes = [];

  // const compareArrays = (firstArray, secondArray) => {
  //   const maxLength = Math.min(firstArray.length, secondArray.length);
  //   let rightOrder = true;
  //   if (maxLength == 0) {
  //     rightOrder = !(secondArray.length < firstArray.length);
  //   }
  //   for (let i = 0; i < maxLength; i++) {
  //     if (rightOrder != false) {
  //       if (secondArray[i] < firstArray[i]) {
  //         rightOrder = false;
  //       }
  //     }
  //   }
  //   return rightOrder;
  // };

  const processValues = (firstValues, secondValues) => {
    // console.log("firstValue", firstValues);
    // console.log("secondValues", secondValues);
    const maxLength = Math.min(firstValues.length, secondValues.length);
    let rightOrder = true;
    if (maxLength == 0) {
      rightOrder = firstValues.length <= secondValues.length;
    }

    for (let i = 0; i < maxLength; i++) {
      const firstIsArray = Array.isArray(firstValues[i]);
      const secondIsArray = Array.isArray(secondValues[i]);
      if (firstIsArray && !secondIsArray) {
        rightOrder = processValues(firstValues[i], [secondValues[i]]);
      }
      if (!firstIsArray && secondIsArray) {
        rightOrder = processValues([firstValues[i]], secondValues[i]);
      }
      if (firstIsArray && secondIsArray) {
        rightOrder = processValues(firstValues[i], secondValues[i]);
      }
      if (firstValues[i] > secondValues[i]) {
        rightOrder = false;
      }
      if (i == maxLength - 1 && rightOrder) {
        console.log("firstValues", firstValues);
        console.log("secondValues", secondValues);
        console.log(
          secondValues.length > firstValues.length &&
            firstValues[i] == secondValues[i]
        );
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
  console.log(indexes);
  console.log(indexes.reduce((a, b) => a + b));
};

part1(testInput);
// part1(input);

// 462 to low
// 1570 to low
