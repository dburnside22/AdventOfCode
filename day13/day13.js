import { input, testInput } from "./input.js";

const part1 = (dataSource) => {
  console.log("Welcome To Day 13");
  const splitInput = dataSource.split("\n\n").map((a) => a.split("\n"));
  let indexes = [];

  const isInRightOrder = (
    firstDigits,
    secondDigits,
    firstLength,
    secondLength
  ) => {
    if (firstDigits == null) {
      if (secondDigits == null) {
        return firstLength <= secondLength;
      } else {
        return true;
      }
    } else {
      if (secondDigits == null) {
        return false;
      }
    }
    const smallestLength = Math.min(firstDigits.length, secondDigits.length);

    for (let i = 0; i < smallestLength; i++) {
      if (firstDigits[i] > secondDigits[i]) {
        return false;
      }
      if (i == smallestLength - 1) {
        if (
          secondDigits[i] === firstDigits[i] &&
          secondDigits.length < firstDigits.length
        ) {
          return false;
        }
      }
    }
    return true;
  };

  splitInput.forEach(([first, second], index) => {
    // this is not going to work because it is only getting tehe numbers I need to get the []'s to because [] < [9]
    // Array.isArray method will probably be need here
    const digitsInFirst = first.match(/\d/g);
    const digitsInSecond = second.match(/\d/g);

    const rightOrder = isInRightOrder(
      digitsInFirst,
      digitsInSecond,
      first.length,
      second.length
    );

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
