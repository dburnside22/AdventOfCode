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

part1();





