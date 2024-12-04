import {input, testInput} from './input.js';

// const part1 = (dataSource) => {
//     console.log('Welcome To Day 1');
//     const splitInput = dataSource.split(/\n/);
//     const firstArray = [];
//     const secondArray = [];
//     splitInput.forEach(line => {
//         const numbers = line.match(/\d+/g);
//         const [first, second] = numbers.map(Number);
//         firstArray.push(first);
//         secondArray.push(second);
//     });
    
//     let difference = 0;

//     const sortedFirstArray = firstArray.sort((a, b) => a - b);
//     const sortedSecondArray = secondArray.sort((a, b) => a - b);

//     sortedFirstArray.forEach((num, index) => {
//         difference += Math.abs(sortedSecondArray[index] - num);
//     });

//     console.log(difference);
// }

// // part1(testInput);
// part1(input);

const part2 = (dataSource) => {
   console.log('Welcome To Day 1: Part 2');
    const splitInput = dataSource.split(/\n/);
    const firstArray = [];
    const secondArray = [];
    splitInput.forEach(line => {
        const numbers = line.match(/\d+/g);
        const [first, second] = numbers.map(Number);
        firstArray.push(first);
        secondArray.push(second);
    });
    
    const calculateScore = (array1, array2) => {
        let score = 0;
        array1.forEach((num) => {
          const count = array2.filter((num2) => num2 === num).length;
          score += num * count;
        });
        return score;
    }

    console.log(calculateScore(firstArray, secondArray));
}

// part2(testInput);
part2(input);





