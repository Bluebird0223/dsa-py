/**
 * Extensive Practice Set: Recursion & Backtracking (20 Problems)
 */

// 1. Factorial
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

// 2. Fibonacci
function fib(n) {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
}

// 3. Power(x, n)
function power(base, exponent) {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

// 4. Product of Array
function productOfArray(arr) {
    if (arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
}

// 5. Recursive Range (sum up to n)
function recursiveRange(n) {
    if (n === 0) return 0;
    return n + recursiveRange(n - 1);
}

// 6. Reverse String Recursive
function reverse(str) {
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}

// 7. Is Palindrome Recursive
function isPalindrome(str) {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, -1));
}

// 8. Flatten Arrays
function flatten(oldArr) {
    var newArr = [];
    for (var i = 0; i < oldArr.length; i++) {
        if (Array.isArray(oldArr[i])) {
            newArr = newArr.concat(flatten(oldArr[i]));
        } else {
            newArr.push(oldArr[i]);
        }
    }
    return newArr;
}

// 9. Capitalize First
function capitalizeFirst(array) {
    if (array.length === 1) {
        return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    const res = capitalizeFirst(array.slice(0, -1));
    const string = array[array.length - 1][0].toUpperCase() + array[array.length - 1].substr(1);
    res.push(string);
    return res;
}

// 10. Nested Even Sum
function nestedEvenSum(obj, sum = 0) {
    for (var key in obj) {
        if (typeof obj[key] === 'object') {
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
            sum += obj[key];
        }
    }
    return sum;
}

// 11. Stringify Numbers
function stringifyNumbers(obj) {
    var newObj = {};
    for (var key in obj) {
        if (typeof obj[key] === 'number') {
            newObj[key] = obj[key].toString();
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            newObj[key] = stringifyNumbers(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

// 12. Collect Strings
function collectStrings(obj) {
    var stringsArr = [];
    for (var key in obj) {
        if (typeof obj[key] === 'string') {
            stringsArr.push(obj[key]);
        } else if (typeof obj[key] === 'object') {
            stringsArr = stringsArr.concat(collectStrings(obj[key]));
        }
    }
    return stringsArr;
}

// 13. Generate Parentheses
function generateParenthesis(n) {
    const result = [];
    function backtrack(s = '', open = 0, close = 0) {
        if (s.length === 2 * n) {
            result.push(s);
            return;
        }
        if (open < n) backtrack(s + '(', open + 1, close);
        if (close < open) backtrack(s + ')', open, close + 1);
    }
    backtrack();
    return result;
}

// 14. Permutations
function permute(nums) {
    const result = [];
    function backtrack(tempList = []) {
        if (tempList.length === nums.length) {
            result.push([...tempList]);
        } else {
            for (let i = 0; i < nums.length; i++) {
                if (tempList.includes(nums[i])) continue;
                tempList.push(nums[i]);
                backtrack(tempList);
                tempList.pop();
            }
        }
    }
    backtrack();
    return result;
}

// 15. Subsets
function subsets(nums) {
    const result = [];
    function backtrack(start, tempList) {
        result.push([...tempList]);
        for (let i = start; i < nums.length; i++) {
            tempList.push(nums[i]);
            backtrack(i + 1, tempList);
            tempList.pop();
        }
    }
    backtrack(0, []);
    return result;
}

// Export all
module.exports = {
    factorial,
    fib,
    power,
    flatten,
    generateParenthesis,
    permute,
    subsets
};
