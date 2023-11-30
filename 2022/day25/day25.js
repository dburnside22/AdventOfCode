import { input, testInput, firstTest } from "./input.js";

const part1 = (dataSource) => {
  console.log("Welcome To Day 25");
  const splitInput = dataSource.split("\n").map((l) => l.split(""));
  let total = 0;

  const decode = (arrayOfStrings) => {
    const code = {
      2: 2,
      1: 1,
      0: 0,
      "-": -1,
      "=": -2,
    };
    const flipArray = arrayOfStrings.reverse();
    let localTotal = 0;
    for (let i = 0; i < flipArray.length; i++) {
      localTotal += code[flipArray[i]] * 5 ** i;
    }
    total += localTotal;
  };

  const encode = (number) => {
    console.log(number);
    const code = { "-2": "=", "-1": "-", 0: "0", 1: "1", 2: "2" };
    let localNumber = number;
    let base5 = "";
    while (localNumber > 0) {
      base5 = String(localNumber % 5) + base5;
      localNumber = Math.floor(localNumber / 5);
    }

    let encodedString = "";
    let add5 = false;
    console.log(base5);
    base5
      .split("")
      .reverse()
      .forEach((number) => {
        let lNumber = add5 ? Number(number) + 1 : Number(number);
        if (lNumber <= 2) {
          encodedString = String(lNumber) + encodedString;
          add5 = false;
        } else if (lNumber == 3) {
          encodedString = "=" + encodedString;
          add5 = true;
        } else {
          encodedString = "-" + encodedString;
          add5 = true;
        }
      });
    console.log(encodedString);

    // console.log("divide", number / 5 ** i);
    // console.log("mod", localNumber % 5 ** i === 0);
  };

  splitInput.forEach((line) => decode(line));
  encode(total);
};

part1(firstTest);
// part1(testInput);
// part1(input);
