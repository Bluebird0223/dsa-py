const { reverseString, isPalindrome, chunk } = require('./basic_problems');

test('Reverse String', () => {
    expect(reverseString('hello')).toEqual('olleh');
    expect(reverseString('Greetings!')).toEqual('!sgniteerG');
});

test('Palindrome', () => {
    expect(isPalindrome('aba')).toBeTruthy();
    expect(isPalindrome(' aba')).toBeTruthy();
    expect(isPalindrome('aba ')).toBeTruthy();
    expect(isPalindrome('greeting')).toBeFalsy();
});

test('Array Chunking', () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8]]);
});
