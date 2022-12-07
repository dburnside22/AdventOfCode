import { input, testInput } from "./input.js";

const part1 = (dataSource) => {
  console.log("Welcome To Day 7");
  const splitInput = dataSource.split("\n");
  // console.log("split input", splitInput);

  let directoryTotals = [];
  let currentDirectory = [];
  let grandTotal = 0;

  const navigateToDirectory = (whereToNavigate) => {
    if (whereToNavigate[2] == "..") {
      currentDirectory.pop();
    } else {
      currentDirectory.push(whereToNavigate[2]);
    }
  };

  const processDirectories = (dirs) => {
    let array = [];
    for (let key in dirs) {
      array.push(dirs[key]);
    }
    array.sort((a, b) => {
      if (a < b) {
        return 1;
      }
      if (b < a) {
        return -1;
      }
      return 0;
    });

    array.forEach((a) => {
      if (a <= 100000) {
        grandTotal += a;
      }
    });
  };

  const processList = (files) => {
    let totalSize = 0;
    files.forEach((file) => {
      if (file[0] != "dir") {
        totalSize += Number(file[0]);
      }
    });

    currentDirectory.forEach((dir) => {
      if (directoryTotals[dir]) {
        directoryTotals[dir] = directoryTotals[dir] + totalSize;
        console.log(directoryTotals);
      } else {
        directoryTotals[dir] = totalSize;
        console.log(directoryTotals);
      }
    });
  };

  let arrayOfFiles = [];

  splitInput.forEach((line) => {
    const splitLine = line.split(" ");
    if (splitLine[0] == "$") {
      if (arrayOfFiles.length > 0) {
        processList(arrayOfFiles);
        arrayOfFiles = [];
      }
      if (splitLine[1] == "cd") {
        navigateToDirectory(splitLine);
      }
    } else {
      arrayOfFiles.push(splitLine);
    }
  });
  processList(arrayOfFiles);
  processDirectories(directoryTotals);
  console.log("grandTotal", grandTotal);
};

// part1(testInput);
part1(input);

// 827083 to low
// 1501149 the right answer
