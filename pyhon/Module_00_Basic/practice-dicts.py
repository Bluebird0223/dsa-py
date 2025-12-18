## 2. Dictionaries (Maps)

### Example Solution: Character Frequency Histogram

# **Problem**: Create a dictionary of character frequencies from a string.

# **Solution**:

# def char_frequency(s):
#     freq = {}
#     for char in s:
#         freq[char] = freq.get(char, 0) + 1
#     return freq

### Practice Problems

# 1. **Check Key Existence**: Write a function to check if a specific key exists in a dictionary.
# 2. **Iterate Keys/Values**: Print all keys and values safely.
# 3. **Invert Dictionary**: Swap keys and values. Handle cases where values are not unique (create list of keys).
# 4. **Merge Dictionaries**: Merge two dicts, summing values for common keys.
# 5. **Group Anagrams**: Given a list of strings, group anagrams together using a dictionary.
# 6. **Nested Access**: Implement get_deep(d, "a.b.c") to safely access nested keys.


# check key existence
def check_key_existence(d, key):
    return key in d


print("key exists: ", check_key_existence({"a": 1, "b": 2, "c": 3}, "a"))


# iterate keys/values
def iterate_key_values(dictionary):
    return dictionary.items()
    # for key, value in dictionary.items():
    #     print(key, value)


print("iterate keys/values: ", iterate_key_values({"a": 1, "b": 2, "c": 3}))


# invert dictionary
def invert_dictionary(dictionary):
    inverted = {}
    for key, value in dictionary.items():
        if value not in inverted:
            inverted[value] = [key]
        else:
            inverted[value].append(key)
    return inverted


print("invert dictionary: ", invert_dictionary({"a": 1, "b": 2, "c": 3, "d": 3}))


# merge dictionaries
def merge_dictionaries(d1, d2):
    merged = {}
    for key, value in d1.items():
        if key in merged:
            merged[key] += value
        else:
            merged[key] = value
    for key, value in d2.items():
        if key in merged:
            merged[key] += value
        else:
            merged[key] = value
    return merged


print(
    "merge dictionaries: ",
    merge_dictionaries({"a": 1, "b": 2, "c": 3}, {"c": 3, "e": 5, "f": 6}),
)


# group anagrams
def group_anagrams(strings):
    grouped = {}
    for string in strings:
        sorted_string = "".join(sorted(string))
        if sorted_string not in grouped:
            grouped[sorted_string] = [string]
        else:
            grouped[sorted_string].append(string)
    return grouped


print("group anagrams: ", group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))


# nested access
def nested_access(d, key):
    keys = key.split(".")
    for k in keys:
        d = d[k]
    return d


print("nested access: ", nested_access({"a": {"b": {"c": 1}}}, "a.b.c"))
