import { input, testInput } from "./input.js";

const part1 = (dataSource) => {
  console.log("Welcome To Day 7");
  const splitInput = dataSource.split("\n");

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
    for (let key in dirs) {
      if (dirs[key] <= 100000) {
        grandTotal += Number(dirs[key]);
      }
    }
  };

  const addToAllDirectories = (numToAdd) => {
    let fileName = "";
    for (let i = 0; i < currentDirectory.length; i++) {
      fileName += currentDirectory[i];
      if (!directoryTotals[fileName]) {
        directoryTotals[fileName] = numToAdd;
      } else {
        directoryTotals[fileName] += numToAdd;
      }
    }
  };

  const processList = (files) => {
    let total = 0;
    files.forEach((file) => {
      if (file[0] != "dir") {
        total += Number(file[0]);
      }
    });
    addToAllDirectories(total);
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
      if (splitLine[1] == "ls") {
        // do nothing
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
// 8693604 to high
// 1705869

// 1501149 the right answer
