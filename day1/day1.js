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
    let workingInput = input.split(/\r?\n\n/).filter(element => element);

 

    const sorted = workingInput.sort((a, b) => {
        const ANumbersSplitOut = a.replaceAll('\n', ' ').trim().split(' ');
        const ATotalOfNumbers = ANumbersSplitOut.reduce((number1, number2) => {
            return Number(number1) + Number(number2);
        });
        const BNumbersSplitOut = b.replaceAll('\n', ' ').trim().split(' ');
        const BTotalOfNumbers = BNumbersSplitOut.reduce((number1, number2) => {
            return Number(number1) + Number(number2);
        });

        if (ATotalOfNumbers > BTotalOfNumbers) {
            return -1;
        } else if (ATotalOfNumbers < BTotalOfNumbers) {
            return 1;
        } else {
            return 0;
        }
    });

    console.log(sorted);
    let highestNumber = sorted[0].replaceAll('\n', ' ').trim().split(' ');
    let highestTotal = highestNumber.reduce((number1, number2) => {
        return Number(number1) + Number(number2);
    });
    let secondNumber = sorted[1].replaceAll('\n', ' ').trim().split(' ');
    let secondTotal = secondNumber.reduce((number1, number2) => {
        return Number(number1) + Number(number2);
    });
    let thirdNumber = sorted[2].replaceAll('\n', ' ').trim().split(' ');
    let thirdTotal = thirdNumber.reduce((number1, number2) => {
        return Number(number1) + Number(number2);
    });

    console.log(`Highest number is now ${highestTotal}`);
    console.log(`Second highest number is now ${secondTotal}`);
    console.log(`Third highest number is now ${thirdTotal}`);
    console.log(`${highestTotal + secondTotal + thirdTotal}`)

    // workingInput.forEach((numbers) => {
    //     let changedANumber = false;

    //     const numbersSplitOut = numbers.replaceAll('\n', ' ').trim().split(' ');
    //     const totalOfNumbers = numbersSplitOut.reduce((number1, number2) => {
    //         return Number(number1) + Number(number2);
    //     });

    //     if (totalOfNumbers > highestNumber) {
    //         highestNumber = totalOfNumbers;
    //         changedANumber = true;
    //     } else if (totalOfNumbers > secondHighest) {
    //         secondHighest = totalOfNumbers;
    //     } else if (totalOfNumbers > thirdHighest) {
    //         thirdHighest = totalOfNumbers;
    //     }

    // })
    // console.log(`Highest number is now ${highestNumber}`);
    // console.log(`Second highest number is now ${secondHighest}`);
    // console.log(`Third highest number is now ${thirdHighest}`);
    // console.log(`The total is ${highestNumber + secondHighest + thirdHighest}`)

}

part2();


// Wrong Guesses 207645
// 713006924969142



