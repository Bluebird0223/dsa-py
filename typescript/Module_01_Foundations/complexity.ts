/**
 * Complexity Analysis in TypeScript
 * 
 * Demonstrating Time & Space Complexity with Type Annotations
 */

// O(1) - Constant Time
export function isFirstElementEven(arr: number[]): boolean {
    return arr[0] % 2 === 0;
}

// O(n) - Linear Time
export function linearSearch(arr: number[], target: number): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

// O(n^2) - Quadratic Time
export function hasDuplicatePairs(arr: number[]): boolean {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] === arr[j]) {
                return true;
            }
        }
    }
    return false;
}

// O(log n) - Logarithmic Time (Binary Search)
export function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] === target) return mid;

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

// Space Complexity: O(n)
export function createDoubledArray(arr: number[]): number[] {
    const res: number[] = [];  // O(n) space
    for (const num of arr) {
        res.push(num * 2);
    }
    return res;
}
