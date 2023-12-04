import { input, testInput } from "./input.js";

const part1 = (dataSource) => {
  console.log("Welcome To Day 2");
  let total = 0;

  const splitInput = dataSource.split("\n").map((item) => {
    const splitItem = item.split(":");
    const gameNumber = splitItem[0].replace("Game", "");
    let redSets = new Set();
    let blueSets = new Set();
    let greenSets = new Set();
    const sets = splitItem[1].split(";").map((set) => {
      return set.split(",");
    });
    sets.forEach((set) => {
      set.forEach((item) => {
        if (item.includes("red")) {
          redSets.add(item.trim());
        } else if (item.includes("blue")) {
          blueSets.add(item.trim());
        } else if (item.includes("green")) {
          greenSets.add(item.trim());
        }
      });
    });
    // console.log(redSets, blueSets, greenSets);

    return [Number(gameNumber.trim()), redSets, blueSets, greenSets];
  });

  // Loop over all of the sets and see how many are possible with 12 reds 13 greens, and 14 blues
  splitInput.filter((item) => {
    const [gameNumber, redSets, blueSets, greenSets] = item;
    let redPassing = false;
    let bluePassing = false;
    let greenPassing = false;
    for (let set of redSets) {
      if (Number(set.replace("red", "").trim()) <= 12) {
        redPassing = true;
      } else {
        redPassing = false;
        break;
      }
    }
    for (let set of blueSets) {
      if (Number(set.replace("blue", "").trim()) <= 14) {
        bluePassing = true;
      } else {
        bluePassing = false;
        break;
      }
    }
    for (let set of greenSets) {
      if (Number(set.replace("green", "").trim()) <= 13) {
        greenPassing = true;
      } else {
        greenPassing = false;
        break;
      }
    }
    if (redPassing && bluePassing && greenPassing) {
      total += gameNumber;
    }
  });

  console.log(total);
};

// part1(testInput);
// part1(input);

const part2 = (dataSource) => {
  console.log("Welcome To Day 2: Part 2");
  let total = 0;

  dataSource.split("\n").map((item) => {
    const splitItem = item.split(":");
    const gameNumber = splitItem[0].replace("Game", "");

    // instead of sets i am going to keep track of the highest number for each color

    const sets = splitItem[1].split(";").map((set) => {
      return set.split(",");
    });

    const getNumber = (color, string) => {
      return Number(string.replace(color, "").trim());
    };

    let highestRed = 1;
    let highestBlue = 1;
    let highestGreen = 1;
    sets.forEach((set) => {
      set.forEach((item) => {
        if (item.includes("red")) {
          const number = getNumber("red", item);
          if (number > highestRed) {
            highestRed = number;
          }
        } else if (item.includes("blue")) {
          const number = getNumber("blue", item);
          if (number > highestBlue) {
            highestBlue = number;
          }
        } else if (item.includes("green")) {
          const number = getNumber("green", item);
          if (number > highestGreen) {
            highestGreen = number;
          }
        }
      });
    });
    total += highestRed * highestBlue * highestGreen;
  });

  console.log(total);
};

// part2(testInput);
part2(input);
