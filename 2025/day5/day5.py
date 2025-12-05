from input import input_data, test_input

def part1(data_source):
    print('Welcome To Day 5')
    
    sections = data_source.strip().split('\n\n')
    
    fresh_ranges = []
    for line in sections[0].split('\n'):
        start, end = line.split('-')
        fresh_ranges.append((int(start), int(end)))
    
    ids = [int(line) for line in sections[1].split('\n')]
    
    
    count = 0
    for id_num in ids:
        for start, end in fresh_ranges:
            if start <= id_num <= end:
                count += 1
                break
    
    print(f"\nTotal ids within ranges: {count}")
    return count

def part2(data_source):
    print('Welcome To Day 5: Part 2')
    
    sections = data_source.strip().split('\n\n')
    fresh_ranges = []
    for line in sections[0].split('\n'):
        start, end = line.split('-')
        fresh_ranges.append((int(start), int(end)))
    
    fresh_ranges.sort()
    merged_ranges = []
    for start, end in fresh_ranges:
        if merged_ranges and start <= merged_ranges[-1][1] + 1:
            merged_ranges[-1] = (merged_ranges[-1][0], max(merged_ranges[-1][1], end))
        else:
            merged_ranges.append((start, end))
    
    total_available = 0
    for start, end in merged_ranges:
        total_available += (end - start + 1)
    
    print(f"\nTotal available IDs within ranges: {total_available}")
    return total_available

if __name__ == '__main__':
    # part1(test_input)
    # part1(input_data)
    
    # part2(test_input)
    part2(input_data)

