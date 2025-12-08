/**
 * Dynamic Programming Practice Set 1 (Basic to Intermediate)
 */

// 1. Climbing Stairs
function climbStairs(n) {
    if (n <= 2) return n;
    let one = 1, two = 2;
    for (let i = 3; i <= n; i++) {
        let temp = one + two;
        one = two;
        two = temp;
    }
    return two;
}

// 2. Min Cost Climbing Stairs
function minCostClimbingStairs(cost) {
    let downOne = 0, downTwo = 0;
    for (let i = 2; i <= cost.length; i++) {
        let temp = downOne;
        downOne = Math.min(downOne + cost[i - 1], downTwo + cost[i - 2]);
        downTwo = temp;
    }
    return downOne;
}

// 3. House Robber
function rob(nums) {
    if (nums.length === 0) return 0;
    let prev1 = 0;
    let prev2 = 0;
    for (let num of nums) {
        let temp = prev1;
        prev1 = Math.max(prev2 + num, prev1);
        prev2 = temp;
    }
    return prev1;
}

// 4. House Robber II (Circular)
function rob2(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    return Math.max(rob(nums.slice(0, nums.length - 1)), rob(nums.slice(1)));
}

// 5. Longest Palindromic Substring
function longestPalindrome(s) {
    let maxSub = '';

    // Helper to expand around center
    const expand = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.slice(left + 1, right);
    }

    for (let i = 0; i < s.length; i++) {
        const odd = expand(i, i);
        const even = expand(i, i + 1);

        if (odd.length > maxSub.length) maxSub = odd;
        if (even.length > maxSub.length) maxSub = even;
    }

    return maxSub;
}

// 6. Palindromic Substrings (Count)
function countSubstrings(s) {
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        // Odd length
        let l = i, r = i;
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            count++; l--; r++;
        }

        // Even length
        l = i; r = i + 1;
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            count++; l--; r++;
        }
    }
    return count;
}

// 7. Decode Ways
function numDecodings(s) {
    if (s[0] === '0') return 0;
    const n = s.length;
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        const oneDigit = parseInt(s.substring(i - 1, i));
        const twoDigits = parseInt(s.substring(i - 2, i));

        if (oneDigit >= 1) dp[i] += dp[i - 1];
        if (twoDigits >= 10 && twoDigits <= 26) dp[i] += dp[i - 2];
    }

    return dp[n];
}

// 8. Coin Change
function coinChange(coins, amount) {
    const dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;

    for (let currentAmount = 1; currentAmount <= amount; currentAmount++) {
        for (let coin of coins) {
            if (currentAmount - coin >= 0) {
                dp[currentAmount] = Math.min(dp[currentAmount], 1 + dp[currentAmount - coin]);
            }
        }
    }

    return dp[amount] > amount ? -1 : dp[amount];
}

// 9. Maximum Product Subarray
function maxProduct(nums) {
    let max = nums[0];
    let min = nums[0];
    let result = max;

    for (let i = 1; i < nums.length; i++) {
        let curr = nums[i];
        let tempMax = Math.max(curr, Math.max(max * curr, min * curr));
        min = Math.min(curr, Math.min(max * curr, min * curr));
        max = tempMax;

        result = Math.max(max, result);
    }

    return result;
}

// 10. Word Break
function wordBreak(s, wordDict) {
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.includes(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.length];
}

module.exports = {
    climbStairs,
    rob,
    coinChange,
    wordBreak,
    numDecodings,
    maxProduct
};
