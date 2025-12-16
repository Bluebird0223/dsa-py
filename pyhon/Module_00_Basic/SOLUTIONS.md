# Solutions for Module 00 Basic Exercises

## 01_arithmetic_logic.py

```python
def add_numbers(a, b):
    return a + b

def celsius_to_fahrenheit(celsius):
    return (celsius * 9/5) + 32

def is_even(number):
    return number % 2 == 0

def check_sign(number):
    if number > 0:
        return "Positive"
    elif number < 0:
        return "Negative"
    else:
        return "Zero"

def max_of_three(a, b, c):
    if a >= b and a >= c:
        return a
    elif b >= a and b >= c:
        return b
    else:
        return c
```

## 02_loops_and_lists.py

```python
def print_numbers(n):
    result = []
    for i in range(1, n + 1):
        result.append(i)
    return result

def sum_list(numbers):
    total = 0
    for num in numbers:
        total += num
    return total

def count_occurrences(numbers, target):
    count = 0
    for num in numbers:
        if num == target:
            count += 1
    return count

def find_maximum(numbers):
    if not numbers:
        return None
    max_val = numbers[0]
    for num in numbers:
        if num > max_val:
            max_val = num
    return max_val

def filter_evens(numbers):
    evens = []
    for num in numbers:
        if num % 2 == 0:
            evens.append(num)
    return evens
```
