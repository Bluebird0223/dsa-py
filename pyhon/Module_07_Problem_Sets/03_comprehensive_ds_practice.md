# Comprehensive Data Structure Practice Set

A curated list of 5+ in-depth problems for every major data structure to master
them thoroughly.

## 1. Arrays & Strings

_Focus: Pointers, Sliding Window, Prefix Sum_

1. **Longest Substring Without Repeating Characters** (LeetCode 3)
   - _Concept_: Sliding Window, Hash Set.
   - _Why_: Fundamental sliding window problem.
   - _Difficulty_: Medium

2. **Container With Most Water** (LeetCode 11)
   - _Concept_: Two Pointers (Converging).
   - _Why_: Teaches decisions on moving pointers.
   - _Difficulty_: Medium

3. **Product of Array Except Self** (LeetCode 238)
   - _Concept_: Prefix/Suffix Products.
   - _Why_: Array manipulation without division.
   - _Difficulty_: Medium

4. **Minimum Window Substring** (LeetCode 76)
   - _Concept_: Variable Sliding Window with Frequency Map.
   - _Why_: Complex condition handling in windows.
   - _Difficulty_: Hard

5. **Subarray Sum Equals K** (LeetCode 560)
   - _Concept_: Prefix Sum + HashMap.
   - _Why_: Standard pattern for subarray sum problems.
   - _Difficulty_: Medium

## 2. Linked Lists

_Focus: Pointer manipulation, Edge cases, Two pointers_

1. **Reverse Linked List II** (LeetCode 92)
   - _Concept_: Reversal in a range.
   - _Why_: More complex than simple reversal; requires precise pointer fixups.
   - _Difficulty_: Medium

2. **Reorder List** (LeetCode 143)
   - _Concept_: Middle finding + Reverse + Merge.
   - _Why_: Combines multiple LL operations.
   - _Difficulty_: Medium

3. **Copy List with Random Pointer** (LeetCode 138)
   - _Concept_: Deep Copy, HashMap or Interweaving.
   - _Why_: Handling complex references in LL.
   - _Difficulty_: Medium

4. **Linked List Cycle II** (LeetCode 142)
   - _Concept_: Floyd’s Cycle Finding (Tortoise & Hare).
   - _Why_: Mathematical entry point detection.
   - _Difficulty_: Medium

5. **LRU Cache** (LeetCode 146)
   - _Concept_: Doubly Linked List + HashMap.
   - _Why_: Industry standard application of DLL.
   - _Difficulty_: Medium

6. **Merge k Sorted Lists** (LeetCode 23)
   - _Concept_: Priority Queue vs Divide & Conquer.
   - _Why_: Scaling merge sort logic.
   - _Difficulty_: Hard

## 3. Stacks & Queues

_Focus: LIFO/FIFO patterns, Monotonicity_

1. **Min Stack** (LeetCode 155)
   - _Concept_: Two Stacks or Tuple storage.
   - _Why_: Constant time retrieval of metadata.
   - _Difficulty_: Medium

2. **Daily Temperatures** (LeetCode 739)
   - _Concept_: Monotonic Decreasing Stack.
   - _Why_: Standard "Next Greater Element" pattern.
   - _Difficulty_: Medium

3. **Evaluate Reverse Polish Notation** (LeetCode 150)
   - _Concept_: Postfix evaluation using Stack.
   - _Why_: Classic parsing application.
   - _Difficulty_: Medium

4. **Largest Rectangle in Histogram** (LeetCode 84)
   - _Concept_: Monotonic Increasing Stack.
   - _Why_: Tricky boundary handling with stacks.
   - _Difficulty_: Hard

5. **Sliding Window Maximum** (LeetCode 239)
   - _Concept_: Monotonic Deque (Decreasing).
   - _Why_: Optimization of queue operations.
   - _Difficulty_: Hard

## 4. Hash Tables / Sets

_Focus: Fast lookups, Frequency counting_

1. **Group Anagrams** (LeetCode 49)
   - _Concept_: String sorting/hashing as key.
   - _Why_: Key design in hashmaps.
   - _Difficulty_: Medium

2. **Longest Consecutive Sequence** (LeetCode 128)
   - _Concept_: HashSet intelligence.
   - _Why_: Sequence building in O(N).
   - _Difficulty_: Medium

3. **Insert Delete GetRandom O(1)** (LeetCode 380)
   - _Concept_: HashMap + ArrayList.
   - _Why_: Structural design for O(1) requirements.
   - _Difficulty_: Medium

4. **Keyboard Row** (LeetCode 648) / **Replace Words**
   - _Concept_: HashSet for Dictionary lookups.
   - _Why_: Fast string matching.
   - _Difficulty_: Medium

5. **Grid Illumination** (LeetCode 1001) or **Design Underground System**
   - _Concept_: Complex Keying (Row, Col, Diagonal maps).
   - _Why_: Real-world system mapping.
   - _Difficulty_: Hard/Medium

## 5. Trees (Binary Trees & BST)

_Focus: Recursion, Traversals, Path finding_

1. **Binary Tree Right Side View** (LeetCode 199)
   - _Concept_: BFS (Level Order) or DFS.
   - _Why_: Level-based logic.
   - _Difficulty_: Medium

2. **Lowest Common Ancestor of a Binary Tree** (LeetCode 236)
   - _Concept_: Recursive backtracking.
   - _Why_: Fundamental tree relationship problem.
   - _Difficulty_: Medium

3. **Construct Binary Tree from Preorder and Inorder Traversal** (LeetCode 105)
   - _Concept_: Divide and Conquer construction.
   - _Why_: Understanding tree structure and indices.
   - _Difficulty_: Medium

4. **Path Sum III** (LeetCode 437)
   - _Concept_: DFS + Prefix Sum (Map).
   - _Why_: Combining array techniques with trees.
   - _Difficulty_: Medium

5. **Serialize and Deserialize Binary Tree** (LeetCode 297)
   - _Concept_: Complete method for storing tree structure.
   - _Why_: Systems design application.
   - _Difficulty_: Hard

6. **Validate Binary Search Tree** (LeetCode 98)
   - _Concept_: BST Property (Ranges).
   - _Why_: Correctly checking constraints.
   - _Difficulty_: Medium

## 6. Heaps / Priority Queues

_Focus: Ordering, K-th elements_

1. **Kth Largest Element in an Array** (LeetCode 215)
   - _Concept_: QuickSelect or Min-Heap.
   - _Why_: Partial sorting vs complete sorting.
   - _Difficulty_: Medium

2. **Top K Frequent Elements** (LeetCode 347)
   - _Concept_: Heap or Bucket Sort.
   - _Why_: Frequency based ordering.
   - _Difficulty_: Medium

3. **Find Median from Data Stream** (LeetCode 295)
   - _Concept_: Two Heaps (Min & Max).
   - _Why_: Balancing two structures dynamically.
   - _Difficulty_: Hard

4. **Task Scheduler** (LeetCode 621)
   - _Concept_: Greedy + Priority Queue / Math.
   - _Why_: Resource optimization.
   - _Difficulty_: Medium

5. **Cheapest Flights Within K Stops** (LeetCode 787)
   - _Concept_: Modified Dijkstra.
   - _Why_: Graph problem often solved with Heap.
   - _Difficulty_: Medium

## 7. Graphs

_Focus: BFS, DFS, Topological Sort, Shortest Path_

1. **Number of Islands** (LeetCode 200)
   - _Concept_: Connected Components (Grid DFS/BFS).
   - _Why_: The "Hello World" of graph grids.
   - _Difficulty_: Medium

2. **Course Schedule** (LeetCode 207)
   - _Concept_: Cycle Detection, Topological Sort.
   - _Why_: Dependency resolution pattern.
   - _Difficulty_: Medium

3. **Rotting Oranges** (LeetCode 994)
   - _Concept_: Multi-source BFS.
   - _Why_: Simultaneous expansion.
   - _Difficulty_: Medium

4. **Network Delay Time** (LeetCode 743)
   - _Concept_: Dijkstra’s Algorithm.
   - _Why_: Standard weighted shortest path.
   - _Difficulty_: Medium

5. **Word Ladder** (LeetCode 127)
   - _Concept_: BFS for Shortest Path in abstract graph.
   - _Why_: State transformation problems.
   - _Difficulty_: Hard

6. **Redundant Connection** (LeetCode 684)
   - _Concept_: Union-Find (Disjoint Set).
   - _Why_: Cycle detection in undirected graphs.
   - _Difficulty_: Medium

## 8. Tries (Prefix Trees)

_Focus: String prefix operations_

1. **Implement Trie (Prefix Tree)** (LeetCode 208)
   - _Concept_: Tree of characters.
   - _Why_: Building the structure.
   - _Difficulty_: Medium

2. **Design Add and Search Words Data Structure** (LeetCode 211)
   - _Concept_: Trie with Wildcard/DFS.
   - _Why_: Partial matching in tries.
   - _Difficulty_: Medium

3. **Word Search II** (LeetCode 212)
   - _Concept_: Trie + Backtracking on Grid.
   - _Why_: Heavy optimization application.
   - _Difficulty_: Hard

4. **Maximum XOR of Two Numbers in an Array** (LeetCode 421)
   - _Concept_: Binary Trie.
   - _Why_: Bit manipulation via Tries.
   - _Difficulty_: Medium

5. **Replace Words** (LeetCode 648)
   - _Concept_: Prefix matching.
   - _Why_: Efficient replacement.
   - _Difficulty_: Medium

## 9. Advanced / Mixed

_Focus: Complex structures_

1. **Range Sum Query - Mutable** (LeetCode 307)
   - _Concept_: Segment Tree or Binary Indexed Tree (Fenwick).
   - _Why_: Logarithmic updates and queries.
   - _Difficulty_: Medium

2. **Count of Smaller Numbers After Self** (LeetCode 315)
   - _Concept_: Merge Sort or Segment Tree.
   - _Why_: Counting inversions/order.
   - _Difficulty_: Hard

3. **The Skyline Problem** (LeetCode 218)
   - _Concept_: Sweep Line + Heap.
   - _Why_: Geometry processing.
   - _Difficulty_: Hard

4. **Sliding Window Median** (LeetCode 480)
   - _Concept_: Two Heaps + Lazy Removal.
   - _Why_: Advanced window management.
   - _Difficulty_: Hard

5. **Design Twisted Function** / **Custom Structures**
   - _Concept_: Combinations of Map + LinkedList + Heap.
   - _Why_: Interview-style system design.
   - _Difficulty_: Hard
