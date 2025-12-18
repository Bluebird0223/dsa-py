## 3. Sets

### Example Solution: Unique Common Elements

# **Problem**: Find elements common to multiple lists.

# **Solution**:
# def common_elements(*lists):
#     if not lists: return []
#     res = set(lists[0])
#     for l in lists[1:]:
#         res.intersection_update(l)
#     return list(res)

### Practice Problems
# 1. **Remove Duplicates**: Convert a list with duplicates to a list with unique elements.
# 2. **Set Operations**: Demonstrate Union, Intersection, and Difference on two sets.
# 3. **Is Subset**: Check if Set A is a subset of Set B manually.
# 4. **Symmetric Difference**: Find elements in A or B but not both.
# 5. **Longest Consecutive Sequence**: Find the length of the longest consecutive elements sequence in an unsorted array (O(N) time).
# 6. **Power Set**: Generate all subsets of a set (Combinatorial).

# remove duplicates
def remove_duplicates(unique_list):
    return list(set(unique_list))


print("remove duplicates: ", remove_duplicates([1, 2, 2, 3, 4, 4, 5]))


# set operations
def set_operations(set1, set2):
    union = set1.union(set2)
    intersection = set1.intersection(set2)
    difference = set1.difference(set2)
    symmetric_difference = set1.symmetric_difference(set2)

    return union, intersection, difference, symmetric_difference


print("set operations: ", set_operations({1, 2, 3, 4, 5}, {4, 5, 6, 7, 8}))


# is subset
def is_subset(set1, set2):
    for element in set1:
        if element not in set2:
            return False
    return True

    # return set1.issubset(set2)


print("is subset: ", is_subset({1, 2, 3, 4, 5}, {4, 5, 6, 7, 8}))


# symmetric difference
def symmetric_difference(set1, set2):
    return set1.symmetric_difference(set2)


print("symmetric difference: ", symmetric_difference({1, 2, 3, 4, 5}, {4, 5, 6, 7, 8}))


# longest consecutive sequence
def longest_consecutive_sequence(nums):
    if not nums:
        return 0
    nums = set(nums)
    longest_streak = 0
    for num in nums:
        if num - 1 not in nums:
            current_num = num
            current_streak = 1
            while current_num + 1 in nums:
                current_num += 1
                current_streak += 1
            longest_streak = max(longest_streak, current_streak)
    return longest_streak


print(
    "longest consecutive sequence: ",
    longest_consecutive_sequence([100, 4, 200, 1, 3, 2, 5]),
)


# power set
def power_set(set1):
    if not set1:
        return [[]]
    first = set1[0]
    rest = set1[1:]
    subsets = power_set(rest)
    return subsets + [[first] + subset for subset in subsets]


print("power set: ", power_set([1, 2, 3, 4, 5]))
