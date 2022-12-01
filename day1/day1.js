import {input, testInput} from './input.js';

const part1 = () => {
    console.log('Welcome To Day 1');
    let workingInput = input.split(/\r?\n\n/).filter(element => element);

    let highestNumber = 0;

    workingInput.forEach((numbers) => {
        const numbersSplitOut = numbers.replaceAll('\n', ' ').trim().split(' ');
        const totalOfNumbers = numbersSplitOut.reduce((number1, number2) => {
            return Number(number1) + Number(number2);
        });

        if (totalOfNumbers > highestNumber) {
            highestNumber = totalOfNumbers;
        }
    })
    console.log(`Highest number is now ${highestNumber}`);


}

// part1();


const part2 = () => {
    console.log('Welcome To Day 1 : Part 2');
    let workingInput = testInput.split(/\r?\n\n/).filter(element => element);

    let highestNumber = 0;
    let secondHighest = 0;
    let thirdHighest = 0;

    workingInput.forEach((numbers) => {
        let changedANumber = false;

        const numbersSplitOut = numbers.replaceAll('\n', ' ').trim().split(' ');
        const totalOfNumbers = numbersSplitOut.reduce((number1, number2) => {
            return Number(number1) + Number(number2);
        });

        if (totalOfNumbers > highestNumber) {
            highestNumber = totalOfNumbers;
            changedANumber = true;
        }
        if (totalOfNumbers > secondHighest && !changedANumber) {
            secondHighest = totalOfNumbers;
        }
        if (totalOfNumbers > thirdHighest && !changedANumber) {
            thirdHighest = totalOfNumbers;
        }

    })
    console.log(`Highest number is now ${highestNumber}`);
    console.log(`Second highest number is now ${secondHighest}`);
    console.log(`Third highest number is now ${thirdHighest}`);
    console.log(`The total is ${highestNumber + secondHighest + thirdHighest}`)

}

part2();


// Wrong Guess 207645



