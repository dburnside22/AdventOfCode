from input import input_data, test_input

def calculate_total(numbers, sign):
    """Calculate total of numbers using the given operator."""
    if sign == '+':
        return sum(numbers)
    elif sign == '*':
        result = 1
        for num in numbers:
            result *= num
        return result
    else:
        raise ValueError(f"Unknown operator: {sign}")

def part1(data_source):
    print('Welcome To Day 6')
    grand_total = 0
    lines = data_source.strip().split('\n')
    
    # Parse each line into values, splitting by whitespace
    rows = [line.split() for line in lines]
    
    # Transpose rows into columns
    columns = list(zip(*rows))
    
    # Process each column: convert numbers to int, keep last element as operator
    processed_columns = []
    for col in columns:
        numbers = [int(x) for x in col[:-1]]  # All but last are numbers
        operator = col[-1]  # Last element is the operator
        processed_columns.append((numbers, operator))
    
    # Calculate and print results for each column
    for i, (nums, op) in enumerate(processed_columns):
        total = calculate_total(nums, op)
        grand_total += total
    print(f"Grand Total: {grand_total}")
    pass

    # def part2(data_source):
    #     print('Welcome To Day 6: Part 2')
    #     lines = data_source.strip().split('\n')
    #     
    #     # Your solution here
    #     pass

if __name__ == '__main__':
    # part1(test_input)
    part1(input_data)
    
    # part2(test_input)
    # part2(input_data)

