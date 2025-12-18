## 1. Lists

### Example Solution: Flatten a Nested List Iterator

# **Problem**: Write a function that flattens a nested list of arbitrary depth.
# `input: [1, [2, [3, 4], 5], 6] -> output: [1, 2, 3, 4, 5, 6]`

# **Solution**:
# def flatten_list(nested_list):
#     result = []
#     for item in nested_list:
#         if isinstance(item, list):
#             result.extend(flatten_list(item))
#         else:
#             result.append(item)
#     return result

# ### Practice Problems

# 1. **Sum of Elements**: Write a function to calculate the sum of all numbers in a list without using `sum()`.
# 2. **Reverse List**: Reverse a list in-place without using `reverse()` or `[::-1]` (use a loop).
# 3. **Remove Duplicates**: Remove duplicates from a list while preserving the original order.
# 4. **List Rotation**: Write a function `rotate(lst, k)` that rotates a list to the right by `k` steps.
# 5. **List Intersection**: Find the intersection of two lists without using sets (analyze time complexity).
# 6. **Max Subarray Sum**: (Kadane’s Algo concept) Find the contiguous subarray within a list (containing at least one number) which has the largest sum.

# sum of Elements
def sum_of_elements(lst):
    sum = 0
    for i in lst:
        sum += i
    return sum


print("sum of elements: ", sum_of_elements([1, 2, 3, 4, 5]))


# reverse list
def reverse_list(lst):
    rev = []
    for i in range(len(lst)):
        rev_digit = lst.pop()
        rev.append(rev_digit)
    return rev


print("reverse list: ", reverse_list([1, 2, 3, 4, 5]))


# remove duplicates
def remove_duplicates(lst):
    return list(set(lst))


print("remove duplicates: ", remove_duplicates([1, 2, 2, 3, 4, 4, 5]))


# list rotation
def rotate_list(lst, k):
    return lst[-k:] + lst[:-k]


print("rotate list: ", rotate_list([1, 2, 3, 4, 5], 2))


# list intersection
def list_intersection(lst1, lst2):
    return list(set(lst1) & set(lst2))


print("list intersection: ", list_intersection([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]))


# max subarray sum
def max_subarray_sum(lst):
    # kadane's algorithm
    max_sum = 0
    current_sum = 0
    for i in lst:
        current_sum += i
        if current_sum < 0:
            current_sum = 0
        max_sum = max(max_sum, current_sum)
    return max_sum


print("max subarray sum: ", max_subarray_sum([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
