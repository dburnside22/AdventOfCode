from input import input_data, test_input

def get_biggest_number(line):
    digits = [int(char) for char in line]
    n = len(digits)
    
    if n < 2:
        return 0
 
    max_after = [0] * n
    max_after[-1] = 0 
    
    for i in range(n - 2, -1, -1):
        max_after[i] = max(max_after[i + 1], digits[i + 1])
 
    max_two_digit = 0
    for i in range(n - 1):
        two_digit_num = digits[i] * 10 + max_after[i]
        max_two_digit = max(max_two_digit, two_digit_num)
    
    return max_two_digit

def get_biggest_n_digit_number(line, n_digits):
    digits = [int(char) for char in line]
    total_digits = len(digits)
    
    if total_digits < n_digits:
        return 0
    
    result = []
    start_pos = 0
    
    for position in range(n_digits):
        remaining_needed = n_digits - position - 1
        search_end = total_digits - remaining_needed
        
        max_digit = -1
        max_idx = -1
        for i in range(start_pos, search_end):
            if digits[i] > max_digit:
                max_digit = digits[i]
                max_idx = i
        
        result.append(max_digit)
        start_pos = max_idx + 1
    
    number = 0
    for digit in result:
        number = number * 10 + digit
    
    return number

def part1(data_source):
    print('Welcome To Day 3')
    lines = data_source.strip().split('\n')
    
    total = 0
    for line in lines:
        max_two_digit = get_biggest_number(line)
        total += max_two_digit
    
    print(f"Total sum: {total}")
    return total

def part2(data_source):
    print('Welcome To Day 3')
    lines = data_source.strip().split('\n')
    
    total = 0
    for line in lines:
        max_two_digit = get_biggest_n_digit_number(line, 12)
        total += max_two_digit
    
    print(f"Total sum: {total}")
    return total

if __name__ == '__main__':
    # part1(test_input)
    # part1(input_data)
    
    # part2(test_input)
    part2(input_data)

