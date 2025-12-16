# Data Structures - Example Solutions

This document provides a deep-dive solution for the **first problem** of every
topic in the comprehensive practice set.

## 1. Arrays: Longest Substring Without Repeating Characters (LeetCode 3)

### Problem

Given a string `s`, find the length of the longest substring without repeating
characters.

### Intuition

- A brute force approach would check all substrings, taking O(N^2) or O(N^3).
- We can optimize this using a **Sliding Window**.
- We keep a window `[l, r]` that contains only unique characters.
- As we expand the right pointer `r`, if we see a duplicate character, we shrink
  the left pointer `l` until the duplicate is removed.
- A `set` or `hash map` can track characters currently in the window.

### Code (Python)

```python
def lengthOfLongestSubstring(s: str) -> int:
    char_set = set()
    l = 0
    max_len = 0
    
    for r in range(len(s)):
        # If character is already in the set, shrink window from left
        while s[r] in char_set:
            char_set.remove(s[l])
            l += 1
        
        # Add current character and update max length
        char_set.add(s[r])
        max_len = max(max_len, r - l + 1)
        
    return max_len
```

### Complexity

- **Time**: O(N). Each character is added and removed at most once.
- **Space**: O(min(N, M)), where M is the charset size (e.g., 26 or 128).

---

## 2. Linked Lists: Reverse Linked List II (LeetCode 92)

### Problem

Given `head` of a linked list and two integers `left` and `right`, reverse the
nodes of the list from position `left` to `right`.

### Intuition

- Standard reversal is simple, but here we must only reverse a sub-segment.
- We need to reach the node _before_ `left` (`prev_left`) to accept the new head
  of the reversed segment.
- We traverse to the `left` position, then reverse `right - left` times.
- Pointer manipulation is tricky: `next_node` moves to `curr.next`, `curr.next`
  skips to `next_node.next`, and `next_node.next` points back to `prev.next`.

### Code (Python)

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverseBetween(head: ListNode, left: int, right: int) -> ListNode:
    dummy = ListNode(0, head)
    prev_left = dummy
    
    # 1. Reach node just before "left"
    for _ in range(left - 1):
        prev_left = prev_left.next
    
    # prev_left is now at (left - 1)th node
    cur = prev_left.next
    
    # 2. Reverse the sublist
    # Example: 1 -> 2 -> 3 -> 4, left=2, right=4
    # We are at 1. Cur is 2. We want to move 3, then 4 to the front.
    for _ in range(right - left):
        temp = cur.next
        cur.next = temp.next
        temp.next = prev_left.next
        prev_left.next = temp
        
    return dummy.next
```

### Complexity

- **Time**: O(N), one pass.
- **Space**: O(1), no extra space.

---

## 3. Stacks: Min Stack (LeetCode 155)

### Problem

Design a stack that supports push, pop, top, and retrieving the minimum element
in constant time.

### Intuition

- `push`, `pop`, `top` are naturally O(1) in a stack.
- To get `getMin` in O(1), we can't search the stack.
- We can maintain a **second stack** (`min_stack`) that tracks the minimum "so
  far".
- When pushing `x`: push `x` to main stack. Push `min(x, min_stack.top)` to
  min_stack.
- When popping: pop from both.

### Code (Python)

```python
class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []

    def push(self, val: int) -> None:
        self.stack.append(val)
        # Push to min_stack if empty or val is smaller/equal to current min
        val = min(val, self.min_stack[-1] if self.min_stack else val)
        self.min_stack.append(val)

    def pop(self) -> None:
        self.stack.pop()
        self.min_stack.pop()

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.min_stack[-1]
```

### Complexity

- **Time**: O(1) for all operations.
- **Space**: O(N) for storing elements.

---

## 4. Hash Tables: Group Anagrams (LeetCode 49)

### Problem

Given an array of strings, group the anagrams together.

### Intuition

- Anagrams share the same character counts.
- We can use a map where the Key is the "signature" of the word, and Value is
  the list of words.
- Signature can be the sorted string (easier) or a tuple of character counts
  (faster, O(N) vs O(N log K)).

### Code (Python)

```python
from collections import defaultdict

def groupAnagrams(strs: list[str]) -> list[list[str]]:
    # key: tuple of character counts (0-25)
    # value: list of strings
    groups = defaultdict(list)
    
    for s in strs:
        # Create a count array for a-z
        count = [0] * 26
        for c in s:
            count[ord(c) - ord('a')] += 1
        
        # Use tuple as dict key (lists are not hashable)
        groups[tuple(count)].append(s)
        
    return list(groups.values())
```

### Complexity

- **Time**: O(N * K), where N is number of strings and K is max string length.
- **Space**: O(N * K) to store the groups.

---

## 5. Trees: Binary Tree Right Side View (LeetCode 199)

### Problem

Given the root of a binary tree, imagine yourself standing on the right side of
it, return the values of the nodes you can see ordered from top to bottom.

### Intuition

- We need the last node of each level.
- **BFS (Level Order Traversal)** is perfect for this. We process level by level
  and take the last element of each level.
- Alternatively, DFS can work if we prioritize the right child and record depth.

### Code (Python)

```python
from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def rightSideView(root: TreeNode) -> list[int]:
    if not root:
        return []
        
    result = []
    queue = deque([root])
    
    while queue:
        level_length = len(queue)
        
        for i in range(level_length):
            node = queue.popleft()
            
            # If it's the last node in the current level, add to result
            if i == level_length - 1:
                result.append(node.val)
                
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
                
    return result
```

### Complexity

- **Time**: O(N), visiting every node.
- **Space**: O(W), max width of the tree (for the queue).

---

## 6. Heaps: Kth Largest Element in an Array (LeetCode 215)

### Problem

Given an integer array `nums` and an integer `k`, return the `k`th largest
element in the array.

### Intuition

- Sorting is O(N log N).
- A **Min-Heap** of size `k` is better. We iterate through the array,
  maintaining only the `k` largest elements seen so far.
- If the heap grows larger than `k`, we pop the smallest (which is the minimal
  of the "large" ones).
- After processing all numbers, the heap root is the Kth largest.

### Code (Python)

```python
import heapq

def findKthLargest(nums: list[int], k: int) -> int:
    min_heap = []
    
    for num in nums:
        heapq.heappush(min_heap, num)
        if len(min_heap) > k:
            heapq.heappop(min_heap)
            
    return min_heap[0]
```

### Complexity

- **Time**: O(N log K).
- **Space**: O(K).

---

## 7. Graphs: Number of Islands (LeetCode 200)

### Problem

Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s (land)
and `'0'`s (water), return the number of islands.

### Intuition

- Iterate through every cell.
- If we find a `'1'`, it's a new island. Increment count.
- Then, trigger a **DFS/BFS** to mark all adjacent `'1'`s as visited (or turn
  them to `'0'` to avoid re-processing).
- Continue iteration.

### Code (Python)

```python
def numIslands(grid: list[list[str]]) -> int:
    if not grid:
        return 0
        
    rows, cols = len(grid), len(grid[0])
    islands = 0
    
    def dfs(r, c):
        # Boundary check and water check
        if r < 0 or c < 0 or r >= rows or c >= cols or grid[r][c] == '0':
            return
        
        # Mark as visited (sink the island)
        grid[r][c] = '0'
        
        # Visit neighbors
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)
    
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                islands += 1
                dfs(r, c)
                
    return islands
```

### Complexity

- **Time**: O(M * N), each cell visited once.
- **Space**: O(M * N) in worst case (recursion stack for full grid island).

---

## 8. Tries: Implement Trie (Prefix Tree) (LeetCode 208)

### Problem

Implement a Trie with `insert`, `search`, and `startsWith`.

### Intuition

- A Trie node needs a hashmap (or array) `children` pointing to next characters,
  and a boolean `isEnd`.
- `Insert`: Traverse node by node, creating new nodes if path doesn't exist.
  Mark end.
- `Search`: Traverse. If path breaks, return False. Check `isEnd` at the final
  node.
- `StartsWith`: Same as search, but `isEnd` doesn't matter.

### Code (Python)

```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end = True

    def search(self, word: str) -> bool:
        node = self.root
        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.is_end

    def startsWith(self, prefix: str) -> bool:
        node = self.root
        for char in prefix:
            if char not in node.children:
                return False
            node = node.children[char]
        return True
```

### Complexity

- **Time**: O(L) for all operations, where L is word length.
- **Space**: O(Total Characters) stored.

---

## 9. Advanced: Range Sum Query - Mutable (LeetCode 307)

### Problem

Given an integer array `nums`, handle multiple queries of:

1. `update(index, val)`: Update `nums[index]` to `val`.
2. `sumRange(left, right)`: Calculate sum between indices.

### Intuition

- Prefix Sum array gives O(1) query but O(N) update.
- **Segment Tree** or **Fenwick Tree (Binary Indexed Tree)** gives O(log N) for
  both.
- Using Segment Tree:
  - Leaves = array elements.
  - Application = sum of children.
  - Update: Path from leaf to root.
  - Query: Combine relevant internal nodes.

### Code (Python)

_(Using Segment Tree Implementation)_

```python
class NumArray:
    def __init__(self, nums: list[int]):
        self.n = len(nums)
        self.tree = [0] * (2 * self.n)
        # Build tree: leaves at n to 2n-1
        for i in range(self.n):
            self.tree[self.n + i] = nums[i]
        # Build internal nodes
        for i in range(self.n - 1, 0, -1):
            self.tree[i] = self.tree[2 * i] + self.tree[2 * i + 1]

    def update(self, index: int, val: int) -> None:
        pos = index + self.n
        self.tree[pos] = val
        # Bubble up
        while pos > 0:
            left = pos
            right = pos
            if pos % 2 == 0:
                right = pos + 1
            else:
                left = pos - 1
            # Parent is pos // 2
            self.tree[pos // 2] = self.tree[left] + self.tree[right]
            pos //= 2

    def sumRange(self, left: int, right: int) -> int:
        l = left + self.n
        r = right + self.n
        res = 0
        while l <= r:
            if l % 2 == 1:
                res += self.tree[l]
                l += 1
            if r % 2 == 0:
                res += self.tree[r]
                r -= 1
            l //= 2
            r //= 2
        return res
```

### Complexity

- **Time**: O(log N) for both update and query.
- **Construction**: O(N).
- **Space**: O(N) for the tree array.
