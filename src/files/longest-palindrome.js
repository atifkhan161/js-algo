/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
    if (!s || s.length < 1) {
        return "";
    }
    let start = 0;
    let end = 0;
    let len1, len2;
    for (let i = 0; i < s.length; i++) {
        len1 = expandAroundCenter(s, i, i);
        len2 = expandAroundCenter(s, i, i + 1);
        len = Math.max(len1, len2);

        if (len > (end - start)) {
            start = Math.round(i - ((len - 1) / 2));
            end = i + Math.trunc(len / 2);
        }
    }
    return s.substring(start, end + 1);
};

function expandAroundCenter(s, left, rigth) {
    let L = left;
    let R = rigth;
    while (L >= 0 && R <= s.length && s[L] == s[R]) {
        L--;
        R++;
    }
    return R - L - 1;
}

// ababa