from input import input_data, test_input

def part1(data_source):
    print('Welcome To Day 2')
    # Split input into lines
    total = 0
    lines = data_source.strip().split(',')
    for line in lines:
        start, end = line.split('-')
        start = int(start)
        end = int(end)
        for num in range(start, end + 1):
            first_half = str(num)[:len(str(num))//2]
            second_half = str(num)[len(str(num))//2:]
            if first_half == second_half:
                total += num
    print(total)

def has_repeating_pattern(num):
    num_str = str(num)

    for pattern_length in range(1, len(num_str) // 2 + 1):
        pattern = num_str[:pattern_length]
        repeats = len(num_str) // pattern_length
        reconstructed = pattern * repeats
        if num_str == reconstructed:
            return True
    return False


if __name__ == '__main__':
    # part1(test_input)
    # part1(input_data)
    
    def part2(data_source):
        print('Welcome To Day 2: Part 2')
        lines = data_source.strip().split(',')
        total = 0
        for line in lines:
            start, end = line.split('-')
            start = int(start)
            end = int(end)
            for num in range(start, end + 1):
                if has_repeating_pattern(num):
                    total += num
        print(total)
        # Your solution here
        pass
    
    # part2(test_input)
    part2(input_data)
