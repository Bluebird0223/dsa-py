/**
 * Dynamic Programming Fundamentals
 */

// 1. Fibonacci with Memoization (Top-Down)
export function fibMemo(n: number, memo: Map<number, number> = new Map()): number {
    if (n <= 1) return n;

    if (memo.has(n)) {
        return memo.get(n)!;
    }

    const result = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    memo.set(n, result);
    return result;
}

// 2. Fibonacci with Tabulation (Bottom-Up)
export function fibTabultaion(n: number): number {
    if (n <= 1) return n;

    // Create array filled with 0
    const dp: number[] = new Array(n + 1).fill(0);

    // Base cases
    dp[0] = 0;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

// 3. Climbing Stairs (Space Optimized)
export function climbStairs(n: number): number {
    if (n <= 2) return n;

    let prev2 = 1; // ways(1)
    let prev1 = 2; // ways(2)

    for (let i = 3; i <= n; i++) {
        const current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
}

// 4. Min Cost Climbing Stairs
export function minCostClimbingStairs(cost: number[]): number {
    const n = cost.length;
    if (n <= 1) return 0;

    let prev2 = cost[0];
    let prev1 = cost[1];

    for (let i = 2; i < n; i++) {
        const current = cost[i] + Math.min(prev1, prev2);
        prev2 = prev1;
        prev1 = current;
    }

    // We can reach the top from either of the last two steps
    return Math.min(prev1, prev2);
}
