import { input, testInput } from "./input.js";

const part1 = (dataSource) => {
  console.log("Welcome To Day 9");
  const splitInput = dataSource.split("\n").map((line) => {
    const [letter, number] = line.split(" ");
    return {
      direction: letter,
      totalMoves: Number(number),
    };
  });
  const visited = new Set();

  const markVisited = (x, y, visited) => {
    visited.add(`${x}-${y}`);
  };
  markVisited(0, 0, visited);

  const directions = {
    R: {
      x: 1,
      y: 0,
    },
    L: {
      x: -1,
      y: 0,
    },
    U: {
      x: 0,
      y: 1,
    },
    D: {
      x: 0,
      y: -1,
    },
  };
  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    move(direction) {
      const delta = directions[direction];
      this.x += delta.x;
      this.y += delta.y;
    }
    follow(point) {
      const distance = Math.max(
        Math.abs(this.x - point.x),
        Math.abs(this.y - point.y)
      );
      if (distance > 1) {
        const directionX = point.x - this.x;
        const directionY = point.y - this.y;
        this.x += Math.abs(directionX) === 2 ? directionX / 2 : directionX;
        this.y += Math.abs(directionY) === 2 ? directionY / 2 : directionY;
      }
    }
  }

  const head = new Point(0, 0);
  const tail = new Point(0, 0);

  for (const input of splitInput) {
    for (let i = 0; i < input.totalMoves; i++) {
      head.move(input.direction);
      tail.follow(head);
      markVisited(tail.x, tail.y, visited);
    }
  }

  console.log(visited.size);
};

// part1(testInput);
// part1(input);

// 6487 to low
// 6686 to high
// 6494 right number!!

const part2 = (dataSource) => {
  console.log("Welcome To Day 9: part 2");
  const splitInput = dataSource.split("\n").map((line) => {
    const [letter, number] = line.split(" ");
    return {
      direction: letter,
      totalMoves: Number(number),
    };
  });

  const visited = new Set();

  const markVisited = (x, y, visited) => {
    visited.add(`${x}-${y}`);
  };
  markVisited(0, 0, visited);

  const directions = {
    R: {
      x: 1,
      y: 0,
    },
    L: {
      x: -1,
      y: 0,
    },
    U: {
      x: 0,
      y: 1,
    },
    D: {
      x: 0,
      y: -1,
    },
  };
  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    move(direction) {
      const delta = directions[direction];
      this.x += delta.x;
      this.y += delta.y;
    }
    follow(point) {
      const distance = Math.max(
        Math.abs(this.x - point.x),
        Math.abs(this.y - point.y)
      );
      if (distance > 1) {
        const directionX = point.x - this.x;
        const directionY = point.y - this.y;
        this.x += Math.abs(directionX) === 2 ? directionX / 2 : directionX;
        this.y += Math.abs(directionY) === 2 ? directionY / 2 : directionY;
      }
    }
  }

  const knots = new Array(10).fill(0).map((_) => new Point(0, 0));

  for (const input of splitInput) {
    for (let i = 0; i < input.totalMoves; i++) {
      knots[0].move(input.direction);
      for (let k = 1; k < knots.length; k++) {
        const point = knots[k];
        point.follow(knots[k - 1]);
      }
      const tail = knots[knots.length - 1];
      markVisited(tail.x, tail.y, visited);
    }
  }

  console.log(visited.size);
};

// part2(testInput);
part2(input);
