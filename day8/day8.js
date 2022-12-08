import { input, testInput } from "./input.js";

const part1 = (dataSource) => {
  console.log("Welcome To Day 8");
  const splitInput = dataSource
    .split("\n")
    .map((line) => line.split("").map(Number));
  // console.log("splitInput", splitInput);

  const processPossibleTrees = (trees) => {
    // I will need to loop over each of these to compare in every direction if they are shorter all the way to the edge
    //[i: column, j: row, tree: height of tree]
    trees.forEach((tree) => {
      console.log(tree);
    });
  };

  // Go ahead and get the edge
  let visableTrees = splitInput.length + splitInput[0].length;
  let possiblyVisableTrees = [];

  for (let i = 1; i < splitInput.length - 1; i++) {
    for (let j = 1; j < splitInput[i].length - 1; j++) {
      const topNeighborTree = splitInput[i - 1][j];
      const rightNeighborTree = splitInput[i][j + 1];
      const bottomNeighborTree = splitInput[i + 1][j];
      const leftNeighborTree = splitInput[i][j - 1];
      const tree = splitInput[i][j];

      if (
        tree > topNeighborTree ||
        tree > rightNeighborTree ||
        tree > bottomNeighborTree ||
        tree > leftNeighborTree
      ) {
        possiblyVisableTrees.push([i, j, tree]);
      }
    }
  }
  processPossibleTrees(possiblyVisableTrees);
};

part1(testInput);
// part1(input);
