/**
 * Advanced DP Practice Set 2
 */

// 1. Longest Increasing Subsequence
function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;
    const dp = new Array(nums.length).fill(1);
    let maxSoFar = 1;

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxSoFar = Math.max(maxSoFar, dp[i]);
    }

    return maxSoFar;
}

// 2. Partition Equal Subset Sum
function canPartition(nums) {
    const sum = nums.reduce((a, b) => a + b, 0);
    if (sum % 2 !== 0) return false;

    const target = sum / 2;
    const dp = new Array(target + 1).fill(false);
    dp[0] = true;

    for (let num of nums) {
        for (let i = target; i >= num; i--) {
            dp[i] = dp[i] || dp[i - num];
        }
    }

    return dp[target];
}

// 3. Longest Common Subsequence
function longestCommonSubsequence(text1, text2) {
    const dp = Array(text1.length + 1).fill(0).map(() => Array(text2.length + 1).fill(0));

    for (let i = 1; i <= text1.length; i++) {
        for (let j = 1; j <= text2.length; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[text1.length][text2.length];
}

// 4. Edit Distance
function minDistance(word1, word2) {
    const m = word1.length;
    const n = word2.length;
    const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(
                    dp[i - 1][j - 1], // Replace
                    dp[i - 1][j],   // Delete
                    dp[i][j - 1]    // Insert
                );
            }
        }
    }

    return dp[m][n];
}

// 5. Best Time to Buy and Sell Stock IV
function maxProfit(k, prices) {
    if (prices.length === 0) return 0;
    if (k >= prices.length / 2) {
        // Equivalent to unlimited transactions
        let profit = 0;
        for (let i = 1; i < prices.length; i++) {
            if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];
        }
        return profit;
    }

    const dp = Array(k + 1).fill(0).map(() => Array(prices.length).fill(0));

    for (let t = 1; t <= k; t++) {
        let maxDiff = -prices[0];
        for (let d = 1; d < prices.length; d++) {
            dp[t][d] = Math.max(dp[t][d - 1], prices[d] + maxDiff);
            maxDiff = Math.max(maxDiff, dp[t - 1][d] - prices[d]);
        }
    }

    return dp[k][prices.length - 1];
}

module.exports = {
    lengthOfLIS,
    canPartition,
    longestCommonSubsequence,
    minDistance,
    maxProfit
};
