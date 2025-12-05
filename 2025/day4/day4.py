from input import input_data, test_input

def get_neighbors(grid, row, col):
    neighbors = []
    rows = len(grid)
    cols = len(grid[0]) if rows > 0 else 0
    
    # All 8 directions: top-left, top, top-right, left, right, bottom-left, bottom, bottom-right
    directions = [
        (-1, -1), (-1, 0), (-1, 1),  # top row
        (0, -1),           (0, 1),    # middle row (left and right)
        (1, -1),  (1, 0),  (1, 1)     # bottom row
    ]
    
    for dr, dc in directions:
        new_row, new_col = row + dr, col + dc
        # Check if the new position is within bounds
        if 0 <= new_row < rows and 0 <= new_col < cols:
            neighbors.append(grid[new_row][new_col])
    
    return neighbors

def has_less_than_four_at_signs(neighbors):
    at_sign_count = neighbors.count('@')
    return at_sign_count < 4

def part1(data_source):
    print('Welcome To Day 4')
    lines = data_source.strip().split('\n')
    grid = [list(line) for line in lines]
    
    count = 0
    for row in range(len(grid)):
        for col in range(len(grid[row])):
            # Only check positions that are '@'
            if grid[row][col] == '@':
                neighbors = get_neighbors(grid, row, col)
                if has_less_than_four_at_signs(neighbors):
                    count += 1
                    # print(f"Position ({row}, {col}) = '@' has < 4 @ neighbors")
    
    print(f"\nTotal @ positions with < 4 @ neighbors: {count}")
    return count

def part2(data_source):
    print('Welcome To Day 4: Part 2')
    lines = data_source.strip().split('\n')
    grid = [list(line) for line in lines]
    
    total_removed = 0
    round_num = 0
    
    while True:
        # Find all @ positions with < 4 @ neighbors
        positions_to_remove = []
        
        for row in range(len(grid)):
            for col in range(len(grid[row])):
                if grid[row][col] == '@':
                    neighbors = get_neighbors(grid, row, col)
                    if has_less_than_four_at_signs(neighbors):
                        positions_to_remove.append((row, col))
        
        # If nothing to remove, we're done
        if len(positions_to_remove) == 0:
            break
        
        # Remove all qualifying @ positions (turn them into .)
        for row, col in positions_to_remove:
            grid[row][col] = '.'
        
        round_num += 1
        total_removed += len(positions_to_remove)
    
    print(f"Total @ positions removed: {total_removed}")
    return total_removed

if __name__ == '__main__':
    # part1(test_input)
    # part1(input_data)
    
    # part2(test_input)
    part2(input_data)

