import {input, testInput} from './input.js';

const part1 = (dataSource) => {
    console.log('Welcome To Day 3');
    const regex = /mul\(\d+,\d+\)/g;
    const matches = dataSource.match(regex);
    let total = 0;
    matches.forEach(match => {
        const [a, b] = match.match(/\d+/g).map(Number);
        total += a * b;
    });

    console.log('Total:', total);
}

// part1(testInput);
part1(input);

// const part2 = (dataSource) => {
//    console.log('Welcome To Day 3: Part 2');
//    const splitInput = dataSource.split('');
// }

// part2(testInput);
// part2(input);





