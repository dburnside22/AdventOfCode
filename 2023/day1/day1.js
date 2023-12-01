import { input, testInput } from "./input.js";

const part1 = (dataSource) => {
  console.log("Welcome To Day 1");
  const regexToGetNumbers = /\d+/g;
  let total = 0;

  const inputArray = dataSource.split("\n");

  inputArray.forEach((line) => {
    const numberFromLine = line.match(regexToGetNumbers).join("");
    const firstNumber = Number(numberFromLine[0]);
    const lastNumber = Number(numberFromLine[numberFromLine.length - 1]);

    total += Number(`${firstNumber}${lastNumber}`);
  });

  console.log(total);
};

// part1(testInput);
// part1(input);

const part2 = (dataSource) => {
  console.log("Welcome To Day 1: Part 2");
  let total = 0;
  const numberLookupTable = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };

  const inputArray = dataSource.split("\n");

  inputArray.map((line) => {
    let numbersfound = [];
    let currentWord = "";
    for (let i = 0; i < line.length; i++) {
      currentWord += line[i];
      for (let key in numberLookupTable) {
        if (currentWord.includes(key)) {
          numbersfound.push(numberLookupTable[key]);
          if (currentWord.length > 1) {
            currentWord = currentWord.substring(currentWord.length - 1);
          } else {
            currentWord = "";
          }
        }
      }
    }

    if (numbersfound.length > 1) {
      const firstNumber = Number(numbersfound[0]);
      const lastNumber = Number(numbersfound[numbersfound.length - 1]);

      total += Number(`${firstNumber}${lastNumber}`);
    } else {
      total += numbersfound[0];
    }
  });

  console.log(total);
};

// part2(testInput);
part2(input);

// 53062 to low
// 53348 to low
// 53358 right answer
