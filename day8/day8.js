import { input, testInput } from "./input.js";

const part1 = (dataSource) => {
  console.log("Welcome To Day 8");
  const splitInput = dataSource
    .split("\n")
    .map((line) => line.split("").map(Number));
  // console.log("splitInput", splitInput);

  // Go ahead and get the edge
  let visableTrees = (splitInput.length + splitInput[0].length) * 2 - 4;
  let possiblyVisableTrees = [];

  const processPossibleTrees = (trees) => {
    trees.forEach((tree) => {
      let treeIsHidden = false;
      let visableFromEdge = false;
      console.log("tree", tree);
      for (let t = 0; t < splitInput.length; t++) {
        let isTree = t == tree[0];
        if (splitInput[t][tree[1]] >= tree[2] == !isTree) {
          treeIsHidden = true;
        }
        if (!treeIsHidden && t == splitInput.length - 1) {
          visableFromEdge = true;
        }
      }

      if (treeIsHidden && visableFromEdge != true) {
        visableTrees--;
      }
    });
  };

  for (let column = 1; column < splitInput.length - 1; column++) {
    for (let row = 1; row < splitInput[column].length - 1; row++) {
      const topNeighborTree = splitInput[column - 1][row];
      const rightNeighborTree = splitInput[column][row + 1];
      const bottomNeighborTree = splitInput[column + 1][row];
      const leftNeighborTree = splitInput[column][row - 1];
      const tree = splitInput[column][row];

      if (
        tree > topNeighborTree ||
        tree > rightNeighborTree ||
        tree > bottomNeighborTree ||
        tree > leftNeighborTree
      ) {
        possiblyVisableTrees.push([column, row, tree]);
      }
    }
  }
  visableTrees += possiblyVisableTrees.length;
  processPossibleTrees(possiblyVisableTrees);
  console.log(visableTrees);
};

part1(testInput);
// part1(input);
