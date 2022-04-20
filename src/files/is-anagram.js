/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) return false;
    let charArr = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        charArr[s.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < t.length; i++) {
        charArr[t.charCodeAt(i) - 97]--;
        if (charArr[t.charCodeAt(i) - 97] < 0) {
            return false;
        }
    }
    return true;
};

// o(n)