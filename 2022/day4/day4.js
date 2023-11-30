import {input, testInput} from './input.js';

const part1 = () => {
    console.log('Welcome To Day 4');
    let totalOfOverlaps = 0;
    const checkForOverlap = (r1, r2) => {
       if((r1[0]>=r2[0] && r1[1]<=r2[1]) || (r2[0]>=r1[0] && r2[1]<=r1[1])){
         totalOfOverlaps++
        }
    } 

    const splitInput = input.split('\n').map(el => el.split(','))
    splitInput.forEach((set) => {
        console.log('set', set)
        const firstElfRange = set[0].split('-').map(Number)
        const secondElfRange = set[1].split('-').map(Number)
        checkForOverlap(firstElfRange, secondElfRange)
    })
    console.log('totalOfOverlaps', totalOfOverlaps)
}

// part1();

const part2 = () => {
    console.log('Welcome To Day 4: part 2');
    let totalOfOverlaps = 0;
    const checkForNoOverlap = (r1, r2) => {
       if((r1[0] >= r2[0] && r1[0] <= r2[1]) || (r1[1] >= r2[0] && r1[1] <= r2[1]) ||
        (r2[0] >= r1[0] && r2[0] <= r1[1]) || (r2[1] >= r1[0] && r2[1] <= r1[1])){
         totalOfOverlaps++
        }
    } 

    const splitInput = input.split('\n').map(el => el.split(','))
    splitInput.forEach((set) => {
        const firstElfRange = set[0].split('-').map(Number)
        const secondElfRange = set[1].split('-').map(Number)
        checkForNoOverlap(firstElfRange, secondElfRange)
    })
    console.log('totalOfOverlaps', totalOfOverlaps)
}

part2();




