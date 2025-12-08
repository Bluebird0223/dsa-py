import { fibMemo, fibTabultaion, climbStairs, minCostClimbingStairs } from '../dp_basics';

describe('Module 4: DP Fundamentals', () => {
    describe('Fibonacci', () => {
        test('Memoization should produce correct results', () => {
            expect(fibMemo(0)).toBe(0);
            expect(fibMemo(1)).toBe(1);
            expect(fibMemo(10)).toBe(55);
            expect(fibMemo(20)).toBe(6765);
        });

        test('Tabulation should produce correct results', () => {
            expect(fibTabultaion(10)).toBe(55);
            expect(fibTabultaion(20)).toBe(6765);
        });
    });

    describe('Climbing Stairs', () => {
        test('should count ways correctly', () => {
            expect(climbStairs(2)).toBe(2);
            expect(climbStairs(3)).toBe(3);
            expect(climbStairs(5)).toBe(8);
        });
    });

    describe('Min Cost Climbing Stairs', () => {
        test('should find minimum cost', () => {
            expect(minCostClimbingStairs([10, 15, 20])).toBe(15);
            expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6);
        });
    });
});
