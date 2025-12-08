/**
 * 0/1 Knapsack Problem (Generic)
 */

export function knapsack(
    values: number[],
    weights: number[],
    capacity: number
): number {
    const n = values.length;
    // dp[i][w] = max value with first i items and weight limit w
    const dp: number[][] = Array(n + 1).fill(0).map(() => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                // Include item i or exclude it
                dp[i][w] = Math.max(
                    values[i - 1] + dp[i - 1][w - weights[i - 1]],
                    dp[i - 1][w]
                );
            } else {
                // Cannot include item i
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[n][capacity];
}

/**
 * 0/1 Knapsack - Space Optimized O(W)
 */
export function knapsackOptimized(
    values: number[],
    weights: number[],
    capacity: number
): number {
    const n = values.length;
    const dp: number[] = Array(capacity + 1).fill(0);

    for (let i = 0; i < n; i++) {
        // Iterate BACKWARDS to avoid using current item multiple times
        for (let w = capacity; w >= weights[i]; w--) {
            dp[w] = Math.max(dp[w], values[i] + dp[w - weights[i]]);
        }
    }

    return dp[capacity];
}
