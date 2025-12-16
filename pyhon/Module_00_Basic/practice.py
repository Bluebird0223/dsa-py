# two sum
# Classic Two Sum - Return indices of two numbers that sum to target
# Two Sum II (Sorted Array) - Array is already sorted in ascending order
# Two Sum (Return Values) - Return the actual pair of numbers instead of indices
# Two Sum (All Pairs) - Find all unique pairs that sum to target
# Two Sum (Multiple Results) - Return any one valid pair, not necessarily first


def two_sum_classic(nums, target):
    seen = {}  # value -> index
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []


def two_sum_II(nums,target):
    
    pass
    

# Time: O(n), Space: O(n)
print(two_sum_classic([2, 7, 11, 15], 9))
print(two_sum_II([1,2,3,4,5],9))