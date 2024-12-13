import {testLineInput, lineInput, testMapInput, mapInput} from './input.js';

const part1 = (dataMapInput, datalineInput) => {
    console.log('Welcome To Day 5');

    const map = dataMapInput.trim().split('\n').reduce((acc, line) => {
        const [a, b] = line.split('|').map(Number);
        if (!acc[a]) acc[a] = new Set();
        acc[a].add(b);
        return acc;
    }, {});

    const lines = datalineInput.trim().split('\n').map(line => line.split(',').map(Number));

    let totalMiddle = 0;

    const isValidLine = (line) => {
        const seen = new Set();
        for (let i = 0; i < line.length - 1; i++) {
            const current = line[i];
            const next = line[i + 1];
            if (!map[current] || !map[current].has(next)) {
                return false;
            }
            seen.add(current);
        }
        seen.add(line[line.length - 1]);
        return seen.size === line.length;
    };

    lines.forEach((line) => {
        if (isValidLine(line)) {
            const middleIndex = Math.floor(line.length / 2);
            totalMiddle += line[middleIndex];
        }
    });

    console.log('Total of middle values:', totalMiddle);
};

// part1(testMapInput, testLineInput);
// part1(mapInput, lineInput);

const part2 = (dataMapInput, datalineInput) => {
    console.log('Welcome To Day 5: Part 2');

    const map = dataMapInput.trim().split('\n').reduce((acc, line) => {
        const [a, b] = line.split('|').map(Number);
        if (!acc[a]) acc[a] = new Set();
        acc[a].add(b);
        return acc;
    }, {});

    const lines = datalineInput.trim().split('\n').map(line => line.split(',').map(Number));

    let totalMiddle = 0;

    const isValidLine = (line) => {
        const seen = new Set();
        for (let i = 0; i < line.length - 1; i++) {
            const current = line[i];
            const next = line[i + 1];
            if (!map[current] || !map[current].has(next)) {
                return false;
            }
            seen.add(current);
        }
        seen.add(line[line.length - 1]);
        return seen.size === line.length;
    };


        const sortLineUsingMap = (line) => {
            const backtrack = (current, remaining) => {
                // If no remaining numbers, check if the line is valid
                if (remaining.length === 0) {
                    return isValidLine(current) ? current : null;
                }
        
                for (let i = 0; i < remaining.length; i++) {
                    const next = remaining[i];
                    if (
                        current.length === 0 || 
                        (map[current[current.length - 1]] && map[current[current.length - 1]].has(next))
                    ) {
                        const result = backtrack(
                            [...current, next], 
                            [...remaining.slice(0, i), ...remaining.slice(i + 1)]
                        );
                        if (result) return result;
                    }
                }
        
                return null;
            };
        
            const result = backtrack([], line);
            if (!result) {
                console.error("Unable to sort line into a valid order:", line);
                return line; // Return original line if sorting fails
            }
            return result;
        };


    lines.forEach((line) => {
        if (!isValidLine(line)) {
            const sorted = sortLineUsingMap(line);
            const middleIndex = Math.floor(sorted.length / 2);
            totalMiddle += sorted[middleIndex];
        }
    });

    console.log('Total of middle values:', totalMiddle);
};

// part2(testMapInput, testLineInput);
part2(mapInput, lineInput);





