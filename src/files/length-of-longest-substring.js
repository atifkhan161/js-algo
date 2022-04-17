/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    let i = 0;
    let len = 0;
    let hasChar = new Map();
    for (let j = 0; j < s.length; j++) {
        let currChar = hasChar.get(s[j]);
        if (currChar) {
            i = Math.max(currChar, i) ;
        }
        hasChar.set(s[j], (j + 1)); // Store the current index of repeating char
        len = Math.max((j - i + 1), len);
    }
    return len;
};

// Sliding window
// abcabcbb
// O(n)
