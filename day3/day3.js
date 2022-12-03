import {input, testInput} from './input.js';

const part1 = () => {
    console.log('Welcome To Day 3');
    let total = 0;

    const scoreTheMatch = (letterToScore) => {
        const score = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

        const splitTheScore = score.split('');
        splitTheScore.forEach((letter,i) => {
            if (letter === letterToScore) {
                total += i+1;
            }
        })
    }

    const findTheMatch = (halfOne, halfTwo) => {
        let matchingLetter = '';
        const splitOne = halfOne.split('');
        splitOne.forEach((letter) => {
            if (halfTwo.includes(letter)) {
                matchingLetter = letter;
            }
        })
        scoreTheMatch(matchingLetter);
    }

    
    const arrayOfSacks = input.split('\n');
    arrayOfSacks.forEach((sack) => {
        const firstHalf = sack.slice(0, sack.length / 2)
        const secondHalf = sack.slice(sack.length / 2, sack.length)
        findTheMatch(firstHalf, secondHalf);
    })
    console.log('Total', total);
}

// part1();

const part2 = () => {
    console.log('Welcome To Day 3');
    let total = 0;

    const scoreTheMatch = (letterToScore) => {
        const score = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

        const splitTheScore = score.split('');
        splitTheScore.forEach((letter,i) => {
            if (letter === letterToScore) {
                total += i+1;
            }
        })
    }

    const findTheMatch = (elfOne, elfTwo, elfThree) => {
        let matchingLetter = '';
        const splitOne = elfOne.split('');
        splitOne.forEach((letter) => {
            if (elfTwo.includes(letter) && elfThree.includes(letter)) {
                matchingLetter = letter;
            }
        })
        scoreTheMatch(matchingLetter);
    }

    const arrayOfSacks = input.split('\n');

    for (let i = 0; i < arrayOfSacks.length - 2; i += 3){
        const firstElf = arrayOfSacks[i];
        const secondElf = arrayOfSacks[i + 1];
        const thirdElf = arrayOfSacks[i + 2];
        
        findTheMatch(firstElf, secondElf, thirdElf);
    }
    console.log('Total', total);
}

part2();





