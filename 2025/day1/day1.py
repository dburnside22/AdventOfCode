from input import input_data, test_input

def part1(data_source):
    print('Welcome To Day 1')
    number_of_zeroes = 0
    current_number = 50

    # Split input into lines
    lines = data_source.strip().split('\n')
    for line in lines:
        if line.startswith('L'):
            current_number = current_number - int(line.split('L')[1])
        elif line.startswith('R'):
            current_number = current_number + int(line.split('R')[1])

        current_number = current_number % 100
        if current_number == 0:
            number_of_zeroes += 1
    
    print('Number of zeroes:', number_of_zeroes)

if __name__ == '__main__':
    # part1(test_input)
    # part1(input_data)
    
    def part2(data_source):
        print('Welcome To Day 1: Part 2')
        lines = data_source.strip().split('\n')
        number_of_passed_zeroes = 0
        current_number = 50

        for line in lines:
            if line.startswith('L'):
                value = int(line.split('L')[1])
                # Count how many times we cross 0 going left
                if current_number > 0 and value >= current_number:
                    # We land on 0 (first time, then every 100 steps after)
                    number_of_passed_zeroes += 1 + (value - current_number) // 100
                elif current_number == 0 and value > 0:
                    # Starting at 0, we only land on it again if we do a full lap
                    number_of_passed_zeroes += value // 100
                current_number = (current_number - value) % 100
            elif line.startswith('R'):
                value = int(line.split('R')[1])
                # Count how many times we cross 0 going right
                number_of_passed_zeroes += (current_number + value) // 100
                current_number = (current_number + value) % 100

        print('Number of passed zeroes:', number_of_passed_zeroes)

    # part2(test_input)
    part2(input_data)

