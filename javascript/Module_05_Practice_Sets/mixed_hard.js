/**
 * Mixed Hard Problems Practice Set
 */

// 1. Median of Two Sorted Arrays
function findMedianSortedArrays(nums1, nums2) {
    if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);

    const x = nums1.length;
    const y = nums2.length;
    let low = 0;
    let high = x;

    while (low <= high) {
        const partitionX = Math.floor((low + high) / 2);
        const partitionY = Math.floor((x + y + 1) / 2) - partitionX;

        const maxLeftX = (partitionX === 0) ? -Infinity : nums1[partitionX - 1];
        const minRightX = (partitionX === x) ? Infinity : nums1[partitionX];

        const maxLeftY = (partitionY === 0) ? -Infinity : nums2[partitionY - 1];
        const minRightY = (partitionY === y) ? Infinity : nums2[partitionY];

        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            if ((x + y) % 2 === 0) {
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
            } else {
                return Math.max(maxLeftX, maxLeftY);
            }
        } else if (maxLeftX > minRightY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }
}

// 2. Regular Expression Matching
function isMatch(s, p) {
    const dp = Array(s.length + 1).fill(false)
        .map(() => Array(p.length + 1).fill(false));

    dp[0][0] = true;
    for (let j = 1; j <= p.length; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }

    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= p.length; j++) {
            if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                dp[i][j] = dp[i][j - 2];
                if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
            }
        }
    }
    return dp[s.length][p.length];
}

// 3. Merge k Sorted Lists
function mergeKLists(lists) {
    if (lists.length === 0) return null;

    while (lists.length > 1) {
        const a = lists.shift();
        const b = lists.shift();
        lists.push(mergeTwoLists(a, b));
    }

    return lists[0];
}

function mergeTwoLists(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}

// 4. First Missing Positive
function firstMissingPositive(nums) {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
            const temp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = temp;
        }
    }

    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) return i + 1;
    }
    return n + 1;
}

// 5. Largest Rectangle in Histogram
function largestRectangleArea(heights) {
    const stack = [];
    let maxArea = 0;

    for (let i = 0; i <= heights.length; i++) {
        const h = (i === heights.length) ? 0 : heights[i];
        while (stack.length > 0 && h < heights[stack[stack.length - 1]]) {
            const height = heights[stack.pop()];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }
    return maxArea;
}

// 6. Sliding Window Maximum
function maxSlidingWindow(nums, k) {
    const output = [];
    const deque = []; // Indices

    for (let i = 0; i < nums.length; i++) {
        // Remove indices out of window
        while (deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }
        // Remove smaller elements
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }
        deque.push(i);

        if (i >= k - 1) {
            output.push(nums[deque[0]]);
        }
    }
    return output;
}

// 7. Word Search II (Trie + DFS)
// Simplified Trie structure for readability
class TrieNode {
    constructor() {
        this.children = {};
        this.word = null;
    }
}

function findWords(board, words) {
    const root = new TrieNode();
    for (let word of words) {
        let node = root;
        for (let char of word) {
            if (!node.children[char]) node.children[char] = new TrieNode();
            node = node.children[char];
        }
        node.word = word;
    }

    const result = [];
    const m = board.length;
    const n = board[0].length;

    const dfs = (i, j, node) => {
        if (node.word) {
            result.push(node.word);
            node.word = null; // Deduplicate
        }

        if (i < 0 || i >= m || j < 0 || j >= n || !node.children[board[i][j]]) return;

        const char = board[i][j];
        board[i][j] = '#'; // Mark visited

        dfs(i + 1, j, node.children[char]);
        dfs(i - 1, j, node.children[char]);
        dfs(i, j + 1, node.children[char]);
        dfs(i, j - 1, node.children[char]);

        board[i][j] = char; // Backtrack
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dfs(i, j, root);
        }
    }

    return result;
}

module.exports = {
    findMedianSortedArrays,
    isMatch,
    mergeKLists,
    firstMissingPositive,
    largestRectangleArea,
    maxSlidingWindow,
    findWords
};
