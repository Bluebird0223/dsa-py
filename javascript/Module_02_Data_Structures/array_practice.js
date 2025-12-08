/**
 * Array & String Practice Problems (20 Problems)
 */

// 1. Two Sum
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

// 2. Best Time to Buy and Sell Stock
function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for (let price of prices) {
        if (price < minPrice) minPrice = price;
        else if (price - minPrice > maxProfit) maxProfit = price - minPrice;
    }
    return maxProfit;
}

// 3. Contains Duplicate
function containsDuplicate(nums) {
    return new Set(nums).size !== nums.length;
}

// 4. Product of Array Except Self
function productExceptSelf(nums) {
    const n = nums.length;
    const output = new Array(n).fill(1);

    let left = 1;
    for (let i = 0; i < n; i++) {
        output[i] = left;
        left *= nums[i];
    }

    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
        output[i] *= right;
        right *= nums[i];
    }

    return output;
}

// 5. Maximum Subarray (Kadane's Algorithm)
function maxSubArray(nums) {
    let currentMax = nums[0];
    let globalMax = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        globalMax = Math.max(globalMax, currentMax);
    }

    return globalMax;
}

// 6. Rotate Array (k steps to right)
function rotate(nums, k) {
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
}

function reverse(nums, start, end) {
    while (start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

// 7. Find All Numbers Disappeared in an Array
function findDisappearedNumbers(nums) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1;
        if (nums[index] > 0) {
            nums[index] = -nums[index];
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }
    return result;
}

// 8. Move Zeroes
function moveZeroes(nums) {
    let lastNonZeroFoundAt = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroFoundAt++] = nums[i];
        }
    }
    for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
        nums[i] = 0;
    }
}

// 9. Intersection of Two Arrays II
function intersect(nums1, nums2) {
    const map = {};
    const result = [];

    for (let num of nums1) {
        map[num] = (map[num] || 0) + 1;
    }

    for (let num of nums2) {
        if (map[num] > 0) {
            result.push(num);
            map[num]--;
        }
    }
    return result;
}

// 10. Longest Consecutive Sequence
function longestConsecutive(nums) {
    const set = new Set(nums);
    let longestStrip = 0;

    for (let num of set) {
        if (!set.has(num - 1)) {
            let currentNum = num;
            let currentStrip = 1;

            while (set.has(currentNum + 1)) {
                currentNum += 1;
                currentStrip += 1;
            }

            longestStrip = Math.max(longestStrip, currentStrip);
        }
    }

    return longestStrip;
}

// 11. 3Sum
function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}

// 12. Container With Most Water
function maxArea(height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
        if (height[left] < height[right]) left++;
        else right--;
    }
    return max;
}

// 13. Trapping Rain Water (Hard)
function trap(height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let water = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) leftMax = height[left];
            else water += leftMax - height[left];
            left++;
        } else {
            if (height[right] >= rightMax) rightMax = height[right];
            else water += rightMax - height[right];
            right--;
        }
    }
    return water;
}

// 14. Group Anagrams
function groupAnagrams(strs) {
    const map = {};
    for (let str of strs) {
        const key = str.split('').sort().join('');
        if (!map[key]) map[key] = [];
        map[key].push(str);
    }
    return Object.values(map);
}

// 15. Valid Sudoku
function isValidSudoku(board) {
    const seen = new Set();
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const num = board[i][j];
            if (num !== '.') {
                const row = `${num} in row ${i}`;
                const col = `${num} in col ${j}`;
                const box = `${num} in box ${Math.floor(i / 3)}-${Math.floor(j / 3)}`;

                if (seen.has(row) || seen.has(col) || seen.has(box)) return false;

                seen.add(row);
                seen.add(col);
                seen.add(box);
            }
        }
    }
    return true;
}

module.exports = {
    twoSum,
    maxProfit,
    containsDuplicate,
    productExceptSelf,
    maxSubArray,
    rotate,
    threeSum,
    maxArea,
    trap,
    groupAnagrams
};
