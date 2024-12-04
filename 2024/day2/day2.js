import {input, testInput} from './input.js';

const part1 = (dataSource) => {
    console.log('Welcome To Day 2');
    const splitInput = dataSource.trim().split('\n').map(line => line.split(' ').map(Number));

    let safeTotal = 0;

    splitInput.forEach((line) => {
        let isSafe = true;
        let direction = '';

        for (let i = 0; i < line.length - 1; i++) {
            const diff = line[i + 1] - line[i];

            if (diff === 0 || diff > 3 || diff < -3) {
                isSafe = false;
                break;
            } else if (diff > 0) {
                if (direction === 'down') {
                    isSafe = false; 
                    break;
                }
                direction = 'up';
            } else {
                if (direction === 'up') {
                    isSafe = false; 
                    break;
                }
                direction = 'down';
            }
        }

        if (isSafe) {
            safeTotal++;
        }
    });

    console.log('Safe Total:', safeTotal);
};

// part1(testInput);
part1(input);

// const part2 = (dataSource) => {
//    console.log('Welcome To Day 2: Part 2');
//    const splitInput = dataSource.split('');
// }

// part2(testInput);
// part2(input);





