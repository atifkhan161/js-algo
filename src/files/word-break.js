/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    let dp = new Map();
    dp.set(0, true);
    let disctSet = new Set(wordDict);
    // for (let i = 1; i <= s.length; i++) {
    //     dp.set(i, false);
    // }
    for (let x = 1; x <= s.length; x++) {
        dp.set(x, false);
        for (let y = 0; y < x; y++) {
            if(dp.get(y) && disctSet.has(s.substring(y, x))) {
                dp.set(x, true);
                break;
            }
        }
    }
    return dp.get(s.length);
};

// "catsandog" ["cats","dog","sand","and","cat"]