import { input, testInput } from "./input.js";

const part1 = (dataSource) => {
  console.log("Welcome To Day 11");
  const monkeys = dataSource.split("\n\n").map((a) =>
    a.split("\n").map((b) =>
      b
        .trim()
        .split(":")
        .map((c) => c.trim())
    )
  );

  const getWorryAfterMonkey = (code, old) => {
    let total = code.split(" ").map((c, i) => {
      if (c == "old") {
        return old;
      } else if (i == 4) {
        return Number(c);
      } else {
        return c;
      }
    });
    if (total[3] == "*") {
      return Math.floor((total[2] * total[4]) / 3);
    } else {
      return Math.floor((total[2] + total[4]) / 3);
    }
  };

  let monkeyData = [];

  const tossItem = (worry, divideBy, toIfTrue, toIfFalse) => {
    if (worry % divideBy == 0) {
      monkeyData[toIfTrue][1].push(worry);
    } else {
      monkeyData[toIfFalse][1].push(worry);
    }
  };

  monkeys.forEach((monkey, i) => {
    let operations = monkey[2][1];
    const startingItems = monkey[1][1].split(",").map(Number);

    let divisibleBy = monkey[3][1].split(" ");
    divisibleBy = Number(divisibleBy[2]);

    let throwIfTrue = monkey[4][1].split(" ");
    throwIfTrue = Number(throwIfTrue[3]);

    let throwIfFalse = monkey[5][1].split(" ");
    throwIfFalse = Number(throwIfFalse[3]);

    let inspectionCount = 0;

    monkeyData.push([
      operations,
      startingItems,
      divisibleBy,
      throwIfTrue,
      throwIfFalse,
      inspectionCount,
    ]);
  });

  const runGame = () => {
    monkeyData.forEach((monkey) => {
      monkey[1].forEach((item) => {
        let worry = getWorryAfterMonkey(monkey[0], item);
        tossItem(worry, monkey[2], monkey[3], monkey[4]);
        monkey[5]++;
      });
      monkey[1] = [];
    });
  };

  for (let i = 0; i < 20; i++) {
    runGame();
  }

  monkeyData.sort((a, b) => {
    if (a[5] < b[5]) {
      return 1;
    } else if (a[5] > b[5]) {
      return -1;
    } else {
      return 0;
    }
  });

  console.log(monkeyData[0][5] * monkeyData[1][5]);
};

// part1(testInput);
// part1(input);

const part2 = (dataSource) => {
  console.log("Welcome To Day 11");
  const monkeys = dataSource.split("\n\n").map((a) =>
    a.split("\n").map((b) =>
      b
        .trim()
        .split(":")
        .map((c) => c.trim())
    )
  );

  const getWorryAfterMonkey = (code, old) => {
    let total = code.split(" ").map((c, i) => {
      if (c == "old") {
        return old;
      } else if (i == 4) {
        return Number(c);
      } else {
        return c;
      }
    });
    if (total[3] == "*") {
      return total[2] * total[4];
    } else {
      return total[2] + total[4];
    }
  };

  let monkeyData = [];

  const tossItem = (worry, divideBy, toIfTrue, toIfFalse) => {
    if (worry % divideBy == 0) {
      monkeyData[toIfTrue][1].push(worry);
    } else {
      monkeyData[toIfFalse][1].push(worry);
    }
  };

  monkeys.forEach((monkey, i) => {
    let operations = monkey[2][1];
    const startingItems = monkey[1][1].split(",").map(Number);

    let divisibleBy = monkey[3][1].split(" ");
    divisibleBy = Number(divisibleBy[2]);

    let throwIfTrue = monkey[4][1].split(" ");
    throwIfTrue = Number(throwIfTrue[3]);

    let throwIfFalse = monkey[5][1].split(" ");
    throwIfFalse = Number(throwIfFalse[3]);

    let inspectionCount = 0;

    monkeyData.push([
      operations,
      startingItems,
      divisibleBy,
      throwIfTrue,
      throwIfFalse,
      inspectionCount,
    ]);
  });

  const runGame = () => {
    monkeyData.forEach((monkey) => {
      monkey[1].forEach((item) => {
        let worry = getWorryAfterMonkey(monkey[0], item);
        tossItem(worry, monkey[2], monkey[3], monkey[4]);
        monkey[5]++;
      });
      monkey[1] = [];
    });
  };

  for (let i = 0; i < 10000; i++) {
    runGame();
  }

  monkeyData.sort((a, b) => {
    if (a[5] < b[5]) {
      return 1;
    } else if (a[5] > b[5]) {
      return -1;
    } else {
      return 0;
    }
  });

  console.log(monkeyData);
  console.log(monkeyData[0][5] * monkeyData[1][5]);
};

part2(testInput);
// part2(input);
