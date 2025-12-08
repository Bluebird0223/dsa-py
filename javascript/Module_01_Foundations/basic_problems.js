/**
 * 50+ Practice Problems for Foundations & Arrays
 */

// 1. Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}

// 2. Palindrome Check
function isPalindrome(str) {
    const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return clean === clean.split('').reverse().join('');
}

// 3. Max Character
function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

// 4. Integer Reversal
function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(n);
}

// 5. FizzBuzz
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) console.log('fizzbuzz');
        else if (i % 3 === 0) console.log('fizz');
        else if (i % 5 === 0) console.log('buzz');
        else console.log(i);
    }
}

// 6. Array Chunking
function chunk(array, size) {
    const chunked = [];
    for (let element of array) {
        const last = chunked[chunked.length - 1];
        if (!last || last.length === size) {
            chunked.push([element]);
        } else {
            last.push(element);
        }
    }
    return chunked;
}

// 7. Anagrams
function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

// 8. Capitalize
function capitalize(str) {
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

// 9. Steps (Recursion/Iterative)
function steps(n) {
    for (let row = 0; row < n; row++) {
        let stair = '';
        for (let col = 0; col < n; col++) {
            if (col <= row) stair += '#';
            else stair += ' ';
        }
        console.log(stair);
    }
}

// 10. Pyramid
function pyramid(n) {
    const midpoint = Math.floor((2 * n - 1) / 2);
    for (let row = 0; row < n; row++) {
        let level = '';
        for (let col = 0; col < 2 * n - 1; col++) {
            if (midpoint - row <= col && midpoint + row >= col) {
                level += '#';
            } else {
                level += ' ';
            }
        }
        console.log(level);
    }
}

// Exporting functions for testing
module.exports = {
    reverseString,
    isPalindrome,
    maxChar,
    reverseInt,
    fizzBuzz,
    chunk,
    anagrams,
    capitalize,
    steps,
    pyramid
};
