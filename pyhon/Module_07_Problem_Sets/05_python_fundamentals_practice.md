# Python Fundamentals Practice Set

Master the core of Python with these problems, organized from **Basic** to
**Advanced**.

---

## 1. Lists

### Example Solution: Flatten a Nested List Iterator

**Problem**: Write a function that flattens a nested list of arbitrary depth.
`input: [1, [2, [3, 4], 5], 6] -> output: [1, 2, 3, 4, 5, 6]`

**Solution**:

```python
def flatten_list(nested_list):
    result = []
    for item in nested_list:
        if isinstance(item, list):
            result.extend(flatten_list(item))
        else:
            result.append(item)
    return result
```

### Practice Problems

- **Level 1 (Basic)**:
  1. **Sum of Elements**: Write a function to calculate the sum of all numbers
     in a list without using `sum()`.
  2. **Reverse List**: Reverse a list in-place without using `reverse()` or
     `[::-1]` (use a loop).
- **Level 2 (Intermediate)**: 3. **Remove Duplicates**: Remove duplicates from a
  list while preserving the original order. 4. **List Rotation**: Write a
  function `rotate(lst, k)` that rotates a list to the right by `k` steps.
- **Level 3 (Advanced)**: 5. **List Intersection**: Find the intersection of two
  lists without using sets (analyze time complexity). 6. **Max Subarray Sum**:
  (Kadane’s Algo concept) Find the contiguous subarray within a list (containing
  at least one number) which has the largest sum.

---

## 2. Dictionaries (Maps)

### Example Solution: Character Frequency Histogram

**Problem**: Create a dictionary of character frequencies from a string.

**Solution**:

```python
def char_frequency(s):
    freq = {}
    for char in s:
        freq[char] = freq.get(char, 0) + 1
    return freq
```

### Practice Problems

- **Level 1 (Basic)**:
  1. **Check Key Existence**: Write a function to check if a specific key exists
     in a dictionary.
  2. **Iterate Keys/Values**: Print all keys and values safely.
- **Level 2 (Intermediate)**: 3. **Invert Dictionary**: Swap keys and values.
  Handle cases where values are not unique (create list of keys). 4. **Merge
  Dictionaries**: Merge two dicts, summing values for common keys.
- **Level 3 (Advanced)**: 5. **Group Anagrams**: Given a list of strings, group
  anagrams together using a dictionary. 6. **Nested Access**: Implement
  `get_deep(d, "a.b.c")` to safely access nested keys.

---

## 3. Sets

### Example Solution: Unique Common Elements

**Problem**: Find elements common to multiple lists.

**Solution**:

```python
def common_elements(*lists):
    if not lists: return []
    res = set(lists[0])
    for l in lists[1:]:
        res.intersection_update(l)
    return list(res)
```

### Practice Problems

- **Level 1 (Basic)**:
  1. **Remove Duplicates**: Convert a list with duplicates to a list with unique
     elements.
  2. **Set Operations**: Demonstrate Union, Intersection, and Difference on two
     sets.
- **Level 2 (Intermediate)**: 3. **Is Subset**: Check if Set A is a subset of
  Set B manually. 4. **Symmetric Difference**: Find elements in A or B but not
  both.
- **Level 3 (Advanced)**: 5. **Longest Consecutive Sequence**: Find the length
  of the longest consecutive elements sequence in an unsorted array (O(N) time).
  6. **Power Set**: Generate all subsets of a set (Combinatorial).

---

## 4. Tuples

### Example Solution: Sort Tuple List

**Problem**: Sort list of `(name, age, score)` by score desc, then name asc.

**Solution**:

```python
# key=(-x[2], x[0])
```

### Practice Problems

- **Level 1 (Basic)**:
  1. **Access & Unpack**: Access elements by index and unpack a tuple of 3
     elements into variables.
  2. **Immutability**: Demonstrate that you cannot change a tuple element.
- **Level 2 (Intermediate)**: 3. **List of Tuples to Dict**: Convert
  `[(k,v), ...]` to dict. 4. **Zip Lists**: Combine two lists into a list of
  tuples.
- **Level 3 (Advanced)**: 5. **NamedTuple**: Create a `Employee` NamedTuple and
  manipulate it. 6. **Tuple Keys**: Use tuples as keys in a dictionary (e.g.,
  coordinate grid map), proving lists cannot be keys.

---

## 5. Lambda & Functional

### Example Solution: Power Generator

**Problem**: `power_gen(n)` returns a function that powers by `n`.

**Solution**:

```python
power_gen = lambda n: lambda x: x**n
```

### Practice Problems

- **Level 1 (Basic)**:
  1. **Simple Lambda**: Write a lambda to square a number.
  2. **Filter Evens**: Use `filter` and lambda to get even numbers from a list.
- **Level 2 (Intermediate)**: 3. **Custom Sort**: Sort a list of strings by
  their **last letter**. 4. **Map Transformation**: Convert a list of
  temperatures (C) to (F) using map.
- **Level 3 (Advanced)**: 5. **Multi-condition Sort**: Sort a list of
  dictionaries by multiple keys (e.g., `age` then `name`). 6. **Functional
  Composition**: Write a function that applies a list of lambda functions to a
  value sequentially.

---

## 6. Built-in Functions

### Example Solution: Custom Sort

**Problem**: Sort string list by length, then index.

**Solution**:

```python
sorted(enumerate(words), key=lambda x: (len(x[1]), x[0]))
```

### Practice Problems

- **Level 1 (Basic)**:
  1. **Max/Min**: Find max and min of a list without `max()`.
  2. **Type Checking**: Use `isinstance` vs `type`.
- **Level 2 (Intermediate)**: 3. **Zip Longest**: Combine two lists of unequal
  length (fill with None). 4. **Any/All**: Validate a form (e.g., all fields not
  empty).
- **Level 3 (Advanced)**: 5. **Custom Iterator**: Use `iter()` and `next()`
  manually to traverse a collection. 6. **Eval Safety**: Explore why `eval()` is
  dangerous and how `ast.literal_eval()` is safer.

---

## 7. Strings

### Example Solution: Valid Palindrome

**Problem**: Palindrome check ignoring non-alphanumeric.

**Solution**:

```python
clean = [c.lower() for c in s if c.isalnum()]
return clean == clean[::-1]
```

### Practice Problems

- **Level 1 (Basic)**:
  1. **Count Vowels**: Count vowels in a string.
  2. **Reverse String**: Reverse a string.
- **Level 2 (Intermediate)**: 3. **Anagram Check**: Check if two strings are
  anagrams. 4. **Reverse Words**: "Hello World" -> "World Hello".
- **Level 3 (Advanced)**: 5. **Longest Substring Without Repeats**: Find length
  of longest unique substring. 6. **String Compression**: "aabcccccaaa" ->
  "a2b1c5a3".

---

## 8. Arrays

### Example Solution: Rotate Array

**Problem**: Rotate array k steps.

**Solution**:

```python
nums[:] = nums[-k:] + nums[:-k]
```

### Practice Problems

- **Level 1 (Basic)**:
  1. **Find Max**: Find maximum element.
  2. **Move Zeros**: Move zeros to end (Basic version).
- **Level 2 (Intermediate)**: 3. **Two Sum**: Find two numbers adding to target
  (Sorted). 4. **Running Sum**: Compute prefix sums.
- **Level 3 (Advanced)**: 5. **Product Except Self**: O(N) time, O(1) space. 6.
  **Rotate Image**: Rotate a 2D matrix (N x N) by 90 degrees.
